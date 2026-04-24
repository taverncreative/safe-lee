import { BUSINESS } from "@/types";

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceSlug: string;
  regulationName: string;
  locationName?: string;
  locationSlug?: string;
  /**
   * County of the location (e.g. "Greater Manchester").
   * When provided alongside locationName, areaServed is expanded to:
   *   [{ "@type": "Place", name: locationName },
   *    { "@type": "AdministrativeArea", name: locationCounty }]
   * matching exactly what LocalBusinessLocationSchema declares on the
   * same page. Omitting it collapses areaServed to a single Place.
   */
  locationCounty?: string;
  /**
   * When true, adds:
   *   "availableAtOrFrom": { "@id": "{pageUrl}/#localbusiness" }
   *
   * This creates a direct semantic link from the Service entity to the
   * LocalBusiness entity on the same page, completing the chain:
   *   Service → availableAtOrFrom → LocalBusiness → parentOrganization → ProfessionalService
   *
   * Pass this prop ONLY from templates that also render
   * LocalBusinessLocationSchema at the same URL. Passing it without a
   * corresponding LocalBusiness declaration would create a dangling
   * reference to an undeclared entity.
   *
   * Currently: ServiceLocationPage only.
   * MicroLocationPage and CountyHubPage do NOT render LocalBusiness,
   * so this prop must not be set there.
   */
  linkToLocalBusiness?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Per-service enrichment data                                         */
/*                                                                      */
/*  Every value here must directly correspond to content visible on    */
/*  the relevant service page. Do not add entries that aren't backed   */
/*  by on-page copy.                                                    */
/*                                                                      */
/*  serviceOutput    — tangible deliverable(s) produced                */
/*  audience         — roles that commission or rely on this service    */
/*                     Note: schema.org uses "audience", not            */
/*                     "serviceAudience" — the latter is not a valid    */
/*                     schema.org property and has been deliberately    */
/*                     excluded.                                         */
/*  heroImage        — relative path to the hero image rendered on page */
/*  additionalType   — legislation.gov.uk URI for the governing         */
/*                     regulation; undefined for report-writing (spans  */
/*                     all five regulations, no single URI applies)      */
/*  knowsAbout       — regulatory/technical topics explicitly referenced */
/*                     in page copy, FAQs, or section headings           */
/*  relatedServices  — slugs of services explicitly linked on this page  */
/*                     via InternalLinks/crossLinks AND sharing           */
/*                     overlapping equipment coverage documented in FAQs. */
/*                     Only content-backed relationships are included.   */
/* ------------------------------------------------------------------ */

interface ServiceOutput {
  name: string;
  description: string;
}

interface ServiceEnrichment {
  serviceOutput: ServiceOutput[];
  audience: string[];
  heroImage: string;
  additionalType?: string;
  knowsAbout: string[];
  relatedServices: string[];
}

const SERVICE_ENRICHMENT: Record<string, ServiceEnrichment> = {
  "pssr-inspections": {
    /*
     * PSSR produces TWO distinct outputs: the Report of Thorough
     * Examination (documenting findings) and, where one doesn't already
     * exist, the Written Scheme of Examination (specifying future
     * intervals). Both are referenced in the on-page FAQ copy.
     */
    serviceOutput: [
      {
        name: "Report of Thorough Examination",
        description:
          "Formal written report documenting the findings of the pressure systems examination, including any defects classified by severity and required remedial actions under the Pressure Systems Safety Regulations 2000.",
      },
      {
        name: "Written Scheme of Examination",
        description:
          "Documented scheme specifying the scope, nature, and frequency of future examinations for pressure systems, drawn up by a competent person as required under PSSR 2000.",
      },
    ],
    audience: [
      "Duty Holders",
      "Facilities Managers",
      "Health and Safety Managers",
      "Plant Managers",
    ],
    heroImage: "/images/PSSR/Hero.webp",
    /*
     * S.I. 2000/128 — Pressure Systems Safety Regulations 2000.
     */
    additionalType: "https://www.legislation.gov.uk/uksi/2000/128/contents",
    knowsAbout: [
      "Pressure Systems Safety Regulations 2000",
      "Written Scheme of Examination",
      "Thorough Examination of Pressure Systems",
      "Pressure Vessel Inspection",
      "Steam Boiler Examination",
      "Air Receiver Inspection",
      "Safety Valve Testing",
      "Compressed Air System Examination",
    ],
    /*
     * report-writing: PSSR FAQ states "A detailed report is issued
     * covering all findings" and the Written Scheme of Examination
     * (a PSSR deliverable) is also a named output of the report-writing
     * service. InternalLinks on every service page explicitly lists all
     * other services as "Our Other Services".
     */
    relatedServices: ["report-writing"],
  },

  "loler-inspections": {
    /*
     * LOLER produces a single Report of Thorough Examination.
     * Garage Owners are included because the page description explicitly
     * lists "lifts" as in-scope equipment, which covers vehicle hoists
     * used in MOT centres and garages. The FAQ also covers forklifts,
     * relevant to plant hire operators and warehouse managers.
     */
    serviceOutput: [
      {
        name: "Report of Thorough Examination",
        description:
          "Formal written report of the thorough examination of lifting equipment, documenting condition, identified defects, safe working loads, and any required remedial actions under the Lifting Operations and Lifting Equipment Regulations 1998.",
      },
    ],
    audience: [
      "Duty Holders",
      "Plant Managers",
      "Facilities Managers",
      "Health and Safety Managers",
      "Garage Owners",
    ],
    heroImage: "/images/LOLER/HERO.webp",
    /*
     * S.I. 1998/2307 — Lifting Operations and Lifting Equipment
     * Regulations 1998.
     */
    additionalType: "https://www.legislation.gov.uk/uksi/1998/2307/contents",
    knowsAbout: [
      "Lifting Operations and Lifting Equipment Regulations 1998",
      "Thorough Examination of Lifting Equipment",
      "Forklift Truck Inspection",
      "Overhead Crane Examination",
      "Safe Working Load Verification",
      "Lifting Accessories Inspection",
      "Passenger Lift Examination",
      "Chain Sling and Wire Rope Inspection",
    ],
    /*
     * puwer: LOLER FAQ covers forklifts, which as machinery are also
     * subject to PUWER — the two regulations frequently apply to the
     * same equipment. InternalLinks explicitly links PUWER on this page.
     *
     * wahr: WAHR FAQ explicitly names "Mobile Elevated Work Platforms
     * (MEWPs)" as in-scope equipment; MEWPs are also lifting equipment
     * subject to LOLER. InternalLinks explicitly links WAHR on this page.
     */
    relatedServices: ["puwer-inspections", "wahr-inspections"],
  },

  "wahr-inspections": {
    /*
     * WAHR produces an Inspection Report. Site Managers are a natural
     * audience given the construction-adjacent scope (scaffolding,
     * MEWPs, harnesses) described on the page.
     */
    serviceOutput: [
      {
        name: "Inspection Report",
        description:
          "Written report documenting the condition of work at height equipment, identifying defects, and specifying required remedial actions under the Work at Height Regulations 2005.",
      },
    ],
    audience: [
      "Duty Holders",
      "Health and Safety Managers",
      "Facilities Managers",
      "Site Managers",
    ],
    heroImage: "/images/WAHR/Hero.webp",
    /*
     * S.I. 2005/735 — Work at Height Regulations 2005.
     */
    additionalType: "https://www.legislation.gov.uk/uksi/2005/735/contents",
    knowsAbout: [
      "Work at Height Regulations 2005",
      "Scaffolding Inspection",
      "Mobile Elevated Work Platform Examination",
      "Safety Harness Inspection",
      "Fall Arrest System Testing",
      "Ladder and Stepladder Inspection",
      "Personal Protective Equipment for Work at Height",
      "Safety Net and Guardrail Assessment",
    ],
    /*
     * loler: WAHR FAQ explicitly names MEWPs, which are also lifting
     * equipment subject to LOLER thorough examination. Reciprocal of
     * the loler→wahr relationship above.
     */
    relatedServices: ["loler-inspections"],
  },

  "puwer-inspections": {
    /*
     * PUWER covers virtually all work equipment. Plant Managers
     * and H&S Managers are the primary commissioners; duty holders
     * bear the legal obligation.
     */
    serviceOutput: [
      {
        name: "Inspection Report",
        description:
          "Written report detailing the condition, guarding status, safety compliance, and any defects identified in work equipment inspected under the Provision and Use of Work Equipment Regulations 1998.",
      },
    ],
    audience: [
      "Duty Holders",
      "Health and Safety Managers",
      "Facilities Managers",
      "Plant Managers",
    ],
    heroImage: "/images/PUWER/Hero.webp",
    /*
     * S.I. 1998/2306 — Provision and Use of Work Equipment
     * Regulations 1998.
     */
    additionalType: "https://www.legislation.gov.uk/uksi/1998/2306/contents",
    knowsAbout: [
      "Provision and Use of Work Equipment Regulations 1998",
      "Work Equipment Safety Inspection",
      "Machinery Guarding Assessment",
      "Emergency Stop Mechanism Testing",
      "CNC Machine Inspection",
      "Power Tool Examination",
      "Production Line Safety Assessment",
      "Equipment Maintenance Compliance",
    ],
    /*
     * loler: Forklift trucks and hoists are both work equipment (PUWER)
     * and lifting equipment (LOLER) — the two regulations co-apply to
     * the same assets. Reciprocal of loler→puwer.
     *
     * coshh-lev: LEV fans, motors, and extraction machinery are work
     * equipment subject to PUWER. The two inspections are frequently
     * carried out together on manufacturing sites. InternalLinks
     * explicitly links COSHH LEV on this page.
     */
    relatedServices: ["loler-inspections", "coshh-lev-inspections"],
  },

  "coshh-lev-inspections": {
    /*
     * COSHH LEV produces a specific LEV Thorough Examination Report.
     * The report content (airflow measurements, static pressure readings)
     * is explicitly described in the on-page FAQ.
     */
    serviceOutput: [
      {
        name: "LEV Thorough Examination Report",
        description:
          "Written report of the LEV thorough examination including airflow measurements, static pressure readings, system performance data, and remedial recommendations as required under COSHH Regulation 9.",
      },
    ],
    audience: [
      "Duty Holders",
      "Health and Safety Managers",
      "Facilities Managers",
    ],
    heroImage: "/images/COSSH/hero.webp",
    /*
     * S.I. 2002/2677 — Control of Substances Hazardous to Health
     * Regulations 2002. Regulation 9 is cited directly in the FAQ.
     */
    additionalType: "https://www.legislation.gov.uk/uksi/2002/2677/contents",
    knowsAbout: [
      "Control of Substances Hazardous to Health Regulations 2002",
      "Local Exhaust Ventilation Thorough Examination",
      "LEV Airflow Measurement",
      "Static Pressure Testing",
      "Fume Extraction Inspection",
      "Dust Extraction System Testing",
      "Welding Fume Extraction Examination",
      "Spray Booth Ventilation Testing",
    ],
    /*
     * puwer: LEV systems are machinery subject to PUWER. A site with
     * LEV equipment will typically require PUWER inspection of the same
     * plant. InternalLinks explicitly links PUWER on this page.
     */
    relatedServices: ["puwer-inspections"],
  },

  "report-writing": {
    /*
     * The report-writing service itself produces the Report of
     * Thorough Examination as its primary deliverable. The on-page
     * FAQ explicitly states: "Our reports are fully accepted by the
     * HSE. They include all the information required under the relevant
     * regulations — PSSR, LOLER, WAHR, PUWER, and COSHH."
     *
     * No additionalType is set here: this service spans all five
     * regulations and no single legislation.gov.uk URI applies.
     */
    serviceOutput: [
      {
        name: "Report of Thorough Examination",
        description:
          "Comprehensive, legally compliant written inspection report documenting all findings, defect classifications, and remedial recommendations, suitable for presentation to the HSE if required.",
      },
    ],
    audience: [
      "Duty Holders",
      "Health and Safety Managers",
      "Facilities Managers",
    ],
    heroImage: "/images/Report Writing/Tele.webp",
    knowsAbout: [
      "Report of Thorough Examination",
      "Written Scheme of Examination",
      "Statutory Inspection Documentation",
      "HSE Compliance Reporting",
      "Defect Classification",
      "Remedial Action Timescales",
    ],
    /*
     * All five inspection services — backed by the FAQ explicitly naming
     * PSSR, LOLER, WAHR, PUWER, and COSHH as the regulations covered
     * by this reporting service.
     */
    relatedServices: [
      "pssr-inspections",
      "loler-inspections",
      "wahr-inspections",
      "puwer-inspections",
      "coshh-lev-inspections",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Geographic coverage radius                                          */
/*                                                                      */
/*  GeoCircle centred on the physical base address (Irlam, M44 6AB).   */
/*  Coordinates match SiteSchema, LocalBusinessLocationSchema, and      */
/*  the geo property already declared on the ProfessionalService node.  */
/*                                                                      */
/*  50 000 m (50 km) captures the North West primary service area:      */
/*  Manchester → Liverpool ~50 km, Manchester → Preston ~50 km.        */
/*  This is appended to areaServed on every Service entity (all page    */
/*  types). It is NOT added to LocalBusiness nodes — those use named    */
/*  Place/AdministrativeArea which is already specific enough.          */
/* ------------------------------------------------------------------ */

const SERVICE_GEO_CIRCLE = {
  "@type": "GeoCircle",
  geoMidpoint: {
    "@type": "GeoCoordinates",
    latitude: 53.4438,
    longitude: -2.4213,
  },
  geoRadius: 50000,
} as const;

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceSlug,
  regulationName,
  locationName,
  locationSlug,
  locationCounty,
  linkToLocalBusiness = false,
}: ServiceSchemaProps) {
  const url = locationSlug
    ? `${BUSINESS.url}/${serviceSlug}-${locationSlug}`
    : `${BUSINESS.url}/${serviceSlug}`;

  /*
   * Pull per-service enrichment. If a future service slug is added
   * without a corresponding entry, fall back to a safe minimal shape
   * rather than throwing.
   */
  const enrichment: ServiceEnrichment = SERVICE_ENRICHMENT[serviceSlug] ?? {
    serviceOutput: [
      {
        name: `${serviceName} Report`,
        description: `Comprehensive written report of thorough examination findings under ${regulationName}.`,
      },
    ],
    audience: ["Duty Holders", "Health and Safety Managers"],
    heroImage: "/images/HERO.webp",
    knowsAbout: [serviceName, regulationName],
    relatedServices: [],
  };

  /*
   * serviceOutput — array when the service produces multiple documents
   * (PSSR), single object when there is one deliverable. Both forms
   * are valid JSON-LD.
   */
  const serviceOutput =
    enrichment.serviceOutput.length === 1
      ? { "@type": "Report", ...enrichment.serviceOutput[0] }
      : enrichment.serviceOutput.map((o) => ({ "@type": "Report", ...o }));

  /*
   * areaServed — named geographic entities PLUS the GeoCircle radius.
   *
   * The named entities vary by page type:
   *
   *   Service-location page WITH county (recommended):
   *     [Place(locationName), AdministrativeArea(locationCounty)]
   *     Matches exactly what LocalBusinessLocationSchema declares on the
   *     same page, keeping both entities geographically consistent.
   *
   *   Service-location page WITHOUT county:
   *     [Place(locationName)]
   *     Single-element array to allow GeoCircle to be appended uniformly.
   *
   *   Service hub page (no location):
   *     [Manchester, Greater Manchester, North West England, UK]
   *
   * SERVICE_GEO_CIRCLE is appended to all three variants:
   *   - Provides a machine-readable geographic radius for "near me" signals
   *   - Centred on the physical base (Irlam, M44 6AB)
   *   - 50 000 m covers the primary North West service area
   *   - Applied to Service entities only — NOT to LocalBusiness nodes
   *     (LocalBusinessLocationSchema already uses specific named Places)
   */
  const areaServed = [
    ...(locationName
      ? locationCounty
        ? [
            { "@type": "Place", name: locationName },
            { "@type": "AdministrativeArea", name: locationCounty },
          ]
        : [{ "@type": "Place", name: locationName }]
      : [
          { "@type": "Place", name: "Manchester" },
          { "@type": "AdministrativeArea", name: "Greater Manchester" },
          { "@type": "AdministrativeArea", name: "North West England" },
          { "@type": "Country", name: "United Kingdom" },
        ]),
    SERVICE_GEO_CIRCLE,
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,

    /* ---- Core identity ---- */
    name: locationName ? `${serviceName} in ${locationName}` : serviceName,
    serviceType: serviceName,
    description: `${serviceDescription} Compliance with ${regulationName}.`,

    /*
     * additionalType — legislation.gov.uk URI for the governing regulation.
     * Provides an external vocabulary reference for the regulatory framework
     * that mandates this service. Not set for report-writing, which spans
     * all five regulations.
     */
    ...(enrichment.additionalType
      ? { additionalType: enrichment.additionalType }
      : {}),

    /*
     * image — ImageObject referencing the hero image rendered on the
     * service page. Derived from the same path used by ServiceHero.tsx,
     * ensuring schema and visible content are always in sync.
     */
    image: {
      "@type": "ImageObject",
      url: `${BUSINESS.url}${enrichment.heroImage}`,
      contentUrl: `${BUSINESS.url}${enrichment.heroImage}`,
    },

    /* ---- Provider link (root entity — never inline) ---- */
    provider: {
      "@id": `${BUSINESS.url}/#organization`,
    },

    /* ---- Tangible output(s) of the service ---- */
    serviceOutput,

    /* ---- Who this service is for ---- */
    /*
     * "audience" is the correct schema.org property for Service.
     * "serviceAudience" is NOT a valid schema.org property and has
     * been deliberately omitted — it would be flagged as an unknown
     * property by structured data validators.
     */
    audience: enrichment.audience.map((audienceType) => ({
      "@type": "Audience",
      audienceType,
    })),

    /*
     * knowsAbout — regulatory and technical topics explicitly referenced
     * in page copy, FAQs, and section headings for this service.
     * Note: schema.org defines knowsAbout primarily for Person/Organization;
     * it is inherited by Service via Thing and provides useful topic signals
     * beyond what serviceType alone conveys.
     */
    knowsAbout: enrichment.knowsAbout,

    /* ---- Geographic coverage ---- */
    areaServed,

    /* ---- Canonical page URL ---- */
    url,

    /*
     * termsOfService — links to the site's terms and conditions page,
     * which documents the legal terms under which all inspection services
     * are provided. The page exists at /terms-and-conditions and is
     * linked in the site footer.
     */
    termsOfService: `${BUSINESS.url}/terms-and-conditions`,

    /* ---- Commercial offer (no price — not shown on page) ---- */
    offers: {
      "@type": "Offer",
      /*
       * itemOffered self-references this Service entity, creating a
       * bidirectional link: Offer → Service and Service → Offer.
       */
      itemOffered: {
        "@id": `${url}/#service`,
      },
      availability: "https://schema.org/InStock",
      /*
       * Offer areaServed mirrors the Service areaServed to maintain
       * consistency within the same schema block.
       */
      areaServed,
      seller: {
        "@id": `${BUSINESS.url}/#organization`,
      },
    },

    /* ---- Potential action: request a quote via the contact page ---- */
    potentialAction: {
      "@type": "ContactAction",
      name: "Request a Free Quote",
      target: `${BUSINESS.url}/contact-us`,
    },

    /*
     * isRelatedTo — services that share overlapping equipment coverage
     * or regulatory scope, explicitly backed by:
     *   (a) InternalLinks / crossLinks rendered on the page, AND
     *   (b) documented equipment overlap in page FAQs or descriptions.
     *
     * References use the canonical service hub @id, not location-specific
     * instances, since the relationship is between service types.
     * Only includes pairs where BOTH conditions are met — no inferred
     * or speculative relationships.
     */
    ...(enrichment.relatedServices.length > 0
      ? {
          isRelatedTo: enrichment.relatedServices.map((slug) => ({
            "@id": `${BUSINESS.url}/${slug}/#service`,
          })),
        }
      : {}),

    /* ---- Local business link (service-location pages only) ---- */
    /*
     * availableAtOrFrom connects this Service entity to the
     * LocalBusiness entity declared on the same page by
     * LocalBusinessLocationSchema. Together they form the chain:
     *
     *   Service → availableAtOrFrom → LocalBusiness
     *                                 → parentOrganization → ProfessionalService
     *
     * This property is only emitted when linkToLocalBusiness is true,
     * which is only passed by ServiceLocationPage — the only template
     * that renders both ServiceSchema and LocalBusinessLocationSchema
     * at the same URL. See the prop comment for the full constraint.
     */
    ...(linkToLocalBusiness
      ? { availableAtOrFrom: { "@id": `${url}/#localbusiness` } }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
