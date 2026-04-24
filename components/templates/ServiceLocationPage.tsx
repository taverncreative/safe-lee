/* ------------------------------------------------------------------ */
/*  ServiceLocationPage — service+location template (server component) */
/*                                                                      */
/*  Three deterministic layout variants (A / B / C) based on a hash    */
/*  of the location slug, so each location page has a visually         */
/*  distinct section order while remaining fully reproducible.          */
/* ------------------------------------------------------------------ */

import { LocalServiceHero } from "@/components/sections/LocalServiceHero";
import { LocalContext } from "@/components/sections/LocalContext";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { InspectionProcess } from "@/components/sections/InspectionProcess";
import { IndustryRelevance } from "@/components/sections/IndustryRelevance";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { NearbyAreas } from "@/components/sections/NearbyAreas";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { CTA } from "@/components/sections/CTA";
import { getStaticServiceFAQs } from "./ServicePage";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { LocalBusinessLocationSchema } from "@/components/seo/LocalBusinessLocationSchema";
import { WebPageSchema } from "@/components/seo/WebPageSchema";
import { BUSINESS } from "@/types";
import { GOOGLE_REVIEWS } from "@/lib/content/reviews";
import type { LocationEnrichment } from "@/lib/content/location-data";
import type { LocationFAQ } from "@/lib/content/location-faqs";
import type { LocationIndustry } from "@/lib/content/location-industries";

/* ------------------------------------------------------------------ */
/*  Hero image map (mirrors LocalServiceHero.tsx — keyed by slug)      */
/*                                                                      */
/*  Intentionally duplicated here rather than imported from the visual  */
/*  component to keep schema generation independent of render logic.    */
/*  If a new service is added, update both files.                       */
/* ------------------------------------------------------------------ */

const SERVICE_HERO_IMAGES: Record<string, string> = {
  "pssr-inspections": "/images/PSSR/Hero.webp",
  "loler-inspections": "/images/LOLER/HERO.webp",
  "wahr-inspections": "/images/WAHR/Hero.webp",
  "puwer-inspections": "/images/PUWER/Hero.webp",
  "coshh-lev-inspections": "/images/COSSH/hero.webp",
};

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface ServiceLocationPageProps {
  service: {
    name: string;
    slug: string;
    shortName: string;
    regulationName: string;
    description: string;
    icon: string;
  };
  location: {
    name: string;
    slug: string;
    county: string;
    region: string;
  };
  localIntro?: string | null;
  locationData?: LocationEnrichment | null;
  locationFaqs?: LocationFAQ[];
  locationIndustries?: LocationIndustry[];
  faqs?: { question: string; answer: string }[];
  reviews?: { author: string; rating: number; reviewText: string; source: string }[];
  nearbyAreas?: { name: string; slug: string; distance: number }[];
  crossLinks?: { label: string; href: string }[];
}

/* ------------------------------------------------------------------ */
/*  Deterministic layout hash                                           */
/* ------------------------------------------------------------------ */

function locationHash(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function ServiceLocationPage({
  service,
  location,
  localIntro,
  locationData,
  locationFaqs = [],
  locationIndustries = [],
  faqs,
  reviews,
  nearbyAreas,
  crossLinks,
}: ServiceLocationPageProps) {
  const displayReviews = reviews && reviews.length > 0 ? reviews : [...GOOGLE_REVIEWS];

  // Merge location-specific FAQs with service FAQs
  const serviceFaqs = faqs && faqs.length > 0 ? faqs : getStaticServiceFAQs(service.slug);
  const displayFaqs = [...locationFaqs, ...serviceFaqs];

  // Map location industries to the shape IndustryRelevance expects
  const industries = locationIndustries.map((li) => ({
    name: li.industry,
    slug: li.slug,
    relevanceNote: li.relevance,
  }));

  // Build the hero subtitle using businessContext when available
  const heroSubtitle = locationData?.businessContext ?? undefined;

  // Determine layout variant (A=0, B=1, C=2) from location slug hash
  const variant = locationHash(location.slug) % 3;

  /* ---- Shared structured data (always rendered) ---- */
  const structuredData = (
    <>
      <ServiceSchema
        serviceName={service.name}
        serviceDescription={service.description}
        serviceSlug={service.slug}
        regulationName={service.regulationName}
        locationName={location.name}
        locationSlug={location.slug}
        locationCounty={location.county}
        linkToLocalBusiness
      />
      <FAQSchema
        faqs={displayFaqs}
        pageUrl={`${BUSINESS.url}/${service.slug}-${location.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: service.name, href: `/${service.slug}` },
          { name: `${service.name} in ${location.name}`, href: `/${service.slug}-${location.slug}` },
        ]}
        pageUrl={`${BUSINESS.url}/${service.slug}-${location.slug}`}
      />
      <LocalBusinessLocationSchema
        serviceName={service.name}
        serviceSlug={service.slug}
        locationName={location.name}
        locationSlug={location.slug}
        county={location.county}
      />
      <WebPageSchema
        title={`${service.name} in ${location.name} | Safe Lee Inspection & Consultancy`}
        description={`Professional ${service.name.toLowerCase()} in ${location.name}, ${location.county}. Thorough examinations by a competent person from Safe Lee Inspection & Consultancy.`}
        url={`${BUSINESS.url}/${service.slug}-${location.slug}`}
        mainEntityId={`${BUSINESS.url}/${service.slug}-${location.slug}/#service`}
        hasBreadcrumb
        primaryImage={{
          url: `${BUSINESS.url}${SERVICE_HERO_IMAGES[service.slug] ?? "/images/HERO.webp"}`,
          caption: `${service.name} in ${location.name} — Safe Lee Inspection & Consultancy`,
        }}
        additionalAboutIds={[
          /*
           * Service entity — the primary subject of this page.
           * @id matches ServiceSchema and WebPageSchema.mainEntityId exactly.
           */
          `${BUSINESS.url}/${service.slug}-${location.slug}/#service`,
          /*
           * LocalBusinessLocationSchema is always rendered on service+location
           * pages, so this @id is always a declared node on this page.
           * Together the about array reads:
           *   [/#organization, {pageUrl}/#service, {pageUrl}/#localbusiness]
           */
          `${BUSINESS.url}/${service.slug}-${location.slug}/#localbusiness`,
        ]}
      />
    </>
  );

  /* ---- Reusable section elements ---- */
  const localContextSection = localIntro ? (
    <LocalContext
      content={localIntro}
      locationName={location.name}
      serviceName={service.name}
      locationData={locationData ?? undefined}
      pageHref={`/${service.slug}-${location.slug}`}
    />
  ) : null;

  const complianceSection = (
    <ComplianceSection
      serviceName={service.name}
      regulationName={service.regulationName}
      businessContext={heroSubtitle}
    />
  );

  const processSection = <InspectionProcess serviceName={service.name} />;

  const industrySection = (
    <IndustryRelevance
      industries={industries}
      serviceName={service.name}
      locationName={location.name}
    />
  );

  const faqSection = <FAQAccordion faqs={displayFaqs} />;

  const reviewsSection = <Testimonials reviews={displayReviews} />;

  /* ---- Footer sections (always last) ---- */
  const footerSections = (
    <>
      {nearbyAreas && nearbyAreas.length > 0 && (
        <NearbyAreas
          areas={nearbyAreas}
          serviceSlug={service.slug}
          serviceName={service.name}
        />
      )}

      {crossLinks && crossLinks.length > 0 && (
        <InternalLinks
          links={crossLinks}
          heading={`Other Services in ${location.name}`}
        />
      )}

      <CTA serviceName={service.name} locationName={location.name} />
    </>
  );

  /* ---- Layout variants ---- */
  // Layout A: LocalContext -> Compliance -> Process -> Industries -> FAQs -> Reviews
  // Layout B: LocalContext -> Industries -> Compliance -> FAQs -> Process -> Reviews
  // Layout C: LocalContext -> FAQs -> Industries -> Process -> Compliance -> Reviews

  const bodySections =
    variant === 0
      ? [localContextSection, complianceSection, processSection, industrySection, faqSection, reviewsSection]
      : variant === 1
        ? [localContextSection, industrySection, complianceSection, faqSection, processSection, reviewsSection]
        : [localContextSection, faqSection, industrySection, processSection, complianceSection, reviewsSection];

  return (
    <>
      {structuredData}

      <LocalServiceHero
        serviceName={service.name}
        locationName={location.name}
        county={location.county}
        shortName={service.shortName}
        serviceSlug={service.slug}
        subtitle={heroSubtitle}
      />

      {bodySections}

      {footerSections}
    </>
  );
}
