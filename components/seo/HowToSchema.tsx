interface HowToSchemaProps {
  serviceName: string;
  steps?: { title: string; description: string }[];
  /**
   * Canonical URL of the page this HowTo lives on (same value passed to
   * WebPageSchema's `url` prop). When provided:
   *   - Assigns @id "{pageUrl}#howto"
   *   - Declares isPartOf → "{pageUrl}#webpage" linking it into the graph
   *
   * Always pass this prop — omitting it leaves HowTo as an anonymous,
   * isolated node with no connections to any other declared entity.
   */
  pageUrl?: string;
}

const DEFAULT_STEPS = [
  {
    title: "Initial Consultation",
    description:
      "We discuss your requirements, the equipment involved, and any specific regulatory obligations relevant to your site.",
  },
  {
    title: "Site Survey",
    description:
      "Our engineer visits your premises to assess the scope of the inspection and identify any immediate concerns.",
  },
  {
    title: "Thorough Examination",
    description:
      "A detailed, hands-on inspection of all relevant equipment carried out to the applicable statutory standards.",
  },
  {
    title: "Report & Recommendations",
    description:
      "You receive a comprehensive written report detailing findings, defects, and clear recommendations for remedial action.",
  },
  {
    title: "Ongoing Support",
    description:
      "We provide follow-up guidance, schedule future inspections, and help you maintain continuous compliance.",
  },
];

export function HowToSchema({ serviceName, steps, pageUrl }: HowToSchemaProps) {
  const displaySteps = steps && steps.length > 0 ? steps : DEFAULT_STEPS;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    /*
     * @id and isPartOf — emitted when pageUrl is provided.
     * isPartOf connects this HowTo to the WebPage entity declared on
     * the same URL, eliminating the isolated node.
     */
    ...(pageUrl
      ? {
          "@id": `${pageUrl}#howto`,
          isPartOf: { "@id": `${pageUrl}#webpage` },
        }
      : {}),
    name: `How ${serviceName} Works`,
    description: `Our step-by-step process for carrying out ${serviceName.toLowerCase()} to help you achieve and maintain compliance.`,
    step: displaySteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
