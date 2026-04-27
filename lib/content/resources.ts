/* ------------------------------------------------------------------ */
/*  Resources / Knowledge-base content registry                         */
/*                                                                      */
/*  Each article is a `Resource` record: page-level metadata + ordered  */
/*  array of structured content blocks. Blocks render to a curated set  */
/*  of HTML primitives via ArticlePage, which keeps typography and SEO  */
/*  consistent across the hub.                                          */
/*                                                                      */
/*  Adding a new article: append to RESOURCES below. The article hub    */
/*  index, the sitemap, and the dynamic route all pick it up            */
/*  automatically — no other wiring needed.                             */
/* ------------------------------------------------------------------ */

/** Inline HTML allowed in `p` and `callout` blocks for internal links + emphasis. */
export type ContentBlock =
  | { type: "p"; html: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; tone: "info" | "warning"; html: string }
  | { type: "cta"; text: string; href: string };

export interface Resource {
  /** URL slug — joined to `/resources/` to form the page URL. */
  slug: string;
  /** Page <title> portion (template appends brand). Should be keyword-first, < 60 chars. */
  title: string;
  /** SERP meta description, < 155 chars. */
  description: string;
  /** Card excerpt for the hub page — one sentence, no period drift. */
  excerpt: string;
  /** ISO date — used for article schema datePublished. */
  publishedAt: string;
  /** ISO date — schema dateModified. Equal to publishedAt for first publish. */
  updatedAt: string;
  /** Tag for grouping (e.g. "Compliance", "Inspection guides"). */
  category: string;
  /** Approximate read time in minutes. Shown on the card and the article. */
  readMinutes: number;
  /** Slugs of services this article most directly supports. Used for cross-links. */
  relatedServiceSlugs: string[];
  /** Ordered article body. */
  content: ContentBlock[];
}

/* ------------------------------------------------------------------ */
/*  Articles                                                            */
/* ------------------------------------------------------------------ */

const LOLER_VS_PUWER_VS_PSSR: Resource = {
  slug: "loler-vs-puwer-vs-pssr",
  title: "LOLER vs PUWER vs PSSR Explained",
  description:
    "What's the difference between LOLER, PUWER and PSSR inspections? A plain-English guide for UK duty holders, with examples and inspection intervals.",
  excerpt:
    "Three regulations, three different scopes, one common goal — keeping people safe. A duty holder's guide to which one applies to your equipment.",
  publishedAt: "2026-04-26",
  updatedAt: "2026-04-26",
  category: "Compliance basics",
  readMinutes: 6,
  relatedServiceSlugs: ["loler-inspections", "puwer-inspections", "pssr-inspections"],
  content: [
    {
      type: "p",
      html: "If you operate work equipment in the UK, three sets of regulations almost certainly apply to your business: <strong>LOLER 1998</strong>, <strong>PUWER 1998</strong> and <strong>PSSR 2000</strong>. They overlap in places and people often confuse them, but each one targets a distinct risk and triggers a different inspection regime. This guide explains where the boundaries fall, with examples drawn from the kit we examine every week.",
    },

    { type: "h2", text: "Quick summary" },
    {
      type: "p",
      html: "<strong>PUWER</strong> covers all work equipment — anything used at work, from bench drills to forklifts. <strong>LOLER</strong> covers the subset of work equipment used for <em>lifting</em> — cranes, hoists, slings, MEWPs. <strong>PSSR</strong> covers <em>pressure systems</em> — vessels, pipework, protective devices for steam, gas or fluids stored under pressure.",
    },
    {
      type: "p",
      html: "A single piece of equipment can be in scope of more than one regulation. A vacuum-lifting beam used to move steel sheets, for example, is work equipment (PUWER), is used for lifting (LOLER), and contains a pressure circuit (PSSR).",
    },

    { type: "h2", text: "PUWER 1998 — the baseline for all work equipment" },
    {
      type: "p",
      html: "The Provision and Use of Work Equipment Regulations 1998 set the floor. They require employers to make sure work equipment is suitable for its intended use, maintained in safe working condition, used by trained operators, and inspected at suitable intervals to detect deterioration.",
    },
    {
      type: "p",
      html: "PUWER does not prescribe a fixed inspection interval. The duty holder must decide intervals based on a risk assessment — informed by manufacturer guidance, intensity of use, environment, and the consequences of failure. For most production machinery, an annual <a href=\"/puwer-inspections\" class=\"text-sl-red underline\">PUWER thorough examination</a> is the practical default; high-risk or heavily-used equipment is examined more often.",
    },
    {
      type: "ul",
      items: [
        "Bench drills, lathes, milling machines, presses",
        "Conveyors, mixers, packaging lines",
        "Hand tools, ladders, racking",
        "Vehicles used at work (with road-traffic exceptions)",
      ],
    },

    { type: "h2", text: "LOLER 1998 — lifting equipment and lifting operations" },
    {
      type: "p",
      html: "The Lifting Operations and Lifting Equipment Regulations 1998 sit on top of PUWER for any equipment used to lift loads — including the load-attaching accessories. Where PUWER asks 'is the machine safe?', LOLER asks 'is the lifting operation planned and supervised, and the equipment fit for that lift?'",
    },
    {
      type: "p",
      html: "LOLER prescribes statutory minimum inspection intervals. A <a href=\"/loler-inspections\" class=\"text-sl-red underline\">thorough examination</a> by a competent person is required:",
    },
    {
      type: "ul",
      items: [
        "Every 6 months for equipment used to lift people (passenger lifts, MEWPs, cradles)",
        "Every 6 months for accessories (slings, chains, eyebolts)",
        "Every 12 months for other lifting equipment (overhead cranes, fork-lift trucks, vehicle lifts)",
        "After substantial repair or modification, and after exceptional events such as a shock loading",
      ],
    },
    {
      type: "callout",
      tone: "info",
      html: "<strong>Reports of thorough examination</strong> must be issued promptly, and copies kept for the working life of the equipment plus two years. The HSE will ask to see them if they investigate an incident.",
    },

    { type: "h2", text: "PSSR 2000 — pressure systems" },
    {
      type: "p",
      html: "The Pressure Systems Safety Regulations 2000 cover relevant fluids stored under pressure: steam, compressed air, gases, and any liquid that exceeds 0.5 bar above atmospheric. The headline duty is the <strong>Written Scheme of Examination</strong> — a documented engineering plan, certified by a competent person, that names which parts of the system must be examined and when.",
    },
    {
      type: "p",
      html: "Without a Written Scheme, the system cannot legally be operated. Once the Scheme is in place, examinations follow its prescribed intervals — often 14 months for a typical air receiver, but always engineered to the specific system. Our <a href=\"/pssr-inspections\" class=\"text-sl-red underline\">PSSR examinations</a> include both Scheme drafting and recurring examination.",
    },

    { type: "h2", text: "Worked examples" },
    { type: "h3", text: "Forklift truck" },
    {
      type: "p",
      html: "A forklift is work equipment (PUWER), and is used to lift loads (LOLER). It needs a 12-monthly LOLER thorough examination. Its forks and any attached accessories are also LOLER scope. The truck's hydraulic circuit is generally below the PSSR threshold, so PSSR does not apply.",
    },
    { type: "h3", text: "Compressed-air receiver feeding a workshop" },
    {
      type: "p",
      html: "The receiver is a pressure system: PSSR applies. A Written Scheme of Examination must name the vessel, the pipework, and the protective devices (safety valve, pressure switch). The compressor itself is PUWER scope and may be examined at the same time for convenience.",
    },
    { type: "h3", text: "Vacuum lifter on a gantry crane" },
    {
      type: "p",
      html: "Three regimes: PUWER for the lifter as work equipment; LOLER for the lifting beam, the gantry crane, and any slings or hooks used; PSSR for the vacuum generator if it operates above the pressure threshold. All three sets of records need to align.",
    },

    { type: "h2", text: "Frequency at a glance" },
    {
      type: "ul",
      items: [
        "PUWER — risk-based interval, typically 12 months for production machinery",
        "LOLER — 6 months for people-lifting and accessories; 12 months for other lifting equipment",
        "PSSR — interval is set by the Written Scheme; commonly 14 to 26 months for air receivers, shorter for steam",
      ],
    },

    { type: "h2", text: "Where competent-person examinations fit in" },
    {
      type: "p",
      html: "All three regimes require the examiner to be a 'competent person' — someone with appropriate practical and theoretical knowledge of the equipment, free from operational pressure to overlook defects. In practice, this is an external statutory inspection engineer. We carry the certifications, the indemnity cover, and the independence the regulations expect, and our reports are accepted by the HSE and major insurers.",
    },
    {
      type: "cta",
      text: "Discuss your inspection schedule with us",
      href: "/contact-us",
    },
  ],
};

const INSPECTION_FREQUENCY_GUIDE: Resource = {
  slug: "inspection-frequency-guide",
  /* Title kept under 35 chars so the layout template (+36 chars) keeps the
   * full <title> under Google's 70-char SERP truncation limit. */
  title: "Inspection Frequency Guide",
  description:
    "Statutory inspection intervals for LOLER, PUWER, PSSR, COSHH LEV and WAHR — the dates the HSE expects, and what triggers an early re-examination.",
  excerpt:
    "Statutory intervals at a glance — how often each piece of equipment must be examined, and the events that bring an inspection forward.",
  publishedAt: "2026-04-26",
  updatedAt: "2026-04-26",
  category: "Compliance basics",
  readMinutes: 5,
  relatedServiceSlugs: [
    "loler-inspections",
    "puwer-inspections",
    "pssr-inspections",
    "coshh-lev-inspections",
    "wahr-inspections",
  ],
  content: [
    {
      type: "p",
      html: "Inspection frequency under UK health and safety law is not a single number — it depends on the regulation, the equipment, and how it is used. This guide lists the statutory minimums under each of the five regimes we work with, and the events that trigger an early re-examination.",
    },

    { type: "h2", text: "LOLER 1998 — lifting equipment" },
    {
      type: "ul",
      items: [
        "Equipment used to lift people: every 6 months",
        "Lifting accessories (slings, chains, eyebolts, shackles): every 6 months",
        "Other lifting equipment (cranes, fork-lift trucks, vehicle lifts): every 12 months",
        "After installation, substantial repair, modification, or exceptional event",
      ],
    },
    {
      type: "p",
      html: "The intervals are statutory maxima — your insurer or risk assessment may require shorter intervals. A <a href=\"/loler-inspections\" class=\"text-sl-red underline\">LOLER thorough examination</a> must be carried out by a competent person and the report supplied promptly to the duty holder.",
    },

    { type: "h2", text: "PUWER 1998 — work equipment" },
    {
      type: "p",
      html: "PUWER does not prescribe a fixed interval. Regulation 6 requires inspections at \"suitable intervals\" determined by risk assessment. In practice:",
    },
    {
      type: "ul",
      items: [
        "Production machinery: typically every 12 months",
        "High-risk or heavily-used equipment (presses, mills, large saws): every 6 months is common",
        "After installation, after exposure to conditions liable to cause deterioration, and following modifications",
      ],
    },

    { type: "h2", text: "PSSR 2000 — pressure systems" },
    {
      type: "p",
      html: "PSSR intervals are set by the system's <a href=\"/resources/written-scheme-of-examination\" class=\"text-sl-red underline\">Written Scheme of Examination</a>, not by the regulation itself. Common engineered intervals:",
    },
    {
      type: "ul",
      items: [
        "Compressed-air receivers: 26 months internal / 26 months external is typical",
        "Steam boilers: shorter intervals, often 14 months — set in the Scheme",
        "Pipework and protective devices: included in the Scheme alongside the vessel",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      html: "Operating a pressure system without a current Written Scheme is an offence. If you've inherited a system without one, it must be drafted and examined before normal operation can continue.",
    },

    { type: "h2", text: "COSHH 2002 — Local Exhaust Ventilation (LEV)" },
    {
      type: "p",
      html: "Regulation 9 of COSHH 2002 requires LEV systems to be subjected to a <a href=\"/coshh-lev-inspections\" class=\"text-sl-red underline\">thorough examination and test</a> at least every 14 months. Some processes have shorter prescribed intervals — for example certain blasting and grinding operations require six-monthly examination.",
    },

    { type: "h2", text: "WAHR 2005 — height-safety equipment" },
    {
      type: "p",
      html: "Personal fall-protection equipment falls under the Work at Height Regulations 2005 and is also covered by LOLER where it is used to lower a person. Practical intervals:",
    },
    {
      type: "ul",
      items: [
        "Harnesses, lanyards, fall arrest blocks: at least every 12 months, more often in heavy use",
        "Pre-use checks by the user every shift",
        "Detailed periodic inspection by a competent person — see <a href=\"/wahr-inspections\" class=\"text-sl-red underline\">our WAHR inspection service</a>",
      ],
    },

    { type: "h2", text: "Triggers for an early examination" },
    {
      type: "p",
      html: "All five regimes share a set of common triggers that bring an inspection forward of the scheduled date:",
    },
    {
      type: "ul",
      items: [
        "After substantial repair, modification, or refurbishment",
        "After installation in a new location",
        "After an exceptional event — shock loading, fire, flood, collision",
        "When the report from the previous examination required a re-examination at a shorter interval",
        "If a defect is reported by the user or detected in routine maintenance",
      ],
    },

    { type: "h2", text: "Building a schedule" },
    {
      type: "p",
      html: "Most clients consolidate their statutory examinations into a single annual visit, with shorter-interval items (lifting accessories, people-lifting equipment, certain LEV systems) revisited mid-year. We will set up and manage the schedule for you, including reminder dates and pre-examination checklists.",
    },
    {
      type: "cta",
      text: "Get a tailored inspection schedule",
      href: "/contact-us",
    },
  ],
};

const WRITTEN_SCHEME_OF_EXAMINATION: Resource = {
  slug: "written-scheme-of-examination",
  /* Title kept under 35 chars (see frequency-guide note for the rule). */
  title: "Written Scheme of Examination",
  description:
    "What goes in a PSSR Written Scheme of Examination, who can certify it, and how to keep it valid. Practical guide for UK duty holders.",
  excerpt:
    "A pressure system cannot legally be operated without a current Written Scheme. Here's what one looks like, and how we draft them.",
  publishedAt: "2026-04-26",
  updatedAt: "2026-04-26",
  category: "Pressure systems",
  readMinutes: 7,
  relatedServiceSlugs: ["pssr-inspections"],
  content: [
    {
      type: "p",
      html: "Under the Pressure Systems Safety Regulations 2000, no relevant pressure system may be operated without a current <strong>Written Scheme of Examination</strong>. The Scheme is the engineering document that defines what gets examined, how, and how often. This guide walks through the contents and explains the practicalities of getting one in place.",
    },

    { type: "h2", text: "What is a relevant pressure system?" },
    {
      type: "p",
      html: "A relevant pressure system stores or processes a relevant fluid above 0.5 bar gauge. \"Relevant fluids\" include steam, compressed or liquefied gas (including air above the threshold), and any liquid which would change to a gas if released. Vacuum systems below atmospheric are out of scope.",
    },

    { type: "h2", text: "What the Scheme must contain" },
    {
      type: "p",
      html: "Regulation 8 sets the minimum content. A complete Scheme names every protective device and every part of the system whose failure could cause danger, the type of examination for each, the maximum interval between examinations, and the nature of any preparation required before examination.",
    },
    {
      type: "ol",
      items: [
        "<strong>Identification of the system</strong> — owner, location, schematic, design parameters (pressure, temperature, fluid).",
        "<strong>Listed parts</strong> — vessels, pipework, valves, gauges, safety relief devices. Each item identified by tag number.",
        "<strong>Examination type</strong> for each part — internal, external, or both; with or without pressure testing; visual or NDT.",
        "<strong>Interval</strong> for each examination, justified against the system's duty and condition.",
        "<strong>Pre-examination preparation</strong> — isolation, draining, cooling, opening of inspection covers.",
        "<strong>Protective device settings</strong> — set pressures of safety valves and trips.",
        "<strong>Identification of the competent person</strong> certifying the Scheme.",
      ],
    },

    { type: "h2", text: "Who can certify it" },
    {
      type: "p",
      html: "The Scheme must be drawn up or certified by a <strong>competent person</strong> as defined in the regulations — someone with the practical and theoretical knowledge to examine the system, sufficient independence from day-to-day operation, and the resources (test equipment, NDT capability) to back the recommendation. In practice this is an external <a href=\"/pssr-inspections\" class=\"text-sl-red underline\">PSSR inspection engineer</a>.",
    },
    {
      type: "callout",
      tone: "info",
      html: "Drafting and certifying the Scheme are the same engineering exercise — we visit the site, walk the system, photograph and tag the parts, then draft a Scheme that we are willing to sign as competent person. There is no separate \"writer\" and \"certifier\".",
    },

    { type: "h2", text: "How long it takes" },
    {
      type: "p",
      html: "For a typical compressed-air installation — a receiver, distribution pipework, isolation valves and a safety valve — site survey and drafting take half a day. The first examination follows immediately, and the Scheme is in force from the date the certified document is issued.",
    },
    {
      type: "p",
      html: "Larger systems (steam plant, multiple receivers, process pipework) take longer to schematize but the principles do not change.",
    },

    { type: "h2", text: "Keeping the Scheme current" },
    {
      type: "p",
      html: "The Scheme is a living document. It must be reviewed and re-issued whenever:",
    },
    {
      type: "ul",
      items: [
        "The system is materially altered — new vessels, repiping, change of fluid",
        "Operating conditions change — higher pressures, hotter service",
        "An examination reveals deterioration that warrants a shorter interval",
        "Ownership transfers (the new owner is the duty holder for compliance)",
      ],
    },

    { type: "h2", text: "Common pitfalls" },
    {
      type: "ul",
      items: [
        "Assuming a manufacturer's commissioning document is the Scheme — it isn't",
        "Examining only the vessel and missing the protective devices, which are equally in scope",
        "Letting the interval drift past the certified date \"because we'll do it next visit\" — this lapses the Scheme",
        "Buying a second-hand vessel without checking that an in-date Scheme transfers with it",
      ],
    },

    { type: "h2", text: "What happens at the examination" },
    {
      type: "p",
      html: "On the date set by the Scheme, our engineer attends with isolation paperwork agreed in advance. Each named part is examined in line with the Scheme — internal where required, external always. Defects are recorded with photographs; corrective actions and a re-examination date are issued in the report.",
    },
    {
      type: "p",
      html: "Where defects affect immediate safety, we issue a notification under Regulation 14 — the system must not be returned to service until the defect is remedied.",
    },

    {
      type: "cta",
      text: "Get a Written Scheme drafted for your system",
      href: "/contact-us",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Registry                                                            */
/* ------------------------------------------------------------------ */

export const RESOURCES: Resource[] = [
  LOLER_VS_PUWER_VS_PSSR,
  INSPECTION_FREQUENCY_GUIDE,
  WRITTEN_SCHEME_OF_EXAMINATION,
];

export const RESOURCE_BY_SLUG: Record<string, Resource> = Object.fromEntries(
  RESOURCES.map((r) => [r.slug, r])
);

/** Pick the article (if any) most relevant to a given service slug. */
export function findResourcesForService(serviceSlug: string): Resource[] {
  return RESOURCES.filter((r) => r.relatedServiceSlugs.includes(serviceSlug));
}
