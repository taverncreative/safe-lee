import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { serviceHubMeta } from "@/lib/seo/meta-generator";

const SERVICE = {
  name: "Report Writing",
  slug: "report-writing",
  shortName: "Reports",
  regulationName: "Various Regulations",
  description:
    "Professional inspection report writing services. We produce clear, comprehensive, and legally compliant reports for all types of statutory inspections and thorough examinations.",
  metaDescription:
    "Professional inspection report writing services. Clear, comprehensive, and legally compliant reports for PSSR, LOLER, WAHR, PUWER, and COSHH inspections.",
  icon: "FileText",
  sortOrder: 6,
};

export function generateMetadata(): Metadata {
  return serviceHubMeta(SERVICE);
}

export default function Page() {
  return (
    <ServicePage
      service={SERVICE}
      overviewImage="/images/Report Writing/Tele.webp"
      overviewAlt="Professional inspection report writing — Safe Lee Inspection & Consultancy"
    />
  );
}
