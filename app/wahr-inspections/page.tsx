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
    "WAHR 2005 inspections of harnesses, lanyards, fall arrest blocks and PPE. Manchester-based, serving the North West & UK wide. Get a free quote.",
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
