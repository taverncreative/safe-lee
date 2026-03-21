/* ------------------------------------------------------------------ */
/*  Static service data — used for seeding + fallback content          */
/* ------------------------------------------------------------------ */

export const SERVICE_SEED = [
  {
    name: "PSSR Inspections",
    slug: "pssr-inspections",
    shortName: "PSSR",
    regulationName: "Pressure Systems Safety Regulations 2000",
    description:
      "Comprehensive pressure systems examinations ensuring compliance with PSSR 2000. We inspect pressure vessels, pipework, protective devices, and associated systems to protect your workforce and maintain legal compliance.",
    metaDescription:
      "Professional PSSR inspections and pressure systems safety examinations. Ensure compliance with Pressure Systems Safety Regulations 2000. Serving Manchester and the North West.",
    icon: "Gauge",
    sortOrder: 1,
  },
  {
    name: "LOLER Inspections",
    slug: "loler-inspections",
    shortName: "LOLER",
    regulationName:
      "Lifting Operations and Lifting Equipment Regulations 1998",
    description:
      "Thorough examinations of lifting equipment under LOLER 1998. We inspect cranes, hoists, lifts, slings, and all lifting accessories to ensure they are safe for continued use.",
    metaDescription:
      "Expert LOLER inspections for lifting equipment. Thorough examinations under LOLER 1998 for cranes, hoists, lifts, and lifting accessories. Manchester and North West coverage.",
    icon: "ArrowUpFromLine",
    sortOrder: 2,
  },
  {
    name: "WAHR Inspections",
    slug: "wahr-inspections",
    shortName: "WAHR",
    regulationName: "Work at Height Regulations 2005",
    description:
      "Inspections of work at height equipment under WAHR 2005. We examine scaffolding, ladders, harnesses, guardrails, and fall arrest systems to prevent falls — the leading cause of workplace fatalities.",
    metaDescription:
      "WAHR inspections for work at height equipment. Expert examinations of scaffolding, ladders, harnesses, and fall protection under Work at Height Regulations 2005.",
    icon: "HardHat",
    sortOrder: 3,
  },
  {
    name: "PUWER Inspections",
    slug: "puwer-inspections",
    shortName: "PUWER",
    regulationName:
      "Provision and Use of Work Equipment Regulations 1998",
    description:
      "Detailed inspections of work equipment under PUWER 1998. We assess machinery, power tools, and all work equipment for safety, suitability, and maintenance compliance.",
    metaDescription:
      "Professional PUWER inspections for work equipment. Comprehensive assessments under PUWER 1998 for machinery, tools, and equipment safety. Serving Manchester and beyond.",
    icon: "Wrench",
    sortOrder: 4,
  },
  {
    name: "COSHH LEV Inspections",
    slug: "coshh-lev-inspections",
    shortName: "COSHH LEV",
    regulationName:
      "Control of Substances Hazardous to Health Regulations 2002",
    description:
      "Local Exhaust Ventilation (LEV) testing and thorough examinations under COSHH 2002. We ensure your extraction systems effectively control hazardous substances and protect worker health.",
    metaDescription:
      "COSHH LEV inspections and local exhaust ventilation testing. Thorough examinations under COSHH 2002 to ensure effective hazardous substance control. Manchester and North West.",
    icon: "Wind",
    sortOrder: 5,
  },
  {
    name: "Report Writing",
    slug: "report-writing",
    shortName: "Reports",
    regulationName: "Various Regulations",
    description:
      "Professional inspection report writing services. We produce clear, comprehensive, and legally compliant reports for all types of statutory inspections and thorough examinations.",
    metaDescription:
      "Professional inspection report writing services. Clear, comprehensive, and legally compliant reports for PSSR, LOLER, WAHR, PUWER, and COSHH inspections.",
    icon: "FileText",
    sortOrder: 6,
  },
] as const;

/** Services that get pSEO location pages (report-writing excluded) */
export const PSEO_SERVICE_SLUGS = [
  "pssr-inspections",
  "loler-inspections",
  "wahr-inspections",
  "puwer-inspections",
  "coshh-lev-inspections",
] as const;
