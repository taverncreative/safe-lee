import { BUSINESS } from "@/types";

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface LocalBusinessLocationSchemaProps {
  serviceName: string;  // passed by caller; available for future use
  serviceSlug: string;
  locationName: string;
  locationSlug: string;
  county: string;
  /**
   * Override the computed page URL when the URL pattern differs from
   * the default `${BUSINESS.url}/${serviceSlug}-${locationSlug}`.
   *
   * Use case: MicroLocationPage uses `${serviceSlug}-near-${locationSlug}`,
   * so its LocalBusiness @id must be `{pageUrl}/#localbusiness` where
   * pageUrl reflects the actual canonical URL of that page.
   *
   * When omitted, the component computes the default service+location URL.
   */
  pageUrlOverride?: string;
}

/* ------------------------------------------------------------------ */
/*  Physical base coordinates (Irlam, Greater Manchester)              */
/*                                                                      */
/*  Safe Lee has one physical location: Astley Rd, Irlam, M44 6AB.    */
/*  This business operates as a mobile inspection service — engineers  */
/*  travel to client sites. There are no branch offices in any of the  */
/*  towns targeted by pSEO pages.                                      */
/*                                                                      */
/*  Using the target town's coordinates would imply a physical         */
/*  presence that does not exist and would be inaccurate.              */
/*  These coordinates are identical to those declared in SiteSchema.   */
/* ------------------------------------------------------------------ */

const BASE_GEO = {
  latitude: 53.4438,
  longitude: -2.4213,
} as const;

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function LocalBusinessLocationSchema({
  serviceSlug,
  locationName,
  locationSlug,
  county,
  pageUrlOverride,
}: LocalBusinessLocationSchemaProps) {
  const pageUrl = pageUrlOverride ?? `${BUSINESS.url}/${serviceSlug}-${locationSlug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${pageUrl}/#localbusiness`,

    /* ---- NAP — must match website, contact page, and Companies House ---- */
    name: BUSINESS.name,
    url: pageUrl,
    telephone: "+441617062022",
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },

    /* ---- Physical location of the business ---- */
    geo: {
      "@type": "GeoCoordinates",
      latitude: BASE_GEO.latitude,
      longitude: BASE_GEO.longitude,
    },

    /* ---- Service area for this page ---- */
    /*
     * areaServed uses two nodes:
     *   Place          — the specific town/city this page targets
     *   AdministrativeArea — the county that town sits within
     *
     * This mirrors the visible content on each service-location page
     * (H1, breadcrumb, LocalContext all reference both levels) and
     * stays within the coverage stated on the site. No additional
     * regions are inferred.
     */
    areaServed: [
      {
        "@type": "Place",
        name: locationName,
      },
      {
        "@type": "AdministrativeArea",
        name: county,
      },
    ],

    /* ---- Opening hours ---- */
    /*
     * Sourced from BUSINESS.openingHours — same data rendered on the
     * Contact page and in the footer. Each entry maps to one
     * OpeningHoursSpecification node. Saturday and Sunday are closed
     * (no entries in the array) which correctly implies closure.
     */
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.open,
      closes: h.close,
    })),

    /* ---- Root entity link ---- */
    /*
     * parentOrganization connects this LocalBusiness node back to the
     * root ProfessionalService at /#organization, declared globally in
     * SiteSchema. Google reads this as "this location page belongs to
     * the same business entity as the root organisation".
     */
    parentOrganization: {
      "@id": `${BUSINESS.url}/#organization`,
    },

    /* ---- Rating ---- */
    /*
     * aggregateRating is kept here and at the root ProfessionalService
     * only. It is not on the Service schema nodes. Rating values are
     * sourced from BUSINESS constants; update googleRating and
     * googleReviewCount in types/index.ts when reviews change.
     */
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS.googleRating),
      bestRating: "5",
      worstRating: "1",
      reviewCount: String(BUSINESS.googleReviewCount),
    },

    /* ---- Social profiles ---- */
    /*
     * All three profiles are real and active. They are rendered in the
     * site footer on every page, satisfying the "true on page" condition.
     * These are the same profiles declared in the root SiteSchema; the
     * duplication is intentional — LocalBusiness is a distinct graph
     * entity and benefits from its own sameAs declarations.
     */
    sameAs: [
      BUSINESS.socials.facebook,
      BUSINESS.socials.linkedin,
      BUSINESS.socials.x,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
