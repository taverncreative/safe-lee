import type { Metadata } from "next";
import { BUSINESS } from "@/types";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.safeleeinspectionconsultancy.com"
).replace(/\/$/, "");

/* ------------------------------------------------------------------ */
/*  Meta generators — unique per page type                             */
/*                                                                      */
/*  Title convention:                                                   */
/*    root layout carries template: "%s | Safe Lee Inspection &        */
/*    Consultancy". Page-level titles MUST NOT include the brand name   */
/*    — the template appends it automatically. Exception: the homepage  */
/*    uses title.absolute to override the template and avoid a second   */
/*    brand repetition in its standalone title string.                  */
/*                                                                      */
/*  OG images: generated dynamically by /api/og (edge route, 1200×630). */
/*    Service and location params are passed as query strings so each   */
/*    page gets a unique branded social card.                           */
/* ------------------------------------------------------------------ */

/** Build a dynamic OG image URL for the /api/og edge route (1200×630). */
function ogImage(params: { service?: string; location?: string; near?: boolean } = {}) {
  const url = new URL(`${SITE_URL}/api/og`);
  if (params.service) url.searchParams.set("service", params.service);
  if (params.location) url.searchParams.set("location", params.location);
  if (params.near) url.searchParams.set("near", "1");
  return {
    url: url.toString(),
    width: 1200,
    height: 630,
    alt: "Safe Lee Inspection & Consultancy — statutory inspection engineers",
  };
}

export function homePageMeta(): Metadata {
  return {
    /*
     * absolute bypasses the root layout template so the brand appears
     * exactly once in the carefully crafted homepage title.
     */
    title: {
      absolute:
        "Safe Lee Inspection & Consultancy | Statutory Inspections Manchester",
    },
    description:
      "Professional PSSR, LOLER, WAHR, PUWER, and COSHH LEV inspections from Safe Lee Inspection & Consultancy Ltd. Serving Manchester, the North West, and beyond. 5.0★ Google reviews.",
    alternates: { canonical: SITE_URL },
    openGraph: {
      title:
        "Safe Lee Inspection & Consultancy | Statutory Inspections Manchester",
      description:
        "Professional statutory inspections from experienced engineers. PSSR, LOLER, WAHR, PUWER, COSHH LEV. Based in Irlam, Manchester.",
      url: SITE_URL,
      siteName: BUSINESS.name,
      type: "website",
      images: [ogImage()],
    },
    twitter: {
      card: "summary_large_image",
      title: "Safe Lee Inspection & Consultancy",
      description:
        "Professional statutory inspections in Manchester & the North West.",
    },
  };
}

export function serviceHubMeta(service: {
  name: string;
  slug: string;
  metaDescription: string;
}): Metadata {
  /*
   * title: service.name only — template produces:
   *   "LOLER Inspections | Safe Lee Inspection & Consultancy"  (52 chars)
   */
  const url = `${SITE_URL}/${service.slug}`;
  return {
    title: service.name,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.name} | Safe Lee Inspection & Consultancy`,
      description: service.metaDescription,
      url,
      siteName: BUSINESS.name,
      type: "website",
      images: [ogImage({ service: service.name })],
    },
  };
}

export function serviceLocationMeta(
  service: { name: string; slug: string; shortName: string },
  location: { name: string; slug: string; county: string }
): Metadata {
  /*
   * title: page portion only — template produces:
   *   "LOLER Inspections in Manchester | Safe Lee Inspection & Consultancy"
   */
  const pageTitle = `${service.name} in ${location.name}`;
  const description = `Professional ${service.shortName} inspections in ${location.name}, ${location.county}. Experienced engineers ensuring compliance with statutory regulations. Book your inspection today.`;
  const url = `${SITE_URL}/${service.slug}-${location.slug}`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${pageTitle} | Safe Lee Inspection & Consultancy`,
      description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      images: [ogImage({ service: service.shortName, location: location.name })],
    },
  };
}

export function countyHubMeta(
  service: { name: string; slug: string },
  county: { name: string; slug: string }
): Metadata {
  const pageTitle = `${service.name} in ${county.name}`;
  const description = `Professional ${service.name.toLowerCase()} across all major towns in ${county.name}. Safe Lee Inspection & Consultancy — competent person examinations, fast report turnaround.`;
  const url = `${SITE_URL}/${service.slug}-${county.slug}`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${pageTitle} | Safe Lee Inspection & Consultancy`,
      description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      images: [ogImage({ service: service.name, location: county.name })],
    },
  };
}

export function contactMeta(): Metadata {
  return {
    title: "Contact Us",
    description: `Get in touch with ${BUSINESS.name} for professional statutory inspections. Call ${BUSINESS.phone} or fill out our contact form. Based in Irlam, Manchester.`,
    alternates: { canonical: `${SITE_URL}/contact-us` },
  };
}

/** Generate alt text for images */
export function generateAltText(
  context: string,
  service?: string,
  location?: string
): string {
  const parts = [context];
  if (service) parts.push(`for ${service}`);
  if (location) parts.push(`in ${location}`);
  parts.push("— Safe Lee Inspection & Consultancy");
  return parts.join(" ");
}
