/* ------------------------------------------------------------------ */
/*  ServicePage — service hub template (server component)              */
/* ------------------------------------------------------------------ */

import Link from "next/link";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { InspectionProcess } from "@/components/sections/InspectionProcess";
import { IndustryRelevance } from "@/components/sections/IndustryRelevance";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTA } from "@/components/sections/CTA";
import { Coverage } from "@/components/sections/Coverage";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { SERVICE_SEED, PSEO_SERVICE_SLUGS } from "@/lib/content/service-data";
import { LOCATIONS } from "@/lib/content/locations";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { HowToSchema } from "@/components/seo/HowToSchema";
import { WebPageSchema } from "@/components/seo/WebPageSchema";
import { BUSINESS } from "@/types";
import { GOOGLE_REVIEWS } from "@/lib/content/reviews";

/* ------------------------------------------------------------------ */
/*  Static FAQs per service slug                                       */
/* ------------------------------------------------------------------ */

export function getStaticServiceFAQs(
  slug: string
): { question: string; answer: string }[] {
  const map: Record<string, { question: string; answer: string }[]> = {
    "pssr-inspections": [
      {
        question: "What does a PSSR inspection involve?",
        answer:
          "A PSSR inspection involves a thorough examination of pressure systems including vessels, pipework, protective devices, and associated fittings. Our competent engineer assesses the physical condition, checks for corrosion, damage or defects, verifies safety devices are functioning correctly, and ensures the written scheme of examination is up to date.",
      },
      {
        question: "How often is a PSSR inspection required?",
        answer:
          "The frequency of PSSR inspections is determined by the written scheme of examination, which must be drawn up by a competent person. Typically, protective devices are examined annually and pressure vessels every 2 to 4 years, but this varies depending on the system, its age, and operating conditions.",
      },
      {
        question: "What equipment does a PSSR inspection cover?",
        answer:
          "PSSR inspections cover all pressure systems including steam boilers, air receivers, autoclaves, compressed air systems, pressure cookers used in food production, heat exchangers, and any associated pipework and protective devices such as safety valves and pressure gauges.",
      },
      {
        question: "What happens if a defect is found during a PSSR inspection?",
        answer:
          "If a defect is found, our engineer will classify it by severity. Critical defects that pose an imminent danger require the equipment to be taken out of service immediately. Other defects will be documented with clear recommendations and timescales for remedial action. A detailed report is issued covering all findings.",
      },
    ],
    "loler-inspections": [
      {
        question: "What does a LOLER inspection involve?",
        answer:
          "A LOLER thorough examination involves a detailed inspection of lifting equipment to identify any defects, damage, or wear that could affect safe operation. This includes visual examination, functional testing where appropriate, and checking that all safety devices and markings are in place and correct.",
      },
      {
        question: "How often is a LOLER inspection required?",
        answer:
          "Under LOLER 1998, lifting equipment used to lift people must be thoroughly examined every 6 months. All other lifting equipment requires examination every 12 months, or in accordance with an examination scheme drawn up by a competent person. Equipment must also be examined after installation or reassembly.",
      },
      {
        question: "What equipment does a LOLER inspection cover?",
        answer:
          "LOLER inspections cover all lifting equipment including overhead cranes, mobile cranes, hoists, lifts (passenger and goods), forklift trucks, chain slings, wire rope slings, shackles, eyebolts, lifting beams, and any other accessories used for lifting loads.",
      },
      {
        question: "Do I need a LOLER inspection for a forklift truck?",
        answer:
          "Yes. Forklift trucks are classified as lifting equipment under LOLER 1998 and require a thorough examination at least every 12 months. If the forklift is used to lift people (for example, with a working platform attachment), it must be examined every 6 months.",
      },
    ],
    "wahr-inspections": [
      {
        question: "What does a WAHR inspection involve?",
        answer:
          "A WAHR inspection involves examining all work at height equipment for defects, damage, and suitability. This includes checking structural integrity, testing safety mechanisms, verifying correct assembly, and ensuring equipment meets the requirements of the Work at Height Regulations 2005.",
      },
      {
        question: "How often is a WAHR inspection required?",
        answer:
          "Work at height equipment must be inspected before each use by the user, and must undergo a formal inspection by a competent person at regular intervals. The frequency depends on the type of equipment and the conditions of use — scaffolding requires inspection at least every 7 days when in use, while other equipment such as harnesses and lanyards typically require formal examination every 6 to 12 months.",
      },
      {
        question: "What equipment does a WAHR inspection cover?",
        answer:
          "WAHR inspections cover scaffolding, mobile elevated work platforms (MEWPs), ladders, stepladders, roof ladders, safety harnesses, lanyards, fall arrest systems, guardrails, safety nets, and any other equipment used to prevent or mitigate falls from height.",
      },
    ],
    "puwer-inspections": [
      {
        question: "What does a PUWER inspection involve?",
        answer:
          "A PUWER inspection involves assessing work equipment for safety, suitability, and maintenance condition. Our engineer checks guards and protective devices, emergency stop mechanisms, controls, stability, markings and warnings, and the general condition of the equipment against the requirements of PUWER 1998.",
      },
      {
        question: "How often is a PUWER inspection required?",
        answer:
          "PUWER 1998 requires that work equipment is maintained in an efficient state, in efficient working order, and in good repair. Inspections should be carried out at suitable intervals determined by risk assessment, the type of equipment, the intensity of use, and the operating environment. Many businesses opt for annual inspections as a minimum.",
      },
      {
        question: "What equipment does a PUWER inspection cover?",
        answer:
          "PUWER covers virtually all work equipment including machinery, power tools, hand tools, ladders, photocopiers, laboratory apparatus, and any equipment provided for use at work. This ranges from simple hand tools to complex CNC machines and production lines.",
      },
    ],
    "coshh-lev-inspections": [
      {
        question: "What does a COSHH LEV inspection involve?",
        answer:
          "A COSHH LEV inspection involves a thorough examination and test of your local exhaust ventilation system. This includes visual inspection of ductwork, hoods, and fans, airflow measurements at capture points, static pressure readings through the system, and checks on filters and discharge points to ensure the system effectively controls hazardous substances.",
      },
      {
        question: "How often is a COSHH LEV inspection required?",
        answer:
          "Under COSHH Regulation 9, LEV systems must be thoroughly examined and tested at least every 14 months. Some specific processes have shorter intervals — for example, LEV for certain blasting operations must be examined every month, and spray-painting booths every 6 months. Your system should be examined according to whichever interval applies.",
      },
      {
        question: "What equipment does a COSHH LEV inspection cover?",
        answer:
          "COSHH LEV inspections cover all local exhaust ventilation systems including fume cupboards, extraction arms, downdraft benches, spray booth ventilation, dust extraction systems, welding fume extraction, woodworking extraction, and any other system designed to capture and remove airborne contaminants at source.",
      },
    ],
    "report-writing": [
      {
        question: "What does your report writing service include?",
        answer:
          "Our report writing service produces comprehensive, legally compliant inspection reports. Each report includes a full description of the equipment examined, the findings of the inspection, classification of any defects found, recommendations for remedial action with timescales, and confirmation of compliance status. Reports are clear, well-structured, and suitable for presentation to the HSE if required.",
      },
      {
        question: "How quickly will I receive my inspection report?",
        answer:
          "We aim to deliver all inspection reports within 24 to 48 hours of the inspection. Where critical defects have been identified that require immediate action, we will notify you verbally on site and follow up with the written report as a priority.",
      },
      {
        question: "Are your reports accepted by the HSE?",
        answer:
          "Yes. Our reports are produced to the standards required by UK health and safety legislation and are fully accepted by the HSE. They include all the information required under the relevant regulations — PSSR, LOLER, WAHR, PUWER, and COSHH — and are produced by a competent person as defined in the legislation.",
      },
    ],
  };

  return map[slug] ?? map["pssr-inspections"]!;
}

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface ServicePageProps {
  service: {
    name: string;
    slug: string;
    shortName: string;
    regulationName: string;
    description: string;
    metaDescription: string;
    icon: string;
    sortOrder: number;
  };
  overviewImage?: string;
  overviewAlt?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function ServicePage({ service, overviewImage, overviewAlt }: ServicePageProps) {
  const otherServiceLinks = SERVICE_SEED.filter(
    (s) => s.slug !== service.slug
  ).map((s) => ({
    label: s.name,
    href: `/${s.slug}`,
  }));

  const faqs = getStaticServiceFAQs(service.slug);

  return (
    <>
      <ServiceSchema
        serviceName={service.name}
        serviceDescription={service.description}
        serviceSlug={service.slug}
        regulationName={service.regulationName}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: service.name, href: `/${service.slug}` },
        ]}
      />
      <HowToSchema serviceName={service.name} />
      <WebPageSchema
        title={`${service.name} | Safe Lee Inspection & Consultancy`}
        description={service.metaDescription}
        url={`${BUSINESS.url}/${service.slug}`}
      />

      <ServiceHero
        serviceName={service.name}
        regulationName={service.regulationName}
        shortDescription={service.description}
        iconName={service.icon}
      />

      {overviewImage && (
        <ServiceOverview
          serviceName={service.name}
          description={service.description}
          regulationName={service.regulationName}
          imageSrc={overviewImage}
          imageAlt={overviewAlt ?? `${service.name} — Safe Lee Inspection & Consultancy`}
        />
      )}

      <ComplianceSection
        serviceName={service.name}
        regulationName={service.regulationName}
      />
      <InspectionProcess serviceName={service.name} />
      <IndustryRelevance industries={[]} serviceName={service.name} />
      <Testimonials reviews={GOOGLE_REVIEWS} />
      <FAQAccordion faqs={faqs} />

      {/* Red CTA Bar */}
      <section className="bg-sl-red py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Need a {service.name.replace(/ Inspections?$/i, "")} inspection or quotation?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            If you would like to discuss your equipment, inspection intervals or
            compliance requirements, get in touch today.
          </p>
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg bg-sl-navy px-10 py-3.5 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <Coverage
        locations={
          (PSEO_SERVICE_SLUGS as readonly string[]).includes(service.slug)
            ? LOCATIONS.map((l) => ({ name: l.name, slug: l.slug }))
            : undefined
        }
        serviceSlug={
          (PSEO_SERVICE_SLUGS as readonly string[]).includes(service.slug)
            ? service.slug
            : undefined
        }
      />
      <InternalLinks
        links={otherServiceLinks}
        heading="Our Other Services"
      />
    </>
  );
}
