import { BUSINESS } from "@/types";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    inLanguage: "en-GB",
    description:
      "Professional PSSR, LOLER, WAHR, PUWER, and COSHH LEV statutory inspections and thorough examinations serving Manchester, the North West, and beyond.",
    publisher: {
      "@id": `${BUSINESS.url}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
