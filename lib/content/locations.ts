/* ------------------------------------------------------------------ */
/*  Static location data — North West England (Manchester centred)     */
/* ------------------------------------------------------------------ */

export const LOCATIONS = [
  // Greater Manchester
  { name: "Manchester", slug: "manchester", county: "Greater Manchester", region: "North West", latitude: "53.4808", longitude: "-2.2426" },
  { name: "Irlam", slug: "irlam", county: "Greater Manchester", region: "North West", latitude: "53.4438", longitude: "-2.4213" },
  { name: "Salford", slug: "salford", county: "Greater Manchester", region: "North West", latitude: "53.4875", longitude: "-2.2901" },
  { name: "Bolton", slug: "bolton", county: "Greater Manchester", region: "North West", latitude: "53.5782", longitude: "-2.4299" },
  { name: "Wigan", slug: "wigan", county: "Greater Manchester", region: "North West", latitude: "53.5461", longitude: "-2.6325" },
  { name: "Stockport", slug: "stockport", county: "Greater Manchester", region: "North West", latitude: "53.4106", longitude: "-2.1575" },
  { name: "Oldham", slug: "oldham", county: "Greater Manchester", region: "North West", latitude: "53.5409", longitude: "-2.1114" },
  { name: "Rochdale", slug: "rochdale", county: "Greater Manchester", region: "North West", latitude: "53.6097", longitude: "-2.1561" },
  { name: "Bury", slug: "bury", county: "Greater Manchester", region: "North West", latitude: "53.5933", longitude: "-2.2966" },
  { name: "Tameside", slug: "tameside", county: "Greater Manchester", region: "North West", latitude: "53.4804", longitude: "-2.0813" },
  { name: "Trafford", slug: "trafford", county: "Greater Manchester", region: "North West", latitude: "53.4227", longitude: "-2.3510" },
  { name: "Eccles", slug: "eccles", county: "Greater Manchester", region: "North West", latitude: "53.4847", longitude: "-2.3344" },
  { name: "Urmston", slug: "urmston", county: "Greater Manchester", region: "North West", latitude: "53.4487", longitude: "-2.3551" },
  { name: "Stretford", slug: "stretford", county: "Greater Manchester", region: "North West", latitude: "53.4441", longitude: "-2.3086" },
  { name: "Sale", slug: "sale", county: "Greater Manchester", region: "North West", latitude: "53.4240", longitude: "-2.3222" },
  { name: "Altrincham", slug: "altrincham", county: "Greater Manchester", region: "North West", latitude: "53.3870", longitude: "-2.3547" },
  { name: "Leigh", slug: "leigh", county: "Greater Manchester", region: "North West", latitude: "53.4968", longitude: "-2.5157" },
  { name: "Ashton-under-Lyne", slug: "ashton-under-lyne", county: "Greater Manchester", region: "North West", latitude: "53.4897", longitude: "-2.0985" },
  // Merseyside
  { name: "Liverpool", slug: "liverpool", county: "Merseyside", region: "North West", latitude: "53.4084", longitude: "-2.9916" },
  { name: "St Helens", slug: "st-helens", county: "Merseyside", region: "North West", latitude: "53.4534", longitude: "-2.7368" },
  { name: "Southport", slug: "southport", county: "Merseyside", region: "North West", latitude: "53.6477", longitude: "-3.0056" },
  { name: "Widnes", slug: "widnes", county: "Cheshire", region: "North West", latitude: "53.3617", longitude: "-2.7294" },
  // Lancashire
  { name: "Preston", slug: "preston", county: "Lancashire", region: "North West", latitude: "53.7632", longitude: "-2.7031" },
  { name: "Blackburn", slug: "blackburn", county: "Lancashire", region: "North West", latitude: "53.7488", longitude: "-2.4818" },
  { name: "Burnley", slug: "burnley", county: "Lancashire", region: "North West", latitude: "53.7893", longitude: "-2.2483" },
  { name: "Blackpool", slug: "blackpool", county: "Lancashire", region: "North West", latitude: "53.8175", longitude: "-3.0357" },
  { name: "Lancaster", slug: "lancaster", county: "Lancashire", region: "North West", latitude: "54.0466", longitude: "-2.8007" },
  // Cheshire
  { name: "Warrington", slug: "warrington", county: "Cheshire", region: "North West", latitude: "53.3900", longitude: "-2.5970" },
  { name: "Chester", slug: "chester", county: "Cheshire", region: "North West", latitude: "53.1930", longitude: "-2.8931" },
  { name: "Crewe", slug: "crewe", county: "Cheshire", region: "North West", latitude: "53.0988", longitude: "-2.4405" },
  // Cumbria
  { name: "Carlisle", slug: "carlisle", county: "Cumbria", region: "North West", latitude: "54.8925", longitude: "-2.9329" },
  { name: "Barrow-in-Furness", slug: "barrow-in-furness", county: "Cumbria", region: "North West", latitude: "54.1107", longitude: "-3.2267" },
  // Staffordshire (bordering NW)
  { name: "Stoke-on-Trent", slug: "stoke-on-trent", county: "Staffordshire", region: "West Midlands", latitude: "53.0027", longitude: "-2.1794" },
] as const;

export type LocationData = (typeof LOCATIONS)[number];
