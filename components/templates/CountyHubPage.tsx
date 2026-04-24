/* ------------------------------------------------------------------ */
/*  CountyHubPage — county-level service hub template                   */
/*  e.g. /loler-inspections-greater-manchester                          */
/*                                                                      */
/*  Provides a mid-level page between service hub (/loler-inspections)  */
/*  and individual service+location pages.                              */
/* ------------------------------------------------------------------ */

import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTA } from "@/components/sections/CTA";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { WebPageSchema } from "@/components/seo/WebPageSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { BUSINESS } from "@/types";
import type { CountyData } from "@/lib/content/county-data";

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

interface CountyLocation {
  name: string;
  slug: string;
}

interface CountyHubPageProps {
  service: {
    name: string;
    slug: string;
    shortName: string;
    regulationName: string;
    description: string;
    icon: string;
  };
  county: CountyData;
  locations: CountyLocation[];
  faqs?: { question: string; answer: string }[];
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function CountyHubPage({
  service,
  county,
  locations,
  faqs = [],
}: CountyHubPageProps) {
  const pageUrl = `${BUSINESS.url}/${service.slug}-${county.slug}`;
  const heroImage = SERVICE_HERO_IMAGES[service.slug] ?? "/images/HERO.webp";

  return (
    <>
      {/* ---- Structured data ---- */}
      <ServiceSchema
        serviceName={service.name}
        serviceDescription={service.description}
        serviceSlug={service.slug}
        regulationName={service.regulationName}
        locationName={county.name}
        locationSlug={county.slug}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: service.name, href: `/${service.slug}` },
          {
            name: `${service.name} in ${county.name}`,
            href: `/${service.slug}-${county.slug}`,
          },
        ]}
        pageUrl={pageUrl}
      />
      <WebPageSchema
        title={`${service.name} in ${county.name} | Safe Lee Inspection & Consultancy`}
        description={`Professional ${service.name.toLowerCase()} across ${county.name}. Safe Lee Inspection & Consultancy serves all ${locations.length} major towns and cities in ${county.name}.`}
        url={pageUrl}
        mainEntityId={`${pageUrl}/#service`}
        hasBreadcrumb
        primaryImage={{
          url: `${BUSINESS.url}${heroImage}`,
          caption: `${service.name} in ${county.name}`,
        }}
        additionalAboutIds={[`${pageUrl}/#service`]}
      />
      {/*
       * ItemList — mirrors the visible location link grid rendered below.
       * Each ListItem corresponds to a <Link> in the locations.map() grid.
       * position starts at 1 per schema.org specification.
       */}
      <ItemListSchema
        id={`${pageUrl}#location-list`}
        name={`${service.name} in ${county.name} — Areas We Cover`}
        items={locations.map((loc, i) => ({
          position: i + 1,
          name: loc.name,
          url: `${BUSINESS.url}/${service.slug}-${loc.slug}`,
        }))}
        pageUrl={pageUrl}
        serviceId={`${pageUrl}/#service`}
      />

      {/* ---- Hero ---- */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src={heroImage}
          alt={`${service.name} in ${county.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-sl-gray-900/70" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href={`/${service.slug}`} className="hover:text-white">
              {service.name}
            </Link>
            <span>/</span>
            <span className="text-white">{county.name}</span>
          </nav>

          <Reveal>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {service.name} in{" "}
              <span className="text-sl-red">{county.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="speakable-subtitle mt-4 max-w-2xl text-lg text-white/85">
              {county.keyFact}. Safe Lee Inspection &amp; Consultancy provides
              thorough examinations for businesses across all{" "}
              {locations.length} locations in {county.name}.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact-us" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button href={`/${service.slug}`} variant="secondary" size="lg">
                About {service.name}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- County intro ---- */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
              {service.name} across {county.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prose prose-lg mt-6 max-w-none text-sl-gray-700">
              <p>{county.description}</p>
              <p>
                Safe Lee Inspection &amp; Consultancy is based in Irlam,{" "}
                {county.name === "Greater Manchester"
                  ? "within the county"
                  : `with fast access across ${county.name} via the motorway network`}
                . We provide {service.name.toLowerCase()} for employers in all
                the major towns and business parks listed below — issuing clear
                written reports that document all findings, classify defects by
                risk, and specify any remedial timescales required.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Location grid ---- */}
      <section className="bg-sl-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-sl-gray-900 sm:text-3xl">
              {service.name} — Areas We Cover in {county.name}
            </h2>
            <p className="mt-3 text-sl-gray-600">
              Select a town or city to see service details and local information.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${service.slug}-${loc.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-sl-gray-200 bg-white p-5 transition-all duration-200 hover:border-sl-red hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-sl-red/10 text-sl-red">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block font-semibold text-sl-gray-900 group-hover:text-sl-red">
                        {loc.name}
                      </span>
                      <span className="block text-sm text-sl-gray-500">
                        {service.shortName} inspections
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-sl-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-sl-red" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- FAQs ---- */}
      {faqs.length > 0 && <FAQSchema faqs={faqs} pageUrl={pageUrl} />}
      {faqs.length > 0 && <FAQAccordion faqs={faqs} />}

      {/* ---- CTA ---- */}
      <CTA serviceName={service.name} locationName={county.name} />
    </>
  );
}
