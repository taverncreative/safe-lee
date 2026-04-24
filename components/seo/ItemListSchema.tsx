/* ------------------------------------------------------------------ */
/*  ItemListSchema — structured data for hub-style pages               */
/*                                                                      */
/*  Emits a schema.org ItemList for pages that render a visible grid   */
/*  of navigable links (county hub location grids, service coverage   */
/*  pill links). Each ListItem maps 1:1 to a link the user can see.   */
/*                                                                      */
/*  Rules:                                                              */
/*   - Only pass items that correspond to visible <a> elements on      */
/*     the page. Never include inferred or off-page destinations.       */
/*   - position values start at 1 (schema.org requirement).            */
/*   - id should use a #fragment on the canonical page URL, e.g.       */
/*     `${BUSINESS.url}/${serviceSlug}#location-list`                  */
/*   - pageUrl should match the `url` prop passed to WebPageSchema on  */
/*     the same page — this connects the ItemList into the graph via   */
/*     isPartOf → {pageUrl}#webpage.                                   */
/* ------------------------------------------------------------------ */

interface ListItemInput {
  position: number;
  name: string;
  url: string;
}

interface ItemListSchemaProps {
  /** Stable @id for this list entity, e.g. `https://example.com/page#location-list` */
  id: string;
  /** Human-readable label for the list — used as schema `name` */
  name: string;
  /** Ordered array matching the visible links rendered on the page */
  items: ListItemInput[];
  /**
   * Canonical URL of the page this list lives on (same value passed to
   * WebPageSchema's `url` prop). When provided, emits:
   *   isPartOf: { "@id": "{pageUrl}#webpage" }
   * connecting this ItemList into the entity graph.
   *
   * Always pass this prop — omitting it leaves ItemList as an isolated
   * node with no connections to any other declared entity.
   */
  pageUrl?: string;
  /**
   * @id of the Service entity this list is about.
   *
   * When provided, emits:
   *   about: { "@id": serviceId }
   *
   * Must match exactly the @id used in ServiceSchema and in
   * WebPageSchema's mainEntityId on the same page. No new Service
   * entity is created — this is a reference-only link.
   *
   * Convention at current call sites:
   *   Service hub page  → `${BUSINESS.url}/${service.slug}/#service`
   *   County hub page   → `${BUSINESS.url}/${service.slug}-${county.slug}/#service`
   *
   * Always pass this prop on pages that declare a Service entity —
   * omitting it leaves the ItemList disconnected from the primary
   * subject of the page.
   */
  serviceId?: string;
}

export function ItemListSchema({ id, name, items, pageUrl, serviceId }: ItemListSchemaProps) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": id,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
    })),
    /*
     * isPartOf — connects this ItemList to the WebPage entity declared
     * on the same URL, eliminating the isolated node. The WebPage's @id
     * uses the #webpage fragment, matching WebPageSchema's convention.
     */
    ...(pageUrl ? { isPartOf: { "@id": `${pageUrl}#webpage` } } : {}),
    /*
     * about — reference-only link to the Service entity this list
     * describes. The @id must match the one declared in ServiceSchema
     * and in WebPageSchema.mainEntityId on the same page. No new
     * Service entity is created here — this is purely a pointer.
     *
     * Relationship in the graph:
     *   ItemList → isPartOf → WebPage → mainEntity → Service
     *   ItemList → about    → Service          (direct shortcut)
     *
     * The direct `about` link is more explicit than relying solely on
     * the two-hop path through WebPage.mainEntity.
     */
    ...(serviceId ? { about: { "@id": serviceId } } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
