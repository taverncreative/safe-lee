/* ------------------------------------------------------------------ */
/*  Generate all site URLs for indexing submission                      */
/*  Usage: npx tsx scripts/generate-urls.ts                            */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.safeleeinspectionconsultancy.com";

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

  // Static pages
  urls.push(`${SITE_URL}/`);
  urls.push(`${SITE_URL}/pssr-inspections`);
  urls.push(`${SITE_URL}/loler-inspections`);
  urls.push(`${SITE_URL}/wahr-inspections`);
  urls.push(`${SITE_URL}/puwer-inspections`);
  urls.push(`${SITE_URL}/coshh-lev-inspections`);
  urls.push(`${SITE_URL}/report-writing`);
  urls.push(`${SITE_URL}/contact-us`);
  urls.push(`${SITE_URL}/privacy-policy`);
  urls.push(`${SITE_URL}/terms-and-conditions`);
  urls.push(`${SITE_URL}/accessibility-statement`);

  // pSEO: service + location pages
  for (const service of PSEO_SERVICE_SLUGS) {
    for (const location of LOCATION_SLUGS) {
      urls.push(`${SITE_URL}/${service}-${location}`);
    }
  }

  return urls;
}

const urls = generateAllUrls();
console.log(`Total URLs: ${urls.length}\n`);

// Output as newline-separated list
for (const url of urls) {
  console.log(url);
}
