import { BUSINESS } from "@/types";

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
}

export function WebPageSchema({ title, description, url }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
    isPartOf: {
      "@id": `${BUSINESS.url}/#website`,
    },
    about: {
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
