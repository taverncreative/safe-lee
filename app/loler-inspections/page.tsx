import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { serviceHubMeta } from "@/lib/seo/meta-generator";

const SERVICE = {
  name: "LOLER Inspections",
  slug: "loler-inspections",
  shortName: "LOLER",
  regulationName: "Lifting Operations and Lifting Equipment Regulations 1998",
  description:
    "Thorough examinations of lifting equipment under LOLER 1998. We inspect cranes, hoists, lifts, slings, and all lifting accessories to ensure they are safe for continued use.",
  metaDescription:
    "Expert LOLER inspections for lifting equipment. Thorough examinations under LOLER 1998 for cranes, hoists, lifts, and lifting accessories. Manchester and North West coverage.",
  icon: "ArrowUpFromLine",
  sortOrder: 2,
};

export function generateMetadata(): Metadata {
  return serviceHubMeta(SERVICE);
}

export default function Page() {
  return (
    <ServicePage
      service={SERVICE}
      overviewImage="/images/LOLER/HERO.webp"
      overviewAlt="LOLER lifting equipment inspection — Safe Lee Inspection & Consultancy"
    />
  );
}
