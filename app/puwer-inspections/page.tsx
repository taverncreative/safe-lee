import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { serviceHubMeta } from "@/lib/seo/meta-generator";

const SERVICE = {
  name: "PUWER Inspections",
  slug: "puwer-inspections",
  shortName: "PUWER",
  regulationName: "Provision and Use of Work Equipment Regulations 1998",
  description:
    "Detailed inspections of work equipment under PUWER 1998. We assess machinery, power tools, and all work equipment for safety, suitability, and maintenance compliance.",
  metaDescription:
    "Statutory PUWER thorough examinations for production machinery, presses, conveyors and work equipment. Manchester-based, North West & UK wide.",
  icon: "Wrench",
  sortOrder: 4,
};

export function generateMetadata(): Metadata {
  return serviceHubMeta(SERVICE);
}

export default function Page() {
  return (
    <ServicePage
      service={SERVICE}
      overviewImage="/images/PUWER/Hero.webp"
      overviewAlt="PUWER work equipment inspection — Safe Lee Inspection & Consultancy"
    />
  );
}
