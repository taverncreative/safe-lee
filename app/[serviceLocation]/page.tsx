/* ------------------------------------------------------------------ */
/*  [serviceLocation]/page.tsx — pSEO catch-all route                  */
/*                                                                      */
/*  Handles service+location pages from a single dynamic segment:       */
/*    /pssr-inspections-manchester      → service + location            */
/*    /pssr-inspections-near-manchester → 301 redirect to non-near URL  */
/*                                                                      */
/*  Service hub pages (/pssr-inspections etc.) are now handled by       */
/*  their own static routes under app/<slug>/page.tsx.                  */
/*                                                                      */
/*  CRITICAL: All DB calls are wrapped in try/catch so the site works   */
/*  without a database connection. SERVICE_SEED is the source of truth. */
/* ------------------------------------------------------------------ */

import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

/* Static routes that must not be caught by this dynamic segment */
const STATIC_SLUGS = new Set([
  "contact-us",
  "privacy-policy",
  "terms-and-conditions",
  "accessibility-statement",
  "pssr-inspections",
  "loler-inspections",
  "wahr-inspections",
  "puwer-inspections",
  "coshh-lev-inspections",
  "report-writing",
]);

import { SERVICE_SEED, PSEO_SERVICE_SLUGS } from "@/lib/content/service-data";
import { LOCATIONS } from "@/lib/content/locations";
import { serviceLocationMeta } from "@/lib/seo/meta-generator";

import { LOCAL_INTROS } from "@/lib/content/local-intros";
import { LOCATION_DATA } from "@/lib/content/location-data";
import { LOCATION_FAQS } from "@/lib/content/location-faqs";
import { LOCATION_INDUSTRIES } from "@/lib/content/location-industries";

import { ServiceLocationPage } from "@/components/templates/ServiceLocationPage";

/* Static page imports — Turbopack dev workaround for routing overlap */
import ContactPageContent from "@/app/contact-us/page";
import AccessibilityPageContent from "@/app/accessibility-statement/page";
import PrivacyPageContent from "@/app/privacy-policy/page";
import TermsPageContent from "@/app/terms-and-conditions/page";


/* LOCATIONS imported from @/lib/content/locations */

/* ------------------------------------------------------------------ */
/*  Route parser                                                        */
/* ------------------------------------------------------------------ */

function parseSlug(
  slug: string
): { type: "service-location" | "near-redirect"; serviceSlug: string; locationSlug: string } | null {
  // Check "near" pattern first — redirect these to the non-near URL
  for (const svcSlug of PSEO_SERVICE_SLUGS) {
    const nearPrefix = `${svcSlug}-near-`;
    if (slug.startsWith(nearPrefix)) {
      const locationSlug = slug.slice(nearPrefix.length);
      if (LOCATIONS.find((l) => l.slug === locationSlug)) {
        return { type: "near-redirect", serviceSlug: svcSlug, locationSlug };
      }
    }
  }

  // Check service+location pattern — iterate longest slugs first
  const sortedSlugs = [...PSEO_SERVICE_SLUGS].sort(
    (a, b) => b.length - a.length
  );
  for (const svcSlug of sortedSlugs) {
    const prefix = `${svcSlug}-`;
    if (slug.startsWith(prefix)) {
      const locationSlug = slug.slice(prefix.length);
      if (LOCATIONS.find((l) => l.slug === locationSlug)) {
        return { type: "service-location", serviceSlug: svcSlug, locationSlug };
      }
    }
  }

  return null;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                              */
/* ------------------------------------------------------------------ */

function getService(slug: string) {
  return SERVICE_SEED.find((s) => s.slug === slug) ?? null;
}

function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug) ?? null;
}

/** Haversine distance in km */
function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Convert km to miles */
function kmToMiles(km: number): number {
  return Math.round(km * 0.621371);
}

function getNearbyAreas(currentSlug: string, limit = 8) {
  const current = LOCATIONS.find((l) => l.slug === currentSlug);
  if (!current) return [];

  return LOCATIONS.filter((l) => l.slug !== currentSlug)
    .map((l) => ({
      name: l.name,
      slug: l.slug,
      distance: kmToMiles(
        haversineDistance(
          parseFloat(current.latitude),
          parseFloat(current.longitude),
          parseFloat(l.latitude),
          parseFloat(l.longitude)
        )
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

/* ------------------------------------------------------------------ */
/*  generateStaticParams                                                */
/* ------------------------------------------------------------------ */

/* generateStaticParams — re-enable for production build (SSG)
export function generateStaticParams() {
  const params: { serviceLocation: string }[] = [];
  for (const svcSlug of PSEO_SERVICE_SLUGS) {
    for (const loc of LOCATIONS) {
      params.push({ serviceLocation: `${svcSlug}-${loc.slug}` });
    }
  }
  return params;
}
*/

/* ------------------------------------------------------------------ */
/*  generateMetadata                                                    */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceLocation: string }>;
}): Promise<Metadata> {
  const { serviceLocation: slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};

  // Near-redirect pages don't need metadata — they redirect
  if (parsed.type === "near-redirect") return {};

  const service = getService(parsed.serviceSlug);
  if (!service) return {};

  const location = getLocation(parsed.locationSlug);
  if (!location) return {};

  return serviceLocationMeta(service, location);
}

/* ------------------------------------------------------------------ */
/*  Page component                                                      */
/* ------------------------------------------------------------------ */

export default async function Page({
  params,
}: {
  params: Promise<{ serviceLocation: string }>;
}) {
  const { serviceLocation: slug } = await params;

  /* Handle static pages that Turbopack routes here in dev mode */
  const STATIC_PAGE_MAP: Record<string, React.ComponentType> = {
    "contact-us": ContactPageContent,
    "accessibility-statement": AccessibilityPageContent,
    "privacy-policy": PrivacyPageContent,
    "terms-and-conditions": TermsPageContent,
  };
  const StaticPage = STATIC_PAGE_MAP[slug];
  if (StaticPage) return <StaticPage />;

  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  // Near-location URLs → 301 redirect to the canonical non-near URL
  if (parsed.type === "near-redirect") {
    redirect(`/${parsed.serviceSlug}-${parsed.locationSlug}`);
  }

  const service = getService(parsed.serviceSlug);
  if (!service) notFound();

  const location = getLocation(parsed.locationSlug);
  if (!location) notFound();

  // Nearby areas (distances in miles)
  const nearbyAreas = getNearbyAreas(location.slug, 8);

  // Cross-links: other services in same location
  const crossLinks = SERVICE_SEED.filter(
    (s) => s.slug !== service.slug && s.slug !== "report-writing"
  ).map((s) => ({
    label: `${s.shortName} Inspections in ${location.name}`,
    href: `/${s.slug}-${location.slug}`,
  }));

  // Wire up enrichment data
  const localIntro = LOCAL_INTROS[`${service.slug}--${location.slug}`] ?? null;
  const locationData = LOCATION_DATA[location.slug] ?? null;
  const locationFaqs = LOCATION_FAQS[location.slug] ?? [];
  const locationIndustries = LOCATION_INDUSTRIES[location.slug] ?? [];

  return (
    <ServiceLocationPage
      service={service}
      location={location}
      localIntro={localIntro}
      locationData={locationData}
      locationFaqs={locationFaqs}
      locationIndustries={locationIndustries}
      nearbyAreas={nearbyAreas}
      crossLinks={crossLinks}
    />
  );
}
