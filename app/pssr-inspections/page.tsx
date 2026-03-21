import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { serviceHubMeta } from "@/lib/seo/meta-generator";

const SERVICE = {
  name: "PSSR Inspections",
  slug: "pssr-inspections",
  shortName: "PSSR",
  regulationName: "Pressure Systems Safety Regulations 2000",
  description:
    "Comprehensive pressure systems examinations ensuring compliance with PSSR 2000. We inspect pressure vessels, pipework, protective devices, and associated systems to protect your workforce and maintain legal compliance.",
  metaDescription:
    "Professional PSSR inspections and pressure systems safety examinations. Ensure compliance with Pressure Systems Safety Regulations 2000. Serving Manchester and the North West.",
  icon: "Gauge",
  sortOrder: 1,
};

export function generateMetadata(): Metadata {
  return serviceHubMeta(SERVICE);
}

export default function Page() {
  return (
    <ServicePage
      service={SERVICE}
      overviewImage="/images/PSSR/Hero.webp"
      overviewAlt="PSSR pressure systems inspection — Safe Lee Inspection & Consultancy"
    />
  );
}
