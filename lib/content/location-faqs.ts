/* ------------------------------------------------------------------ */
/*  Location-specific FAQs — unique questions referencing real local   */
/*  industrial estates, employers, and business context                */
/*                                                                      */
/*  Two-tier system:                                                    */
/*  1. SERVICE_LOCATION_FAQS — keyed "service--location", highest pri  */
/*  2. LOCATION_FAQS — keyed by location only, filtered by service     */
/*                                                                      */
/*  Use selectFaqsForPage(serviceSlug, locationSlug) to retrieve FAQs  */
/*  for a given page. Returns up to 3 FAQs in priority order.          */
/* ------------------------------------------------------------------ */

export interface LocationFAQ {
  question: string;
  answer: string;
}

export const LOCATION_FAQS: Record<string, LocationFAQ[]> = {
  manchester: [
    {
      question:
        "Do businesses on Trafford Park need LOLER inspections?",
      answer:
        "Yes. Any business on Trafford Park or elsewhere in Manchester that uses lifting equipment — including overhead cranes, forklifts, hoists, and goods lifts — is legally required to have thorough examinations carried out under LOLER 1998. Given that Trafford Park is home to over 1,400 businesses across manufacturing, logistics, and distribution, LOLER compliance is particularly important for businesses in this area.",
    },
    {
      question:
        "How often do Manchester food manufacturers need PSSR inspections?",
      answer:
        "Food manufacturers in Manchester — including those operating on Trafford Park like Kellogg's and Unilever — must have their pressure systems inspected at intervals set out in a Written Scheme of Examination prepared by a competent person. For steam boilers and autoclaves commonly used in food processing, this is typically every 12-14 months, though the competent person may specify different intervals based on the equipment's condition and use.",
    },
    {
      question:
        "Are LEV inspections required for manufacturing businesses near Manchester Airport?",
      answer:
        "Yes. Any business in the Manchester Airport City area or wider Manchester region that uses Local Exhaust Ventilation to control hazardous substances must have their LEV systems thoroughly examined and tested at least every 14 months under COSHH 2002 (or every 12 months for certain processes). This applies to paint spray booths, welding fume extractors, dust extraction systems, and solvent vapour capture units.",
    },
  ],

  irlam: [
    {
      question:
        "Does SafeLee provide inspections to businesses on Northbank Industrial Park in Irlam?",
      answer:
        "Yes — SafeLee is based in Irlam, so Northbank Industrial Park and the wider Irlam and Cadishead industrial area are our home territory. We provide PSSR, LOLER, WAHR, PUWER, and COSHH LEV inspections to manufacturing, logistics, and food processing businesses across the estate, often with same-day or next-day availability.",
    },
    {
      question:
        "What inspections does a wine bottling operation in Irlam need?",
      answer:
        "A bottling operation like those in the Irlam area would typically require PSSR inspections for compressed air systems and pressurised vessels, LOLER thorough examinations for forklifts and overhead cranes used in warehousing, COSHH LEV testing for any fume or vapour extraction systems, and PUWER inspections for conveyor lines and bottling machinery. SafeLee can assess your specific requirements during an initial site visit.",
    },
  ],

  salford: [
    {
      question:
        "Do construction contractors working at Salford Quays need WAHR inspections?",
      answer:
        "Yes. Any contractor carrying out work at height — whether on the MediaCityUK expansion, Salford Quays residential developments, or any other site in Salford — must comply with the Work at Height Regulations 2005. This includes regular inspections of scaffolding, mobile elevated work platforms (MEWPs), harnesses, lanyards, and guardrails before and during use.",
    },
    {
      question:
        "What statutory inspections are needed at Salford Royal Hospital?",
      answer:
        "NHS hospitals like Salford Royal (part of the Northern Care Alliance) operate a wide range of equipment requiring statutory inspections: autoclaves and sterilisation units under PSSR 2000, patient hoists and bed lifts under LOLER 1998, workshop machinery under PUWER 1998, and laboratory fume cupboards under COSHH 2002. SafeLee provides all of these inspection services.",
    },
  ],

  bolton: [
    {
      question:
        "What inspections do engineering firms on Horwich Loco industrial estate need?",
      answer:
        "Engineering businesses on the former Horwich Loco Works site typically need PUWER inspections for lathes, milling machines, and CNC equipment; PSSR inspections for compressed air receivers and associated pipework; LOLER examinations for overhead cranes and lifting accessories; and COSHH LEV testing for welding fume extraction and coolant mist systems. SafeLee covers all of these under one service.",
    },
    {
      question:
        "Are LOLER inspections required for the distribution centres at Middlebrook?",
      answer:
        "Yes. Distribution and logistics businesses at Middlebrook Business Park that use forklifts, dock levellers, goods lifts, or any other lifting equipment are legally required to have thorough examinations under LOLER 1998. For forklifts, this is required at least every 12 months, while equipment used to lift people (such as goods lifts or scissor lifts) must be examined every 6 months.",
    },
  ],

  wigan: [
    {
      question:
        "What inspections does a food processing plant like Heinz at Kitt Green need?",
      answer:
        "A large-scale food processing facility like the Kraft Heinz plant at Kitt Green would require PSSR inspections for steam boilers, pressure vessels, and associated pipework; LOLER examinations for overhead cranes and forklifts; COSHH LEV testing for process extraction systems; and PUWER inspections for conveyor lines and packaging machinery. The specific inspection intervals are determined by a Written Scheme of Examination.",
    },
    {
      question:
        "Do warehouse operators in Wigan need their forklifts inspected?",
      answer:
        "Yes. Under LOLER 1998, any forklift truck used for lifting operations must undergo a thorough examination by a competent person at least every 12 months. Many insurance companies and responsible employers arrange six-monthly inspections. This applies to all warehouse and logistics businesses across Wigan borough, including those at Ince-in-Makerfield and Martland Park.",
    },
  ],

  stockport: [
    {
      question:
        "Do businesses on Bredbury Park Industrial Estate need statutory inspections?",
      answer:
        "Yes. Manufacturing, warehousing, and engineering businesses on Bredbury Park Industrial Estate near Junction 25 of the M60 are subject to the same statutory inspection requirements as any employer. This includes LOLER examinations for cranes and forklifts, PSSR inspections for compressed air systems, PUWER assessments for machinery, and COSHH LEV testing for extraction systems.",
    },
    {
      question:
        "How often should Stepping Hill Hospital have its pressure systems inspected?",
      answer:
        "Stepping Hill Hospital's pressure systems — including autoclaves, sterilisation units, and heating boilers — must be inspected in accordance with a Written Scheme of Examination under PSSR 2000. Typically, steam boilers require examination every 12-14 months, but the competent person preparing the scheme may set different intervals based on the equipment type, age, and condition.",
    },
  ],

  oldham: [
    {
      question:
        "Are PUWER inspections needed for manufacturing firms at Hollinwood Business District?",
      answer:
        "Yes. Any employer at Hollinwood Business District or elsewhere in Oldham that provides work equipment to employees must ensure it is maintained in a safe condition under PUWER 1998. For machinery with specific risks — such as power presses, guillotines, and injection moulding machines — regular inspections by a competent person are required, with records kept for review by HSE inspectors.",
    },
    {
      question:
        "What inspections do distribution centres at Oldham Broadway Business Park need?",
      answer:
        "Distribution operations at Oldham Broadway Business Park near the M60 typically need LOLER thorough examinations for forklifts (at least every 12 months), goods lifts and scissor lifts (every 6 months), and lifting accessories such as chains and slings. PUWER inspections are also required for conveyor systems, dock levellers, and other work equipment.",
    },
  ],

  rochdale: [
    {
      question:
        "What statutory inspections are required at Kingsway Business Park in Rochdale?",
      answer:
        "Businesses at Kingsway Business Park — one of the UK's largest at 420 acres — require the same statutory inspections as any employer. For the manufacturing and logistics firms that occupy the park, this typically means LOLER examinations for forklifts and overhead cranes, PSSR inspections for compressed air systems, PUWER assessments for production machinery, and COSHH LEV testing for dust and fume extraction.",
    },
    {
      question:
        "Do the new Atom Valley developments need inspection services during construction?",
      answer:
        "Yes. The Atom Valley Mayoral Development Zone — which includes Kingsway and Stakehill — will deliver 17.3 million sq ft of employment space. During construction, contractors must comply with WAHR 2005 for scaffolding and fall protection, LOLER 1998 for tower cranes and hoists, and PUWER 1998 for all construction plant and equipment. SafeLee provides all of these inspection services.",
    },
  ],

  bury: [
    {
      question:
        "What inspections do the distribution centres near Pilsworth need?",
      answer:
        "Distribution centres at Pilsworth Industrial Estate and nearby sites — including those operated by JD Sports and TNT UK — need LOLER thorough examinations for forklifts, conveyor systems, and goods lifts. Fork lift trucks require examination at least every 12 months, while lifting equipment used to carry people must be examined every 6 months. PUWER inspections are also required for automated sorting and conveyor systems.",
    },
    {
      question:
        "Are manufacturers at Chamberhall Business Park required to have LEV testing?",
      answer:
        "Any manufacturing business at Chamberhall Business Park that uses Local Exhaust Ventilation to control employee exposure to hazardous substances must have their LEV systems thoroughly examined and tested under COSHH 2002. This applies to welding fume extractors, paint spray booths, dust extraction systems, and any other LEV equipment. Testing must be carried out at least every 14 months.",
    },
  ],

  tameside: [
    {
      question:
        "Do businesses in Denton and Hyde industrial areas need PSSR inspections?",
      answer:
        "Yes. Any business in Tameside's industrial areas — including those in Denton, Hyde, and Hattersley — that operates a pressure system containing relevant fluid must have a Written Scheme of Examination drawn up by a competent person under PSSR 2000. This covers compressed air receivers, steam boilers, autoclaves, and associated safety valves and pipework.",
    },
    {
      question:
        "What inspections does Tameside General Hospital need?",
      answer:
        "Tameside General Hospital requires PSSR inspections for autoclaves and sterilisation pressure vessels, LOLER thorough examinations for patient hoists, bed lifts, and goods lifts, PUWER assessments for workshop and maintenance equipment, and COSHH LEV testing for laboratory fume cupboards and pharmacy extraction systems.",
    },
  ],

  trafford: [
    {
      question:
        "How many businesses on Trafford Park need statutory inspections?",
      answer:
        "With over 1,400 businesses and 40,000 employees, Trafford Park has one of the highest concentrations of statutory inspection requirements in the UK. Most manufacturing, logistics, and food production businesses on the estate require some combination of PSSR, LOLER, PUWER, WAHR, and COSHH LEV inspections. SafeLee provides all of these services and is conveniently located nearby in Irlam.",
    },
    {
      question:
        "Does Kellogg's type of food manufacturing need LEV testing?",
      answer:
        "Yes. Food manufacturers on Trafford Park — particularly those handling powders, flours, or flavourings — must have their Local Exhaust Ventilation systems tested under COSHH 2002 at least every 14 months. This includes dust extraction on mixing lines, packaging area ventilation, and process fume extraction. PSSR inspections are also required for steam boilers and pressure vessels used in food processing.",
    },
  ],

  eccles: [
    {
      question:
        "Do businesses on Barton Business Park need lifting equipment inspections?",
      answer:
        "Yes. Any business on Barton Business Park or in the wider Eccles area that uses lifting equipment — including forklifts, overhead cranes, goods lifts, or lifting accessories like chains and slings — must have thorough examinations under LOLER 1998. SafeLee is based nearby in Irlam, making us well-placed to provide rapid inspection services across the Eccles area.",
    },
    {
      question:
        "Are PUWER inspections required for light manufacturing businesses in Eccles?",
      answer:
        "Yes. Under PUWER 1998, all employers must ensure their work equipment is suitable for its intended use, properly maintained, and inspected where there is a specific risk. For manufacturing businesses in Eccles — whether on Barton Business Park or the Patricroft industrial area — this means regular inspections of power presses, guillotines, lathes, and other machinery.",
    },
  ],

  urmston: [
    {
      question:
        "Can SafeLee inspect equipment for Urmston businesses working with Trafford Park clients?",
      answer:
        "Yes. SafeLee is based in neighbouring Irlam and regularly services businesses in Urmston and across the Trafford Park corridor. Whether you operate from Urmston town centre or the Flixton area, we can provide PSSR, LOLER, WAHR, PUWER, and COSHH LEV inspections — often with same-day availability given our proximity.",
    },
    {
      question:
        "Do construction firms in Urmston need work at height inspections?",
      answer:
        "Yes. Any construction contractor working in Urmston — whether on residential developments or commercial projects — must comply with WAHR 2005. This requires pre-use checks and regular inspections of scaffolding, mobile towers, harnesses, lanyards, and guardrails. SafeLee provides thorough WAHR inspections across the Trafford borough.",
    },
  ],

  stretford: [
    {
      question:
        "What inspections are needed for businesses along Chester Road in Stretford?",
      answer:
        "Businesses along the Chester Road corridor in Stretford may require LOLER examinations for any lifting equipment, PSSR inspections for compressed air or steam systems, PUWER assessments for work equipment, and COSHH LEV testing for extraction ventilation. The specific requirements depend on the equipment in use — SafeLee can carry out a compliance audit to identify what is needed.",
    },
    {
      question:
        "Does Trafford General Hospital need statutory equipment inspections?",
      answer:
        "Yes. Trafford General Hospital — the birthplace of the NHS in 1948 — operates autoclaves and sterilisation units (requiring PSSR inspections), patient hoists and bed lifts (requiring LOLER examinations), and maintenance workshop equipment (requiring PUWER assessments). These inspections are a legal requirement for NHS trusts.",
    },
  ],

  sale: [
    {
      question:
        "What statutory inspections do Sale's healthcare facilities need?",
      answer:
        "Healthcare facilities in Sale require PSSR inspections for autoclaves and sterilisation equipment, LOLER thorough examinations for patient hoists and lifts, and PUWER assessments for any work equipment provided to staff. Dental practices in Sale using autoclaves for instrument sterilisation are also required to have PSSR inspections.",
    },
    {
      question:
        "Do schools and colleges in Sale need pressure system inspections?",
      answer:
        "Yes. Schools and further education colleges in Sale that operate heating boilers or pressure systems must have a Written Scheme of Examination under PSSR 2000. This is often overlooked in educational settings, but boiler systems, science department autoclaves, and design technology workshop compressors all fall within the scope of the regulations.",
    },
  ],

  altrincham: [
    {
      question:
        "Do engineering firms in Broadheath need PSSR inspections?",
      answer:
        "Yes. Engineering businesses in Altrincham's Broadheath industrial area that operate compressed air receivers, autoclaves, or any other pressure systems must have them inspected under PSSR 2000. A competent person must prepare a Written Scheme of Examination, and the equipment must be examined at the intervals specified in the scheme.",
    },
    {
      question:
        "What inspections does a gym or leisure centre in Altrincham need?",
      answer:
        "Leisure facilities in Altrincham may require LOLER inspections for any lifting equipment (including disabled access lifts and goods lifts), PSSR inspections for swimming pool pressure filtration systems and boilers, and PUWER assessments for gym equipment. COSHH LEV testing may also be needed if chemical storage areas have extraction ventilation.",
    },
  ],

  leigh: [
    {
      question:
        "Do manufacturing businesses on Leigh Commerce Park need statutory inspections?",
      answer:
        "Yes. Manufacturing businesses on Leigh Commerce Park require statutory inspections based on the equipment they operate. This typically includes LOLER examinations for overhead cranes and forklifts, PSSR inspections for compressed air systems, PUWER assessments for production machinery, and COSHH LEV testing for welding fume or dust extraction systems.",
    },
    {
      question:
        "How often must forklifts and overhead cranes at Leigh industrial sites be examined under LOLER?",
      answer:
        "Under LOLER 1998, forklifts and overhead cranes at Leigh's industrial sites used for goods handling must be thoroughly examined by a competent person at least every 12 months. Any lifting equipment used to carry people — including scissor lifts, goods lifts with passenger capacity, and forklifts fitted with working platform attachments — must be examined every 6 months. Lifting accessories such as chains, slings, shackles, and eyebolts must be examined every 6 months regardless of how frequently they are used. SafeLee provides LOLER examinations across the Leigh and Wigan borough area.",
    },
  ],

  "ashton-under-lyne": [
    {
      question:
        "What inspections do businesses at Ashton Moss need?",
      answer:
        "Businesses in the Ashton Moss commercial area near Junction 23 of the M60 require statutory inspections based on their equipment. Warehousing and distribution firms typically need LOLER examinations for forklifts and goods lifts, while manufacturing businesses may need PSSR, PUWER, and COSHH LEV inspections for pressure systems, machinery, and extraction ventilation.",
    },
    {
      question:
        "Are WAHR inspections required for construction sites in Ashton-under-Lyne?",
      answer:
        "Yes. Any construction site in Ashton-under-Lyne — including the ongoing town centre regeneration and new developments at Ashton Moss — must comply with WAHR 2005. Scaffolding must be inspected before first use, after any event likely to affect its stability, and at regular intervals not exceeding 7 days.",
    },
  ],

  liverpool: [
    {
      question:
        "What inspections does the Jaguar Land Rover Halewood plant need?",
      answer:
        "An automotive manufacturing plant of the scale of JLR Halewood — producing the Range Rover Evoque and Discovery Sport — requires comprehensive statutory inspections including LOLER examinations for overhead cranes and robotic handling systems, PSSR inspections for paint shop pressure systems, PUWER assessments for press tools and assembly robots, and COSHH LEV testing for paint booth and welding fume extraction.",
    },
    {
      question:
        "Do port operators at Liverpool2 need LOLER inspections?",
      answer:
        "Yes. The Liverpool2 deep-water container terminal and all port operations in Liverpool must have their lifting equipment — including ship-to-shore cranes, straddle carriers, reach stackers, and container spreaders — thoroughly examined under LOLER 1998. The frequency depends on whether the equipment lifts people (every 6 months) or goods only (every 12 months).",
    },
    {
      question:
        "Are LEV inspections needed for businesses on Knowsley Industrial Park?",
      answer:
        "Yes. Any business on Knowsley Industrial Park that uses Local Exhaust Ventilation to control employee exposure to hazardous substances — including paint spraying, welding, woodworking dust, or chemical fumes — must have their LEV systems tested at least every 14 months under COSHH 2002. SafeLee provides LEV testing across the Liverpool and Knowsley area.",
    },
  ],

  "st-helens": [
    {
      question:
        "What inspections does a glass manufacturing operation like Pilkington need?",
      answer:
        "Glass manufacturing operations like Pilkington's Greengate Works in St Helens require extensive statutory inspections: PSSR examinations for furnace pressure systems and molten tin bath equipment, LOLER thorough examinations for overhead cranes and lifting gear, PUWER inspections for cutting and handling machinery, and COSHH LEV testing for any fume extraction systems in the production environment.",
    },
    {
      question:
        "Do logistics businesses at Haydock Industrial Estate need LOLER inspections?",
      answer:
        "Yes. Haydock Industrial Estate is a major logistics hub in the St Helens borough, and all businesses using forklifts, reach trucks, goods lifts, or any other lifting equipment must have thorough examinations under LOLER 1998. SafeLee provides LOLER inspection services across the St Helens area.",
    },
  ],

  southport: [
    {
      question:
        "Do hotels and leisure venues in Southport need equipment inspections?",
      answer:
        "Yes. Hotels, amusement venues, and leisure facilities in Southport need LOLER inspections for passenger lifts and goods lifts, PSSR inspections for heating boilers and pool filtration pressure systems, and PUWER assessments for any work equipment. Kitchen extraction systems in hotels and restaurants may also require COSHH LEV testing.",
    },
    {
      question:
        "Are businesses on Blowick Business Park subject to statutory inspection requirements?",
      answer:
        "Yes. All employers on Blowick Business Park and Slaidburn Industrial Estate in Southport must comply with statutory inspection requirements for any lifting equipment (LOLER), pressure systems (PSSR), work equipment (PUWER), and extraction ventilation (COSHH). The specific requirements depend on the equipment in use at each premises.",
    },
  ],

  widnes: [
    {
      question:
        "What PSSR inspections do chemical plants in Widnes need?",
      answer:
        "Chemical manufacturing operations in Widnes — part of the UK's most concentrated chemical production region — must have all pressure systems inspected under PSSR 2000. This includes reaction vessels, distillation columns, heat exchangers, steam boilers, compressed gas systems, and associated safety valves and pipework. A competent person must prepare the Written Scheme of Examination.",
    },
    {
      question:
        "Do businesses at 3MG Widnes Freeport need LOLER inspections?",
      answer:
        "Yes. 3MG Widnes Freeport is a major multimodal freight terminal where businesses use overhead gantry cranes, container handling equipment, forklifts, and reach stackers — all of which require thorough examinations under LOLER 1998. The combination of heavy lifting operations and chemical handling in the Widnes area makes comprehensive statutory compliance particularly important.",
    },
    {
      question:
        "Are COSHH LEV inspections mandatory for Widnes chemical businesses?",
      answer:
        "Yes. Any business in Widnes handling hazardous chemicals must have Local Exhaust Ventilation systems thoroughly examined and tested at least every 14 months under COSHH 2002. Given Widnes's heritage as a chemical manufacturing centre — dating back to John Hutchinson's first factory at Spike Island in 1847 — LEV compliance is a core requirement for the area's industrial employers.",
    },
  ],

  preston: [
    {
      question:
        "What inspections does the aerospace sector around Preston need?",
      answer:
        "BAE Systems' facilities at Warton, Samlesbury, and Preston's Strand Road require comprehensive statutory inspections: PSSR examinations for autoclaves used in composite curing, LOLER thorough examinations for overhead cranes and lifting rigs, PUWER inspections for CNC machines and robotic assembly systems, and COSHH LEV testing for clean room ventilation and paint shop extraction.",
    },
    {
      question:
        "Do engineering firms in Preston's aerospace supply chain need statutory inspections?",
      answer:
        "Yes. Precision engineering firms on Roman Way Industrial Estate and across Preston's aerospace supply chain are subject to the same statutory inspection requirements as any manufacturer. Compressed air systems require PSSR inspections, lifting equipment needs LOLER examinations, and workshop machinery requires PUWER assessments. SafeLee serves the Preston area with all of these services.",
    },
  ],

  blackburn: [
    {
      question:
        "Do manufacturers at Whitebirk Industrial Estate need PUWER inspections?",
      answer:
        "Yes. Manufacturing businesses on Whitebirk Industrial Estate in Blackburn must ensure all work equipment is maintained and inspected under PUWER 1998. This includes power presses, guillotines, lathes, and any other machinery with specific risks. Where equipment poses particular dangers, regular inspections by a competent person are required with written records.",
    },
    {
      question:
        "What inspections do businesses at Shadsworth Business Park need?",
      answer:
        "Businesses at Shadsworth Business Park near Junction 5 of the M65 require statutory inspections based on their equipment. Manufacturing firms typically need PSSR inspections for compressed air systems, LOLER examinations for overhead cranes and forklifts, PUWER assessments for production machinery, and COSHH LEV testing for extraction ventilation controlling hazardous substances.",
    },
  ],

  burnley: [
    {
      question:
        "What inspections does Safran Nacelles at Heasandford need?",
      answer:
        "Safran Nacelles' aerospace composites and sheet metal facility at Heasandford Industrial Estate requires PSSR inspections for composite-curing autoclaves and associated pressure systems, LOLER examinations for overhead cranes and lifting equipment, PUWER assessments for CNC machining centres and forming presses, and COSHH LEV testing for resin fume extraction in the composites facility.",
    },
    {
      question:
        "Do businesses at Burnley Bridge Business Park need statutory inspections?",
      answer:
        "Yes. Burnley Bridge Business Park at Junction 9 of the M65 hosts manufacturing and distribution businesses that require statutory inspections. Exertis, which operates a national distribution centre there, would need LOLER examinations for forklifts and goods lifts, while manufacturing firms require PSSR, PUWER, and COSHH LEV inspections based on their equipment.",
    },
    {
      question:
        "Are aerospace suppliers on Lomeshaye Industrial Estate subject to inspection requirements?",
      answer:
        "Yes. Precision engineering and aerospace suppliers at Lomeshaye Industrial Estate near Nelson are subject to the same statutory requirements as any manufacturer. Compressed air systems need PSSR inspections, overhead cranes and lifting accessories require LOLER examinations, and CNC machines and workshop equipment need PUWER assessments. COSHH LEV testing is required for any cutting fluid mist or metalworking fume extraction.",
    },
  ],

  blackpool: [
    {
      question:
        "Do Blackpool's tourist attractions need equipment inspections?",
      answer:
        "Yes. Blackpool Tower, Pleasure Beach, and other tourist attractions operate ride systems, passenger lifts, overhead cranes, and maintenance hoists that all require thorough examinations under LOLER 1998. The Illuminations infrastructure also involves work at height, requiring WAHR 2005 compliance for installation and maintenance teams.",
    },
    {
      question:
        "What inspections do businesses in the Blackpool Airport Enterprise Zone need?",
      answer:
        "Businesses in the 144-hectare Blackpool Airport Enterprise Zone — including those on Squires Gate Industrial Estate and Blackpool Business Park — need statutory inspections based on their operations. Advanced manufacturing firms require PSSR, LOLER, PUWER, and COSHH LEV inspections, while food and drink manufacturers need additional focus on steam boiler and extraction system compliance.",
    },
  ],

  lancaster: [
    {
      question:
        "What pressure system inspections are needed at Heysham Nuclear Power Station?",
      answer:
        "Heysham Nuclear Power Station — the only UK site with two operational nuclear stations — operates highly complex pressure systems including reactor pressure vessels, steam generators, and high-pressure coolant circuits. While nuclear installations have their own regulatory regime through the Office for Nuclear Regulation, the general PSSR 2000 principles of competent examination and Written Schemes of Examination apply throughout the wider energy sector in the Lancaster area.",
    },
    {
      question:
        "Do businesses on White Lund Industrial Estate need statutory inspections?",
      answer:
        "Yes. White Lund Industrial Estate — Lancaster district's largest employment site at 247 acres — hosts manufacturing, engineering, and trade businesses that require LOLER examinations for forklifts and overhead cranes, PSSR inspections for compressed air systems, PUWER assessments for workshop machinery, and COSHH LEV testing for any extraction ventilation systems.",
    },
  ],

  warrington: [
    {
      question:
        "What inspections do distribution centres at Omega Business Park need?",
      answer:
        "Omega Business Park — one of Europe's largest at 575 acres — hosts major distribution operations that require LOLER thorough examinations for forklifts, reach trucks, dock levellers, and goods lifts. Fork lift trucks must be examined at least every 12 months, while lifting equipment used to carry people requires examination every 6 months. PUWER inspections are also needed for conveyor and automated storage systems.",
    },
    {
      question:
        "Do nuclear sector businesses at Birchwood Park need PSSR inspections?",
      answer:
        "Yes. Birchwood Park is a recognised centre of excellence for the nuclear sector, with over 165 companies and 6,000 employees. Businesses involved in nuclear decommissioning, engineering, and support services operate pressure systems, test rigs, and specialist equipment that require PSSR inspections. SafeLee provides pressure system inspection services across the Warrington area.",
    },
    {
      question:
        "Are WAHR inspections needed for construction at the Omega expansion?",
      answer:
        "Yes. The ongoing expansion of Omega Business Park and the redevelopment of the former Fiddlers Ferry Power Station site require full compliance with WAHR 2005. All scaffolding, mobile towers, harnesses, and fall arrest equipment must be inspected before first use and at intervals not exceeding 7 days for scaffolding. SafeLee provides WAHR inspection services for construction sites across Warrington.",
    },
  ],

  chester: [
    {
      question:
        "What inspections does the Airbus wing factory near Chester need?",
      answer:
        "The Airbus wing manufacturing facility at Broughton assembles wings for the entire Airbus commercial aircraft range and requires comprehensive statutory inspections: PSSR examinations for autoclaves and composite-curing pressure systems, LOLER thorough examinations for overhead cranes and heavy-lift equipment, PUWER inspections for CNC machining centres and assembly jigs, and COSHH LEV testing for composite dust and sealant fume extraction.",
    },
    {
      question:
        "Do businesses on Sealand Industrial Estate need statutory inspections?",
      answer:
        "Yes. Manufacturing and engineering businesses on Sealand Industrial Estate and Deeside Industrial Park near Chester — many of which serve the Airbus supply chain — require PSSR inspections for compressed air systems, LOLER examinations for lifting equipment, PUWER assessments for workshop machinery, and COSHH LEV testing for any fume or dust extraction systems.",
    },
  ],

  crewe: [
    {
      question:
        "What inspections does the Bentley Motors factory in Crewe need?",
      answer:
        "Bentley Motors' Pyms Lane factory — the sole global manufacturing site for all Bentley vehicles — requires extensive statutory inspections: COSHH LEV testing for paint shop extraction systems, PSSR inspections for steam and compressed air systems, LOLER examinations for overhead cranes and robotic handling equipment, and PUWER assessments for press tools, CNC machines, and assembly line equipment.",
    },
    {
      question:
        "Do automotive suppliers on Weston Road Industrial Estate need inspections?",
      answer:
        "Yes. Automotive supply chain businesses on Weston Road Industrial Estate and Basford East in Crewe operate precision machinery, compressed air systems, and welding equipment that require PUWER, PSSR, and COSHH LEV inspections. LOLER examinations are also needed for any overhead cranes, forklifts, or lifting accessories used in production and warehousing.",
    },
  ],

  carlisle: [
    {
      question:
        "What inspections does the Pirelli tyre factory in Carlisle need?",
      answer:
        "Pirelli's Dalton Road factory — operating 24 hours a day with over 850 employees — requires PSSR inspections for vulcanisation pressure vessels and steam curing systems, LOLER examinations for overhead cranes and tyre handling equipment, PUWER assessments for rubber mixing mills and building machines, and COSHH LEV testing for rubber dust and fume extraction systems.",
    },
    {
      question:
        "Do logistics businesses at Kingmoor Park need LOLER inspections?",
      answer:
        "Yes. Kingmoor Park Enterprise Zone hosts over 150 businesses including DPD and UPS, many of which operate forklifts, reach trucks, and goods lifts requiring thorough examinations under LOLER 1998. As Carlisle's main enterprise zone and logistics hub near Junction 44 of the M6, Kingmoor Park has a high concentration of businesses with LOLER compliance requirements.",
    },
  ],

  "barrow-in-furness": [
    {
      question:
        "What statutory inspections are needed at the BAE Systems submarine shipyard?",
      answer:
        "BAE Systems' Barrow shipyard — the UK's sole nuclear submarine construction facility with 14,500 employees — requires the most comprehensive range of statutory inspections. This includes LOLER examinations for heavy-lift cranes in the Devonshire Dock Hall, PSSR inspections for pressure testing equipment and reactor component systems, PUWER assessments for welding, fabrication, and machining equipment, and COSHH LEV testing for welding fume and paint extraction systems.",
    },
    {
      question:
        "Do submarine supply chain businesses in Barrow need equipment inspections?",
      answer:
        "Yes. The submarine supply chain in Barrow-in-Furness includes specialist engineering firms manufacturing precision components, pipework, and structural assemblies. These businesses operate CNC machines, welding equipment, overhead cranes, and pressure testing rigs — all requiring statutory inspections under PUWER, LOLER, PSSR, and COSHH regulations.",
    },
    {
      question:
        "Are WAHR inspections needed for the Team Barrow regeneration programme?",
      answer:
        "Yes. The Team Barrow regeneration programme — a £220M partnership between central government, Westmorland & Furness Council, and BAE Systems — involves major construction works that require full WAHR 2005 compliance. Scaffolding, mobile towers, harnesses, and fall arrest systems must all be inspected before use and at regular intervals throughout the construction phase.",
    },
  ],

  "stoke-on-trent": [
    {
      question:
        "Do Stoke-on-Trent's pottery manufacturers need COSHH LEV inspections?",
      answer:
        "Yes. Pottery manufacturers in Stoke-on-Trent — including Wedgwood, Portmeirion, Emma Bridgewater, and Burleigh — use Local Exhaust Ventilation to control exposure to silica dust during clay preparation, glaze mixing, and kiln operations. Under COSHH 2002, these LEV systems must be thoroughly examined and tested at least every 14 months, with particular attention to silica dust extraction given the associated health risks.",
    },
    {
      question:
        "What pressure system inspections do ceramics kilns require?",
      answer:
        "Modern ceramics kilns in Stoke-on-Trent that operate gas-fired pressure systems require PSSR inspections of their burner supply systems, gas trains, and any associated pressurised components. Pottery factories also commonly use compressed air systems for glaze spraying and pneumatic machinery, which fall within the scope of PSSR 2000 and require Written Schemes of Examination.",
    },
    {
      question:
        "Do businesses on Festival Park and Etruria Valley need statutory inspections?",
      answer:
        "Yes. Businesses on Festival Park, Etruria Valley, and surrounding industrial estates in Stoke-on-Trent are subject to the same statutory inspection requirements as any employer. Logistics operations need LOLER examinations for forklifts, manufacturing businesses need PSSR and PUWER inspections, and any employer using LEV to control hazardous substances needs COSHH testing.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Service + location specific FAQs — highest priority tier           */
/*  Key format: "service-slug--location-slug"                          */
/* ------------------------------------------------------------------ */

export const SERVICE_LOCATION_FAQS: Record<string, LocationFAQ[]> = {
  /* ---- LOLER Manchester (warehousing / distribution focus) ---- */
  "loler-inspections--manchester": [
    {
      question:
        "How often must forklifts at Trafford Park distribution centres be examined under LOLER?",
      answer:
        "Forklifts used purely for goods handling at Trafford Park and other Manchester distribution centres require a thorough examination by a competent person at least every 12 months under LOLER 1998. Where a forklift is fitted with an attachment that can carry a person — such as a work platform cage — the examination interval drops to every six months. Many insurers and responsible operators arrange six-monthly examinations for all fork lift trucks regardless, as this supports insurance renewal and demonstrates due diligence to the HSE.",
    },
    {
      question:
        "Do lifting accessories like chains and slings used in Manchester warehouses need separate LOLER inspections?",
      answer:
        "Yes. Lifting accessories — including wire rope slings, chain slings, shackles, eyebolts, and hook blocks — are separately regulated under LOLER 1998 and must be thoroughly examined by a competent person every six months regardless of how frequently they are used. This is one of the most commonly overlooked compliance gaps in Manchester's warehousing and logistics sector. A thorough examination of the forklift truck itself does not cover the accessories used with it.",
    },
    {
      question:
        "Are dock levellers at Manchester logistics sites classed as lifting equipment under LOLER?",
      answer:
        "Yes. Powered dock levellers are lifting equipment within the meaning of LOLER 1998 and require thorough examination at least every 12 months. Given the volume of logistics and distribution operations at Trafford Park and other Manchester industrial estates — where dock levellers operate under heavy daily use — maintaining current examination records is a practical compliance requirement as well as a legal one. Safe Lee carries out LOLER examinations of dock levellers and all associated loading bay equipment.",
    },
  ],

  /* ---- COSHH LEV Manchester (manufacturing / welding fume focus) ---- */
  "coshh-lev-inspections--manchester": [
    {
      question:
        "What COSHH LEV testing intervals apply to welding fume extraction at Manchester manufacturing sites?",
      answer:
        "Under COSHH 2002, all Local Exhaust Ventilation systems used to control welding fume must be thoroughly examined and tested at least every 14 months. This is a minimum requirement — the HSE's EH40 guidance strongly recommends more frequent checks for high-use extraction systems in busy welding bays. The 2019 revision to WEL guidance reclassified all welding fume (including mild steel) as a Group 1 carcinogen, significantly increasing HSE enforcement activity in Manchester's manufacturing sector. An LEV system that was adequate at installation may fail to achieve original design parameters due to duct blockage, fan wear, or filter saturation.",
    },
    {
      question:
        "Does a paint spray booth at a Manchester bodyshop or manufacturer need annual LEV testing?",
      answer:
        "Yes. Spray paint booths used in vehicle refinishing and manufacturing operations are among the LEV systems most frequently identified by the HSE as failing at examination. Under COSHH 2002, they must be tested at least every 14 months. For booths used for isocyanate-based paints — the most common in vehicle refinishing — HSE guidance treats these as a higher-risk process, and the examination should verify airflow meets the design specification across the full face of the working zone. Safe Lee tests spray booths throughout Greater Manchester.",
    },
    {
      question:
        "Is a dust extraction system on a woodworking line at a Trafford Park factory classed as LEV under COSHH?",
      answer:
        "Yes. Dust extraction systems fitted to woodworking machinery — including band saws, routers, spindle moulders, and CNC routing centres — are Local Exhaust Ventilation systems within the scope of COSHH 2002. They must be thoroughly examined and tested by a competent person at least every 14 months. Hardwood and MDF dust are both classified as hazardous to health, and an extraction system operating below its design airflow provides inadequate protection even when running. The examination must verify capture velocity, duct condition, filter integrity, and fan performance.",
    },
  ],

  /* ---- LOLER Warrington (Omega / logistics focus) ---- */
  "loler-inspections--warrington": [
    {
      question:
        "How often must forklifts and reach trucks at Omega Business Park be examined under LOLER?",
      answer:
        "Forklifts and reach trucks at Omega Business Park distribution centres used purely for goods handling must be thoroughly examined by a competent person at least every 12 months under LOLER 1998. Where a fork lift truck is fitted with a working platform attachment enabling it to carry a person, the interval reduces to every 6 months. Given the scale of logistics operations at Omega — one of Europe's largest business parks at 575 acres — many operators arrange six-monthly examinations for their entire fleet to align with insurance renewal requirements and to demonstrate ongoing due diligence to the HSE.",
    },
    {
      question:
        "Are dock levellers at Warrington distribution centres classed as lifting equipment under LOLER?",
      answer:
        "Yes. Powered dock levellers at Warrington's major distribution centres — including those at Omega and Birchwood — are lifting equipment within the scope of LOLER 1998 and require thorough examination by a competent person at least every 12 months. This is among the most frequently overlooked compliance gaps in logistics operations: dock levellers are often maintained for mechanical reliability but are not formally examined under LOLER. A dock leveller examination is separate from and in addition to general maintenance. Safe Lee examines dock levellers and all associated loading bay lifting equipment across the Warrington area.",
    },
    {
      question:
        "Do VNA trucks and order pickers in Warrington high-bay warehouses need separate LOLER examinations?",
      answer:
        "Yes. Very narrow aisle (VNA) trucks and order pickers used in high-bay warehouses at Omega and Birchwood Park are lifting equipment under LOLER 1998 and require thorough examinations at least every 12 months. Where these vehicles are equipped with operator platforms that rise with the mast — meaning the operator is lifted as part of the normal operation — they must be examined every 6 months. The distinction between equipment that lifts only goods and equipment that can lift an operator is a critical compliance point in high-bay warehousing and is frequently misapplied by operators.",
    },
  ],

  /* ---- PSSR Widnes (chemical manufacturing focus) ---- */
  "pssr-inspections--widnes": [
    {
      question:
        "What does a Written Scheme of Examination cover for pressure systems at a Widnes chemical plant?",
      answer:
        "A Written Scheme of Examination under PSSR 2000 for a Widnes chemical plant must identify every pressure vessel, heat exchanger, reactor vessel, distillation column, compressed gas system, and all associated pipework, safety valves, pressure gauges, and protective devices within its scope. For each item, the scheme specifies the nature and scope of the examination, the maximum interval between examinations, and any preparatory work needed — such as emptying, purging, cooling, or temporary isolation. Given the process conditions at Widnes chemical sites — elevated temperatures, corrosive media, and high pressures — a competent person will typically set shorter examination intervals and may specify enhanced examination techniques such as ultrasonic thickness measurement or boroscope inspection.",
    },
    {
      question:
        "How often must pressure relief valves at Widnes chemical manufacturers be inspected under PSSR?",
      answer:
        "The inspection frequency for pressure relief valves at Widnes chemical plants is determined by the Written Scheme of Examination prepared by a competent person — there is no fixed statutory interval applicable to all relief valves. In practice, pressure relief valves on chemical process plant are typically subject to annual functional testing and periodic strip-down examination. For valves protecting vessels containing highly toxic, flammable, or corrosive substances — common throughout Widnes's chemical manufacturing corridor — the competent person may specify more frequent examinations or enhanced in-situ testing. The valve must be verified as capable of lifting at the correct set pressure and reseating cleanly, with the examination completed before the interval specified in the scheme expires.",
    },
    {
      question:
        "Does PSSR 2000 apply to process vessels at 3MG Widnes Freeport?",
      answer:
        "Yes. PSSR 2000 applies to any pressure system at 3MG Widnes Freeport — or elsewhere in the Widnes chemical manufacturing corridor — where a pressure vessel or associated pipework contains a relevant fluid at pressures exceeding the regulations' threshold. This includes compressed air systems used in pneumatic handling and process control, process vessels, steam systems, and hydraulic test rigs. A competent person must prepare a Written Scheme of Examination covering these systems, and they must be examined at the specified intervals. Safe Lee provides PSSR inspection and Written Scheme services for chemical and industrial businesses across the Widnes area.",
    },
  ],

  /* ---- COSHH LEV Stoke-on-Trent (ceramics / silica dust focus) ---- */
  "coshh-lev-inspections--stoke-on-trent": [
    {
      question:
        "What LEV testing is required for silica dust extraction at a Stoke-on-Trent pottery manufacturer?",
      answer:
        "Under COSHH 2002, any LEV system used to control silica dust at a Stoke-on-Trent ceramics manufacturer — including clay preparation areas, glaze mixing rooms, and kiln loading zones — must be thoroughly examined and tested by a competent person at least every 14 months. Silica dust is classified by the HSE as a Group 1 carcinogen, making it one of the highest-priority substances for LEV compliance. The examination must verify capture velocity at each hood, measure airflow through the system, check duct condition and integrity, test fan performance, and confirm filter condition. An extraction system that was adequate at installation may fail to meet design parameters due to duct blockage, hood repositioning, or filter saturation — making the 14-month examination a genuine protection measure, not a box-ticking exercise.",
    },
    {
      question:
        "Does a spray glazing booth at a Stoke-on-Trent ceramics manufacturer need LEV testing under COSHH?",
      answer:
        "Yes. Spray glazing booths at Stoke-on-Trent ceramics manufacturers must be thoroughly examined and tested at least every 14 months under COSHH 2002. Where glaze spraying uses substances containing heavy metals — including lead or barium compounds used in some specialist glazes — the HSE treats these as higher-risk processes, and the examination should verify that the booth maintains its design face velocity across the full working opening. The examination must also confirm that the recirculation or discharge filter is in good condition and that the airflow is sufficient to prevent glaze mist from reaching the operator's breathing zone. Safe Lee provides COSHH LEV testing for ceramics manufacturers across Stoke-on-Trent.",
    },
    {
      question:
        "Do fettling and clay-turning areas at Stoke-on-Trent potteries need LEV testing?",
      answer:
        "Yes. Fettling, turning, and finishing operations at Stoke-on-Trent pottery manufacturers generate respirable silica dust — one of the most hazardous dust fractions under COSHH 2002. Any LEV system controlling dust from these operations must be thoroughly examined and tested at least every 14 months. This includes downdraft benches, hood-equipped turning lathes, and centralised duct systems capturing dust from multiple workstations. The examination must assess whether the LEV is achieving adequate capture at each dust generation point — which requires measurement of capture velocity at the dust source, not just measurement of duct velocity at a convenient access point.",
    },
  ],

  /* ---- WAHR Barrow-in-Furness (BAE Systems submarine construction focus) ---- */
  "wahr-inspections--barrow-in-furness": [
    {
      question:
        "What WAHR inspection requirements apply to scaffolding used during submarine construction at BAE Barrow?",
      answer:
        "Scaffolding erected within the submarine construction halls at BAE Barrow — including the Devonshire Dock Hall — and at any other construction or maintenance site in Barrow-in-Furness must comply with the Work at Height Regulations 2005. All scaffolding must be inspected before first use by a competent person, after any event likely to have affected its integrity, and at intervals not exceeding 7 days while it remains in use. Given the scale and complexity of submarine construction scaffolding — often spanning multiple decks at significant heights — thorough inspection records are essential for both WAHR compliance and BAE's internal safety management systems. Safe Lee provides WAHR scaffolding inspections for construction and industrial sites across the Barrow area.",
    },
    {
      question:
        "How often do mobile elevated work platforms at Barrow construction and shipyard sites need WAHR inspections?",
      answer:
        "Mobile elevated work platforms (MEWPs) at BAE Barrow and across Barrow-in-Furness construction sites must be thoroughly examined under LOLER 1998 every 6 months, as equipment capable of lifting people. Under WAHR 2005, pre-use checks must also be completed before each use by a competent operator. The two sets of obligations apply concurrently — LOLER governs the mechanical integrity of the MEWP itself, while WAHR 2005 governs the management of the work at height activity. Safe Lee provides both LOLER and WAHR inspection services across the Barrow-in-Furness and Cumbria area.",
    },
    {
      question:
        "Are safety harnesses and lanyards on Team Barrow regeneration construction sites subject to WAHR inspection?",
      answer:
        "Yes. Safety harnesses, energy-absorbing lanyards, inertia reels, and anchor points used on Team Barrow regeneration construction sites and at BAE Systems facilities must be inspected in accordance with Work at Height Regulations 2005. Equipment must be checked before each use by the person who will wear it, and must receive a formal detailed inspection by a competent person at intervals determined by the manufacturer's instructions and the intensity of use — typically every 6 to 12 months. Any harness or lanyard that has been subjected to a fall arrest must be removed from service immediately and inspected before any return to use, regardless of its apparent condition.",
    },
  ],

  /* ---- PSSR Liverpool (food production / steam focus) ---- */
  "pssr-inspections--liverpool": [
    {
      question:
        "What does a Written Scheme of Examination cover for a steam system at a Liverpool food factory?",
      answer:
        "A Written Scheme of Examination under PSSR 2000 for a food production steam system must identify every pressure vessel, steam boiler, heat exchanger, and all associated pipework, safety valves, and protective devices that fall within its scope. For each item, the scheme specifies the nature of the examination required, the maximum interval between examinations, and any preparatory work needed before examination takes place — such as draining, cooling, or lagging removal. The scheme must be prepared or certified by a competent person and reviewed whenever there is a change in the system or its operation. Liverpool's food and drink manufacturers — many of whom operate on Knowsley Industrial Park and at Speke — use steam extensively in cooking, sterilisation, and CIP cleaning cycles, making current Written Schemes a practical operational necessity as well as a legal one.",
    },
    {
      question:
        "How often do autoclaves used in food packaging at Liverpool factories need PSSR inspections?",
      answer:
        "The inspection interval for an autoclave at a Liverpool food packaging facility is determined by the Written Scheme of Examination prepared by a competent person — there is no fixed statutory interval that applies to all autoclaves. In practice, most food-grade autoclaves are examined every 12 to 26 months depending on their operating pressure, age, and condition history. Where an autoclave operates under elevated pressures or temperatures, or has a history of corrosion or creep, the competent person will set shorter intervals. The examination must be completed before the interval expires — production schedules do not provide a legal extension.",
    },
    {
      question:
        "Does a compressed air system used for pneumatic food handling equipment at a Knowsley site need PSSR inspection?",
      answer:
        "Yes. Compressed air systems — including compressors, air receivers, aftercoolers, and associated pipework — fall within the scope of PSSR 2000 wherever the stored energy and pressure exceed the regulations' threshold. This applies to pneumatic handling equipment, filling lines, and packaging machinery on food production sites at Knowsley Industrial Park and across the Liverpool area. A competent person must prepare a Written Scheme covering the air receiver and any vessels downstream of the compressor, and the system must be examined at the intervals the scheme specifies.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  County-level service FAQs                                          */
/*                                                                      */
/*  Used on county hub pages (/loler-inspections-greater-manchester).  */
/*  Questions are scoped to the county as a whole, not to individual   */
/*  towns. Written at a higher level than LOCATION_FAQS.               */
/*                                                                      */
/*  Key structure: { [countySlug]: { [serviceSlug]: LocationFAQ[] } } */
/* ------------------------------------------------------------------ */

export const COUNTY_SERVICE_FAQS: Record<string, Record<string, LocationFAQ[]>> = {
  "greater-manchester": {
    "loler-inspections": [
      {
        question:
          "Which industries in Greater Manchester generate the most LOLER inspection requirements?",
        answer:
          "Logistics and warehousing generate the highest volume of LOLER inspections across Greater Manchester — the region hosts major distribution operations at Trafford Park, Middlebrook in Bolton, Pilsworth in Bury, and Omega in Warrington, all requiring regular examinations of forklifts, reach trucks, dock levellers, and goods lifts. Manufacturing — particularly food production on Trafford Park, engineering across Oldham and Tameside, and automotive component supply — generates LOLER requirements for overhead cranes, jib cranes, and lifting accessories. Greater Manchester's NHS trusts at Salford Royal, Stepping Hill, Tameside General, and Wythenshawe Hospital require LOLER examinations for patient hoists, bed lifts, and goods lifts. Ongoing construction across the city region's regeneration programme also creates demand for tower crane and construction hoist inspections.",
      },
      {
        question:
          "Do all Greater Manchester businesses using forklifts need LOLER thorough examinations?",
        answer:
          "Yes. Any employer in Greater Manchester that provides fork lift trucks — whether counterbalance, reach truck, VNA, or order picker — must ensure they are thoroughly examined under LOLER 1998. The examination must be carried out by a competent person at intervals of at least every 12 months for goods-only lifting, or every 6 months if the equipment can lift people. This applies equally to owned, hired, and leased vehicles — the duty falls on the employer who provides the equipment for use at work, not on the owner of the equipment. Safe Lee provides LOLER inspections for fork lift trucks and all lifting equipment across all ten Greater Manchester boroughs.",
      },
      {
        question:
          "Are lifting accessories like slings and shackles at Greater Manchester sites subject to LOLER?",
        answer:
          "Yes. Lifting accessories — including wire rope slings, chain slings, shackles, eyebolts, hook blocks, and spreader beams — are separately regulated under LOLER 1998 and must be thoroughly examined by a competent person every 6 months regardless of how frequently they are used. This is one of the most commonly overlooked compliance gaps across Greater Manchester's manufacturing and logistics sector. A thorough examination of the fork lift truck or crane itself does not cover the accessories used with it — accessories must be examined separately and have their own examination records.",
      },
    ],

    "pssr-inspections": [
      {
        question:
          "What types of pressure systems require PSSR inspection across Greater Manchester?",
        answer:
          "The most commonly inspected pressure systems across Greater Manchester include compressed air receivers and associated pipework at manufacturing, logistics, and engineering sites; steam boilers and heat exchangers at food production facilities on Trafford Park; autoclaves and sterilisation pressure vessels at NHS hospitals including Salford Royal, Tameside General, and Stepping Hill; hot water systems exceeding PSSR 2000's threshold at large commercial and industrial properties; and process pressure vessels at chemical and pharmaceutical manufacturers. A Written Scheme of Examination must be prepared by a competent person for each system, specifying the examination intervals and the scope of each examination.",
      },
      {
        question:
          "How does a Greater Manchester business establish whether its compressed air system needs a PSSR Written Scheme?",
        answer:
          "A compressed air system requires a Written Scheme of Examination under PSSR 2000 if it consists of a pressure vessel (air receiver) together with associated pipework where the product of the pressure in bar and the internal volume in litres exceeds 250 bar litres. In practice, this threshold is reached by almost all industrial air receivers. For a typical 270-litre air receiver operating at 10 bar — common across Greater Manchester's manufacturing and logistics sites — the product is 2,700 bar litres, well above the threshold. Safe Lee can assess whether your compressed air system falls within the scope of PSSR 2000 and prepare or review your Written Scheme.",
      },
    ],

    "coshh-lev-inspections": [
      {
        question:
          "Which Greater Manchester industries have the highest COSHH LEV inspection requirements?",
        answer:
          "Manufacturing industries generating hazardous airborne substances dominate LEV inspection demand across Greater Manchester. Automotive component manufacturing across Trafford Park and Eccles requires LEV testing for welding fume extraction — now classified as a Group 1 carcinogen for all welding fume types — and metalworking fluid mist. Food processing at Trafford Park, including facilities operated by Kellogg's and Princes, requires LEV testing for flour dust, spray booth ventilation, and process extraction. Woodworking businesses throughout Greater Manchester need LEV testing for hardwood and MDF dust. Vehicle refinishing businesses throughout the conurbation must test spray booth ventilation. Safe Lee tests LEV systems across all ten Greater Manchester boroughs.",
      },
      {
        question:
          "How often must LEV systems at Greater Manchester manufacturing sites be examined under COSHH?",
        answer:
          "Under COSHH 2002, all Local Exhaust Ventilation systems used to control employee exposure to hazardous substances must be thoroughly examined and tested by a competent person at least every 14 months. This is a statutory minimum — for higher-risk processes such as systems controlling welding fume, isocyanate paint spray, or silica dust, the HSE recommends more frequent examination or supplementary monitoring. The 14-month interval applies from the date of the last examination: there is no permitted extension for production schedule reasons. The examination record — including airflow measurements, system performance data, and any identified defects — must be kept for at least 5 years.",
      },
    ],

    "wahr-inspections": [
      {
        question:
          "What construction-related WAHR inspection requirements apply across Greater Manchester?",
        answer:
          "Greater Manchester's ongoing major construction activity — including the Northern Gateway development, Mayoral Development Zone sites, and continuous infrastructure and residential projects across all ten boroughs — creates substantial WAHR 2005 compliance requirements. All scaffolding used on construction sites must be inspected before first use, after any event likely to affect its stability, and at intervals not exceeding 7 days. Mobile elevated work platforms, tower scaffolds, and safety harnesses used for work at height must also be inspected at appropriate intervals. Safe Lee provides WAHR inspection services for construction sites and industrial maintenance operations across all of Greater Manchester.",
      },
    ],

    "puwer-inspections": [
      {
        question:
          "What work equipment at Greater Manchester manufacturing sites needs PUWER inspections?",
        answer:
          "PUWER 1998 covers virtually all work equipment provided by employers in Greater Manchester — from power presses and guillotines at sheet metal fabricators, through CNC machines and machining centres at precision engineering firms, to conveyor systems and automated packaging lines at food manufacturers. For machinery with specific risks — power presses, dangerous cutting machinery, and equipment where guards are critical — regular inspection by a competent person is required with written records retained for HSE inspection. The specific inspection interval is determined by risk assessment, the equipment type, and the intensity of use. Safe Lee provides PUWER inspections for manufacturing businesses across all ten Greater Manchester boroughs.",
      },
    ],
  },

  "lancashire": {
    "loler-inspections": [
      {
        question:
          "Does Lancashire's aerospace manufacturing sector have specific LOLER inspection requirements?",
        answer:
          "Yes. Aerospace manufacturing facilities across Lancashire — including BAE Systems at Warton and Samlesbury, Safran Nacelles at Heasandford in Burnley, and precision engineering firms across Preston, Blackburn, and the M65 corridor — use heavy-lift overhead cranes, precision jib cranes, and specialist lifting rigs for handling aircraft structures, wing components, and engine nacelles. These all require thorough examinations under LOLER 1998 at intervals not exceeding 12 months for goods lifting, reducing to every 6 months for any crane or hoist where the operator is lifted as part of the operation. Lifting accessories — chains, slings, shackles, and eyebolts — used in aerospace component handling must be examined every 6 months regardless of use frequency. Safe Lee provides LOLER inspections across the full Lancashire county area.",
      },
      {
        question:
          "How often must distribution centre lifting equipment across Lancashire be examined?",
        answer:
          "Fork lift trucks, reach trucks, and dock levellers at Lancashire distribution centres — including those at Burnley Bridge Business Park, Roman Way in Preston, and Whitebirk Industrial Estate in Blackburn — must be thoroughly examined by a competent person at least every 12 months under LOLER 1998. Where any lifting equipment is used to lift or carry people, the interval reduces to every 6 months. Lifting accessories — chains, slings, shackles, and eyebolts — must be examined every 6 months regardless of how frequently the item is used. Safe Lee covers all major distribution and manufacturing sites across Lancashire.",
      },
    ],

    "pssr-inspections": [
      {
        question:
          "What pressure systems in Lancashire's aerospace sector require PSSR inspections?",
        answer:
          "Lancashire's aerospace manufacturing sector operates complex pressure systems including composite-curing autoclaves at BAE Systems and Safran Nacelles (used to cure carbon fibre components under elevated temperature and pressure), compressed air systems supplying pneumatic tooling and CNC machines across the aerospace supply chain, pressure test rigs for aircraft system components, and steam systems used in surface treatment processes. All fall within the scope of PSSR 2000 where they exceed the regulations' pressure-volume threshold, requiring a Written Scheme of Examination and thorough examinations at the intervals the scheme specifies. Safe Lee provides PSSR inspection and Written Scheme services across Lancashire.",
      },
    ],

    "coshh-lev-inspections": [
      {
        question:
          "What LEV systems in Lancashire's aerospace and engineering supply chain need COSHH testing?",
        answer:
          "Lancashire's aerospace manufacturing supply chain uses Local Exhaust Ventilation to control a range of hazardous substances: welding fume extraction wherever MIG, TIG, or MMA welding is carried out (all welding fume is classified as a Group 1 carcinogen); CNC machining centre extraction for metalworking fluid mist and coolant vapour; paint and sealant application booth ventilation; and composite curing and sanding dust extraction for carbon fibre and resin dust. All these LEV systems must be thoroughly examined and tested at least every 14 months under COSHH 2002. Safe Lee provides COSHH LEV testing for aerospace manufacturers and engineering firms across the full Lancashire county area.",
      },
    ],

    "wahr-inspections": [
      {
        question:
          "What WAHR inspection requirements apply to BAE Systems construction and maintenance activities in Lancashire?",
        answer:
          "BAE Systems' facilities at Warton and Samlesbury undertake ongoing construction and maintenance activities requiring full compliance with the Work at Height Regulations 2005. All scaffolding must be inspected before first use and at intervals not exceeding 7 days. MEWPs used for maintenance tasks on aircraft and facilities must be thoroughly examined every 6 months under LOLER 1998 and subject to pre-use checks under WAHR 2005. Safety harnesses used by maintenance technicians working at height on aircraft, gantries, or roofs must be formally inspected at least every 12 months and after any fall arrest event. Safe Lee provides WAHR and LOLER inspections for construction sites and industrial maintenance operations across Lancashire.",
      },
    ],

    "puwer-inspections": [
      {
        question:
          "Do precision engineering firms in Lancashire need PUWER inspections for CNC machinery?",
        answer:
          "Yes. Precision engineering firms across Lancashire's aerospace supply chain — on Roman Way in Preston, Whitebirk in Blackburn, Heasandford in Burnley, and across the M65 corridor — must ensure all work equipment is safe, suitable, and maintained under PUWER 1998. For CNC machining centres, lathes, milling machines, and grinding machines, a risk assessment determines the appropriate inspection frequency. For equipment with specific risks — particularly power presses, guillotines, and metal-forming machinery — regular inspection by a competent person with written records is required. PUWER 1998 requires that all machinery has adequate guarding and that guards are inspected as part of any formal examination. Safe Lee provides PUWER inspections for engineering businesses across Lancashire.",
      },
    ],
  },

  "cheshire": {
    "pssr-inspections": [
      {
        question:
          "What PSSR inspection requirements apply to Bentley Motors' Crewe manufacturing facility?",
        answer:
          "Bentley Motors' Pyms Lane factory operates extensive pressure systems including compressed air networks supplying pneumatic tooling and assembly equipment across the production line, steam and hot water systems used in surface treatment and paint processes, and pressure test rigs for engine and drivetrain components. All fall within the scope of PSSR 2000 and require Written Schemes of Examination prepared by a competent person. Safe Lee provides PSSR inspection services for automotive manufacturers and their supply chain businesses across the Cheshire area.",
      },
    ],
    "loler-inspections": [
      {
        question:
          "Do businesses in Warrington's nuclear sector cluster at Birchwood Park need LOLER inspections?",
        answer:
          "Yes. Birchwood Park businesses involved in nuclear decommissioning engineering, component manufacture, and specialist services use overhead cranes, precision lift equipment, and handling systems for nuclear components — all of which require thorough examinations under LOLER 1998. Given that this equipment may be used to handle radioactive or specialist components where a lifting failure would have serious consequences, robust LOLER compliance is particularly critical. Safe Lee provides LOLER inspection services across the Warrington and Cheshire area.",
      },
    ],
  },

  "cumbria": {
    "loler-inspections": [
      {
        question:
          "What lifting equipment at BAE Systems' Barrow shipyard needs LOLER thorough examinations?",
        answer:
          "BAE Systems' Barrow-in-Furness shipyard — the UK's only nuclear submarine construction facility — operates some of the most demanding lifting equipment in UK industry. The 4,500-tonne overhead gantry cranes in the Devonshire Dock Hall, used for lifting submarine hull sections, require thorough examinations under LOLER 1998 at intervals not exceeding 12 months, with 6-monthly examinations for any equipment used to position people. Lifting accessories including spreader beams, slings, and shackles used in submarine assembly must be examined every 6 months. The entire lifting inventory — from the largest hall cranes to the smallest shackle — must have current examination records. Safe Lee provides LOLER inspection services across the Barrow and Cumbria area.",
      },
    ],
    "pssr-inspections": [
      {
        question:
          "What pressure system inspection requirements apply to Pirelli's Carlisle tyre factory?",
        answer:
          "Pirelli's Dalton Road factory in Carlisle — operating continuously across multiple shifts — uses vulcanisation pressure vessels and steam curing systems for tyre manufacturing. These fall within the scope of PSSR 2000 and require Written Schemes of Examination specifying the nature and frequency of thorough examinations. Compressed air systems supplying pneumatic handling equipment, compressors, and building machinery also require inspection under the regulations. Safe Lee provides PSSR inspection and Written Scheme services for manufacturing businesses across the Carlisle and Cumbria area.",
      },
    ],
  },

  "staffordshire": {
    "coshh-lev-inspections": [
      {
        question:
          "What COSHH LEV testing is required for silica dust control across Stoke-on-Trent's ceramics industry?",
        answer:
          "Every LEV system used to control silica dust at Stoke-on-Trent ceramics manufacturers — from clay body preparation and glaze mixing through to kiln loading and fettling operations — must be thoroughly examined and tested by a competent person at least every 14 months under COSHH 2002. Silica dust is classified by the HSE as a Group 1 carcinogen, placing these systems among the highest-priority LEV types for enforcement attention. The examination must verify capture velocity at each hood, measure duct airflow, check fan performance, and confirm filter integrity — not merely check that the system is running. An LEV system that is running but performing below its design specification provides inadequate protection even if visually intact. Safe Lee provides COSHH LEV testing for ceramics manufacturers and industrial businesses across the Stoke-on-Trent and Staffordshire area.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  selectCountyFaqsForPage                                             */
/*  Returns FAQs for a county hub page given a service slug and        */
/*  county slug. Returns empty array for combinations not yet covered. */
/* ------------------------------------------------------------------ */

export function selectCountyFaqsForPage(
  serviceSlug: string,
  countySlug: string,
  limit = 3
): LocationFAQ[] {
  return (COUNTY_SERVICE_FAQS[countySlug]?.[serviceSlug] ?? []).slice(0, limit);
}

/* ------------------------------------------------------------------ */
/*  Service relevance keywords — used to filter LOCATION_FAQS when    */
/*  no SERVICE_LOCATION_FAQS entry exists for the page                 */
/* ------------------------------------------------------------------ */

const SERVICE_FAQ_KEYWORDS: Record<string, string[]> = {
  "pssr-inspections": [
    "pssr", "pressure", "boiler", "autoclave", "compressor",
    "steam", "written scheme", "air receiver",
  ],
  "loler-inspections": [
    "loler", "lifting", "forklift", "crane", "hoist", "lift",
    "sling", "chain", "dock leveller",
  ],
  "wahr-inspections": [
    "wahr", "height", "scaffold", "harness", "fall", "mewp",
    "ladder", "tower", "guardrail",
  ],
  "puwer-inspections": [
    "puwer", "work equipment", "machinery", "press", "conveyor",
    "guarding", "machine", "lathe", "cnc",
  ],
  "coshh-lev-inspections": [
    "coshh", "lev", "extraction", "ventilation", "fume",
    "dust", "spray", "hazardous", "exhaust",
  ],
};

/* ------------------------------------------------------------------ */
/*  selectFaqsForPage                                                   */
/*  Priority order:                                                     */
/*  1. SERVICE_LOCATION_FAQS["service--location"]                      */
/*  2. LOCATION_FAQS[location] filtered by service keywords            */
/*  3. All LOCATION_FAQS[location] entries (unfiltered fallback)       */
/* ------------------------------------------------------------------ */

export function selectFaqsForPage(
  serviceSlug: string,
  locationSlug: string,
  limit = 3
): LocationFAQ[] {
  // 1. Most specific — service + location pair
  const specific = SERVICE_LOCATION_FAQS[`${serviceSlug}--${locationSlug}`];
  if (specific?.length) return specific.slice(0, limit);

  // 2. Filter location FAQs by service keywords
  const locationFaqs = LOCATION_FAQS[locationSlug] ?? [];
  const keywords = SERVICE_FAQ_KEYWORDS[serviceSlug] ?? [];

  if (keywords.length && locationFaqs.length) {
    const filtered = locationFaqs.filter((faq) => {
      const text = `${faq.question} ${faq.answer}`.toLowerCase();
      return keywords.some((kw) => text.includes(kw));
    });
    if (filtered.length) return filtered.slice(0, limit);
  }

  // 3. No service-relevant FAQs found for this location.
  //    Return empty rather than showing questions about a different
  //    service on this page. A WAHR-Manchester page must not display
  //    LOLER or PSSR location FAQs just because the keyword filter
  //    found no WAHR match — that would contaminate the FAQSchema with
  //    content irrelevant to the page's service.
  return [];
}
