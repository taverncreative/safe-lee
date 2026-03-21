import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { serviceHubMeta } from "@/lib/seo/meta-generator";

const SERVICE = {
  name: "COSHH LEV Inspections",
  slug: "coshh-lev-inspections",
  shortName: "COSHH LEV",
  regulationName: "Control of Substances Hazardous to Health Regulations 2002",
  description:
    "Local Exhaust Ventilation (LEV) testing and thorough examinations under COSHH 2002. We ensure your extraction systems effectively control hazardous substances and protect worker health.",
  metaDescription:
    "COSHH LEV inspections and local exhaust ventilation testing. Thorough examinations under COSHH 2002 to ensure effective hazardous substance control. Manchester and North West.",
  icon: "Wind",
  sortOrder: 5,
};

export function generateMetadata(): Metadata {
  return serviceHubMeta(SERVICE);
}

export default function Page() {
  return (
    <ServicePage
      service={SERVICE}
      overviewImage="/images/COSSH/hero.webp"
      overviewAlt="COSHH LEV local exhaust ventilation inspection — Safe Lee Inspection & Consultancy"
    />
  );
}
