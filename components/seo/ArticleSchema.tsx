/* ------------------------------------------------------------------ */
/*  ArticleSchema                                                       */
/*                                                                      */
/*  Emits an Article-typed JSON-LD node with explicit references to     */
/*  the Organization (publisher) and Person (author) entities declared  */
/*  by SiteSchema/OrganizationSchema. Using @id refs (rather than       */
/*  inline duplicates) lets Google merge the article into the site's    */
/*  entity graph.                                                       */
/* ------------------------------------------------------------------ */

import { BUSINESS } from "@/types";

interface ArticleSchemaProps {
  /** Page URL (no trailing slash). Used for @id and mainEntityOfPage. */
  url: string;
  /** Article headline — should match the visible H1. */
  headline: string;
  /** Short description — should match metadata.description. */
  description: string;
  /** ISO date — first publication. */
  datePublished: string;
  /** ISO date — most recent material change. */
  dateModified: string;
  /** Optional primary image URL (absolute). */
  imageUrl?: string;
}

export function ArticleSchema({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  imageUrl,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    headline,
    description,
    datePublished,
    dateModified,
    inLanguage: "en-GB",
    /*
     * Reference the Person node declared on the Organization entity
     * (see SiteSchema). Founder is the public-facing author for all
     * articles unless we add per-article overrides later.
     */
    author: { "@id": `${BUSINESS.url}/#founder` },
    publisher: { "@id": `${BUSINESS.url}/#organization` },
    ...(imageUrl ? { image: imageUrl } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
