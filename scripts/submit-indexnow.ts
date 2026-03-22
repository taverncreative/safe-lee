/* ------------------------------------------------------------------ */
/*  IndexNow — Instant submission to Bing, Yandex, Seznam, Naver      */
/*  No API setup required — just generate a key and go                 */
/*                                                                     */
/*  Usage:                                                             */
/*    npx tsx scripts/submit-indexnow.ts                               */
/*    npx tsx scripts/submit-indexnow.ts --dry-run                     */
/* ------------------------------------------------------------------ */

import { writeFileSync, existsSync, readFileSync } from "fs";
import { resolve } from "path";

const SITE_URL = "https://www.safeleeinspectionconsultancy.com";
const HOST = "www.safeleeinspectionconsultancy.com";

// Generate a random IndexNow key (or use existing)
const KEY_FILE_PATH = resolve(__dirname, "../public/indexnow-key.txt");
const KEY_LOG_PATH = resolve(__dirname, "indexnow-key.txt");

function getOrCreateKey(): string {
  if (existsSync(KEY_LOG_PATH)) {
    return readFileSync(KEY_LOG_PATH, "utf-8").trim();
  }
  // Generate random 32-char hex key
  const key = Array.from({ length: 32 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");
  writeFileSync(KEY_LOG_PATH, key);
  // Also write the verification file to public/
  writeFileSync(KEY_FILE_PATH, key);
  console.log(`🔑 Generated IndexNow key: ${key}`);
  console.log(`   Saved to: ${KEY_FILE_PATH}`);
  console.log(`   Verification URL: ${SITE_URL}/${key}.txt\n`);
  return key;
}

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

function generateAllUrls(): string[] {
  const urls: string[] = [];

  urls.push(`${SITE_URL}/`);
  urls.push(`${SITE_URL}/contact-us`);
  urls.push(`${SITE_URL}/pssr-inspections`);
  urls.push(`${SITE_URL}/loler-inspections`);
  urls.push(`${SITE_URL}/wahr-inspections`);
  urls.push(`${SITE_URL}/puwer-inspections`);
  urls.push(`${SITE_URL}/coshh-lev-inspections`);
  urls.push(`${SITE_URL}/report-writing`);

  for (const service of PSEO_SERVICE_SLUGS) {
    for (const location of LOCATION_SLUGS) {
      urls.push(`${SITE_URL}/${service}-${location}`);
    }
  }

  urls.push(`${SITE_URL}/privacy-policy`);
  urls.push(`${SITE_URL}/terms-and-conditions`);
  urls.push(`${SITE_URL}/accessibility-statement`);

  return urls;
}

async function submitBatch(
  urls: string[],
  key: string,
  engine: string,
  apiUrl: string
): Promise<{ success: boolean; status: number; body: string }> {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `${SITE_URL}/${key}.txt`,
      urlList: urls,
    }),
  });

  const body = await response.text();
  return { success: response.ok, status: response.status, body };
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  SafeLee — IndexNow Bulk Submission");
  console.log("  (Bing, Yandex, Seznam, Naver)");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  const key = getOrCreateKey();
  const urls = generateAllUrls();

  console.log(`📋 Total URLs: ${urls.length}`);
  console.log(`🔑 Key: ${key}`);

  if (dryRun) {
    console.log("\n🔍 DRY RUN — URLs that would be submitted:\n");
    urls.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
    return;
  }

  // IndexNow supports up to 10,000 URLs per batch
  const engines = [
    { name: "Bing/IndexNow", url: "https://api.indexnow.org/indexnow" },
  ];

  for (const engine of engines) {
    console.log(`\n📤 Submitting to ${engine.name}...`);

    // Submit in batches of 100 (safer)
    const BATCH_SIZE = 100;
    let totalSuccess = 0;

    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const batch = urls.slice(i, i + BATCH_SIZE);
      const result = await submitBatch(batch, key, engine.name, engine.url);

      if (result.success || result.status === 202) {
        totalSuccess += batch.length;
        console.log(
          `  ✅ Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} URLs (HTTP ${result.status})`
        );
      } else {
        console.log(
          `  ❌ Batch ${Math.floor(i / BATCH_SIZE) + 1}: Failed (HTTP ${result.status})`
        );
        console.log(`     ${result.body.slice(0, 200)}`);
      }

      // Small delay between batches
      if (i + BATCH_SIZE < urls.length) {
        await new Promise((r) => setTimeout(r, 500));
      }
    }

    console.log(`  📊 ${totalSuccess}/${urls.length} URLs submitted to ${engine.name}`);
  }

  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  ✅ IndexNow submission complete!");
  console.log("  URLs will be crawled within minutes to hours.");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

main().catch(console.error);
