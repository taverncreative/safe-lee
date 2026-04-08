/* ------------------------------------------------------------------ */
/*  Composite intro generator — 250–350 word fallback content for      */
/*  service-location pages that lack a handwritten LOCAL_INTRO.        */
/*                                                                      */
/*  v2 — Content differentiation upgrade:                              */
/*  - Composable regulatory fragments (3×3 variants) replace single   */
/*    monolithic strings that repeated verbatim across all locations.  */
/*  - Industry bridge sentences have 3 variants per industry-service  */
/*    pair, selected by a per-component hash.                          */
/*  - 6 opening and 5 closing templates (was 3 / 3).                  */
/*  - Local signal injection uses locationData.keyAreas[0].           */
/*  - 3 para-2 structure variants break "adds further demand" pattern.*/
/*  - Each sentence-group picks from its own sub-hash so variety     */
/*    compounds across page — no two locations follow the same flow.  */
/* ------------------------------------------------------------------ */

import type { LocationEnrichment } from "@/lib/content/location-data";
import type { LocationIndustry } from "@/lib/content/location-industries";

/* ------------------------------------------------------------------ */
/*  Deterministic multi-slot hash                                       */
/*  slot prevents two adjacent components picking the same sub-index   */
/* ------------------------------------------------------------------ */

function pickSlot<T>(items: T[], seed: string, slot: number): T {
  let hash = slot * 2654435761; // Knuth multiplicative hash seed per slot
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return items[Math.abs(hash) % items.length];
}

/* ------------------------------------------------------------------ */
/*  SERVICE_REGULATORY_FRAGMENTS                                        */
/*  Each service has 3 sentence pools (obligation / scope / signal).   */
/*  Para 3 composes one from each pool — 27 possible combinations per  */
/*  service instead of the previous 1.                                 */
/* ------------------------------------------------------------------ */

const SERVICE_REGULATORY_FRAGMENTS: Record<
  string,
  { obligation: string[]; scope: string[]; signal: string[] }
> = {
  "pssr-inspections": {
    obligation: [
      "The Pressure Systems Safety Regulations 2000 require any employer operating a pressure system containing a relevant fluid to have a Written Scheme of Examination prepared by a competent person, with thorough examinations carried out at the intervals it specifies.",
      "PSSR 2000 places a direct legal duty on the duty holder — typically the employer — to commission a Written Scheme of Examination before operating a pressure system, and to ensure examinations are carried out by a competent person at the intervals that scheme defines.",
      "Under the Pressure Systems Safety Regulations 2000, no pressure system where failure could cause danger may be operated without a current Written Scheme of Examination and thorough examinations carried out to the schedule it sets out.",
    ],
    scope: [
      "The regulations apply to steam boilers, air receivers, compressors, heat exchangers, autoclaves, and all associated pipework and protective devices.",
      "Within scope are steam boilers, compressed air receivers, compressors, autoclaves, heat exchangers, and all pressure pipework — along with the safety valves and pressure gauges that protect them.",
      "Virtually every system storing or generating significant pressure is captured: from simple workshop air receivers and portable compressors through to industrial steam boilers, process autoclaves, and centralised compressed air networks.",
    ],
    signal: [
      "Where a system fails without a current examination in place, the duty holder faces HSE enforcement action — and in the most serious cases, unlimited fines or prosecution under the Health and Safety at Work Act.",
      "Operating a pressure system with a lapsed scheme or an overdue examination is a strict liability offence. Improvement and prohibition notices are the HSE's first response — prosecution follows where duty holders do not act.",
      "The consequences of non-compliance are not academic. HSE inspectors actively check for Written Schemes during routine visits and can issue immediate prohibition notices preventing further use of the system until compliance is established.",
    ],
  },

  "loler-inspections": {
    obligation: [
      "The Lifting Operations and Lifting Equipment Regulations 1998 require that all lifting equipment used at work is thoroughly examined by a competent person — every six months for equipment used to lift people, and at least every twelve months for all other lifting equipment.",
      "LOLER 1998 imposes a statutory examination duty that routine maintenance does not satisfy: a thorough examination by an independently competent person is required at intervals set by the regulations — six-monthly where the equipment lifts people, annually as a minimum for all other lifting equipment.",
      "Under LOLER 1998, employers cannot discharge their duty by servicing lifting equipment — a separate thorough examination by a competent person, independent of the maintenance team, is required at legally defined intervals.",
    ],
    scope: [
      "Lifting accessories — wire rope slings, chain slings, shackles, and eyebolts — must be examined every six months regardless of how frequently they are used, in addition to the equipment that lifts them.",
      "LOLER covers all equipment used for lifting at work: overhead cranes, hoists, forklifts, passenger lifts, goods lifts, and vehicle tail lifts — and extends equally to every accessory used to attach loads, including slings, hooks, shackles, and eyebolts.",
      "The regulations apply both to the lifting appliance and to every component in the lifting train: slings, shackles, hooks, swivels, and spreader beams all require thorough examination at six-monthly intervals.",
    ],
    signal: [
      "A thorough examination is a distinct, independent professional assessment — not a pre-use check, not a service record. Confusing the two is one of the most common LOLER compliance failures the HSE identifies.",
      "Where lifting equipment fails or causes injury without a current thorough examination on record, the employer faces both regulatory enforcement and the real prospect that their employers' liability insurance will not respond to the claim.",
      "The HSE's statistics on lifting-related fatalities and serious injuries are consistent: inadequate examination or the absence of a competent person's assessment is a recurring factor. The regulations exist precisely because periodic inspection by a qualified eye catches deterioration that daily users miss.",
    ],
  },

  "wahr-inspections": {
    obligation: [
      "The Work at Height Regulations 2005 place a legal duty on employers to prevent falls wherever reasonably practicable. Where work at height cannot be avoided, suitable equipment must be selected, inspected before first use, and examined at suitable intervals by a competent person.",
      "WAHR 2005 requires employers to follow a hierarchy before any work at height begins: avoid it if possible; use collective protection if it cannot be avoided; use personal protection only as a last resort — with all equipment inspected and its condition documented.",
      "Under the Work at Height Regulations 2005, every employer whose workers operate above a level where a fall could cause injury must manage the risk actively, select appropriate equipment, and ensure that equipment is inspected at suitable intervals throughout its use.",
    ],
    scope: [
      "Scaffolding must be inspected before first use, after any event that could affect its stability, and at intervals not exceeding seven days during use. All other work at height equipment — harnesses, lanyards, MEWPs, and fall arrest devices — requires pre-use checks and periodic thorough examination.",
      "The regulations apply to all equipment used at height: scaffolding, mobile elevated work platforms, podium steps, ladders, harnesses, lanyards, fall arrest blocks, safety nets, inertia reels, and every form of edge protection.",
      "WAHR's scope extends well beyond construction — it applies wherever a fall from height could cause injury, which in practice means warehousing mezzanines, manufacturing maintenance platforms, rooftop plant access, and vehicle loading bays as well as scaffolding on building sites.",
    ],
    signal: [
      "Falls from height remain the leading single cause of workplace fatalities in the UK — more than any other category of incident — and HSE enforcement in this area is active and persistent.",
      "The 2016 sentencing guidelines for health and safety offences significantly increased the financial exposure for WAHR breaches, with fines now scaled to organisational turnover and unlimited in cases of serious harm or fatality.",
      "Unlike some areas of health and safety law, WAHR enforcement does not rely on an incident occurring. HSE inspectors who observe uninspected access equipment on a site visit are empowered to issue immediate prohibition notices.",
    ],
  },

  "puwer-inspections": {
    obligation: [
      "The Provision and Use of Work Equipment Regulations 1998 apply to virtually every piece of work equipment provided by an employer — from a portable drill to a fully automated production line. PUWER requires that equipment is suitable for its intended use, maintained in safe condition, and inspected at appropriate intervals where specific risks exist.",
      "PUWER 1998 places a broad, non-delegable duty on employers: any equipment they provide for use at work must be suitable for its purpose, properly maintained, adequately guarded, and — where the nature of the equipment or its operation presents specific risks — inspected with records kept.",
      "Under the Provision and Use of Work Equipment Regulations 1998, employer responsibility for work equipment does not end at purchase. Suitability for the actual task, guarding effectiveness, emergency stop function, and a documented maintenance regime are all ongoing obligations.",
    ],
    scope: [
      "The scope is deliberately wide: it covers everything from a handheld angle grinder to an automated production line. Many employers focus on maintenance schedules and assume this satisfies PUWER, but the regulations require a more structured assessment of suitability, guarding, controls, and maintenance evidence.",
      "PUWER applies equally to fixed machinery, mobile equipment, and hand-held tools — if it is provided for use at work, the regulations apply. Guarding adequacy, control positioning, emergency stop function, and maintenance documentation are all within scope, regardless of industry sector.",
      "The regulations extend beyond obvious industrial machinery. Commercial kitchen equipment, cleaning machines, retail stock-handling equipment, and workshop tools all fall within PUWER's scope — an employer in hospitality faces the same basic obligations as one in heavy manufacturing.",
    ],
    signal: [
      "An uninspected machine that injures a worker creates both immediate civil liability and the real prospect of criminal prosecution. The absence of a PUWER inspection regime is treated by the HSE as evidence of systemic non-compliance rather than an isolated oversight.",
      "Prosecution for PUWER-related injuries is pursued under the Health and Safety at Work Act 1974, with 2016 sentencing guidelines exposing businesses to fines proportionate to annual turnover — and individual managers to personal liability where they knowingly tolerated unsafe conditions.",
      "Insurance outcomes for employers whose workers are injured on uninspected machinery are consistently poor. Liability insurers increasingly require evidence of a formal work equipment inspection programme as a condition of cover, and claims involving uninspected plant are frequently contested.",
    ],
  },

  "coshh-lev-inspections": {
    obligation: [
      "Under the Control of Substances Hazardous to Health Regulations 2002, any Local Exhaust Ventilation system installed to protect workers from airborne hazards must be thoroughly examined and tested at least every fourteen months by a competent person.",
      "COSHH Regulation 9 requires employers to maintain LEV systems in efficient working order — which in practice means a thorough examination and test at intervals not exceeding fourteen months, covering the complete system from capture hood to discharge point.",
      "The COSHH Regulations 2002 place a specific obligation on employers: where LEV is used as a control measure, that system must be thoroughly examined and tested by a competent person at least every fourteen months, with the examination record retained for at least five years.",
    ],
    scope: [
      "Certain high-risk processes — including spray painting with isocyanate paints and some abrasive blasting operations — require more frequent testing. The examination must assess the complete system, and the resulting report must be retained on record.",
      "LEV systems across all sectors fall within scope: welding fume extraction in workshops, spray booths in vehicle bodyshops, dust extraction in woodworking, fume cupboards in laboratories, process ventilation in food manufacturing, and pharmaceutical isolator extraction systems.",
      "The examination must cover the full system — not just a simple airflow reading at the hood. Hood design and capture velocity, ductwork condition and integrity, filter performance, fan output, and the discharge point must all be assessed and documented.",
    ],
    signal: [
      "A system that was performing adequately when installed can have degraded significantly through duct blockage, filter saturation, or fan belt wear — without any visible sign of failure to the people relying on it every day.",
      "The HSE's published data on work-related lung disease makes sobering reading. Occupational exposure to hazardous dusts and fumes via inadequately controlled extraction is one of the largest preventable health burdens in UK industry — an LEV system that appears to be running may be providing far less protection than its users assume.",
      "Fan belt slippage alone can reduce extraction airflow by 40% or more without triggering any alarm or visible sign of failure. Operators working at a system that appears to be running may be receiving no effective protection whatsoever — which is precisely why independent testing at statutory intervals is non-negotiable.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  SERVICE_INDUSTRY_BRIDGE_VARIANTS                                    */
/*  3 sentence variants per industry per service.                      */
/*  Replaces the single-string map that repeated verbatim across all   */
/*  locations sharing that industry.                                   */
/* ------------------------------------------------------------------ */

const SERVICE_INDUSTRY_BRIDGE_VARIANTS: Record<
  string,
  Record<string, string[]>
> = {
  "pssr-inspections": {
    manufacturing: [
      "Manufacturing businesses commonly operate compressed air networks, steam boilers, and process vessels — all of which fall directly within PSSR's scope and require a Written Scheme and thorough examination.",
      "Compressed air systems, steam boilers, and pressurised process vessels are standard equipment across the manufacturing sector, each requiring a Written Scheme of Examination and examination at the intervals it specifies.",
      "Process manufacturing relies on pressure systems at almost every stage — from compressed air driving pneumatic tools to steam boilers serving heat treatment. Every such system requires a competent person's examination at statutory intervals.",
    ],
    "food-beverage": [
      "Food and drink production relies heavily on steam systems for cooking and sterilisation, autoclaves for packaging, and compressed air for pneumatic handling equipment — all of which require PSSR compliance.",
      "Steam systems for cooking and sterilisation, autoclaves for packaging lines, and compressed air networks for pneumatic conveyors are standard in food and drink production — each requiring a Written Scheme and regular examination.",
      "From steam cooking vessels and retort autoclaves to the compressed air systems that drive bottling and canning lines, food and drink manufacturers depend on pressure systems that must be examined at the intervals their Written Schemes specify.",
    ],
    healthcare: [
      "NHS trusts and private healthcare facilities operate autoclaves, sterilisation units, and centralised heating plant that must be examined at statutory intervals under PSSR 2000.",
      "Healthcare settings — hospitals, dental practices, and laboratories — use autoclaves, steam sterilisers, and pressurised heating systems that fall directly within PSSR's scope and require regular competent-person examination.",
      "Hospital autoclaves, sterilisation pressure vessels, and centralised heating boilers are among the most consistently operated pressure systems in any sector — and each requires current Written Schemes and examination records.",
    ],
    logistics: [
      "Logistics and distribution centres use compressed air systems for pneumatic equipment, vehicle tyre inflation bays, and dock leveller systems — all of which fall within PSSR's scope.",
      "Distribution operations depend on compressed air throughout their facilities: pneumatic dock levellers, tyre inflation points, and handling equipment all form pressure systems that must be covered by a Written Scheme of Examination.",
      "From the compressed air systems driving dock levellers to tyre inflation equipment in vehicle maintenance bays, logistics operations carry a PSSR compliance obligation that is frequently underestimated.",
    ],
    construction: [
      "Construction sites use mobile compressors and pressure vessels to power pneumatic tools and equipment, requiring PSSR compliance wherever portable pressure systems are deployed.",
      "Mobile compressors, portable air receivers, and the associated tool networks on construction sites all require PSSR compliance — a portable system is not exempt from the regulations simply because it moves between sites.",
      "Compressed air on construction sites powers everything from nail guns to rock drills, and every compressor and receiver in that network requires a Written Scheme and statutory examination regardless of whether it is owned, hired, or leased.",
    ],
    engineering: [
      "Precision engineering firms operate hydraulic test rigs, autoclave-cured composites, and compressed air networks that all require thorough examination under PSSR.",
      "Engineering workshops depend on compressed air for virtually every process — driving machine tools, actuating clamps, and powering test equipment — creating pressure systems that require Written Schemes and periodic examination.",
      "Hydraulic test rigs, heat treatment autoclaves, and the compressed air infrastructure underpinning CNC and conventional machining all constitute PSSR systems requiring competent-person examination at prescribed intervals.",
    ],
  },

  "loler-inspections": {
    manufacturing: [
      "Manufacturers rely on overhead cranes, jib cranes, and lifting accessories to handle components and tooling throughout production — every one requiring thorough examination at statutory intervals.",
      "Overhead travelling cranes, jib cranes, and the chain blocks and slings used alongside them are standard equipment on manufacturing shop floors — each requiring LOLER thorough examination at defined intervals.",
      "Component handling in manufacturing relies on cranes and hoists that are used hard, every day. LOLER requires each of these to be thoroughly examined by a competent person at intervals that reflect the frequency and nature of their use.",
    ],
    "food-beverage": [
      "Food production and distribution operations use forklifts, reach trucks, and goods lifts daily — all of which require LOLER examinations at least annually, or six-monthly for equipment that carries people.",
      "Forklifts and reach trucks handling palletised ingredients and finished goods in food production are among the most intensively used pieces of lifting equipment in any sector, and LOLER requires thorough examination at least every twelve months.",
      "From the forklifts moving pallets of raw ingredients to the goods lifts serving multi-level production facilities, food and drink manufacturers operate lifting equipment that must be examined under LOLER regardless of its age, condition, or apparent reliability.",
    ],
    logistics: [
      "Distribution and warehousing businesses operate among the highest concentrations of lifting equipment in the economy — forklift fleets, dock levellers, and goods lifts each requiring examination under LOLER 1998.",
      "A typical large distribution centre operates dozens of forklifts, multiple goods lifts, and powered dock levellers — every item a LOLER asset requiring thorough examination at the intervals the regulations specify.",
      "Forklift utilisation in logistics and distribution is among the highest in any sector. LOLER requires each truck to be thoroughly examined at least annually, and at six-monthly intervals if it is ever used to lift a person.",
    ],
    construction: [
      "Construction is the most lifting-intensive environment in any sector — tower cranes, mobile cranes, and construction hoists requiring examination before first use and throughout every project.",
      "Tower cranes, mobile cranes, man-riding hoists, and the slings and hooks used with them must all be thoroughly examined before first use on any construction site, with further examinations required throughout the project as the regulations specify.",
      "Every crane, hoist, and lifting accessory on a construction site is a LOLER asset. Thorough examination before first use and at statutory intervals is not optional — and the consequences of failure on a busy site are severe.",
    ],
    healthcare: [
      "Healthcare facilities rely on patient hoists, bed lifts, and goods lifts that must be thoroughly examined every six months — patient safety and legal compliance both depend on current LOLER certificates.",
      "Patient hoists are among the most safety-critical lifting items in any LOLER asset register — they lift people. LOLER requires thorough examination every six months, and the consequences of failure are not measured in financial terms alone.",
      "From the ceiling track hoists in patient care wards to the bed lifts and goods lifts serving multi-storey hospitals, healthcare premises carry a significant LOLER obligation, with six-monthly examination required for any equipment that lifts or transfers patients.",
    ],
    engineering: [
      "Engineering workshops operate overhead travelling cranes and jib cranes for component handling alongside lifting accessories that are easily overlooked but equally subject to LOLER requirements.",
      "A well-equipped engineering workshop operates overhead cranes, jib cranes, and chains used daily for handling heavy billets, forgings, and finished components — each a LOLER asset requiring annual examination at minimum.",
      "The chain blocks, wire rope slings, and shackles used in engineering workshops are often the most heavily loaded items in the lifting train, and the most commonly overlooked in LOLER compliance programmes.",
    ],
  },

  "wahr-inspections": {
    construction: [
      "Construction is the sector most associated with work at height risk — scaffolding, MEWPs, and personal fall protection all require inspection before use and at regular intervals throughout every project.",
      "Scaffolding on a construction site must be inspected before first use, after any weather event that might have affected stability, and at seven-day intervals throughout. This is a minimum requirement — the duty holder may specify more frequent inspections.",
      "From the tower cranes' access ladders to the edge protection on upper floors, every element of a construction site that involves working above ground level is subject to WAHR — and every item of access equipment must be inspected before use.",
    ],
    manufacturing: [
      "Manufacturing premises use mezzanine floors, elevated conveyors, and rooftop plant access points that all require edge protection, safe access, and regularly inspected equipment for those working above ground level.",
      "Rooftop plant, elevated conveyor maintenance walkways, and the mezzanine levels found in almost every large manufacturing facility all create work at height exposure that WAHR applies to — and that requires competent inspection of the access equipment used.",
      "Maintenance of equipment at height is a daily reality in manufacturing — accessing elevated conveyors, servicing overhead cranes, and maintaining rooftop plant all require inspected access equipment and, where falls are possible, verified personal protection.",
    ],
    logistics: [
      "Warehousing and distribution centres rely on mezzanine floors and high-bay racking systems where fall protection is critical — work at height during routine maintenance and stock operations is unavoidable.",
      "High-bay warehouses create work at height whenever maintenance, racking inspection, or stock management takes a person above floor level. Mezzanine floor edge protection, access equipment, and any personal fall protection must all be inspected under WAHR.",
      "The mezzanine levels and elevated picking stations in modern distribution centres are permanent work at height environments. WAHR applies to the edge protection, access equipment, and any personal fall protection used there — all requiring regular inspection.",
    ],
    healthcare: [
      "Facilities management teams maintaining NHS and private healthcare estates access rooftop plant, raised platforms, and specialist equipment that must comply with WAHR 2005 at every point of use.",
      "Hospital maintenance teams work at height routinely — accessing rooftop plant rooms, servicing elevated services in plant corridors, and using access platforms in clinical areas. Every piece of access equipment they use must be inspected and its condition documented.",
      "WAHR applies throughout a healthcare estate wherever a fall could cause injury — from access to rooftop cooling plant to the maintenance of overhead hoists and patient-handling equipment at height.",
    ],
    engineering: [
      "Engineering workshops use overhead access for crane maintenance, roof repairs, and plant servicing — all situations where WAHR applies and equipment must be inspected by a competent person before use.",
      "Servicing an overhead crane's runway and end-stops, inspecting a rooftop compressor, or maintaining high-level lighting in an engineering workshop all involve work at height — each requiring suitable access equipment that has been inspected.",
      "In an engineering environment, work at height is often maintenance-driven: accessing overhead crane systems, servicing elevated hydraulic reservoirs, or replacing high-level lighting. WAHR applies in every case, and the access equipment used must be inspected.",
    ],
  },

  "puwer-inspections": {
    manufacturing: [
      "Manufacturers operate the broadest range of work equipment of any sector — lathes, milling machines, presses, conveyors, and packaging lines all require PUWER assessment for suitability, guarding, and maintenance.",
      "From conventional lathes and milling machines to high-speed automated packaging lines, manufacturing's equipment register is both wide and varied. PUWER requires each item to be assessed for suitability, guarding effectiveness, control functionality, and maintenance compliance.",
      "A manufacturing shop floor contains equipment at every level of age and automation. PUWER does not distinguish between a 30-year-old lathe and a new CNC machining centre — both require assessment of guarding, emergency stops, and maintenance evidence.",
    ],
    "food-beverage": [
      "Food production equipment — industrial slicers, mixers, filling lines, and packaging machines — requires adequate guarding and accessible emergency stops under PUWER, with inspections proportionate to the risk posed.",
      "Mixing machines, bowl cutters, slicing equipment, and high-speed packaging lines in food production present significant guarding challenges — PUWER requires that guarding is adequate, that it cannot be defeated in normal use, and that emergency stops are accessible from every operator position.",
      "Food manufacturing equipment presents some of the most challenging PUWER scenarios: high-speed blades, powerful mixing mechanisms, and thermal processes all require carefully designed guarding solutions that must be assessed and documented.",
    ],
    logistics: [
      "Logistics operations use conveyor sortation systems, powered dock levellers, automated storage solutions, and vehicle maintenance equipment — all within PUWER's scope.",
      "Powered dock levellers, conveyor systems, and the vehicle maintenance equipment found in logistics and distribution operations are all PUWER assets — requiring assessment of guarding where dangerous parts are exposed, and maintenance evidence for all.",
      "The conveyor sortation systems, automated storage and retrieval equipment, and workshop machinery in modern distribution centres are subject to PUWER regardless of how new or automated they are — the employer's duty to assess and maintain safe work equipment does not reduce as technology advances.",
    ],
    construction: [
      "Construction plant and equipment must meet PUWER requirements for suitability and maintenance — covering concrete mixers, compaction equipment, and powered hand tools alike.",
      "Every powered tool, mixer, compactor, and piece of plant used on a construction site is a PUWER asset. The duty to ensure suitability, maintain safe condition, and inspect where specific risks exist applies to a site compound drill just as it does to a fixed workshop press.",
      "PUWER applies to construction plant that is owned, hired, or leased — the duty to assess suitability and maintain safe condition falls on whoever puts the equipment to use, not on the owner or hirer.",
    ],
    healthcare: [
      "Healthcare engineering teams use workshop machinery, powered hand tools, and specialist equipment that must be assessed under PUWER for safe condition and appropriate guarding.",
      "The workshop machinery used by hospital engineering and maintenance departments — lathes, pillar drills, grinders, and bench saws — is often older equipment that may not meet current guarding standards. PUWER assessment identifies those gaps.",
      "Clinical workshop equipment used in hospital engineering departments is sometimes overlooked in PUWER programmes focused on patient-facing clinical equipment. The regulations apply equally to a workshop lathe in a hospital maintenance facility.",
    ],
    engineering: [
      "Precision engineering firms operate CNC machining centres, grinding equipment, EDM machines, and hydraulic presses requiring PUWER inspection with particular attention to guarding, emergency stops, and maintenance records.",
      "The CNC machining centres, grinding wheels, EDM machines, and hydraulic presses found in precision engineering are among the most seriously hazardous items in any PUWER register — each requiring rigorous assessment of guarding, interlocks, and emergency stop accessibility.",
      "In a precision engineering environment, guarding is often compromised for operational reasons — tooling changes, observation of cutting processes, or process monitoring. PUWER requires that guarding solutions accommodate these operational needs without exposing operators to risk.",
    ],
  },

  "coshh-lev-inspections": {
    manufacturing: [
      "Manufacturing processes generate welding fumes, grinding dust, coolant mist, and chemical vapours that LEV systems must capture at source — ensuring systems perform to specification is a legal requirement under COSHH 2002.",
      "Welding fume extraction, grinding dust collection, and coolant mist removal are LEV systems found on virtually every manufacturing site. COSHH requires each to be tested at least every fourteen months to confirm they are actually capturing what they appear to capture.",
      "Post the 2019 reclassification of all welding fume as a Group 1 carcinogen, extraction requirements for manufacturing welding operations have increased significantly. LEV systems installed before that guidance was issued may no longer meet current standards — testing is the only way to know.",
    ],
    "food-beverage": [
      "Food and drink production creates flour dust, cooking fumes, and ingredient particulates that extraction systems must control — LEV systems in this sector must be tested at least every fourteen months.",
      "Flour dust is one of the most widely recognised occupational sensitisers in the food industry, capable of causing occupational asthma through repeated low-level exposure. LEV systems controlling flour dust must be tested to verify capture efficiency at every point of generation.",
      "From the extraction hoods on bakery mixing bowls to the process ventilation above cooking vessels and the powder dust collection in ingredient handling, food and drink manufacturers depend on LEV systems whose performance must be verified by testing.",
    ],
    engineering: [
      "Precision engineering generates cutting fluid mist, grinding dust, and welding fume that LEV systems must capture before workers are exposed — COSHH testing verifies they still do.",
      "Cutting fluid mist from CNC machining, fine metallic dust from grinding operations, and fume from welding and thermal cutting are the principal airborne hazards in precision engineering. COSHH requires the LEV systems controlling each of these to be tested at statutory intervals.",
      "The extraction systems serving CNC turning centres capture coolant mist that, without effective extraction, accumulates at breathing zone concentrations capable of causing occupational asthma and hypersensitivity pneumonitis. Testing to COSHH standards verifies these systems are still doing that job.",
    ],
    construction: [
      "Construction processes — concrete cutting, welding, and paint application — release hazardous dust and fumes requiring LEV testing at statutory intervals where engineering controls are in use.",
      "Where LEV is used to control silica dust from concrete cutting or stone dressing on construction sites, COSHH requires that system to be tested. Silica dust is one of the most acutely hazardous construction exposures — inadequate extraction control is a serious enforcement priority.",
      "Construction-related LEV systems — whether on-tool extraction for dust control or local exhaust at a fixed cutting station — must be tested under COSHH if they are used to control worker exposure. The portability of the work does not reduce the obligation.",
    ],
    healthcare: [
      "Hospital and laboratory environments use fume cupboards, pharmacy extraction systems, and sterile processing ventilation that must be tested under COSHH 2002 to protect staff from chemical and biological hazards.",
      "Fume cupboards in hospital pharmacies and laboratories are among the most safety-critical LEV systems in any workplace — they protect staff from potent chemical and pharmaceutical exposures on a daily basis. COSHH requires regular testing to confirm face velocity and containment performance.",
      "The extraction systems in hospital sterile services departments, pharmacy aseptic suites, and research laboratories are complex, high-consequence LEV installations. COSHH testing verifies they maintain the containment performance the risk assessment assumes.",
    ],
    "automotive-repair": [
      "Vehicle body shops use spray booths and welding extraction that must maintain precise airflow specifications to protect workers from isocyanate paint fumes — a leading cause of occupational asthma.",
      "Spray booth extraction in vehicle refinishing must maintain downdraft airflow within specific design parameters to protect painters from isocyanate two-pack paints. Any degradation in airflow — even where the fan continues to run — may expose workers to damaging concentrations without visible warning.",
      "Welding extraction arms in vehicle repair workshops need to capture fume at source, before it disperses into the workshop atmosphere. Testing under COSHH verifies that capture velocity at the hood face is sufficient for the welding process being controlled.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Local signal sentences                                              */
/*  Inject a location-specific reference into para 3 using keyAreas    */
/*  and primaryIndustries from locationData.                           */
/* ------------------------------------------------------------------ */

const LOCAL_SIGNAL_TEMPLATES: Record<
  string,
  ((area: string, loc: string) => string)[]
> = {
  "pssr-inspections": [
    (area, loc) =>
      `In ${loc}, businesses across ${area} and the wider industrial network depend on compressed air systems, steam boilers, and pressurised process vessels that must have current Written Schemes and be examined at the intervals those schemes specify.`,
    (area, loc) =>
      `The concentration of industrial activity at ${area} means that PSSR compliance demand in ${loc} is significant — pressure systems here range from small workshop air receivers to large-scale production boilers.`,
    (area, loc) =>
      `Across ${loc}'s commercial and industrial premises — including those at ${area} — pressure systems of varying scale and complexity require Written Schemes of Examination and competent-person examination at statutory intervals.`,
  ],
  "loler-inspections": [
    (area, loc) =>
      `Across ${loc}'s industrial sites — from ${area} to the smaller commercial premises throughout the borough — lifting equipment in daily use must have current thorough examination records under LOLER 1998.`,
    (area, loc) =>
      `The lifting equipment in daily use at ${area} and across ${loc}'s wider business community — forklifts, overhead cranes, goods lifts, and all associated accessories — requires thorough examination at statutory intervals.`,
    (area, loc) =>
      `At ${area} and throughout ${loc}'s commercial and industrial estates, LOLER compliance means thorough examinations carried out at six-monthly intervals for equipment that lifts people and at least annually for all other lifting equipment.`,
  ],
  "wahr-inspections": [
    (area, loc) =>
      `At ${area} and across ${loc}'s industrial and commercial sites, work at height is a daily reality — whether in high-bay warehouses, on construction projects, or during building maintenance — and WAHR applies throughout.`,
    (area, loc) =>
      `In ${loc}, work at height occurs across a wide range of settings beyond construction: the mezzanine levels at ${area}, rooftop plant access across commercial premises, and the elevated maintenance work common to manufacturing and logistics all fall under WAHR 2005.`,
    (area, loc) =>
      `The employers operating from ${area} and across ${loc}'s industrial estates encounter work at height in the course of normal operations — from warehouse picking platforms to rooftop HVAC maintenance — and WAHR requires inspected equipment throughout.`,
  ],
  "puwer-inspections": [
    (area, loc) =>
      `At ${area} and across ${loc}'s industrial and commercial estates, work equipment ranges from manually operated hand tools to fully automated production systems — PUWER 1998 applies to all of it and creates an obligation to assess, maintain, and inspect.`,
    (area, loc) =>
      `The businesses operating from ${area} and throughout ${loc} use work equipment across the full spectrum of complexity. PUWER requires that every item — regardless of age, size, or sector — is suitable for its purpose, properly maintained, and safely guarded.`,
    (area, loc) =>
      `In ${loc}, PUWER applies to the production lines at ${area}, to the workshop machinery in engineering units throughout the borough, and to the hand tools used by maintenance teams across every type of premises.`,
  ],
  "coshh-lev-inspections": [
    (area, loc) =>
      `The businesses operating from ${area} and across ${loc}'s industrial estates use LEV systems to control exposures to welding fume, dust, spray mist, and chemical vapours — each system requiring thorough examination and test at intervals not exceeding fourteen months.`,
    (area, loc) =>
      `In ${loc}, LEV systems at ${area} and the wider industrial network protect workers from a range of airborne hazards. COSHH requires every one of these systems to be tested by a competent person at least every fourteen months.`,
    (area, loc) =>
      `Across ${loc}'s manufacturing, engineering, and processing businesses — including those at ${area} — LEV systems form the primary control measure against hazardous airborne substances, and COSHH testing verifies they are still providing the protection the risk assessment assumes.`,
  ],
};

/* ------------------------------------------------------------------ */
/*  Service delivery sentences — replaces the single "Safe Lee carries */
/*  out thorough examinations..." line that appeared on all 165 pages   */
/* ------------------------------------------------------------------ */

const SERVICE_DELIVERY_SENTENCES: Record<string, string[]> = {
  "pssr-inspections": [
    (loc: string) =>
      `Safe Lee carries out PSSR thorough examinations for ${loc} employers — inspecting pressure vessels, air receivers, compressors, boilers, and all associated protective devices, and issuing written reports that document findings, classify defects by risk, and specify remedial timescales.`,
    (loc: string) =>
      `For ${loc} businesses, Safe Lee provides Written Scheme preparation and PSSR thorough examinations covering the full scope of your pressure systems — with clear reports that specify any defects found and the timescales for addressing them.`,
    (loc: string) =>
      `Safe Lee's PSSR service for ${loc} employers covers every element of the Written Scheme cycle: preparation, thorough examination, defect reporting, and re-examination following any remedial work — producing the documentation you need to demonstrate compliance.`,
  ],
  "loler-inspections": [
    (loc: string) =>
      `Safe Lee carries out LOLER thorough examinations for ${loc} businesses, covering cranes, hoists, forklifts, passenger lifts, goods lifts, and all lifting accessories — providing written reports that classify every defect and specify remedial timescales.`,
    (loc: string) =>
      `For ${loc} employers, Safe Lee provides LOLER thorough examinations of the full lifting equipment inventory — from counterbalance forklifts and overhead cranes to the slings and shackles that are just as subject to the regulations as the machines they serve.`,
    (loc: string) =>
      `Safe Lee's LOLER service in ${loc} covers every item in the lifting equipment register: appliances, accessories, and all equipment used to lift people — with examination records issued promptly and defects classified by risk category.`,
  ],
  "wahr-inspections": [
    (loc: string) =>
      `Safe Lee carries out WAHR inspections for ${loc} businesses, examining scaffolding structures, MEWPs, harnesses, lanyards, fall arrest devices, and edge protection — issuing clear reports on compliance status and any action required.`,
    (loc: string) =>
      `For ${loc} employers, Safe Lee provides competent-person WAHR inspections across the full range of work at height equipment — from scaffolding inspected against TG20 and SG4 standards to personal protective equipment examined for wear and remaining service life.`,
    (loc: string) =>
      `Safe Lee's WAHR inspection service for ${loc} covers scaffolding, mobile access equipment, personal fall protection, and edge protection — producing the written inspection records that WAHR requires and that demonstrate compliance to the HSE.`,
  ],
  "puwer-inspections": [
    (loc: string) =>
      `Safe Lee carries out PUWER inspections for ${loc} employers — assessing guarding effectiveness, emergency stop function, control system safety, equipment condition, and maintenance compliance, with reports that prioritise any remedial actions required.`,
    (loc: string) =>
      `For ${loc} businesses, Safe Lee provides PUWER assessments across the full work equipment register: from fixed production machinery to mobile equipment and hand tools, with practical reports that identify compliance gaps and recommend proportionate solutions.`,
    (loc: string) =>
      `Safe Lee's PUWER inspection service for ${loc} produces detailed reports covering every dimension of the regulations: suitability for intended use, guarding adequacy, control functionality, maintenance evidence, and operator training records.`,
  ],
  "coshh-lev-inspections": [
    (loc: string) =>
      `Safe Lee carries out COSHH LEV examinations and tests for ${loc} businesses — measuring capture velocities, assessing ductwork integrity, testing fan performance, and issuing the statutory examination report that COSHH 2002 requires you to retain.`,
    (loc: string) =>
      `For ${loc} employers, Safe Lee provides thorough COSHH LEV examinations covering the complete system from extraction hood to discharge point — verifying that capture efficiency, duct condition, filter performance, and fan output all meet the original design specification.`,
    (loc: string) =>
      `Safe Lee's LEV testing service for ${loc} businesses goes beyond a simple airflow reading. We assess the entire system against its design intent, document all findings in the statutory examination report, and provide practical guidance where performance has degraded.`,
  ],
} as unknown as Record<string, string[]>;

/* ------------------------------------------------------------------ */
/*  Opening paragraph templates — 6 variants (was 3)                  */
/* ------------------------------------------------------------------ */

const OPENING_TEMPLATES: ((
  svcName: string,
  locName: string,
  county: string
) => string)[] = [
  // 0 — industry breadth lead
  (svcName, locName, county) =>
    `${locName}'s employers span a wide range of sectors, and the need for ${svcName.toLowerCase()} applies across the majority of them. Safe Lee Inspection & Consultancy provides thorough examinations for businesses across ${county} from our base in Irlam, with fast turnaround on both inspections and reports.`,

  // 1 — legal framing lead
  (svcName, locName, county) =>
    `For employers across ${locName} and ${county}, ${svcName.toLowerCase()} carried out by a genuinely competent person is a legal requirement — not an optional service. Safe Lee Inspection & Consultancy delivers that service without the wait times and overhead costs of national inspection corporations.`,

  // 2 — service-first with local knowledge angle
  (svcName, locName, county) =>
    `Safe Lee Inspection & Consultancy provides ${svcName.toLowerCase()} throughout ${locName} and the wider ${county} area. Our engineers understand the specific equipment types and industry sectors that define the local economy, and we schedule inspections around operational requirements to minimise disruption.`,

  // 3 — competence and independence angle
  (svcName, locName, county) =>
    `Not every inspection provider operating in ${locName} has the sector knowledge and technical depth that genuine ${svcName.toLowerCase()} requires. Safe Lee Inspection & Consultancy is an independent business — the engineer carrying out your inspection is the same person whose name appears on the report, with direct accountability for every finding.`,

  // 4 — proactive compliance framing
  (svcName, locName, county) =>
    `Some ${locName} employers only discover their ${svcName.toLowerCase()} gaps during an HSE visit or after an incident. Safe Lee Inspection & Consultancy works proactively with businesses across ${county}, building inspection schedules that keep certificates current and equipment records in order before they are ever requested.`,

  // 5 — direct and commercial
  (svcName, locName, county) =>
    `Safe Lee Inspection & Consultancy carries out ${svcName.toLowerCase()} for employers across ${locName} and ${county}. We are an independent inspection business — not a franchise, not a national group. That means direct contact with the engineer doing the work, reports turned around without administrative delay, and rates that reflect the actual cost of the inspection rather than the overhead of a large organisation.`,
];

/* ------------------------------------------------------------------ */
/*  Closing paragraph templates — 5 variants (was 3)                  */
/* ------------------------------------------------------------------ */

const CLOSING_TEMPLATES: ((
  locName: string,
  b: string
) => string)[] = [
  // 0 — turnaround and documentation angle
  (locName, county) =>
    `Operating from Irlam, we cover ${locName} and the wider ${county} area with fast turnaround on both inspections and reports, giving you the documentation you need to demonstrate compliance to HSE inspectors or insurers whenever it is requested.`,

  // 1 — landmark + premises variety
  (locName, landmark) =>
    `Based in Irlam with straightforward road access across the region, Safe Lee reaches ${locName} sites quickly. Whether you operate from ${landmark} or from smaller premises elsewhere in the area, you receive consistent, thorough inspections and clear written reports.`,

  // 2 — independence and value angle
  (locName, county) =>
    `Safe Lee is an independent inspection business — not a national franchise. That means the engineer carrying out your inspection is the same person whose name is on the report, with no layers of administration between you and the technical assessment. We serve ${locName} and the wider ${county} area with the same standard of service our local Manchester clients have relied on for years.`,

  // 3 — local knowledge and scheduling
  (locName, county) =>
    `We know ${county}'s industrial landscape and we schedule inspections around the way businesses here actually operate — not around what is convenient for us. For ${locName} employers, that means available inspection slots that work with your production schedule and reports that arrive promptly once the visit is complete.`,

  // 4 — competitive positioning
  (locName, county) =>
    `The alternative to Safe Lee for ${locName} businesses is typically a national inspection corporation with high overheads and slow administrative processes. We offer the same technical competence and legally valid examination records with the responsiveness and direct accountability of a business that knows the ${county} area.`,
];

/* ------------------------------------------------------------------ */
/*  Para 2 structure variants                                           */
/*  3 different ways to introduce the industry section.               */
/* ------------------------------------------------------------------ */

type Para2Builder = (
  ind1Name: string,
  ind2Name: string,
  bridge1: string,
  bridge2: string,
  locName: string,
  svcName: string
) => string;

const PARA2_STRUCTURES: Para2Builder[] = [
  // 0 — sequential with prominence framing
  (ind1, ind2, b1, b2, loc) =>
    `${ind1} is among the leading industries in ${loc} driving demand for this type of inspection. ${b1} ${ind2} brings a different set of requirements but an equally clear compliance obligation. ${b2}`,

  // 1 — dual-industry lead sentence
  (ind1, ind2, b1, b2, loc, svc) =>
    `Two sectors in particular define the demand for ${svc.toLowerCase()} across ${loc}: ${ind1.toLowerCase()} and ${ind2.toLowerCase()}. ${b1} ${b2}`,

  // 2 — consequence-led
  (ind1, ind2, b1, b2, loc) =>
    `${b1} That makes ${ind1.toLowerCase()} one of the primary compliance sectors in ${loc} for this type of inspection. ${ind2.toLowerCase()} businesses face their own distinct requirements: ${b2.charAt(0).toLowerCase()}${b2.slice(1)}`,
];

/* ------------------------------------------------------------------ */
/*  Main export                                                         */
/* ------------------------------------------------------------------ */

export function generateCompositeIntro(
  service: { name: string; slug: string; regulationName: string },
  location: { name: string; slug: string; county: string },
  locationData: LocationEnrichment,
  industries: LocationIndustry[]
): string {
  const cacheKey = `${service.slug}--${location.slug}`;

  // Each content component gets its own slot so variety compounds
  const openingFn = pickSlot(OPENING_TEMPLATES, cacheKey, 0);
  const closingFn = pickSlot(CLOSING_TEMPLATES, cacheKey, 1);
  const para2Structure = pickSlot(PARA2_STRUCTURES, cacheKey, 2);

  // Regulatory fragment: compose one sentence from each of the 3 pools
  const fragments = SERVICE_REGULATORY_FRAGMENTS[service.slug];
  const regulatoryPara = fragments
    ? [
        pickSlot(fragments.obligation, cacheKey, 3),
        pickSlot(fragments.scope, cacheKey, 4),
        pickSlot(fragments.signal, cacheKey, 5),
      ].join(" ")
    : "";

  // Local signal sentence
  const localSignalTemplates =
    LOCAL_SIGNAL_TEMPLATES[service.slug] ?? LOCAL_SIGNAL_TEMPLATES["pssr-inspections"];
  const keyArea = locationData.keyAreas[0] ?? location.name;
  const localSignalFn = pickSlot(localSignalTemplates, cacheKey, 6);
  const localSignal = localSignalFn(keyArea, location.name);

  // Service delivery sentence
  const deliverySentences =
    SERVICE_DELIVERY_SENTENCES[service.slug] ?? SERVICE_DELIVERY_SENTENCES["pssr-inspections"];
  const deliveryFn = pickSlot(deliverySentences as unknown as ((loc: string) => string)[], cacheKey, 7);
  const deliverySentence = (deliveryFn as (loc: string) => string)(location.name);

  // Para 1: location business context + opening
  const para1 = [
    locationData.businessContext,
    openingFn(service.name, location.name, location.county),
  ].join(" ");

  // Para 2: top two industries with variant bridge sentences
  const [ind1, ind2] = industries.slice(0, 2);
  let para2 = "";
  if (ind1 && ind2) {
    const bridgeMap = SERVICE_INDUSTRY_BRIDGE_VARIANTS[service.slug] ?? {};

    const getBridge = (ind: LocationIndustry, slot: number): string => {
      const variants =
        bridgeMap[ind.slug] ??
        bridgeMap[ind.industry.toLowerCase().split(" ")[0]] ??
        null;
      if (variants?.length) return pickSlot(variants, cacheKey, slot);
      return ind.relevance;
    };

    const b1 = getBridge(ind1, 8);
    const b2 = getBridge(ind2, 9);

    para2 = para2Structure(
      ind1.industry,
      ind2.industry,
      b1,
      b2,
      location.name,
      service.name
    );
  } else if (ind1) {
    const bridgeMap = SERVICE_INDUSTRY_BRIDGE_VARIANTS[service.slug] ?? {};
    const variants =
      bridgeMap[ind1.slug] ??
      bridgeMap[ind1.industry.toLowerCase().split(" ")[0]] ??
      null;
    const b1 = variants?.length
      ? pickSlot(variants, cacheKey, 8)
      : ind1.relevance;
    para2 = `${ind1.industry} is a key sector driving ${service.name.toLowerCase()} demand in ${location.name}. ${b1}`;
  }

  // Para 3: local signal + regulatory fragments + service delivery
  const para3 = `${localSignal} ${regulatoryPara} ${deliverySentence}`.trim();

  // Para 4: closing
  const hasLandmark = !!locationData.localLandmarks;
  const para4 = hasLandmark
    ? (closingFn as (a: string, b: string) => string)(
        location.name,
        locationData.localLandmarks
      )
    : (closingFn as (a: string, b: string) => string)(
        location.name,
        location.county
      );

  return [para1, para2, para3, para4].filter(Boolean).join("\n\n");
}
