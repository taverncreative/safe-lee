/* ------------------------------------------------------------------ */
/*  Google Indexing API — Bulk URL Submission                          */
/*                                                                     */
/*  Prerequisites:                                                     */
/*  1. Create a Google Cloud project                                   */
/*  2. Enable the "Web Search Indexing API"                            */
/*  3. Create a Service Account + download JSON key                    */
/*  4. Add the service account email as an Owner in Search Console     */
/*  5. Save the key as scripts/google-service-account.json             */
/*                                                                     */
/*  Usage:                                                             */
/*    npx tsx scripts/submit-to-google.ts                              */
/*    npx tsx scripts/submit-to-google.ts --dry-run                    */
/*    npx tsx scripts/submit-to-google.ts --batch-size=50              */
/*    npx tsx scripts/submit-to-google.ts --type=URL_UPDATED           */
/* ------------------------------------------------------------------ */

import { readFileSync, existsSync, writeFileSync } from "fs";
import { resolve } from "path";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.safeleeinspectionconsultancy.com";
const KEY_PATH = resolve(__dirname, "google-service-account.json");
const LOG_PATH = resolve(__dirname, "indexing-log.json");
const API_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/indexing";

// Google Indexing API quota: 200 requests/day
const DEFAULT_BATCH_SIZE = 200;
const DELAY_BETWEEN_REQUESTS_MS = 300; // ~3 per second to be safe

const PSEO_SERVICE_SLUGS = [
  "pssr-inspections",
  "loler-inspections",
  "wahr-inspections",
  "puwer-inspections",
  "coshh-lev-inspections",
];

const LOCATION_SLUGS = [
  "manchester", "irlam", "salford", "bolton", "wigan", "stockport",
  "oldham", "rochdale", "bury", "tameside", "trafford", "eccles",
  "urmston", "stretford", "sale", "altrincham", "leigh",
  "ashton-under-lyne", "liverpool", "st-helens", "southport", "widnes",
  "preston", "blackburn", "burnley", "blackpool", "lancaster",
  "warrington", "chester", "crewe", "carlisle", "barrow-in-furness",
  "stoke-on-trent",
];

/* ------------------------------------------------------------------ */
/*  URL Generation                                                     */
/* ------------------------------------------------------------------ */

function generateAllUrls(): string[] {
  const urls: string[] = [];

  // Priority 1: Static pages
  urls.push(`${SITE_URL}/`);
  urls.push(`${SITE_URL}/contact-us`);
  urls.push(`${SITE_URL}/pssr-inspections`);
  urls.push(`${SITE_URL}/loler-inspections`);
  urls.push(`${SITE_URL}/wahr-inspections`);
  urls.push(`${SITE_URL}/puwer-inspections`);
  urls.push(`${SITE_URL}/coshh-lev-inspections`);
  urls.push(`${SITE_URL}/report-writing`);

  // Priority 2: pSEO service+location pages
  for (const service of PSEO_SERVICE_SLUGS) {
    for (const location of LOCATION_SLUGS) {
      urls.push(`${SITE_URL}/${service}-${location}`);
    }
  }

  // Priority 3: Legal pages
  urls.push(`${SITE_URL}/privacy-policy`);
  urls.push(`${SITE_URL}/terms-and-conditions`);
  urls.push(`${SITE_URL}/accessibility-statement`);

  return urls;
}

/* ------------------------------------------------------------------ */
/*  JWT Token Generation (no external deps)                            */
/* ------------------------------------------------------------------ */

function base64url(data: string | Buffer): string {
  const buf = typeof data === "string" ? Buffer.from(data) : data;
  return buf.toString("base64url");
}

async function createJWT(serviceAccount: {
  client_email: string;
  private_key: string;
}): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64url(
    JSON.stringify({
      iss: serviceAccount.client_email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    })
  );

  const signInput = `${header}.${payload}`;

  // Use Node.js crypto to sign
  const crypto = await import("crypto");
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(signInput);
  const signature = sign.sign(serviceAccount.private_key);

  return `${signInput}.${base64url(signature)}`;
}

async function getAccessToken(serviceAccount: {
  client_email: string;
  private_key: string;
}): Promise<string> {
  const jwt = await createJWT(serviceAccount);

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Token request failed: ${response.status} ${error}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

/* ------------------------------------------------------------------ */
/*  Indexing API Submission                                            */
/* ------------------------------------------------------------------ */

interface SubmissionResult {
  url: string;
  status: "success" | "error";
  httpStatus?: number;
  message?: string;
  timestamp: string;
}

async function submitUrl(
  url: string,
  accessToken: string,
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<SubmissionResult> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ url, type }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        url,
        status: "success",
        httpStatus: response.status,
        message: `Notified: ${type}`,
        timestamp: new Date().toISOString(),
      };
    } else {
      return {
        url,
        status: "error",
        httpStatus: response.status,
        message: (data as { error?: { message?: string } }).error?.message ?? JSON.stringify(data),
        timestamp: new Date().toISOString(),
      };
    }
  } catch (err) {
    return {
      url,
      status: "error",
      message: err instanceof Error ? err.message : String(err),
      timestamp: new Date().toISOString(),
    };
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ------------------------------------------------------------------ */
/*  Logging                                                            */
/* ------------------------------------------------------------------ */

interface IndexingLog {
  lastRun: string;
  totalSubmitted: number;
  results: SubmissionResult[];
}

function loadLog(): IndexingLog {
  if (existsSync(LOG_PATH)) {
    return JSON.parse(readFileSync(LOG_PATH, "utf-8"));
  }
  return { lastRun: "", totalSubmitted: 0, results: [] };
}

function saveLog(log: IndexingLog): void {
  writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
}

function getAlreadySubmitted(log: IndexingLog): Set<string> {
  return new Set(
    log.results
      .filter((r) => r.status === "success")
      .map((r) => r.url)
  );
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const skipSubmitted = !args.includes("--resubmit");

  const batchArg = args.find((a) => a.startsWith("--batch-size="));
  const batchSize = batchArg
    ? parseInt(batchArg.split("=")[1], 10)
    : DEFAULT_BATCH_SIZE;

  const typeArg = args.find((a) => a.startsWith("--type="));
  const notificationType = (typeArg?.split("=")[1] ?? "URL_UPDATED") as
    | "URL_UPDATED"
    | "URL_DELETED";

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  SafeLee — Google Indexing API Bulk Submission");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`  Mode:        ${dryRun ? "DRY RUN" : "LIVE"}`);
  console.log(`  Type:        ${notificationType}`);
  console.log(`  Batch size:  ${batchSize}`);
  console.log(`  Skip done:   ${skipSubmitted}`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  // Check service account key exists
  if (!dryRun && !existsSync(KEY_PATH)) {
    console.error("❌ Service account key not found!");
    console.error(`   Expected at: ${KEY_PATH}`);
    console.error("");
    console.error("   Setup steps:");
    console.error("   1. Go to https://console.cloud.google.com");
    console.error("   2. Create a project (or use existing)");
    console.error('   3. Enable "Web Search Indexing API"');
    console.error("   4. Create a Service Account");
    console.error("   5. Download the JSON key");
    console.error("   6. Save it as: scripts/google-service-account.json");
    console.error("   7. In Google Search Console → Settings → Users");
    console.error("      Add the service account email as an Owner");
    console.error("");
    console.error("   Then run this script again.");
    process.exit(1);
  }

  // Generate URLs
  const allUrls = generateAllUrls();
  console.log(`📋 Total URLs generated: ${allUrls.length}`);

  // Load log and filter already-submitted
  const log = loadLog();
  const alreadySubmitted = getAlreadySubmitted(log);

  let urlsToSubmit: string[];
  if (skipSubmitted && alreadySubmitted.size > 0) {
    urlsToSubmit = allUrls.filter((u) => !alreadySubmitted.has(u));
    console.log(`✅ Already submitted: ${alreadySubmitted.size}`);
    console.log(`📤 Remaining to submit: ${urlsToSubmit.length}`);
  } else {
    urlsToSubmit = allUrls;
  }

  // Apply batch limit
  const batch = urlsToSubmit.slice(0, batchSize);
  if (batch.length < urlsToSubmit.length) {
    console.log(
      `⚡ Submitting batch of ${batch.length} (of ${urlsToSubmit.length} remaining)`
    );
    console.log(
      `   Run again tomorrow for the next batch (200/day API quota)`
    );
  }

  if (dryRun) {
    console.log("\n🔍 DRY RUN — URLs that would be submitted:\n");
    batch.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
    console.log(`\nTotal: ${batch.length} URLs`);
    return;
  }

  if (batch.length === 0) {
    console.log("\n✅ All URLs already submitted! Use --resubmit to force.");
    return;
  }

  // Authenticate
  console.log("\n🔐 Authenticating with Google...");
  const serviceAccount = JSON.parse(readFileSync(KEY_PATH, "utf-8"));
  const accessToken = await getAccessToken(serviceAccount);
  console.log("✅ Authenticated\n");

  // Submit URLs
  let successCount = 0;
  let errorCount = 0;
  const results: SubmissionResult[] = [];

  for (let i = 0; i < batch.length; i++) {
    const url = batch[i];
    const progress = `[${i + 1}/${batch.length}]`;

    const result = await submitUrl(url, accessToken, notificationType);
    results.push(result);

    if (result.status === "success") {
      successCount++;
      console.log(`  ✅ ${progress} ${url}`);
    } else {
      errorCount++;
      console.log(`  ❌ ${progress} ${url} — ${result.message}`);

      // If quota exceeded, stop early
      if (result.httpStatus === 429) {
        console.log("\n⚠️  Rate limit hit. Stopping. Run again tomorrow.");
        break;
      }
    }

    // Delay between requests
    if (i < batch.length - 1) {
      await sleep(DELAY_BETWEEN_REQUESTS_MS);
    }
  }

  // Update log
  log.lastRun = new Date().toISOString();
  log.totalSubmitted += successCount;
  log.results.push(...results);
  saveLog(log);

  // Summary
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  Submission Complete");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`  ✅ Success:  ${successCount}`);
  console.log(`  ❌ Errors:   ${errorCount}`);
  console.log(`  📊 Total submitted (all time): ${log.totalSubmitted}`);
  console.log(`  📁 Log saved: ${LOG_PATH}`);

  const remaining = urlsToSubmit.length - batch.length;
  if (remaining > 0) {
    console.log(`\n  ⏭️  ${remaining} URLs remaining — run again tomorrow`);
  } else {
    console.log(`\n  🎉 All URLs submitted!`);
  }
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

main().catch(console.error);
