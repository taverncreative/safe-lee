import { BUSINESS } from "@/types";

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  /**
   * @id of the primary entity this page is about.
   * Required on all content pages — links the WebPage node into the
   * entity graph and tells crawlers what this page primarily describes.
   *
   * Mapping by page type:
   *   Service hub          → `${BUSINESS.url}/${service.slug}/#service`
   *   Service+location     → `${BUSINESS.url}/${service.slug}-${location.slug}/#service`
   *   County hub           → `${BUSINESS.url}/${service.slug}-${county.slug}/#service`
   *   Homepage             → `${BUSINESS.url}/#organization`
   *   Contact              → `${BUSINESS.url}/#organization`
   *
   * Omit only on pages that declare no structured entity of their own
   * (privacy policy, terms, accessibility statement — plain prose pages
   * with no schema.org entity declared at the same URL).
   */
  mainEntityId?: string;
  /**
   * Primary image visible on the page — rendered as primaryImageOfPage.
   *
   * Rules:
   *   - url must be an absolute URL (prefix relative paths with BUSINESS.url)
   *   - caption must match the alt text of the rendered <Image> element verbatim;
   *     never use a generic fallback caption
   *   - Only pass this when a real, visible hero/primary image exists on the page
   *
   * @id fragment: `${url}#primaryimage`
   */
  primaryImage?: {
    url: string;
    caption: string;
  };
  /**
   * Set to true only on pages that also render BreadcrumbSchema.
   * When false (default), the breadcrumb reference is omitted entirely
   * rather than emitting a dangling @id pointer to a BreadcrumbList
   * entity that was never declared.
   *
   * Pages with BreadcrumbSchema: service hubs, service+location, county hubs.
   * Pages without: homepage, contact.
   */
  hasBreadcrumb?: boolean;
  /**
   * Additional entity @ids to include in the WebPage `about` array.
   *
   * When provided, `about` expands from the default single-object form
   * `{ "@id": "/#organization" }` into an array that includes
   * `/#organization` first, followed by each additional @id in order.
   *
   * Use this only when a second declared entity (with its own @id) exists
   * on the same page and the page content is genuinely about that entity.
   *
   * Current usage:
   *   ServiceLocationPage — adds `{pageUrl}/#localbusiness` because
   *   LocalBusinessLocationSchema is rendered on every service+location page.
   *
   * Do NOT use on:
   *   ServicePage, CountyHubPage, homepage, contact — no LocalBusiness entity
   *   is declared on those pages.
   */
  additionalAboutIds?: string[];
}

export function WebPageSchema({ title, description, url, mainEntityId, primaryImage, hasBreadcrumb = false, additionalAboutIds }: WebPageSchemaProps) {
  /*
   * about — single object when no additional entities are declared on this
   * page; array when additionalAboutIds are supplied.
   *
   * The /#organization reference is always first — it is the root entity
   * the site is built around and must appear regardless of page type.
   * Additional @ids (e.g. /#localbusiness on service+location pages) follow.
   */
  const aboutValue =
    additionalAboutIds && additionalAboutIds.length > 0
      ? [
          { "@id": `${BUSINESS.url}/#organization` },
          ...additionalAboutIds.map((id) => ({ "@id": id })),
        ]
      : { "@id": `${BUSINESS.url}/#organization` };

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
    about: aboutValue,
    /*
     * speakable — tells Google Assistant / voice interfaces which parts
     * of the page are most suitable for text-to-speech.
     *
     * cssSelector targets:
     *   "h1"                 — present on every page; carries the primary topic.
     *   ".speakable-subtitle" — a semantic (non-visual) class added to the
     *                           lead paragraph beneath every H1. Applied in:
     *                           Hero.tsx, ServiceHero.tsx, LocalServiceHero.tsx,
     *                           CountyHubPage inline hero, MicroLocationPage hero.
     *
     * If neither selector matches a given page, the property is ignored —
     * it does not cause validation errors. Do not add selectors that are
     * not rendered in the actual DOM (e.g. ".hero-text" does not exist).
     */
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".speakable-subtitle"],
    },
    /*
     * breadcrumb — only emitted when hasBreadcrumb=true, i.e. when a
     * BreadcrumbSchema is also rendered on this page. Without this guard,
     * the reference points to a BreadcrumbList @id that was never declared,
     * creating a phantom node in the entity graph.
     */
    ...(hasBreadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
    /*
     * primaryImageOfPage — the dominant image visible on this page.
     * Inlined as an ImageObject rather than a separate script tag so the
     * WebPage → Image relationship is explicit in a single JSON-LD block.
     *
     * representativeOfPage: true signals to crawlers that this image
     * can be used to represent the page in search results.
     */
    ...(primaryImage
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            "@id": `${url}#primaryimage`,
            url: primaryImage.url,
            contentUrl: primaryImage.url,
            caption: primaryImage.caption,
            representativeOfPage: true,
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
