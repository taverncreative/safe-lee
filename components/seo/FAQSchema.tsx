interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
  /**
   * Canonical URL of the page this FAQ lives on (same value passed to
   * WebPageSchema's `url` prop). When provided:
   *   - Assigns @id "{pageUrl}#faqpage" so the entity can be referenced
   *   - Declares isPartOf → "{pageUrl}#webpage" linking it into the graph
   *
   * Always pass this prop — omitting it leaves FAQPage as an anonymous,
   * isolated node with no connections to any other declared entity.
   */
  pageUrl?: string;
}

export function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  if (faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    /*
     * @id and isPartOf — emitted when pageUrl is provided.
     * isPartOf connects this FAQPage to the WebPage entity declared on
     * the same URL, eliminating the isolated node.
     */
    ...(pageUrl
      ? {
          "@id": `${pageUrl}#faqpage`,
          isPartOf: { "@id": `${pageUrl}#webpage` },
        }
      : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
