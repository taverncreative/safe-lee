import { BUSINESS } from "@/types";

interface BreadcrumbSchemaProps {
  items: { name: string; href: string }[];
  /**
   * Canonical URL of the page this breadcrumb lives on.
   *
   * Must match the `url` prop passed to WebPageSchema on the same page.
   * When provided, this value is used directly for the `@id` fragment:
   *   `${pageUrl}#breadcrumb`
   *
   * When omitted, the @id is derived from the last item's href (legacy
   * behaviour — kept for backwards compatibility but not recommended).
   * The explicit prop is preferred because it guarantees the @id always
   * matches the WebPageSchema reference, preventing phantom entity
   * creation if the last breadcrumb item's href ever drifts from the
   * canonical page URL.
   *
   * Always provide this prop alongside WebPageSchema(hasBreadcrumb=true).
   */
  pageUrl?: string;
}

export function BreadcrumbSchema({ items, pageUrl: pageUrlProp }: BreadcrumbSchemaProps) {
  const pageUrl = pageUrlProp ?? `${BUSINESS.url}${items[items.length - 1]?.href ?? ""}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href === "/" ? BUSINESS.url : `${BUSINESS.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
