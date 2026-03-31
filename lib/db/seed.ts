/* ------------------------------------------------------------------ */
/*  Database seed script                                                */
/*  Run with: npx tsx lib/db/seed.ts                                   */
/*                                                                      */
/*  Uses onConflictDoNothing so it is safe to run multiple times.       */
/* ------------------------------------------------------------------ */

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

/* ================================================================== */
/*  1. SERVICES                                                        */
/* ================================================================== */

const SERVICE_DATA = [
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
];

/* ================================================================== */
/*  2. LOCATIONS (50)                                                  */
/* ================================================================== */

const LOCATION_DATA: {
  name: string;
  slug: string;
  county: string;
  region: string;
  latitude: string;
  longitude: string;
  population?: number;
}[] = [
  // Greater Manchester
  { name: "Manchester", slug: "manchester", county: "Greater Manchester", region: "North West", latitude: "53.4808000", longitude: "-2.2426000", population: 553230 },
  { name: "Salford", slug: "salford", county: "Greater Manchester", region: "North West", latitude: "53.4875000", longitude: "-2.2901000", population: 103886 },
  { name: "Trafford", slug: "trafford", county: "Greater Manchester", region: "North West", latitude: "53.4227000", longitude: "-2.3510000", population: 236370 },
  { name: "Stockport", slug: "stockport", county: "Greater Manchester", region: "North West", latitude: "53.4106000", longitude: "-2.1575000", population: 291775 },
  { name: "Bolton", slug: "bolton", county: "Greater Manchester", region: "North West", latitude: "53.5780000", longitude: "-2.4290000", population: 194189 },
  { name: "Bury", slug: "bury", county: "Greater Manchester", region: "North West", latitude: "53.5934000", longitude: "-2.2970000", population: 78723 },
  { name: "Oldham", slug: "oldham", county: "Greater Manchester", region: "North West", latitude: "53.5409000", longitude: "-2.1114000", population: 96555 },
  { name: "Rochdale", slug: "rochdale", county: "Greater Manchester", region: "North West", latitude: "53.6163000", longitude: "-2.1552000", population: 107926 },
  { name: "Tameside", slug: "tameside", county: "Greater Manchester", region: "North West", latitude: "53.4806000", longitude: "-2.0812000", population: 225197 },
  { name: "Wigan", slug: "wigan", county: "Greater Manchester", region: "North West", latitude: "53.5461000", longitude: "-2.6325000", population: 103608 },
  { name: "Irlam", slug: "irlam", county: "Greater Manchester", region: "North West", latitude: "53.4432000", longitude: "-2.4307000", population: 19755 },
  { name: "Eccles", slug: "eccles", county: "Greater Manchester", region: "North West", latitude: "53.4833000", longitude: "-2.3344000", population: 38756 },
  { name: "Worsley", slug: "worsley", county: "Greater Manchester", region: "North West", latitude: "53.5044000", longitude: "-2.3800000", population: 11300 },
  { name: "Urmston", slug: "urmston", county: "Greater Manchester", region: "North West", latitude: "53.4486000", longitude: "-2.3522000", population: 41825 },
  { name: "Stretford", slug: "stretford", county: "Greater Manchester", region: "North West", latitude: "53.4409000", longitude: "-2.3086000", population: 46910 },
  { name: "Altrincham", slug: "altrincham", county: "Greater Manchester", region: "North West", latitude: "53.3878000", longitude: "-2.3547000", population: 52419 },
  { name: "Sale", slug: "sale", county: "Greater Manchester", region: "North West", latitude: "53.4235000", longitude: "-2.3222000", population: 55234 },

  // Wider North West
  { name: "Warrington", slug: "warrington", county: "Cheshire", region: "North West", latitude: "53.3900000", longitude: "-2.5970000", population: 210014 },
  { name: "Liverpool", slug: "liverpool", county: "Merseyside", region: "North West", latitude: "53.4084000", longitude: "-2.9916000", population: 496784 },
  { name: "Preston", slug: "preston", county: "Lancashire", region: "North West", latitude: "53.7632000", longitude: "-2.7031000", population: 141818 },
  { name: "Blackburn", slug: "blackburn", county: "Lancashire", region: "North West", latitude: "53.7488000", longitude: "-2.4821000", population: 117963 },
  { name: "Blackpool", slug: "blackpool", county: "Lancashire", region: "North West", latitude: "53.8142000", longitude: "-3.0503000", population: 139305 },
  { name: "Chester", slug: "chester", county: "Cheshire", region: "North West", latitude: "53.1930000", longitude: "-2.8931000", population: 79645 },
  { name: "Crewe", slug: "crewe", county: "Cheshire", region: "North West", latitude: "53.0988000", longitude: "-2.4405000", population: 73000 },
  { name: "Burnley", slug: "burnley", county: "Lancashire", region: "North West", latitude: "53.7890000", longitude: "-2.2403000", population: 73021 },
  { name: "Accrington", slug: "accrington", county: "Lancashire", region: "North West", latitude: "53.7534000", longitude: "-2.3636000", population: 35203 },
  { name: "Chorley", slug: "chorley", county: "Lancashire", region: "North West", latitude: "53.6534000", longitude: "-2.6329000", population: 38250 },
  { name: "Winsford", slug: "winsford", county: "Cheshire", region: "North West", latitude: "53.1942000", longitude: "-2.5232000", population: 30000 },
  { name: "Northwich", slug: "northwich", county: "Cheshire", region: "North West", latitude: "53.2587000", longitude: "-2.5188000", population: 20073 },
  { name: "Macclesfield", slug: "macclesfield", county: "Cheshire", region: "North West", latitude: "53.2587000", longitude: "-2.1257000", population: 52044 },
  { name: "Congleton", slug: "congleton", county: "Cheshire", region: "North West", latitude: "53.1629000", longitude: "-2.2118000", population: 26482 },
  { name: "Knutsford", slug: "knutsford", county: "Cheshire", region: "North West", latitude: "53.3026000", longitude: "-2.3726000", population: 13191 },
  { name: "Wilmslow", slug: "wilmslow", county: "Cheshire", region: "North West", latitude: "53.3274000", longitude: "-2.2309000", population: 24497 },
  { name: "Glossop", slug: "glossop", county: "Derbyshire", region: "East Midlands", latitude: "53.4433000", longitude: "-1.9494000", population: 33340 },

  // Yorkshire & Humber
  { name: "Leeds", slug: "leeds", county: "West Yorkshire", region: "Yorkshire and the Humber", latitude: "53.8008000", longitude: "-1.5491000", population: 793139 },
  { name: "Sheffield", slug: "sheffield", county: "South Yorkshire", region: "Yorkshire and the Humber", latitude: "53.3811000", longitude: "-1.4701000", population: 584853 },
  { name: "Bradford", slug: "bradford", county: "West Yorkshire", region: "Yorkshire and the Humber", latitude: "53.7960000", longitude: "-1.7594000", population: 349561 },
  { name: "Huddersfield", slug: "huddersfield", county: "West Yorkshire", region: "Yorkshire and the Humber", latitude: "53.6458000", longitude: "-1.7850000", population: 162949 },
  { name: "Wakefield", slug: "wakefield", county: "West Yorkshire", region: "Yorkshire and the Humber", latitude: "53.6833000", longitude: "-1.4977000", population: 99251 },
  { name: "Doncaster", slug: "doncaster", county: "South Yorkshire", region: "Yorkshire and the Humber", latitude: "53.5228000", longitude: "-1.1289000", population: 109805 },
  { name: "York", slug: "york", county: "North Yorkshire", region: "Yorkshire and the Humber", latitude: "53.9591000", longitude: "-1.0815000", population: 210618 },

  // East Midlands
  { name: "Stoke-on-Trent", slug: "stoke-on-trent", county: "Staffordshire", region: "West Midlands", latitude: "53.0027000", longitude: "-2.1794000", population: 256375 },
  { name: "Derby", slug: "derby", county: "Derbyshire", region: "East Midlands", latitude: "52.9225000", longitude: "-1.4746000", population: 257174 },
  { name: "Nottingham", slug: "nottingham", county: "Nottinghamshire", region: "East Midlands", latitude: "52.9548000", longitude: "-1.1581000", population: 321500 },
  { name: "Leicester", slug: "leicester", county: "Leicestershire", region: "East Midlands", latitude: "52.6369000", longitude: "-1.1398000", population: 354224 },

  // North East
  { name: "Newcastle", slug: "newcastle", county: "Tyne and Wear", region: "North East", latitude: "54.9783000", longitude: "-1.6178000", population: 300196 },
  { name: "Sunderland", slug: "sunderland", county: "Tyne and Wear", region: "North East", latitude: "54.9061000", longitude: "-1.3811000", population: 174286 },

  // West Midlands
  { name: "Birmingham", slug: "birmingham", county: "West Midlands", region: "West Midlands", latitude: "52.4862000", longitude: "-1.8904000", population: 1141816 },

  // South West / South East
  { name: "Bristol", slug: "bristol", county: "Bristol", region: "South West", latitude: "51.4545000", longitude: "-2.5879000", population: 463400 },
  { name: "London", slug: "london", county: "Greater London", region: "London", latitude: "51.5074000", longitude: "-0.1278000", population: 8982000 },
];

/* ================================================================== */
/*  3. INDUSTRIES (8)                                                  */
/* ================================================================== */

const INDUSTRY_DATA = [
  {
    name: "Manufacturing",
    slug: "manufacturing",
    description: "Heavy and light manufacturing facilities with complex machinery, pressure systems, and lifting equipment requiring regular statutory inspections.",
    painPoint: "Production downtime from equipment failures and HSE enforcement notices can devastate output targets and profitability.",
  },
  {
    name: "Construction",
    slug: "construction",
    description: "Construction sites with cranes, hoists, scaffolding, and other lifting and work at height equipment subject to rigorous inspection schedules.",
    painPoint: "Falls from height and lifting accidents remain the top causes of fatal injuries in construction — compliance is not optional.",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "Hospitals, care homes, and medical facilities with autoclaves, sterilisers, lifting equipment, and ventilation systems requiring thorough examinations.",
    painPoint: "Patient safety and CQC compliance depend on equipment being properly inspected and maintained at all times.",
  },
  {
    name: "Food & Beverage",
    slug: "food-and-beverage",
    description: "Food processing plants, breweries, and commercial kitchens with pressure cookers, steam systems, LEV extraction, and lifting equipment.",
    painPoint: "Food safety audits and environmental health inspections increasingly scrutinise equipment compliance records.",
  },
  {
    name: "Warehousing & Logistics",
    slug: "warehousing-and-logistics",
    description: "Warehouses, distribution centres, and logistics hubs with forklift trucks, pallet racking, goods lifts, and dock levellers.",
    painPoint: "High throughput operations create significant wear on lifting equipment — regular inspections prevent costly accidents and insurance claims.",
  },
  {
    name: "Petrochemical",
    slug: "petrochemical",
    description: "Refineries, chemical plants, and energy facilities with high-pressure systems, hazardous substance controls, and specialist lifting equipment.",
    painPoint: "COMAH and DSEAR regulations add additional layers of compliance beyond standard PSSR and LOLER requirements.",
  },
  {
    name: "Education",
    slug: "education",
    description: "Schools, colleges, and universities with science labs, workshop machinery, LEV systems, and building maintenance equipment.",
    painPoint: "Duty of care to students and staff means statutory inspection compliance is paramount in educational settings.",
  },
  {
    name: "Leisure & Hospitality",
    slug: "leisure-and-hospitality",
    description: "Hotels, leisure centres, gyms, and entertainment venues with lifts, kitchen pressure systems, pool plant, and HVAC equipment.",
    painPoint: "Public-facing businesses face reputational damage alongside legal consequences if equipment compliance lapses.",
  },
];

/* ================================================================== */
/*  4. SERVICE-INDUSTRY MAPPINGS                                       */
/* ================================================================== */

// All inspection services (excluding report-writing) are relevant to most industries
const SERVICE_INDUSTRY_MAP: {
  serviceSlug: string;
  industrySlug: string;
  relevanceNote: string;
}[] = [];

const inspectionServiceSlugs = [
  "pssr-inspections",
  "loler-inspections",
  "wahr-inspections",
  "puwer-inspections",
  "coshh-lev-inspections",
];

const relevanceNotes: Record<string, Record<string, string>> = {
  "pssr-inspections": {
    manufacturing: "Pressure vessels, compressed air systems, and steam boilers in production environments.",
    construction: "Portable compressors, pneumatic tools, and temporary pressure systems on construction sites.",
    healthcare: "Autoclaves, sterilisers, and steam generators in hospital and dental settings.",
    "food-and-beverage": "Pressure cookers, steam ovens, boilers, and CO2 systems in food production.",
    "warehousing-and-logistics": "Compressed air systems for pneumatic conveying and packaging operations.",
    petrochemical: "High-pressure vessels, heat exchangers, and reactor systems in chemical processing.",
    education: "Autoclaves in science departments and steam systems in older school buildings.",
    "leisure-and-hospitality": "Pool plant pressure systems, commercial kitchen steam equipment, and boiler rooms.",
  },
  "loler-inspections": {
    manufacturing: "Overhead cranes, jib cranes, hoists, and lifting accessories on production floors.",
    construction: "Tower cranes, mobile cranes, hoists, and all lifting accessories on construction sites.",
    healthcare: "Patient hoists, ceiling track hoists, and goods lifts in hospitals and care homes.",
    "food-and-beverage": "Goods lifts, pallet trucks with lifting attachments, and chain hoists in processing areas.",
    "warehousing-and-logistics": "Forklift trucks, dock levellers, goods lifts, and pallet racking systems.",
    petrochemical: "Heavy-lift cranes, pipe-handling equipment, and specialist lifting gear in refineries.",
    education: "Workshop hoists, stage rigging, and goods lifts in schools and universities.",
    "leisure-and-hospitality": "Passenger lifts, stage rigging, gym equipment with lifting mechanisms.",
  },
  "wahr-inspections": {
    manufacturing: "Access platforms, safety harnesses, and roof edge protection on factory buildings.",
    construction: "Scaffolding, MEWPs, ladders, and fall arrest systems on every construction project.",
    healthcare: "Roof access equipment and building maintenance platforms on hospital buildings.",
    "food-and-beverage": "Mezzanine edge protection, access platforms for silo tops, and roof maintenance systems.",
    "warehousing-and-logistics": "Racking access ladders, mezzanine edge protection, and roof maintenance equipment.",
    petrochemical: "Tank-top access platforms, scaffolding for turnarounds, and confined space access equipment.",
    education: "Roof access systems and maintenance platforms on school and university buildings.",
    "leisure-and-hospitality": "Building maintenance access equipment, climbing wall systems, and high-level lighting rigs.",
  },
  "puwer-inspections": {
    manufacturing: "CNC machines, lathes, mills, presses, conveyors, and all production machinery.",
    construction: "Circular saws, bench grinders, core drills, and power tools used on site.",
    healthcare: "Laboratory equipment, workshop machinery, and building maintenance tools.",
    "food-and-beverage": "Slicers, mixers, conveyors, packaging machines, and all food processing equipment.",
    "warehousing-and-logistics": "Conveyor systems, banding machines, shrink-wrap machines, and powered dock equipment.",
    petrochemical: "Pumps, compressors, agitators, and process control equipment in chemical plants.",
    education: "Workshop machinery including lathes, mills, saws, and 3D printers in DT departments.",
    "leisure-and-hospitality": "Commercial kitchen equipment, gym machines, pool plant machinery, and HVAC systems.",
  },
  "coshh-lev-inspections": {
    manufacturing: "Welding fume extraction, dust collection systems, and solvent vapour extraction.",
    construction: "Dust suppression systems and temporary LEV for confined space work.",
    healthcare: "Fume cupboards in pathology labs, pharmacy extract systems, and dental extraction units.",
    "food-and-beverage": "Flour dust extraction, cooking fume extraction, and CO2 handling ventilation.",
    "warehousing-and-logistics": "Vehicle exhaust extraction in loading bays and dust extraction in packing areas.",
    petrochemical: "Chemical fume extraction, vapour recovery systems, and emergency ventilation.",
    education: "Fume cupboards in science labs, woodworking extraction, and art department spray booths.",
    "leisure-and-hospitality": "Kitchen extraction systems, swimming pool chemical handling ventilation, and spa areas.",
  },
};

for (const svcSlug of inspectionServiceSlugs) {
  for (const ind of INDUSTRY_DATA) {
    SERVICE_INDUSTRY_MAP.push({
      serviceSlug: svcSlug,
      industrySlug: ind.slug,
      relevanceNote:
        relevanceNotes[svcSlug]?.[ind.slug] ?? `${svcSlug.replace(/-/g, " ")} services for the ${ind.name.toLowerCase()} sector.`,
    });
  }
}

/* ================================================================== */
/*  5. LOCAL INTROS (5 samples: Manchester/Salford/Liverpool/Leeds/    */
/*     Birmingham x PSSR)                                              */
/* ================================================================== */

const LOCAL_INTRO_DATA: {
  serviceSlug: string;
  locationSlug: string;
  content: string;
}[] = [
  {
    serviceSlug: "pssr-inspections",
    locationSlug: "manchester",
    content:
      "<p>Manchester's thriving industrial and commercial landscape means thousands of businesses rely on pressure systems every day — from steam boilers in textile heritage buildings to modern compressed air installations in Trafford Park's manufacturing units.</p><p>As a Manchester-based inspection company, Safe Lee Inspection & Consultancy understands the unique challenges facing local businesses. Our engineers regularly carry out PSSR inspections across the city centre, Northern Quarter, Ancoats, and all surrounding areas, providing fast turnaround times and local expertise.</p><p>Whether you operate a commercial kitchen in Deansgate, a laboratory in the Oxford Road corridor, or a manufacturing facility in East Manchester, we ensure your pressure systems comply with the Pressure Systems Safety Regulations 2000.</p>",
  },
  {
    serviceSlug: "pssr-inspections",
    locationSlug: "salford",
    content:
      "<p>Salford's economy has undergone a remarkable transformation in recent years, but many businesses — from traditional manufacturing in Salford Quays to modern facilities at MediaCityUK — still rely on pressure systems that require regular statutory inspection.</p><p>Safe Lee Inspection & Consultancy is based just minutes from Salford in neighbouring Irlam, making us ideally placed to provide responsive PSSR inspection services across the borough. Our engineers cover Salford city centre, Eccles, Swinton, Walkden, and all surrounding areas.</p><p>We work with businesses of all sizes in Salford to ensure their pressure vessels, pipework, and protective devices comply with PSSR 2000, minimising risk and keeping your operations running safely.</p>",
  },
  {
    serviceSlug: "pssr-inspections",
    locationSlug: "liverpool",
    content:
      "<p>Liverpool's diverse economy — spanning manufacturing along the Mersey corridor, food and beverage production in Speke, and commercial operations across the city — generates significant demand for professional pressure systems inspections.</p><p>Safe Lee Inspection & Consultancy provides PSSR inspection services throughout Liverpool and Merseyside. Despite being based in Manchester, our engineers regularly work across Liverpool, from the docks and industrial estates in Bootle and Aintree to commercial premises in the city centre and along the East Lancs corridor.</p><p>We help Liverpool businesses maintain compliance with the Pressure Systems Safety Regulations 2000, delivering thorough examinations and detailed reports that meet all statutory requirements.</p>",
  },
  {
    serviceSlug: "pssr-inspections",
    locationSlug: "leeds",
    content:
      "<p>Leeds is one of the UK's largest economies outside London, with a strong manufacturing and engineering heritage that continues today. Businesses across the city operate pressure systems ranging from commercial boilers in the city's iconic office buildings to industrial pressure vessels in the manufacturing districts of Hunslet and Stourton.</p><p>Safe Lee Inspection & Consultancy extends our PSSR inspection services to Leeds and the wider West Yorkshire area. Our competent engineers carry out thorough examinations of pressure systems to ensure full compliance with PSSR 2000, providing detailed written schemes and reports.</p><p>From food processing in Cross Green to engineering firms in Armley, we support Leeds businesses in meeting their statutory inspection obligations efficiently and affordably.</p>",
  },
  {
    serviceSlug: "pssr-inspections",
    locationSlug: "birmingham",
    content:
      "<p>Birmingham — the UK's second city — has a massive industrial base with thousands of businesses operating pressure systems across manufacturing, automotive, food production, and commercial sectors. The city's engineering heritage means many older pressure installations require particularly careful examination.</p><p>Safe Lee Inspection & Consultancy provides PSSR inspection services to businesses throughout Birmingham and the West Midlands. Our engineers travel to Aston, Tyseley, Fort Dunlop, and all major industrial areas to carry out thorough examinations of pressure vessels, safety valves, and associated pipework.</p><p>Whether your business is in the Jewellery Quarter, Digbeth, or the wider Birmingham conurbation, we ensure your pressure systems meet the requirements of the Pressure Systems Safety Regulations 2000.</p>",
  },
];

/* ================================================================== */
/*  6. FAQs — 10 general + 3 per service                              */
/* ================================================================== */

const GENERAL_FAQS = [
  {
    question: "How often do statutory inspections need to be carried out?",
    answer: "Inspection frequency depends on the type of equipment and the relevant regulations. LOLER thorough examinations are typically every 6 or 12 months. PSSR intervals are set by the written scheme. LEV testing under COSHH must be at least every 14 months. We advise on the correct schedule for your specific equipment.",
    sortOrder: 1,
  },
  {
    question: "What are the legal requirements for workplace inspections?",
    answer: "UK health and safety legislation — including PSSR 2000, LOLER 1998, PUWER 1998, WAHR 2005, and COSHH 2002 — requires employers to ensure certain equipment is thoroughly examined by a competent person at prescribed intervals. Failure to comply can result in enforcement notices, fines, and prosecution by the HSE.",
    sortOrder: 2,
  },
  {
    question: "What should I expect during an inspection?",
    answer: "Our engineer will arrive at the agreed time and carry out a visual and functional examination of the equipment, checking for defects, wear, damage, and correct operation. We discuss findings on site and follow up with a detailed written report including any defects and recommendations.",
    sortOrder: 3,
  },
  {
    question: "How long does a typical inspection take?",
    answer: "Duration varies by equipment type and quantity. A single item like a forklift or pressure vessel might take 30 minutes to an hour. A full site inspection covering multiple pieces could take a full day. We provide time estimates when you book.",
    sortOrder: 4,
  },
  {
    question: "What areas do you cover?",
    answer: "We are based in Irlam, Manchester, and regularly carry out inspections across Greater Manchester, Lancashire, Cheshire, Merseyside, and the wider North West. We also undertake nationwide projects by arrangement.",
    sortOrder: 5,
  },
  {
    question: "Who carries out the inspections?",
    answer: "All inspections are carried out by our experienced, qualified engineers. Our team includes competent persons as defined under the relevant regulations, with extensive experience across multiple industry sectors.",
    sortOrder: 6,
  },
  {
    question: "What happens if my equipment fails an inspection?",
    answer: "If a serious defect is found, the equipment must be taken out of service until repaired. We will explain the issue, classify the defect by severity, and provide clear recommendations and timescales for remedial action in our written report.",
    sortOrder: 7,
  },
  {
    question: "Do you provide inspection reminders?",
    answer: "Yes. We maintain records of all inspections carried out and proactively contact you when your next inspection is due, helping you stay on top of your compliance obligations without having to track dates yourself.",
    sortOrder: 8,
  },
  {
    question: "Can you inspect equipment on weekends or outside normal hours?",
    answer: "Yes. We understand that shutting down equipment during operating hours can be costly. We can arrange inspections outside normal working hours, at weekends, or during planned shutdowns to minimise disruption to your operations.",
    sortOrder: 9,
  },
  {
    question: "How do I book an inspection?",
    answer: "You can book by calling us on 0161 706 2022 or by filling out the contact form on our website. We will discuss your requirements, provide a quote, and arrange a convenient date for the inspection.",
    sortOrder: 10,
  },
];

const SERVICE_FAQS: {
  serviceSlug: string;
  question: string;
  answer: string;
  sortOrder: number;
}[] = [
  // PSSR
  {
    serviceSlug: "pssr-inspections",
    question: "What is a written scheme of examination for pressure systems?",
    answer: "A written scheme is a document prepared by a competent person that specifies the parts of the pressure system to be examined, the nature of each examination, and the maximum intervals between examinations. It is a legal requirement under PSSR 2000.",
    sortOrder: 1,
  },
  {
    serviceSlug: "pssr-inspections",
    question: "Does PSSR apply to portable gas cylinders?",
    answer: "The regulations apply to portable gas cylinders in certain circumstances, but the main focus is on installed pressure systems with a relevant fluid at a pressure greater than 0.5 bar above atmospheric. We can advise whether your specific equipment falls within scope.",
    sortOrder: 2,
  },
  {
    serviceSlug: "pssr-inspections",
    question: "Can you write a written scheme of examination for us?",
    answer: "Yes. Our competent engineers can prepare a written scheme of examination tailored to your specific pressure system, detailing all components to be examined, the type of examination required, and recommended intervals.",
    sortOrder: 3,
  },
  // LOLER
  {
    serviceSlug: "loler-inspections",
    question: "What is the difference between a LOLER thorough examination and a service?",
    answer: "A thorough examination is a statutory inspection carried out by a competent person to assess the safety of the equipment. A service is maintenance work to keep equipment in good working order. Both are important but serve different purposes — a service does not replace the need for a thorough examination.",
    sortOrder: 1,
  },
  {
    serviceSlug: "loler-inspections",
    question: "Do slings and shackles need LOLER inspections?",
    answer: "Yes. All lifting accessories including chain slings, wire rope slings, webbing slings, shackles, eyebolts, and lifting beams must be thoroughly examined under LOLER 1998, typically at intervals not exceeding 6 months.",
    sortOrder: 2,
  },
  {
    serviceSlug: "loler-inspections",
    question: "Is a forklift attachment inspection different from a forklift inspection?",
    answer: "Yes. The forklift truck itself requires a thorough examination as lifting equipment. Any attachments (such as fork extensions, rotating clamps, or man-baskets) are separate lifting accessories and require their own thorough examinations, often at different intervals.",
    sortOrder: 3,
  },
  // WAHR
  {
    serviceSlug: "wahr-inspections",
    question: "How often should scaffolding be inspected?",
    answer: "Scaffolding must be inspected before first use, after any event likely to have affected its stability (such as adverse weather), and at intervals not exceeding 7 days while it remains in use. Each inspection must be recorded.",
    sortOrder: 1,
  },
  {
    serviceSlug: "wahr-inspections",
    question: "Do safety harnesses need formal inspection?",
    answer: "Yes. Safety harnesses, lanyards, and fall arrest devices must be inspected before each use by the wearer and must undergo a formal thorough examination by a competent person at intervals determined by the manufacturer and the conditions of use — typically every 6 to 12 months.",
    sortOrder: 2,
  },
  {
    serviceSlug: "wahr-inspections",
    question: "What records do I need to keep for work at height equipment?",
    answer: "You must keep a record of each inspection including the date, the person carrying out the inspection, the equipment inspected, and the outcome. Records of formal thorough examinations by a competent person should be retained until the next examination is carried out.",
    sortOrder: 3,
  },
  // PUWER
  {
    serviceSlug: "puwer-inspections",
    question: "Does PUWER apply to hand tools?",
    answer: "Yes. PUWER 1998 applies to all work equipment, including hand tools. Employers must ensure hand tools are suitable for the task, maintained in good condition, and used only by people who have received adequate training and instruction.",
    sortOrder: 1,
  },
  {
    serviceSlug: "puwer-inspections",
    question: "What is the difference between PUWER and LOLER?",
    answer: "PUWER covers all work equipment and focuses on general safety, suitability, and maintenance. LOLER specifically covers lifting operations and lifting equipment, with additional requirements for thorough examination. Equipment used for lifting is subject to both sets of regulations.",
    sortOrder: 2,
  },
  {
    serviceSlug: "puwer-inspections",
    question: "Do I need to keep an equipment register?",
    answer: "While not explicitly required by PUWER, maintaining an equipment register is strongly recommended and considered best practice. It helps you track inspection dates, maintenance history, and ensures nothing is missed from your compliance programme.",
    sortOrder: 3,
  },
  // COSHH LEV
  {
    serviceSlug: "coshh-lev-inspections",
    question: "What measurements are taken during an LEV test?",
    answer: "LEV testing involves face velocity measurements at capture points, static pressure readings throughout the duct system, checks on airflow direction and patterns, assessment of filter condition and efficiency, and verification that the system provides adequate control of airborne contaminants.",
    sortOrder: 1,
  },
  {
    serviceSlug: "coshh-lev-inspections",
    question: "Can you test LEV systems that were installed by someone else?",
    answer: "Yes. We can test and examine any LEV system regardless of who installed it. We assess the system against the current HSG258 guidance and COSHH requirements, and provide recommendations if the system is not performing to the required standard.",
    sortOrder: 2,
  },
  {
    serviceSlug: "coshh-lev-inspections",
    question: "What is HSG258 and why does it matter?",
    answer: "HSG258 is the HSE's guidance document on controlling airborne contaminants at work. It sets out best practice for the design, testing, and maintenance of LEV systems. Following HSG258 ensures your LEV testing meets the standards expected by the HSE during any inspection or enforcement action.",
    sortOrder: 3,
  },
  // Report Writing
  {
    serviceSlug: "report-writing",
    question: "What format are your inspection reports delivered in?",
    answer: "Reports are delivered as professional PDF documents via email. They can also be provided in hard copy on request. Each report includes a unique reference number for your records and is formatted to meet the requirements of the relevant statutory regulations.",
    sortOrder: 1,
  },
  {
    serviceSlug: "report-writing",
    question: "Can you produce reports for inspections carried out by others?",
    answer: "In certain circumstances, yes. If you have inspection data and findings from a competent engineer, we can produce a formal report. However, the competent person who carried out the examination must review and sign off the report, as they hold responsibility for the findings.",
    sortOrder: 2,
  },
  {
    serviceSlug: "report-writing",
    question: "How long should I keep inspection reports?",
    answer: "You should keep inspection reports until at least the next inspection report is produced. In practice, we recommend retaining all reports for a minimum of 5 years, as the HSE may request historical records during an investigation. Some insurers also require extended retention periods.",
    sortOrder: 3,
  },
];

/* ================================================================== */
/*  7. REVIEWS (3 Google reviews)                                      */
/* ================================================================== */

const REVIEW_DATA = [
  {
    author: "James H.",
    rating: 5,
    reviewText:
      "Excellent service from start to finish. Lee was thorough, professional, and explained everything clearly during our LOLER inspection. Reports were turned around quickly and were very detailed. Highly recommend Safe Lee for any statutory inspection work.",
    source: "Google",
  },
  {
    author: "Sarah M.",
    rating: 5,
    reviewText:
      "We needed PSSR inspections across multiple sites at short notice and Safe Lee delivered every time. Reliable, knowledgeable, and great communication throughout. They genuinely care about keeping workplaces safe. Will definitely use again.",
    source: "Google",
  },
  {
    author: "David R.",
    rating: 5,
    reviewText:
      "Fantastic experience working with Safe Lee. Our LEV testing was carried out efficiently with minimal disruption to our operations. The report was comprehensive and easy to understand. A really professional outfit — wouldn't hesitate to recommend.",
    source: "Google",
  },
];

/* ================================================================== */
/*  SEED RUNNER                                                        */
/* ================================================================== */

async function seed() {
  console.log("🌱 Starting database seed...\n");

  // ---- Services ----
  console.log("Seeding services...");
  for (const svc of SERVICE_DATA) {
    await db
      .insert(schema.services)
      .values(svc)
      .onConflictDoNothing({ target: schema.services.slug });
  }
  console.log(`  ✓ ${SERVICE_DATA.length} services`);

  // ---- Locations ----
  console.log("Seeding locations...");
  for (const loc of LOCATION_DATA) {
    await db
      .insert(schema.locations)
      .values(loc)
      .onConflictDoNothing({ target: schema.locations.slug });
  }
  console.log(`  ✓ ${LOCATION_DATA.length} locations`);

  // ---- Industries ----
  console.log("Seeding industries...");
  for (const ind of INDUSTRY_DATA) {
    await db
      .insert(schema.industries)
      .values(ind)
      .onConflictDoNothing({ target: schema.industries.slug });
  }
  console.log(`  ✓ ${INDUSTRY_DATA.length} industries`);

  // ---- Service-Industry mappings ----
  console.log("Seeding service-industry mappings...");
  // Fetch IDs for services and industries
  const dbServices = await db.select().from(schema.services);
  const dbIndustries = await db.select().from(schema.industries);
  const svcIdMap = new Map(dbServices.map((s) => [s.slug, s.id]));
  const indIdMap = new Map(dbIndustries.map((i) => [i.slug, i.id]));

  let mappingCount = 0;
  for (const mapping of SERVICE_INDUSTRY_MAP) {
    const serviceId = svcIdMap.get(mapping.serviceSlug);
    const industryId = indIdMap.get(mapping.industrySlug);
    if (serviceId && industryId) {
      await db
        .insert(schema.serviceIndustries)
        .values({
          serviceId,
          industryId,
          relevanceNote: mapping.relevanceNote,
        })
        .onConflictDoNothing();
      mappingCount++;
    }
  }
  console.log(`  ✓ ${mappingCount} service-industry mappings`);

  // ---- Local Intros ----
  console.log("Seeding local intros...");
  const dbLocations = await db.select().from(schema.locations);
  const locIdMap = new Map(dbLocations.map((l) => [l.slug, l.id]));

  let introCount = 0;
  for (const intro of LOCAL_INTRO_DATA) {
    const serviceId = svcIdMap.get(intro.serviceSlug);
    const locationId = locIdMap.get(intro.locationSlug);
    if (serviceId && locationId) {
      await db
        .insert(schema.localIntros)
        .values({
          serviceId,
          locationId,
          content: intro.content,
        })
        .onConflictDoNothing();
      introCount++;
    }
  }
  console.log(`  ✓ ${introCount} local intros`);

  // ---- FAQs ----
  console.log("Seeding FAQs...");

  // General FAQs (no service/location/industry)
  for (const faq of GENERAL_FAQS) {
    // Check if FAQ already exists by question text
    const existing = await db
      .select()
      .from(schema.faqs)
      .where(eq(schema.faqs.question, faq.question))
      .limit(1);
    if (existing.length === 0) {
      await db.insert(schema.faqs).values({
        question: faq.question,
        answer: faq.answer,
        sortOrder: faq.sortOrder,
      });
    }
  }

  // Service-specific FAQs
  for (const faq of SERVICE_FAQS) {
    const serviceId = svcIdMap.get(faq.serviceSlug);
    if (!serviceId) continue;
    const existing = await db
      .select()
      .from(schema.faqs)
      .where(eq(schema.faqs.question, faq.question))
      .limit(1);
    if (existing.length === 0) {
      await db.insert(schema.faqs).values({
        question: faq.question,
        answer: faq.answer,
        serviceId,
        sortOrder: faq.sortOrder,
      });
    }
  }
  console.log(
    `  ✓ ${GENERAL_FAQS.length} general FAQs + ${SERVICE_FAQS.length} service FAQs`
  );

  // ---- Reviews ----
  console.log("Seeding reviews...");
  for (const review of REVIEW_DATA) {
    const existing = await db
      .select()
      .from(schema.reviews)
      .where(eq(schema.reviews.author, review.author))
      .limit(1);
    if (existing.length === 0) {
      await db.insert(schema.reviews).values(review);
    }
  }
  console.log(`  ✓ ${REVIEW_DATA.length} reviews`);

  console.log("\n✅ Seed complete!");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  });
