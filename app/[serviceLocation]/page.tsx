/* ------------------------------------------------------------------ */
/*  [serviceLocation]/page.tsx — pSEO catch-all route                  */
/*                                                                      */
/*  Handles two page types from a single dynamic segment:               */
/*    /pssr-inspections-manchester      → service + location            */
/*    /pssr-inspections-near-manchester → micro location ("near")       */
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
import {
  serviceLocationMeta,
  microLocationMeta,
} from "@/lib/seo/meta-generator";

import { ServiceLocationPage } from "@/components/templates/ServiceLocationPage";
import { MicroLocationPage } from "@/components/templates/MicroLocationPage";

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
): { type: "service-location" | "micro-location"; serviceSlug: string; locationSlug: string } | null {
  // Check "near" pattern first (more specific)
  for (const svcSlug of PSEO_SERVICE_SLUGS) {
    const nearPrefix = `${svcSlug}-near-`;
    if (slug.startsWith(nearPrefix)) {
      const locationSlug = slug.slice(nearPrefix.length);
      if (LOCATIONS.find((l) => l.slug === locationSlug)) {
        return { type: "micro-location", serviceSlug: svcSlug, locationSlug };
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
      params.push({ serviceLocation: `${svcSlug}-near-${loc.slug}` });
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

  const service = getService(parsed.serviceSlug);
  if (!service) return {};

  const location = getLocation(parsed.locationSlug);
  if (!location) return {};

  // No DB yet — hasUniqueContent = false → noindex
  const hasUniqueContent = false;

  if (parsed.type === "service-location") {
    return serviceLocationMeta(service, location, hasUniqueContent);
  }

  return microLocationMeta(service, location, hasUniqueContent);
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

  // Shared props
  const pageProps = {
    service,
    location,
    localIntro: null as string | null,
    nearbyAreas,
    crossLinks,
  };

  if (parsed.type === "micro-location") {
    return <MicroLocationPage {...pageProps} />;
  }

  return <ServiceLocationPage {...pageProps} />;
}
