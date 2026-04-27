import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Accreditations } from "@/components/sections/Accreditations";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { WebPageSchema } from "@/components/seo/WebPageSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BUSINESS } from "@/types";
import { homePageMeta } from "@/lib/seo/meta-generator";
import { GOOGLE_REVIEWS } from "@/lib/content/reviews";

export const metadata = homePageMeta();

const services = [
  {
    name: "LOLER Examinations",
    href: "/loler-inspections",
    image: "/images/LOLER/Cranes, Hoists, and Lifts.webp",
    description:
      "Statutory thorough examinations of lifting equipment in accordance with the Lifting Operations and Lifting Equipment Regulations 1988.",
  },
  {
    name: "PSSR Examinations",
    href: "/pssr-inspections",
    image: "/images/PSSR/Hero.webp",
    description:
      "Thorough examination of Pressure Systems under the Pressure Systems Safety Regulations 2000 and produce a Written Scheme of Examination when required",
  },
  {
    name: "COSHH Examinations (LEV)",
    href: "/coshh-lev-inspections",
    image: "/images/COSSH/hero.webp",
    description:
      "Thorough examination of LEV (Local Exhaust Ventilation) extraction systems under Control of substances hazardous to health regulations 2002.",
  },
  {
    name: "PUWER Examinations",
    href: "/puwer-inspections",
    image: "/images/PUWER/Hero.webp",
    description:
      "Machinery and work equipment examinations under Provision and Use of Work Equipment Regulations 1998",
  },
  {
    name: "WAHR Examinations",
    href: "/wahr-inspections",
    image: "/images/WAHR/Hero.webp",
    description:
      "PPE /safety equipment inspections under Working at Height regulations 2005",
  },
  {
    name: "Report Writing",
    href: "/report-writing",
    image: "/images/report writing.jpg",
    description:
      "Clear, compliant reports of thorough examination issued following inspection.",
  },
];


const faqs = [
  {
    question: "How often do statutory inspections need to be carried out?",
    answer:
      "Inspection frequency depends on the type of equipment and the relevant regulations. For example, LOLER thorough examinations for lifting equipment are typically required every 6 or 12 months, while PSSR written schemes define intervals for pressure systems. LEV testing under COSHH must be carried out at least every 14 months. We can advise on the correct schedule for your specific equipment.",
  },
  {
    question: "What are the legal requirements for workplace inspections?",
    answer:
      "UK health and safety legislation — including PSSR 2000, LOLER 1998, PUWER 1998, WAHR 2005, and COSHH 2002 — requires employers and duty holders to ensure that certain workplace equipment is thoroughly examined by a competent person at prescribed intervals. Failure to comply can result in enforcement notices, significant fines, and even prosecution by the HSE.",
  },
  {
    question: "What should I expect during an inspection?",
    answer:
      "Our engineer will arrive at your premises at the agreed time and carry out a visual and functional examination of the equipment. This includes checking for defects, wear, damage, and correct operation. We will discuss any findings with you on site and follow up with a detailed written report, including any defects found and recommendations for remedial action.",
  },
  {
    question: "How long does a typical inspection take?",
    answer:
      "The duration varies depending on the type and quantity of equipment being inspected. A single item such as a forklift truck or pressure vessel might take 30 minutes to an hour, while a full site inspection covering multiple pieces of equipment could take a full day. We will provide a time estimate when you book your inspection.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We are based in Irlam, Manchester, and regularly carry out inspections across Greater Manchester, Lancashire, Cheshire, Merseyside, and the wider North West. We also undertake nationwide projects by arrangement. Contact us to discuss your location and requirements.",
  },
];

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <FAQSchema faqs={faqs} pageUrl={BUSINESS.url} />
      <WebPageSchema
        title="Statutory Inspections Manchester | Safe Lee Inspection & Consultancy"
        description="Professional LOLER, PSSR, PUWER, WAHR & COSHH LEV inspections. Manchester-based, serving the North West & UK wide. 5.0★ on Google. Get a free quote."
        url={BUSINESS.url}
        mainEntityId={`${BUSINESS.url}/#organization`}
        primaryImage={{
          url: `${BUSINESS.url}/images/HERO.webp`,
          caption: "Statutory inspection engineer examining industrial equipment — Safe Lee Inspection & Consultancy",
        }}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Our Mission */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-sl-gray-600">
                  Our mission is to provide a unique personal service to your
                  company and offer you the correct advise for you to decide how
                  we can best assist your company in staying compliant.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-sl-gray-600">
                  We aim to be a competitive alternative to larger companies
                  offering the same excellent service but to work with your
                  company to inspect the right equipment, at the right time and
                  put your safety first.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/Van Photos/WhatsApp Image 2025-12-09 at 17.40.33.jpeg"
                  alt="Safe Lee Inspections branded van"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Our Inspection Services */}
      <section className="bg-sl-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-sl-gray-900 sm:text-4xl">
                Our Inspection Services
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Reveal key={service.href}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-sl-gray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading text-lg font-semibold text-sl-navy group-hover:text-sl-red">
                      {service.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-sl-gray-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Areas We Cover */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
              Areas we cover
            </h2>
          </Reveal>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <p className="text-lg leading-relaxed text-sl-gray-600">
                  We are based in Manchester and regularly work across the North
                  West, including Liverpool, St Helens, Preston and Wigan.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-sl-gray-600">
                  For clients with multiple locations or specialist requirements,
                  we also travel UK wide to support statutory inspection needs.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-sl-gray-600">
                  Contact us to discuss your site locations.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-lg bg-sl-navy px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-sl-navy/90"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ filter: 'grayscale(100%) invert(92%) contrast(83%)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.15842396953!2d-2.4282167!3d53.4723272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd94a507b7898ae!2sManchester%2C%20UK!5e0!3m2!1sen!2suk!4v1!5m2!1sen!2suk"
                  className="h-full w-full rounded-2xl border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Areas we cover — Manchester and the North West"
                  style={{ position: "absolute", inset: 0 }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Competent, Compliant and Accountable */}
      <section className="bg-sl-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-sl-gray-900 sm:text-4xl">
              Competent, Compliant and Accountable
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-sl-gray-600">
              All inspections are carried out by a competent person, with the
              knowledge and experience required under UK health and safety law.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-lg leading-relaxed text-sl-gray-600">
              We provide clear reports of thorough examination that document the
              condition of your equipment, including any defects, limitations or
              actions required to achieve or maintain compliance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. Accreditations */}
      <Accreditations />

      {/* 7. Red CTA Bar */}
      <section className="bg-sl-red py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Need an inspection or quotation?
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

      {/* 8. Testimonials & FAQ */}
      <Testimonials reviews={GOOGLE_REVIEWS} />
      <FAQAccordion faqs={faqs} />
    </>
  );
}
