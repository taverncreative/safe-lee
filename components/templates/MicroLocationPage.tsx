/* ------------------------------------------------------------------ */
/*  MicroLocationPage — "near" location template (server component)    */
/* ------------------------------------------------------------------ */

import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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

/* ------------------------------------------------------------------ */
/*  Static reviews fallback                                             */
/* ------------------------------------------------------------------ */

const HARDCODED_REVIEWS = [
  {
    author: "James H.",
    rating: 5,
    reviewText:
      "Excellent service from start to finish. Lee was thorough, professional, and explained everything clearly during our LOLER inspection. Reports were turned around quickly and were very detailed. Highly recommend Safe Lee for any statutory inspection work.",
    source: "Google",
  },
  {
    author: "Sarah M.",
    rating: 5,
    reviewText:
      "We needed PSSR inspections across multiple sites at short notice and Safe Lee delivered every time. Reliable, knowledgeable, and great communication throughout. They genuinely care about keeping workplaces safe. Will definitely use again.",
    source: "Google",
  },
  {
    author: "David R.",
    rating: 5,
    reviewText:
      "Fantastic experience working with Safe Lee. Our LEV testing was carried out efficiently with minimal disruption to our operations. The report was comprehensive and easy to understand. A really professional outfit — wouldn't hesitate to recommend.",
    source: "Google",
  },
];

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface MicroLocationPageProps {
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
  reviews?: {
    author: string;
    rating: number;
    reviewText: string;
    source: string;
  }[];
  nearbyAreas?: { name: string; slug: string; distance: number }[];
  crossLinks?: { label: string; href: string }[];
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function MicroLocationPage({
  service,
  location,
  localIntro,
  faqs,
  reviews,
  nearbyAreas,
  crossLinks,
}: MicroLocationPageProps) {
  const displayReviews =
    reviews && reviews.length > 0 ? reviews : HARDCODED_REVIEWS;
  const displayFaqs =
    faqs && faqs.length > 0 ? faqs : getStaticServiceFAQs(service.slug);

  /*
   * Canonical URL for this micro-location page.
   * Pattern: /{serviceSlug}-near-{locationSlug}
   * Mirrors the route used in app/[serviceLocation]/page.tsx.
   */
  const pageUrl = `${BUSINESS.url}/${service.slug}-near-${location.slug}`;

  return (
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
      <FAQSchema faqs={displayFaqs} pageUrl={pageUrl} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: service.name, href: `/${service.slug}` },
          { name: `${service.name} Near ${location.name}`, href: `/${service.slug}-near-${location.slug}` },
        ]}
        pageUrl={pageUrl}
      />
      {/*
       * LocalBusinessLocationSchema — brings micro-location pages to parity
       * with service+location pages. Uses the same Irlam base geo and the
       * same parentOrganization → /#organization link.
       *
       * pageUrlOverride is required because the default computed URL would
       * be /{serviceSlug}-{locationSlug}, but micro-location pages live at
       * /{serviceSlug}-near-{locationSlug}. The override keeps the @id
       * consistent with the canonical URL of this page.
       */}
      <LocalBusinessLocationSchema
        serviceName={service.name}
        serviceSlug={service.slug}
        locationName={location.name}
        locationSlug={location.slug}
        county={location.county}
        pageUrlOverride={pageUrl}
      />
      {/*
       * WebPageSchema — previously absent from MicroLocationPage.
       * No primaryImage: the hero uses a CSS gradient, not an <Image>.
       * about includes Service and LocalBusiness now that both are declared.
       */}
      <WebPageSchema
        title={`${service.name} Near ${location.name} | Safe Lee Inspection & Consultancy`}
        description={`Professional ${service.name.toLowerCase()} near ${location.name}, ${location.county}. Safe Lee Inspection & Consultancy covers all surrounding areas.`}
        url={pageUrl}
        mainEntityId={`${pageUrl}/#service`}
        hasBreadcrumb
        additionalAboutIds={[
          `${pageUrl}/#service`,
          `${pageUrl}/#localbusiness`,
        ]}
      />

      {/* ---- Micro-location hero — "Near" variant ---- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sl-navy via-sl-red-dark to-sl-red py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-white/60">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li>
                  <Link
                    href={`/${service.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="font-medium text-white">
                  Near {location.name}
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.name} Near {location.name}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="speakable-subtitle mt-4 max-w-2xl text-lg text-white/80">
              Looking for professional {service.shortName} inspections near{" "}
              {location.name}? Safe Lee Inspection &amp; Consultancy covers{" "}
              {location.county} and all surrounding areas.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="tel:01617062022" variant="yellow" size="lg">
                <Phone className="h-5 w-5" />
                Call 0161 706 2022
              </Button>
              <Button
                href="/contact-us"
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-sl-navy"
              >
                Get a Free Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

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
          heading={`Other Services Near ${location.name}`}
        />
      )}

      <CTA serviceName={service.name} locationName={location.name} />
    </>
  );
}
