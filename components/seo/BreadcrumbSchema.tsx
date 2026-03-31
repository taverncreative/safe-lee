import { BUSINESS } from "@/types";

interface BreadcrumbSchemaProps {
  items: { name: string; href: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const pageUrl = `${BUSINESS.url}${items[items.length - 1]?.href ?? ""}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
