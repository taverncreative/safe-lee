import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { serviceHubMeta } from "@/lib/seo/meta-generator";

const SERVICE = {
  name: "WAHR Inspections",
  slug: "wahr-inspections",
  shortName: "WAHR",
  regulationName: "Work at Height Regulations 2005",
  description:
    "Inspections of work at height equipment under WAHR 2005. We examine scaffolding, ladders, harnesses, guardrails, and fall arrest systems to prevent falls — the leading cause of workplace fatalities.",
  metaDescription:
    "WAHR inspections for work at height equipment. Expert examinations of scaffolding, ladders, harnesses, and fall protection under Work at Height Regulations 2005.",
  icon: "HardHat",
  sortOrder: 3,
};

export function generateMetadata(): Metadata {
  return serviceHubMeta(SERVICE);
}

export default function Page() {
  return (
    <ServicePage
      service={SERVICE}
      overviewImage="/images/WAHR/Hero.webp"
      overviewAlt="WAHR work at height equipment inspection — Safe Lee Inspection & Consultancy"
    />
  );
}
