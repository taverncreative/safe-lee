import type { MetadataRoute } from "next";
import { SERVICE_SEED, PSEO_SERVICE_SLUGS } from "@/lib/content/service-data";
import { LOCATIONS } from "@/lib/content/locations";
import { COUNTIES } from "@/lib/content/county-data";
import { RESOURCES } from "@/lib/content/resources";
import { BUSINESS } from "@/types";

const BASE_URL = BUSINESS.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const locations = LOCATIONS;

  /* ---- Static pages ---- */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/accessibility`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /* ---- Service hub pages (all 6 services) ---- */
  const serviceHubPages: MetadataRoute.Sitemap = SERVICE_SEED.map(
    (service) => ({
      url: `${BASE_URL}/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  );

  /* ---- County hub pages ---- */
  const countyHubPages: MetadataRoute.Sitemap = [];

  for (const serviceSlug of PSEO_SERVICE_SLUGS) {
    for (const county of COUNTIES) {
      countyHubPages.push({
        url: `${BASE_URL}/${serviceSlug}-${county.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  /* ---- pSEO service + location pages ---- */
  const locationPages: MetadataRoute.Sitemap = [];

  for (const serviceSlug of PSEO_SERVICE_SLUGS) {
    for (const location of locations) {
      locationPages.push({
        url: `${BASE_URL}/${serviceSlug}-${location.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  /* ---- Resources hub + articles ---- */
  const resourcesPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/resources`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...RESOURCES.map((r) => ({
      url: `${BASE_URL}/resources/${r.slug}`,
      /*
       * Use the article's own updatedAt so feed readers and search
       * engines pick up edits without us having to bump the whole
       * sitemap timestamp.
       */
      lastModified: new Date(r.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [
    ...staticPages,
    ...serviceHubPages,
    ...countyHubPages,
    ...locationPages,
    ...resourcesPages,
  ];
}
