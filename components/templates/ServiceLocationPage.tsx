/* ------------------------------------------------------------------ */
/*  ServiceLocationPage — service+location template (server component) */
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
  faqs?: { question: string; answer: string }[];
  reviews?: { author: string; rating: number; reviewText: string; source: string }[];
  nearbyAreas?: { name: string; slug: string; distance: number }[];
  crossLinks?: { label: string; href: string }[];
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function ServiceLocationPage({
  service,
  location,
  localIntro,
  faqs,
  reviews,
  nearbyAreas,
  crossLinks,
}: ServiceLocationPageProps) {
  const displayReviews = reviews && reviews.length > 0 ? reviews : [...GOOGLE_REVIEWS];
  const displayFaqs = faqs && faqs.length > 0 ? faqs : getStaticServiceFAQs(service.slug);

  return (
    <>
      <ServiceSchema
        serviceName={service.name}
        serviceDescription={service.description}
        serviceSlug={service.slug}
        regulationName={service.regulationName}
        locationName={location.name}
        locationSlug={location.slug}
      />
      <FAQSchema faqs={displayFaqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: service.name, href: `/${service.slug}` },
          { name: `${service.name} in ${location.name}`, href: `/${service.slug}-${location.slug}` },
        ]}
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
      />

      <LocalServiceHero
        serviceName={service.name}
        locationName={location.name}
        county={location.county}
        shortName={service.shortName}
        serviceSlug={service.slug}
      />

      {localIntro && (
        <LocalContext
          content={localIntro}
          locationName={location.name}
          serviceName={service.name}
        />
      )}

      <ComplianceSection
        serviceName={service.name}
        regulationName={service.regulationName}
      />

      <InspectionProcess serviceName={service.name} />

      <IndustryRelevance
        industries={[]}
        serviceName={service.name}
        locationName={location.name}
      />

      <Testimonials reviews={displayReviews} />

      <FAQAccordion faqs={displayFaqs} />

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
}
