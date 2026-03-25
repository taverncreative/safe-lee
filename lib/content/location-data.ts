/* ------------------------------------------------------------------ */
/*  Location enrichment data — real context for all 33 NW locations   */
/*  Population figures: 2021 Census (ONS)                             */
/*  Business context: researched and verified                         */
/* ------------------------------------------------------------------ */

export interface LocationEnrichment {
  population: number;
  businessContext: string;
  keyAreas: string[];
  primaryIndustries: string[];
  localLandmarks: string;
}

export const LOCATION_DATA: Record<string, LocationEnrichment> = {
  manchester: {
    population: 553230,
    businessContext:
      "Manchester is the economic capital of the North West, home to Trafford Park — Europe's largest industrial estate — with over 1,400 businesses employing 40,000 people across manufacturing, logistics, and distribution.",
    keyAreas: [
      "Trafford Park",
      "Manchester Airport City",
      "Ancoats & New Islington",
      "Piccadilly Basin",
      "Ardwick Industrial Area",
    ],
    primaryIndustries: [
      "manufacturing",
      "logistics",
      "construction",
      "healthcare",
    ],
    localLandmarks:
      "Trafford Park — Europe's largest industrial estate, home to Kellogg's, Amazon, and Unilever",
  },

  irlam: {
    population: 19600,
    businessContext:
      "Irlam sits on the north bank of the Manchester Ship Canal and has a strong industrial heritage rooted in steelmaking and chemicals. The former steelworks site is now the Northbank Industrial Park, and Kingsland Wine & Spirits — the UK's largest independent wine bottler — operates from a 35-acre site here.",
    keyAreas: [
      "Northbank Industrial Park",
      "Irlam & Cadishead Industrial Area",
      "Manchester Ship Canal corridor",
    ],
    primaryIndustries: [
      "manufacturing",
      "food-beverage",
      "warehousing",
      "logistics",
    ],
    localLandmarks:
      "Northbank Industrial Park — built on the former Partington Steel & Iron Company steelworks site",
  },

  salford: {
    population: 269900,
    businessContext:
      "Salford has seen the fastest population growth in the North of England, driven by the MediaCityUK development at Salford Quays. The city retains significant industrial areas alongside Barton Dock Road and the Manchester Ship Canal corridor.",
    keyAreas: [
      "MediaCityUK & Salford Quays",
      "Barton Business Park",
      "Agecroft Commerce Park",
      "Salford Innovation Triangle",
      "Irlam & Cadishead Industrial Area",
    ],
    primaryIndustries: [
      "construction",
      "manufacturing",
      "warehousing",
      "healthcare",
    ],
    localLandmarks:
      "MediaCityUK — 200-acre mixed-use development and home to BBC North",
  },

  bolton: {
    population: 287550,
    businessContext:
      "Bolton's economy has transitioned from textile manufacturing to a mix of logistics, engineering, and services. The Middlebrook area near Horwich provides major employment, while the town's former Horwich Loco Works site has been redeveloped as an industrial estate.",
    keyAreas: [
      "Middlebrook Business Park",
      "Horwich Loco Industrial Estate",
      "Lostock Industrial Estate",
      "Bolton Enterprise Centre",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "warehousing",
      "logistics",
    ],
    localLandmarks:
      "Horwich Loco Works — former Lancashire and Yorkshire Railway works built in 1886, now an industrial estate",
  },

  wigan: {
    population: 329329,
    businessContext:
      "Wigan is home to the Kraft Heinz Kitt Green facility — the largest Heinz factory in the world — producing over one billion cans of food annually. The borough has strong logistics and food manufacturing sectors supported by excellent M6 and M58 connectivity.",
    keyAreas: [
      "Kitt Green Industrial Area",
      "Wigan Pier Quarter",
      "Martland Park",
      "Ince-in-Makerfield Industrial Area",
      "Leigh Commerce Park",
    ],
    primaryIndustries: [
      "food-beverage",
      "manufacturing",
      "warehousing",
      "logistics",
    ],
    localLandmarks:
      "Kraft Heinz Kitt Green — the largest Heinz food processing plant in the world, opened in 1959",
  },

  stockport: {
    population: 293423,
    businessContext:
      "Stockport benefits from strong connectivity via the M60 orbital motorway, with Bredbury Park Industrial Estate serving as a key hub for manufacturing and logistics occupiers. The town has a growing digital and tech sector alongside traditional engineering.",
    keyAreas: [
      "Bredbury Park Industrial Estate",
      "Cheadle Royal Business Park",
      "Stockport Trading Estate",
      "Hazel Grove Industrial Area",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "warehousing",
      "healthcare",
    ],
    localLandmarks:
      "Bredbury Park Industrial Estate — major industrial hub at Junction 25 of the M60",
  },

  oldham: {
    population: 237110,
    businessContext:
      "Oldham's industrial heritage is rooted in cotton milling and engineering. Today, the Hollinwood Business District near Junction 22 of the M60 and the Broadgate Business Park in Chadderton provide modern industrial and logistics space, while Ferranti's legacy endures through precision engineering firms.",
    keyAreas: [
      "Hollinwood Business District",
      "Broadgate Business Park",
      "Chadderton Industrial Area",
      "Oldham Broadway Business Park",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "warehousing",
      "healthcare",
    ],
    localLandmarks:
      "Broadgate Business Park — built on the former Chadderton Power Station site",
  },

  rochdale: {
    population: 222412,
    businessContext:
      "Rochdale is home to Kingsway Business Park — one of the UK's largest at 420 acres — and Stakehill Industrial Estate, both forming part of the Atom Valley Mayoral Development Zone. Major occupiers include Amazon, JD Group, and ASDA Wincanton.",
    keyAreas: [
      "Kingsway Business Park",
      "Stakehill Industrial Estate",
      "Atom Valley Development Zone",
      "Sandbrook Park",
    ],
    primaryIndustries: [
      "manufacturing",
      "warehousing",
      "logistics",
      "construction",
    ],
    localLandmarks:
      "Kingsway Business Park — 420-acre site and part of the Atom Valley advanced manufacturing mega-cluster",
  },

  bury: {
    population: 193851,
    businessContext:
      "Bury's economy benefits from excellent M66 motorway access, with Pilsworth Industrial Estate and Chamberhall Business Park providing modern industrial accommodation. Major employers include JD Sports (headquartered here), Tetrosyl, and Polyflor.",
    keyAreas: [
      "Pilsworth Industrial Estate",
      "Chamberhall Business Park",
      "Bridge Hall Industrial Park",
      "Warth Industrial Estate",
      "Peel Industrial Estate",
    ],
    primaryIndustries: [
      "manufacturing",
      "warehousing",
      "construction",
      "logistics",
    ],
    localLandmarks:
      "Chamberhall Business Park — purpose-built modern industrial park on Harvard Road",
  },

  tameside: {
    population: 231073,
    businessContext:
      "Tameside encompasses industrial towns including Ashton-under-Lyne, Stalybridge, Denton, and Hyde. The borough has a strong manufacturing and engineering heritage, with modern industrial estates serving the logistics and distribution sectors via the M60 and M67 corridors.",
    keyAreas: [
      "Ashton Moss Business Park",
      "Denton Industrial Area",
      "Hyde Industrial Area",
      "Hattersley Industrial Estate",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "warehousing",
      "healthcare",
    ],
    localLandmarks:
      "Ashton Moss — major commercial area at Junction 23 of the M60",
  },

  trafford: {
    population: 235052,
    businessContext:
      "Trafford borough contains Europe's largest industrial estate at Trafford Park, home to over 1,400 businesses and major names including Kellogg's, Amazon, and DHL. The borough also includes the Trafford Centre and Manchester United's Old Trafford stadium.",
    keyAreas: [
      "Trafford Park Industrial Estate",
      "Trafford Centre",
      "Carrington Business Park",
      "Broadheath Industrial Area",
      "Altrincham Business Park",
    ],
    primaryIndustries: [
      "manufacturing",
      "warehousing",
      "logistics",
      "food-beverage",
    ],
    localLandmarks:
      "Trafford Park — the world's first planned industrial estate, established in 1896",
  },

  eccles: {
    population: 37685,
    businessContext:
      "Eccles sits within the City of Salford, positioned between the M602 motorway and the Manchester Ship Canal. The area has transitioned from its textile and foundry heritage to modern business use, with Barton Business Park and proximity to MediaCityUK driving economic activity.",
    keyAreas: [
      "Barton Business Park",
      "Peel Green Industrial Area",
      "Patricroft Industrial Area",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "warehousing",
      "logistics",
    ],
    localLandmarks:
      "Barton Swing Aqueduct — historic canal crossing over the Manchester Ship Canal",
  },

  urmston: {
    population: 41731,
    businessContext:
      "Urmston is a residential town in Trafford with direct access to Trafford Park industrial estate. Its location between the M60 and M62 motorways makes it a convenient base for businesses serving the wider Greater Manchester industrial corridor.",
    keyAreas: [
      "Trafford Park (adjacent)",
      "Urmston Town Centre",
      "Flixton Industrial Area",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "logistics",
      "healthcare",
    ],
    localLandmarks:
      "Trafford Park's western edge — directly accessible from Urmston via the Metrolink extension opened in 2020",
  },

  stretford: {
    population: 41120,
    businessContext:
      "Stretford borders Trafford Park and Old Trafford, with significant industrial and commercial activity along the A56 corridor. Its central Greater Manchester location provides access to major employment hubs including Trafford Park and Manchester city centre.",
    keyAreas: [
      "Stretford Arndale area",
      "Chester Road corridor",
      "Old Trafford industrial fringe",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "healthcare",
      "logistics",
    ],
    localLandmarks:
      "Kellogg's factory on Talbot Road — operational since 1938 within nearby Trafford Park",
  },

  sale: {
    population: 55234,
    businessContext:
      "Sale is a commercial hub within Trafford borough, with a mix of professional services and light industrial businesses. Its proximity to the M60 and Metrolink connections to Manchester and Altrincham support a growing business services sector.",
    keyAreas: [
      "Sale Business Park",
      "Washway Road commercial corridor",
      "Dane Road Industrial Area",
    ],
    primaryIndustries: ["construction", "healthcare", "manufacturing", "education"],
    localLandmarks:
      "Sale Water Park — managed leisure and environmental site adjacent to the M60 corridor",
  },

  altrincham: {
    population: 52419,
    businessContext:
      "Altrincham has undergone significant regeneration and is a thriving market town with a mix of professional services, healthcare, and light manufacturing. The Broadheath industrial area to its north supports engineering and manufacturing businesses.",
    keyAreas: [
      "Broadheath Industrial Area",
      "Atlantic Street Industrial Area",
      "Altrincham Business Park",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "healthcare",
      "education",
    ],
    localLandmarks:
      "Broadheath — long-established industrial area near the Bridgewater Canal, home to engineering firms since the Victorian era",
  },

  leigh: {
    population: 45499,
    businessContext:
      "Leigh is a town in the Wigan borough with a strong industrial heritage in textiles and coal mining. Today, it supports manufacturing and logistics businesses, with Leigh Commerce Park and the Parsonage Retail Park area providing employment alongside the nearby Heinz factory at Kitt Green.",
    keyAreas: [
      "Leigh Commerce Park",
      "Butts Mill Way Industrial Area",
      "Parsonage area",
    ],
    primaryIndustries: [
      "manufacturing",
      "warehousing",
      "construction",
      "food-beverage",
    ],
    localLandmarks:
      "Leigh Spinners Mill — Grade II listed former cotton mill, one of the largest remaining mill buildings in Lancashire",
  },

  "ashton-under-lyne": {
    population: 48604,
    businessContext:
      "Ashton-under-Lyne is the administrative centre of Tameside and a historic market town with a strong manufacturing heritage. The Ashton Moss area by Junction 23 of the M60 has attracted major commercial and retail development alongside established industrial estates.",
    keyAreas: [
      "Ashton Moss Business Park",
      "Guide Bridge Industrial Area",
      "Lord Sheldon Way Business Area",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "warehousing",
      "healthcare",
    ],
    localLandmarks:
      "Ashton-under-Lyne Market — one of the oldest markets in the North West, established by royal charter in 1284",
  },

  liverpool: {
    population: 486100,
    businessContext:
      "Liverpool is a major port city with a diverse industrial economy. Jaguar Land Rover's Halewood plant produces the Range Rover Evoque and Discovery Sport, while the Speke and Knowsley industrial areas support automotive supply chains, biomanufacturing, and logistics.",
    keyAreas: [
      "Speke Boulevard Industrial Area",
      "Knowsley Industrial Park",
      "Liverpool John Lennon Airport",
      "Liverpool2 Container Terminal",
      "Mersey Gateway area",
    ],
    primaryIndustries: [
      "automotive",
      "manufacturing",
      "maritime",
      "logistics",
      "healthcare",
    ],
    localLandmarks:
      "Jaguar Land Rover Halewood — produces Range Rover Evoque and Discovery Sport, with £500M invested for EV production",
  },

  "st-helens": {
    population: 183200,
    businessContext:
      "St Helens is the historic home of Pilkington Glass, founded in 1826, which remains a major employer. The Greengate Works continues to pioneer hydrogen-fired glass production. The town also has strong logistics and manufacturing sectors.",
    keyAreas: [
      "Pilkington Greengate Works",
      "Ravenhead Business Park",
      "Haydock Industrial Estate",
      "Lea Green Business Park",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "warehousing",
      "logistics",
    ],
    localLandmarks:
      "Pilkington Glass headquarters — founded in St Helens in 1826, inventors of the float glass process",
  },

  southport: {
    population: 94421,
    businessContext:
      "Southport is primarily a seaside resort and residential town in Sefton borough. It has a modest industrial base centred on Blowick Business Park and Slaidburn Crescent Industrial Estate, with its economy driven by tourism, healthcare, and leisure sectors.",
    keyAreas: [
      "Blowick Business Park",
      "Slaidburn Industrial Estate",
      "Southport Business Park",
    ],
    primaryIndustries: [
      "leisure",
      "healthcare",
      "construction",
      "food-beverage",
    ],
    localLandmarks:
      "Southport Pleasureland — one of the oldest amusement parks in the UK, reflecting the town's tourism-driven economy",
  },

  widnes: {
    population: 62400,
    businessContext:
      "Widnes has been a centre of the chemical industry since 1847 and sits within the Borough of Halton. INEOS operates a major chlor-alkali plant at nearby Runcorn, while 3MG Widnes Freeport provides logistics connectivity. The area supports over 50,000 jobs across 500+ chemical facilities.",
    keyAreas: [
      "3MG Widnes Freeport",
      "Widnes Waterfront",
      "Ditton Road Industrial Area",
      "Dennis Road Industrial Area",
    ],
    primaryIndustries: [
      "petrochemical",
      "manufacturing",
      "warehousing",
      "logistics",
    ],
    localLandmarks:
      "3MG Widnes Freeport — one of eight English Freeports, a major multimodal freight terminal",
  },

  preston: {
    population: 147835,
    businessContext:
      "Preston is the administrative centre of Lancashire and a major aerospace hub. BAE Systems operates from three interconnected sites at Preston (Strand Road), Warton Aerodrome, and Samlesbury, assembling Eurofighter Typhoon and F-35 Lightning II components.",
    keyAreas: [
      "BAE Systems Strand Road",
      "Warton Aerodrome",
      "Samlesbury Aerodrome",
      "Roman Way Industrial Estate",
      "Riversway Business Village",
    ],
    primaryIndustries: [
      "aerospace",
      "manufacturing",
      "construction",
      "healthcare",
    ],
    localLandmarks:
      "BAE Systems Warton — headquarters of Military Air & Information, assembly site for Eurofighter Typhoon",
  },

  blackburn: {
    population: 154739,
    businessContext:
      "Blackburn with Darwen is a former textile manufacturing centre with multiple modern industrial estates along the M65 corridor. Whitebirk Industrial Estate, Shadsworth Business Park, and Greenbank Business Park support engineering, manufacturing, and logistics businesses.",
    keyAreas: [
      "Whitebirk Industrial Estate",
      "Shadsworth Business Park",
      "Greenbank Business Park",
      "Walker Industrial Park",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "aerospace",
      "warehousing",
    ],
    localLandmarks:
      "Shadsworth Business Park — major employment site adjacent to Junction 5 of the M65 motorway",
  },

  burnley: {
    population: 94700,
    businessContext:
      "Burnley is a recognised centre of excellence for aerospace manufacturing, with Safran Nacelles employing over 900 people at Heasandford Industrial Estate producing parts for Airbus aircraft. The town also hosts GE's Unison Engine Components and has strong advanced engineering capabilities.",
    keyAreas: [
      "Heasandford Industrial Estate",
      "Burnley Bridge Business Park",
      "Lomeshaye Industrial Estate",
      "Network 65 Business Park",
      "Burnley Aerospace Supplier Park",
    ],
    primaryIndustries: [
      "aerospace",
      "manufacturing",
      "construction",
      "automotive",
    ],
    localLandmarks:
      "Safran Nacelles Burnley — world-class composites facility manufacturing nacelle components for Airbus aircraft",
  },

  blackpool: {
    population: 141100,
    businessContext:
      "Blackpool is best known as a seaside resort, but the Blackpool Airport Enterprise Zone covers 144 hectares and hosts over 200 businesses employing around 4,000 people. The zone targets advanced manufacturing, digital, and food & drink sectors, with £300M investment projected.",
    keyAreas: [
      "Blackpool Airport Enterprise Zone",
      "Squires Gate Industrial Estate",
      "Blackpool Business Park",
      "Vicarage Lane Industrial Area",
    ],
    primaryIndustries: [
      "leisure",
      "manufacturing",
      "food-beverage",
      "construction",
    ],
    localLandmarks:
      "Blackpool Airport Enterprise Zone — 144-hectare site with Enterprise Zone status until 2041",
  },

  lancaster: {
    population: 142900,
    businessContext:
      "Lancaster district is home to Heysham Nuclear Power Station — the only UK site with two operating nuclear power stations — and the 247-acre White Lund Industrial Estate, the district's largest employment site. The area has a growing nuclear and renewable energy sector.",
    keyAreas: [
      "White Lund Industrial Estate",
      "Heysham Nuclear Power Station",
      "Caton Road Industrial Area",
      "Lancaster Business Park",
      "Port of Heysham",
    ],
    primaryIndustries: [
      "energy",
      "manufacturing",
      "education",
      "healthcare",
    ],
    localLandmarks:
      "Heysham Nuclear Power Station — the UK's only site with two operational nuclear power stations",
  },

  warrington: {
    population: 210900,
    businessContext:
      "Warrington is strategically positioned between Manchester and Liverpool, home to Omega Business Park — one of Europe's largest at 575 acres — and Birchwood Park, a centre of excellence for the nuclear sector with over 165 companies and 6,000 employees.",
    keyAreas: [
      "Omega Business Park",
      "Birchwood Park",
      "Woolston Grange",
      "Winwick Quay",
      "Gemini Retail & Business Park",
    ],
    primaryIndustries: [
      "logistics",
      "manufacturing",
      "energy",
      "warehousing",
    ],
    localLandmarks:
      "Omega Business Park — 575-acre site on the former RAF Burtonwood airbase, one of Europe's largest business parks",
  },

  chester: {
    population: 138875,
    businessContext:
      "Chester serves as a major professional services centre and is close to the Airbus wing manufacturing facility at Broughton, which assembles wings for the entire Airbus commercial aircraft family with a workforce of around 6,000. The Deeside area also hosts a growing nuclear technology cluster.",
    keyAreas: [
      "Airbus Broughton (adjacent)",
      "Chester Business Park",
      "Sealand Industrial Estate",
      "Deeside Industrial Park",
    ],
    primaryIndustries: [
      "aerospace",
      "manufacturing",
      "energy",
      "healthcare",
    ],
    localLandmarks:
      "Airbus Broughton — global centre of excellence for wing manufacturing, producing wings for the entire Airbus range",
  },

  crewe: {
    population: 76437,
    businessContext:
      "Crewe is a railway town and the home of Bentley Motors, whose Pyms Lane headquarters and factory is the brand's sole manufacturing site worldwide. Volkswagen has invested over £500M in the facility. Crewe also retains its railway heritage through its role as a major rail junction.",
    keyAreas: [
      "Bentley Motors Pyms Lane",
      "Crewe Business Park",
      "Weston Road Industrial Estate",
      "Basford East",
    ],
    primaryIndustries: [
      "automotive",
      "manufacturing",
      "construction",
      "logistics",
    ],
    localLandmarks:
      "Bentley Motors Pyms Lane — the world's only Bentley factory, established as a Rolls-Royce shadow factory in 1938",
  },

  carlisle: {
    population: 110000,
    businessContext:
      "Carlisle is the main economic centre of Cumbria, with Kingmoor Park hosting over 150 businesses and 2,500 employees. The Pirelli tyre factory on Dalton Road employs over 850 people and operates 24 hours a day. The city benefits from its position on the M6 between England and Scotland.",
    keyAreas: [
      "Kingmoor Park Enterprise Zone",
      "Pirelli Factory (Dalton Road)",
      "Durranhill Industrial Estate",
      "Rosehill Industrial Estate",
    ],
    primaryIndustries: [
      "manufacturing",
      "logistics",
      "energy",
      "construction",
    ],
    localLandmarks:
      "Pirelli Factory — one of Pirelli's two UK tyre manufacturing plants, operational since 1969",
  },

  "barrow-in-furness": {
    population: 67407,
    businessContext:
      "Barrow-in-Furness is dominated by BAE Systems Submarines, which is the town's largest employer with 14,500 workers — roughly one-third of the working-age population. The shipyard builds all of the Royal Navy's nuclear submarines including the Astute-class, Dreadnought-class, and SSN-AUKUS programmes.",
    keyAreas: [
      "BAE Systems Submarine Shipyard",
      "Devonshire Dock Hall",
      "Waterfront Business Park",
      "Channelside Industrial Area",
    ],
    primaryIndustries: [
      "maritime",
      "manufacturing",
      "energy",
      "construction",
    ],
    localLandmarks:
      "BAE Systems Devonshire Dock Hall — the UK's sole nuclear submarine construction facility, with £1 billion of recent investment",
  },

  "stoke-on-trent": {
    population: 258400,
    businessContext:
      "Stoke-on-Trent is the World Capital of Ceramics, awarded UNESCO World Craft City status in 2024. Major pottery brands including Wedgwood, Emma Bridgewater, Portmeirion, and Burleigh still manufacture here. Etruria Valley and the surrounding six towns retain a concentrated ceramics and manufacturing cluster.",
    keyAreas: [
      "Etruria Valley",
      "Festival Park",
      "Sideway Industrial Estate",
      "Burslem Business Park",
      "Tunstall Industrial Area",
    ],
    primaryIndustries: [
      "manufacturing",
      "construction",
      "food-beverage",
      "logistics",
    ],
    localLandmarks:
      "Etruria Industrial Museum — preserved steam-powered pottery works, commemorating Josiah Wedgwood's industrial legacy",
  },
};
