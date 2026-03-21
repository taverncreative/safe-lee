import { BUSINESS } from "@/types";

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    description:
      "Get in touch with Safe Lee Inspection & Consultancy Ltd for a free, no-obligation quote on statutory inspections across Manchester and the North West.",
    url: `${BUSINESS.url}/contact-us`,
    mainEntity: {
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
