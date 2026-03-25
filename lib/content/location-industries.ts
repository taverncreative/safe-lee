/* ------------------------------------------------------------------ */
/*  Location-specific industry mappings with relevance context         */
/*  Each relevance note references real local business/industrial      */
/*  landmarks specific to that location.                               */
/* ------------------------------------------------------------------ */

export interface LocationIndustry {
  industry: string;
  slug: string;
  relevance: string;
}

export const LOCATION_INDUSTRIES: Record<string, LocationIndustry[]> = {
  manchester: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Manchester's Trafford Park industrial estate is home to over 1,400 businesses including Kellogg's, Unilever, and Procter & Gamble, all requiring regular statutory inspections of pressure systems, lifting equipment, and LEV systems.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Amazon, DHL, and hundreds of distribution firms operate from Trafford Park, using forklifts, goods lifts, pallet racking systems, and conveyors that require LOLER and PUWER inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Manchester has one of the most active construction sectors outside London, with major projects across the city centre, Ancoats, and NOMA requiring WAHR inspections of scaffolding, harnesses, and fall arrest systems.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Manchester Royal Infirmary, Wythenshawe Hospital, and the Christie NHS Foundation Trust all operate pressure vessels, autoclaves, and lifting equipment requiring regular statutory inspections.",
    },
  ],

  irlam: [
    {
      industry: "Food & Beverage",
      slug: "food-beverage",
      relevance:
        "Kingsland Wine & Spirits, the UK's largest independent wine bottler, operates from a 35-acre site in Irlam employing 300 people, requiring LEV testing for bottling fume extraction and LOLER inspections for warehouse lifting equipment.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Northbank Industrial Park on the former Partington Steel & Iron Company site hosts manufacturing businesses that require ongoing PSSR, LOLER, and PUWER inspections for industrial machinery.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "The Irlam and Cadishead industrial area along the Manchester Ship Canal corridor supports logistics operations using forklifts, overhead cranes, and goods lifts that fall under LOLER 1998 requirements.",
    },
  ],

  salford: [
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Salford Quays and the MediaCityUK expansion have driven sustained construction activity, with contractors requiring WAHR inspections for work at height equipment and LOLER examinations for tower cranes.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Industrial areas along Barton Dock Road and Agecroft Commerce Park host manufacturing firms requiring regular PSSR inspections of compressed air systems and PUWER assessments of workshop machinery.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Salford Royal Hospital (now part of the Northern Care Alliance) operates autoclaves, sterilisation pressure vessels, and patient lifting equipment requiring statutory thorough examinations under PSSR 2000 and LOLER 1998.",
    },
  ],

  bolton: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Bolton's Middlebrook and Horwich Loco industrial estates host engineering and manufacturing businesses using lathes, CNC machines, and press tools that require regular PUWER inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Bolton's regeneration programme, including the redevelopment of the former Horwich Loco Works into 1,700 homes, generates demand for WAHR inspections of scaffolding, ladders, and fall protection systems.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "The Lostock Industrial Estate and Middlebrook area serve as distribution hubs with businesses like Scan Computers operating from Enterprise Park, requiring LOLER inspections for forklifts and warehouse lifting equipment.",
    },
  ],

  wigan: [
    {
      industry: "Food & Beverage",
      slug: "food-beverage",
      relevance:
        "The Kraft Heinz Kitt Green facility — the world's largest Heinz factory — produces over one billion cans annually and operates pressure systems, steam boilers, and LEV extraction requiring PSSR and COSHH inspections.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Wigan's industrial areas at Ince-in-Makerfield and Martland Park host manufacturing firms using overhead cranes, compressors, and industrial machinery requiring LOLER, PSSR, and PUWER inspections.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Kraft Heinz operates freight rail services into Wigan's distribution centre, and surrounding logistics firms use forklifts, dock levellers, and goods lifts that require regular LOLER examinations.",
    },
  ],

  stockport: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Bredbury Park Industrial Estate near Junction 25 of the M60 houses manufacturing businesses using pressure vessels, compressed air systems, and work equipment requiring PSSR, PUWER, and LOLER inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Stockport's ongoing town centre regeneration and the proposed 500,000 sq ft Bredbury Gateway development generate significant demand for WAHR inspections of scaffolding and fall arrest systems.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Stepping Hill Hospital operates sterilisation equipment, autoclaves, and patient hoists that require regular PSSR and LOLER thorough examinations.",
    },
  ],

  oldham: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Oldham's Broadgate Business Park and Hollinwood Business District host engineering firms with roots in Ferranti's precision manufacturing legacy, operating lathes, mills, and presses requiring PUWER inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Regeneration projects at Hollinwood Junction and Foxdenton create demand for WAHR inspections, with contractors working at height on new-build industrial and residential developments.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Oldham Broadway Business Park near the M60 serves distribution operators using forklifts, scissor lifts, and pallet racking systems that require LOLER thorough examinations.",
    },
  ],

  rochdale: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Kingsway Business Park — part of the Atom Valley advanced manufacturing mega-cluster — hosts Takeuchi Manufacturing and other firms requiring PSSR, LOLER, and LEV inspections across 3.4 million sq ft of commercial floorspace.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Stakehill Industrial Estate's occupiers including CEVA Logistics, Footasylum, and Toolstation operate forklifts, conveyor systems, and goods lifts that require regular LOLER examinations.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "The Atom Valley development will deliver 17.3 million sq ft of employment space, generating sustained demand for WAHR inspections across construction sites throughout the Rochdale area.",
    },
  ],

  bury: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Bury's Chamberhall Business Park and Pilsworth Industrial Estate host manufacturers including Tetrosyl (car care products) and Polyflor (vinyl flooring), both operating machinery and pressure systems requiring PUWER and PSSR inspections.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "JD Sports — headquartered in Bury — and TNT UK operate major distribution centres with forklifts, conveyor systems, and automated storage requiring regular LOLER and PUWER examinations.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Phase two development at Chamberhall Business Park and ongoing regeneration across the borough create demand for WAHR inspections of work at height equipment on construction sites.",
    },
  ],

  tameside: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Tameside's industrial estates in Denton, Hyde, and Hattersley maintain the borough's manufacturing heritage, with engineering firms operating overhead cranes, compressed air systems, and industrial machinery requiring statutory inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Ashton Moss commercial developments and residential schemes across the borough require WAHR inspections for scaffolding, mobile elevated work platforms, and fall arrest systems.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Tameside General Hospital operates autoclaves, sterilisation units, and patient hoists that require thorough examinations under PSSR 2000 and LOLER 1998.",
    },
  ],

  trafford: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Trafford Park hosts over 1,400 businesses across 1,200 acres, with major manufacturers including Kellogg's and Procter & Gamble requiring inspections of pressure vessels, boilers, lifting equipment, and LEV systems.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Amazon, DHL, and Adidas operate large distribution centres on Trafford Park, using automated conveyors, forklifts, dock levellers, and racking systems requiring LOLER and PUWER inspections.",
    },
    {
      industry: "Food & Beverage",
      slug: "food-beverage",
      relevance:
        "Kellogg's has manufactured cereals on Trafford Park since 1938, operating high-pressure steam systems, batch processing vessels, and LEV extraction systems subject to PSSR and COSHH regulations.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "The Trafford Park Metrolink extension and ongoing commercial development generate demand for WAHR inspections of tower cranes, scaffolding, and work at height equipment.",
    },
  ],

  eccles: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Eccles' Patricroft and Peel Green industrial areas host light manufacturing businesses operating compressed air systems, workshop machinery, and lifting equipment requiring PSSR, PUWER, and LOLER inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Development around the former Barton Dock area and Eccles town centre regeneration create ongoing demand for WAHR inspections of scaffolding and mobile elevated work platforms.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Barton Business Park on Barton Dock Road supports logistics and distribution businesses using forklifts and goods lifts that require regular LOLER thorough examinations.",
    },
  ],

  urmston: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Urmston's proximity to Trafford Park means local manufacturing businesses benefit from the industrial estate's supply chains while operating their own machinery requiring PUWER and PSSR inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Residential and commercial development in Urmston and neighbouring Flixton generates demand for WAHR inspections of scaffolding, ladders, and fall protection equipment.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "The Flixton area south of Urmston hosts distribution businesses with access to the M60, using forklifts and lifting accessories that require LOLER thorough examinations.",
    },
  ],

  stretford: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Stretford borders Trafford Park, and local manufacturing businesses along the Chester Road corridor operate work equipment and pressure systems requiring PUWER and PSSR inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "The ongoing Stretford town centre masterplan and new-build developments require WAHR inspections for work at height equipment including scaffolding, harnesses, and guardrails.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Trafford General Hospital in Stretford (the birthplace of the NHS in 1948) operates pressure vessels, autoclaves, and patient lifting equipment requiring statutory inspections.",
    },
  ],

  sale: [
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Sale's healthcare facilities and nearby Wythenshawe Hospital operate sterilisation equipment, patient hoists, and pressure vessels requiring PSSR and LOLER inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Residential development along the Metrolink corridor through Sale creates demand for WAHR inspections of scaffolding and mobile elevated work platforms on construction sites.",
    },
    {
      industry: "Education",
      slug: "education",
      relevance:
        "Sale's schools and further education facilities operate boiler systems, workshop equipment, and maintenance lifting gear requiring regular statutory inspections under PSSR and LOLER.",
    },
  ],

  altrincham: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Altrincham's Broadheath industrial area near the Bridgewater Canal has hosted engineering firms since the Victorian era, operating lathes, presses, and compressed air systems requiring PUWER and PSSR inspections.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Altrincham Hospital and local healthcare facilities use autoclaves, sterilisation pressure vessels, and patient hoists requiring statutory thorough examinations.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Altrincham's town centre regeneration and commercial development in Broadheath generate demand for WAHR inspections of scaffolding and work at height equipment.",
    },
  ],

  leigh: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Leigh Commerce Park and Butts Mill Way support manufacturing businesses using industrial machinery, overhead cranes, and compressed air systems requiring PUWER, LOLER, and PSSR inspections.",
    },
    {
      industry: "Food & Beverage",
      slug: "food-beverage",
      relevance:
        "Leigh's proximity to the Kraft Heinz Kitt Green factory means the area's food supply chain businesses operate pressure vessels, steam systems, and extraction ventilation requiring PSSR and COSHH LEV inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "The guided busway corridor and new-build developments in Leigh generate demand for WAHR inspections of scaffolding, harnesses, and fall arrest systems.",
    },
  ],

  "ashton-under-lyne": [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Ashton Moss and Guide Bridge industrial areas host engineering and manufacturing businesses using overhead cranes, press tools, and compressed air systems requiring LOLER, PUWER, and PSSR inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Ashton-under-Lyne's town centre regeneration and the expanding Ashton Moss commercial area require WAHR inspections of scaffolding and mobile elevated work platforms.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Tameside General Hospital near Ashton-under-Lyne operates autoclaves, sterilisation pressure vessels, and patient lifting equipment requiring statutory thorough examinations.",
    },
  ],

  liverpool: [
    {
      industry: "Automotive",
      slug: "automotive",
      relevance:
        "Jaguar Land Rover's Halewood plant produces the Range Rover Evoque and Discovery Sport, operating robotic assembly lines, overhead cranes, press tools, and paint shop LEV systems requiring comprehensive statutory inspections.",
    },
    {
      industry: "Maritime",
      slug: "maritime",
      relevance:
        "The Port of Liverpool and Liverpool2 deep-water container terminal operate ship-to-shore cranes, straddle carriers, and dock-side lifting equipment requiring regular LOLER thorough examinations.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Knowsley Industrial Park and Speke Boulevard host manufacturing firms including Adient (car seat assembly for JLR), operating pressing, welding, and assembly equipment requiring PUWER inspections.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "The Royal Liverpool University Hospital, Alder Hey Children's Hospital, and Aintree University Hospital operate pressure vessels, autoclaves, and patient lifting equipment requiring statutory inspections.",
    },
  ],

  "st-helens": [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Pilkington's Greengate Works continues to manufacture flat glass in St Helens, pioneering hydrogen-fired glass production. The furnaces, molten tin baths, and overhead cranes require regular PSSR, LOLER, and PUWER inspections.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Haydock Industrial Estate serves as a major distribution hub in the St Helens borough, with occupiers using forklifts, pallet racking, and goods lifts requiring LOLER examinations.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Redevelopment of former Pilkington sites and new commercial developments at Ravenhead Business Park generate demand for WAHR inspections of scaffolding and work at height equipment.",
    },
  ],

  southport: [
    {
      industry: "Leisure",
      slug: "leisure",
      relevance:
        "Southport's tourism and leisure economy includes Pleasureland amusement park, the Marine Way Bridge area, and numerous hospitality venues operating kitchen extraction systems, pressure vessels, and passenger lifts requiring LEV, PSSR, and LOLER inspections.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Southport & Formby District General Hospital operates autoclaves, sterilisation equipment, and patient lifting hoists requiring regular PSSR and LOLER thorough examinations.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Southport's seafront regeneration projects and new-build developments at Blowick Business Park require WAHR inspections for work at height equipment and fall protection systems.",
    },
  ],

  widnes: [
    {
      industry: "Petrochemical",
      slug: "petrochemical",
      relevance:
        "Widnes has been a centre of chemical manufacturing since 1847. INEOS operates one of Europe's largest chlor-alkali plants at nearby Runcorn, and chemical firms across Halton require PSSR inspections of pressure vessels, reactors, and pipework, plus COSHH LEV testing of fume extraction systems.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "The chemical supply chain in Widnes and Runcorn includes firms like Sigmatex (carbon fibre textiles) and Whitford (speciality coatings), operating industrial machinery and pressure systems requiring PUWER and PSSR inspections.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "3MG Widnes Freeport — one of only eight English Freeports — is a major multimodal freight terminal where businesses use overhead cranes, forklifts, and container handling equipment requiring LOLER examinations.",
    },
  ],

  preston: [
    {
      industry: "Aerospace",
      slug: "aerospace",
      relevance:
        "BAE Systems' Warton Aerodrome assembles the Eurofighter Typhoon, while the Samlesbury site manufactures F-35 Lightning II components. These facilities operate clean rooms, autoclaves, overhead cranes, and robotic systems requiring comprehensive PSSR, LOLER, and PUWER inspections.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Preston's Roman Way Industrial Estate and the wider aerospace supply chain host precision engineering firms using CNC machines, lathes, and pressure systems requiring regular PUWER and PSSR inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Preston's City Deal regeneration programme and new-build developments require WAHR inspections of scaffolding, tower cranes, and fall arrest systems across active construction sites.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "Royal Preston Hospital operates autoclaves, sterilisation pressure vessels, and patient lifting equipment requiring statutory thorough examinations under PSSR 2000 and LOLER 1998.",
    },
  ],

  blackburn: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Blackburn's Whitebirk Industrial Estate and Shadsworth Business Park host engineering and manufacturing firms operating overhead cranes, compressed air systems, and industrial machinery requiring LOLER, PSSR, and PUWER inspections.",
    },
    {
      industry: "Aerospace",
      slug: "aerospace",
      relevance:
        "BAE Systems' Samlesbury Aerodrome is located between Blackburn and Preston, and the local aerospace supply chain includes precision engineering firms requiring regular PUWER and PSSR inspections of workshop equipment.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Blackburn's town centre regeneration and new industrial developments along the M65 corridor create demand for WAHR inspections of scaffolding, harnesses, and guardrails.",
    },
  ],

  burnley: [
    {
      industry: "Aerospace",
      slug: "aerospace",
      relevance:
        "Safran Nacelles employs over 900 people at Heasandford Industrial Estate manufacturing composites and sheet metal nacelle components for Airbus aircraft, requiring PSSR inspections of autoclaves and LOLER examinations of overhead cranes.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Burnley Bridge Business Park and the Aerospace Supplier Park host advanced manufacturing firms including GE's Unison Engine Components and TRW Automotive, all operating machinery requiring regular PUWER and LOLER inspections.",
    },
    {
      industry: "Automotive",
      slug: "automotive",
      relevance:
        "TRW Automotive and Futaba-Tenneco UK manufacture automotive components in Burnley, using press tools, welding equipment, and industrial robots requiring PUWER inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "The 70-acre Burnley Bridge Business Park development and expansion of the Aerospace Supplier Park generate demand for WAHR inspections on active construction sites.",
    },
  ],

  blackpool: [
    {
      industry: "Leisure",
      slug: "leisure",
      relevance:
        "Blackpool's tourism infrastructure includes the Blackpool Tower, Pleasure Beach, and the Illuminations, all operating ride systems, lifting equipment, and electrical installations requiring LOLER and PUWER inspections.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "The Blackpool Airport Enterprise Zone targets advanced manufacturing and engineering sectors, with businesses on the Squires Gate Industrial Estate operating machinery requiring PUWER and PSSR inspections.",
    },
    {
      industry: "Food & Beverage",
      slug: "food-beverage",
      relevance:
        "Blackpool's food and drink manufacturing sector operates within the Enterprise Zone, using steam boilers, pressure vessels, and extraction ventilation systems requiring PSSR and COSHH LEV inspections.",
    },
  ],

  lancaster: [
    {
      industry: "Energy",
      slug: "energy",
      relevance:
        "Heysham Nuclear Power Station — the only UK site with two operational nuclear stations — operates complex pressure systems, lifting equipment, and safety-critical infrastructure requiring rigorous PSSR and LOLER inspections.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "White Lund Industrial Estate, the district's largest at 247 acres, hosts manufacturing firms using compressed air systems, overhead cranes, and industrial machinery requiring PSSR, LOLER, and PUWER inspections.",
    },
    {
      industry: "Education",
      slug: "education",
      relevance:
        "Lancaster University operates engineering workshops, research laboratories, and campus maintenance facilities with pressure systems and lifting equipment requiring statutory inspections.",
    },
  ],

  warrington: [
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Omega Business Park — one of Europe's largest at 575 acres on the former RAF Burtonwood site — hosts major distribution operations using forklifts, dock levellers, conveyors, and automated storage requiring LOLER and PUWER inspections.",
    },
    {
      industry: "Energy",
      slug: "energy",
      relevance:
        "Birchwood Park is a centre of excellence for the nuclear sector, with over 165 companies and 6,000 employees working on nuclear decommissioning and power generation projects requiring PSSR inspections of safety-critical pressure equipment.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Warrington's industrial estates along the M62 and M6 corridors host manufacturing businesses including Hoover Candy at Birchwood Park, operating production lines and machinery requiring PUWER inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "The ongoing expansion of Omega Business Park and Fiddlers Ferry power station redevelopment create sustained demand for WAHR inspections of scaffolding and work at height equipment.",
    },
  ],

  chester: [
    {
      industry: "Aerospace",
      slug: "aerospace",
      relevance:
        "Airbus' Broughton factory near Chester assembles wings for the entire Airbus commercial aircraft family, with around 6,000 workers using autoclaves, overhead cranes, and precision machinery requiring PSSR, LOLER, and PUWER inspections.",
    },
    {
      industry: "Energy",
      slug: "energy",
      relevance:
        "The Deeside and Capenhurst area near Chester hosts a nuclear technology cluster, with Urenco operating a uranium enrichment facility requiring PSSR inspections of safety-critical pressure systems.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Sealand Industrial Estate and Deeside Industrial Park host manufacturing firms in the Airbus supply chain, operating CNC machines, composite layup equipment, and compressed air systems requiring PUWER and PSSR inspections.",
    },
    {
      industry: "Healthcare",
      slug: "healthcare",
      relevance:
        "The Countess of Chester Hospital operates autoclaves, sterilisation equipment, and patient lifting hoists requiring regular thorough examinations under PSSR 2000 and LOLER 1998.",
    },
  ],

  crewe: [
    {
      industry: "Automotive",
      slug: "automotive",
      relevance:
        "Bentley Motors' Pyms Lane factory is the sole global manufacturing site for all Bentley vehicles, operating paint shop LEV systems, robotic assembly lines, press tools, and overhead cranes requiring COSHH LEV, LOLER, and PUWER inspections.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Crewe's automotive supply chain businesses on Weston Road Industrial Estate and Basford East operate precision machining equipment, compressed air systems, and welding fume extraction requiring PUWER, PSSR, and COSHH LEV inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "The HS2 Crewe hub development and expansion of Crewe Business Park generate demand for WAHR inspections of scaffolding, tower cranes, and fall arrest systems on major construction sites.",
    },
  ],

  carlisle: [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Pirelli's Dalton Road factory — one of only two Pirelli tyre plants in the UK — operates 24 hours a day with over 850 employees, using rubber mixing machinery, vulcanisation pressure systems, and overhead cranes requiring PSSR, PUWER, and LOLER inspections.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Kingmoor Park Enterprise Zone hosts over 150 businesses including DPD and UPS, with logistics operations using forklifts, goods lifts, and dock equipment requiring LOLER thorough examinations.",
    },
    {
      industry: "Energy",
      slug: "energy",
      relevance:
        "Carlisle serves as a supply hub for Cumbria's nuclear cluster including Sellafield, with Kingmoor Park businesses involved in nuclear decommissioning and energy supply chain operations requiring PSSR inspections.",
    },
  ],

  "barrow-in-furness": [
    {
      industry: "Maritime",
      slug: "maritime",
      relevance:
        "BAE Systems Submarines employs 14,500 people at Barrow, building all Royal Navy nuclear submarines including Astute-class, Dreadnought-class, and SSN-AUKUS boats. The Devonshire Dock Hall operates heavy-lift cranes, pressure testing equipment, and reactor components requiring comprehensive LOLER, PSSR, and PUWER inspections.",
    },
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "The submarine supply chain in Barrow supports engineering firms manufacturing precision components, pipes, and structural assemblies using CNC machines, welding equipment, and pressure testing rigs requiring PUWER, PSSR, and COSHH LEV inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "Team Barrow's £220M programme to overhaul housing, transport, and infrastructure, alongside £1 billion of BAE Systems site investment, generates major demand for WAHR inspections of scaffolding, tower cranes, and work at height equipment.",
    },
  ],

  "stoke-on-trent": [
    {
      industry: "Manufacturing",
      slug: "manufacturing",
      relevance:
        "Stoke-on-Trent — the World Capital of Ceramics — is home to Wedgwood, Portmeirion, Emma Bridgewater, and Burleigh, all operating kilns, compressed air systems, and glaze-handling equipment requiring PSSR, PUWER, and COSHH LEV inspections.",
    },
    {
      industry: "Food & Beverage",
      slug: "food-beverage",
      relevance:
        "Stoke-on-Trent's food manufacturing sector operates from industrial estates around Festival Park and Sideway, using steam boilers, pressure cookers, and extraction ventilation requiring PSSR and COSHH LEV inspections.",
    },
    {
      industry: "Construction",
      slug: "construction",
      relevance:
        "The regeneration of former pottery sites including the Spode Works creative village and Etruria Valley redevelopment generate demand for WAHR inspections of scaffolding and fall protection systems.",
    },
    {
      industry: "Logistics & Warehousing",
      slug: "warehousing",
      relevance:
        "Distribution centres around the A500 corridor and Festival Park use forklifts, goods lifts, and pallet racking systems requiring regular LOLER and PUWER inspections.",
    },
  ],
};
