/* ------------------------------------------------------------------ */
/*  County hub data                                                      */
/*  Provides county-level context for service hub pages:                */
/*    /loler-inspections-greater-manchester                              */
/*    /pssr-inspections-lancashire  etc.                                 */
/* ------------------------------------------------------------------ */

import { LOCATIONS } from "./locations";

export interface CountyData {
  name: string;
  slug: string;
  region: string;
  /** Short phrase describing the county economy */
  economicProfile: string;
  /** 2-3 sentence intro describing the county's industrial make-up */
  description: string;
  /** A notable stat or context sentence used in hero subtitles */
  keyFact: string;
  /** Industries prominent across this county (used in content hooks) */
  primaryIndustries: string[];
}

export const COUNTIES: CountyData[] = [
  {
    name: "Greater Manchester",
    slug: "greater-manchester",
    region: "North West",
    economicProfile: "Northern England's largest urban economy",
    description:
      "Greater Manchester is home to over 120,000 registered businesses, spanning advanced manufacturing, logistics, construction, healthcare, and food production. Trafford Park alone — Europe's largest industrial estate — concentrates more than 1,400 businesses and 40,000 employees in a single location. The combined economic output of Greater Manchester's ten boroughs creates a higher density of statutory inspection obligations than anywhere else in the North West.",
    keyFact: "Home to Trafford Park — Europe's largest industrial estate",
    primaryIndustries: ["manufacturing", "logistics", "healthcare", "construction", "food-beverage"],
  },
  {
    name: "Merseyside",
    slug: "merseyside",
    region: "North West",
    economicProfile: "Port city and automotive manufacturing hub",
    description:
      "Merseyside combines major port operations at Liverpool2 — one of Europe's deepest container terminals — with automotive manufacturing at JLR Halewood, pharmaceutical production, and a growing logistics and warehousing sector. The concentration of lifting-intensive port operations, high-volume chemical handling on the Mersey estuary, and large NHS trusts creates statutory inspection demand across LOLER, PSSR, and COSHH regulations.",
    keyFact: "Liverpool2 handles over 900,000 containers per year",
    primaryIndustries: ["logistics", "manufacturing", "healthcare", "engineering"],
  },
  {
    name: "Lancashire",
    slug: "lancashire",
    region: "North West",
    economicProfile: "Aerospace, advanced manufacturing, and defence",
    description:
      "Lancashire is defined by its aerospace and defence sector — BAE Systems at Warton and Samlesbury, Safran Nacelles at Burnley, and a dense supply chain of precision engineering firms throughout the county. Preston's Roman Way Industrial Estate, Burnley's Heasandford, and Blackburn's Whitebirk Industrial Estate collectively represent some of the UK's highest concentrations of autoclave-based composite manufacturing and CNC machining, all generating significant PSSR, PUWER, and COSHH LEV inspection requirements.",
    keyFact: "BAE Systems employs over 10,000 people across two Lancashire sites",
    primaryIndustries: ["manufacturing", "engineering", "construction", "logistics"],
  },
  {
    name: "Cheshire",
    slug: "cheshire",
    region: "North West",
    economicProfile: "Automotive, nuclear, and chemical manufacturing",
    description:
      "Cheshire's industrial profile is led by Bentley Motors at Crewe, Airbus wing manufacturing at Broughton near Chester, and the UK's nuclear decommissioning cluster at Birchwood Park in Warrington. The county also hosts one of the most concentrated chemical manufacturing corridors in the UK along the Mersey estuary, with Widnes and Runcorn accounting for a significant share of national hazardous process output — creating substantial PSSR, COSHH LEV, and LOLER inspection requirements.",
    keyFact: "Birchwood Park hosts over 165 nuclear sector businesses",
    primaryIndustries: ["manufacturing", "engineering", "logistics", "food-beverage"],
  },
  {
    name: "Cumbria",
    slug: "cumbria",
    region: "North West",
    economicProfile: "Nuclear, defence manufacturing, and port logistics",
    description:
      "Cumbria's economy is anchored by BAE Systems' submarine shipyard at Barrow-in-Furness — the UK's sole facility for nuclear submarine construction — alongside Sellafield nuclear reprocessing and tyre manufacturing at Pirelli's Carlisle facility. The scale and technical complexity of submarine construction creates some of the most demanding LOLER, PSSR, and PUWER inspection environments in the country.",
    keyFact: "BAE Barrow is the UK's only nuclear submarine construction facility",
    primaryIndustries: ["manufacturing", "engineering", "construction", "logistics"],
  },
  {
    name: "Staffordshire",
    slug: "staffordshire",
    region: "West Midlands",
    economicProfile: "Ceramics, advanced manufacturing, and logistics",
    description:
      "Stoke-on-Trent's ceramics heritage — represented by Wedgwood, Portmeirion, and Emma Bridgewater — generates some of the UK's most specific COSHH LEV requirements, with silica dust from clay preparation and kiln operations mandating thorough LEV system testing. The city's Festival Park and Etruria Valley industrial areas have evolved into mixed logistics and manufacturing hubs, adding LOLER, PSSR, and PUWER inspection demand alongside the ceramics sector.",
    keyFact: "Stoke-on-Trent is the world capital of ceramic production",
    primaryIndustries: ["manufacturing", "logistics", "food-beverage"],
  },
];

/* Lookup map: county slug → CountyData */
export const COUNTY_BY_SLUG: Record<string, CountyData> = Object.fromEntries(
  COUNTIES.map((c) => [c.slug, c])
);

/* All county slugs — used in route parsing */
export const COUNTY_SLUGS = COUNTIES.map((c) => c.slug);

/* Get all LOCATIONS entries that belong to a given county */
export function getLocationsForCounty(countyName: string) {
  return LOCATIONS.filter((l) => l.county === countyName);
}
