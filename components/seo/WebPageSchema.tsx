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
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    inLanguage: "en-GB",
    isPartOf: {
      "@id": `${BUSINESS.url}/#website`,
    },
    about: {
      "@id": `${BUSINESS.url}/#organization`,
    },
    breadcrumb: {
      "@id": `${url}#breadcrumb`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
