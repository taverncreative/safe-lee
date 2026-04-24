import { BUSINESS } from "@/types";

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    /*
     * @id uses the #webpage fragment to match WebPageSchema's node on
     * the same URL. JSON-LD parsers merge entities with the same @id,
     * so the contact page ends up as a single ContactPage entity (a
     * WebPage subtype) with all properties from both schema blocks.
     * This eliminates the ContactPage as an anonymous isolated node.
     */
    "@id": `${BUSINESS.url}/contact-us#webpage`,
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
