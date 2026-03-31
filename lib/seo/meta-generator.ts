import type { Metadata } from "next";
import { BUSINESS } from "@/types";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.safeleeinspectionconsultancy.com"
).replace(/\/$/, "");

/* ------------------------------------------------------------------ */
/*  Meta generators — unique per page type                             */
/* ------------------------------------------------------------------ */

export function homePageMeta(): Metadata {
  return {
    title:
      "Safe Lee Inspection & Consultancy | Statutory Inspections Manchester",
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
      images: [{ url: `${SITE_URL}/api/og`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Safe Lee Inspection & Consultancy",
      description: "Professional statutory inspections in Manchester & the North West.",
    },
  };
}

export function serviceHubMeta(service: {
  name: string;
  slug: string;
  metaDescription: string;
}): Metadata {
  const title = `${service.name} | ${BUSINESS.name}`;
  const url = `${SITE_URL}/${service.slug}`;
  return {
    title,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: service.metaDescription,
      url,
      siteName: BUSINESS.name,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/api/og?service=${encodeURIComponent(service.name)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export function serviceLocationMeta(
  service: { name: string; slug: string; shortName: string },
  location: { name: string; slug: string; county: string },
): Metadata {
  const title = `${service.name} in ${location.name} | ${BUSINESS.name}`;
  const description = `Professional ${service.shortName} inspections in ${location.name}, ${location.county}. Experienced engineers ensuring compliance with statutory regulations. Book your inspection today.`;
  const url = `${SITE_URL}/${service.slug}-${location.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/api/og?service=${encodeURIComponent(service.name)}&location=${encodeURIComponent(location.name)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export function microLocationMeta(
  service: { name: string; slug: string; shortName: string },
  location: { name: string; slug: string; county: string },
): Metadata {
  const title = `${service.name} Near ${location.name} | ${BUSINESS.name}`;
  const description = `Looking for ${service.shortName} inspections near ${location.name}? Safe Lee Inspection & Consultancy provides professional statutory inspections across ${location.county} and surrounding areas.`;
  const url = `${SITE_URL}/${service.slug}-near-${location.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/api/og?service=${encodeURIComponent(service.name)}&location=${encodeURIComponent(location.name)}&near=1`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export function contactMeta(): Metadata {
  return {
    title: `Contact Us | ${BUSINESS.name}`,
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
