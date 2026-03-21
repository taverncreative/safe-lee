/* ------------------------------------------------------------------ */
/*  MicroLocationPage — "near" location template (server component)    */
/* ------------------------------------------------------------------ */

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const SERVICE_HERO_IMAGES: Record<string, string> = {
  "pssr-inspections": "/images/PSSR/Hero.webp",
  "loler-inspections": "/images/LOLER/HERO.webp",
  "wahr-inspections": "/images/WAHR/Hero.webp",
  "puwer-inspections": "/images/PUWER/Hero.webp",
  "coshh-lev-inspections": "/images/COSSH/hero.webp",
};
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
    reviews && reviews.length > 0 ? reviews : [...GOOGLE_REVIEWS];
  const displayFaqs =
    faqs && faqs.length > 0 ? faqs : getStaticServiceFAQs(service.slug);

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
          { name: `${service.name} Near ${location.name}`, href: `/${service.slug}-near-${location.slug}` },
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
        title={`${service.name} Near ${location.name} | Safe Lee Inspection & Consultancy`}
        description={`Professional ${service.name.toLowerCase()} near ${location.name}, ${location.county}. Thorough examinations by a competent person from Safe Lee Inspection & Consultancy.`}
        url={`${BUSINESS.url}/${service.slug}-near-${location.slug}`}
      />

      {/* ---- Micro-location hero — "Near" variant with photo ---- */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src={SERVICE_HERO_IMAGES[service.slug] ?? "/images/HERO.webp"}
          alt={`${service.name} near ${location.name} — Safe Lee Inspection & Consultancy`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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
            <p className="mt-4 max-w-2xl text-lg text-white/80">
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
