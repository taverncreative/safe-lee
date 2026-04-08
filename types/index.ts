/* ------------------------------------------------------------------ */
/*  SafeLee Inspection & Consultancy — Shared Types                   */
/* ------------------------------------------------------------------ */

export interface Service {
  id: number;
  name: string;
  slug: string;
  shortName: string;
  regulationName: string;
  description: string;
  metaDescription: string;
  icon: string;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  id: number;
  name: string;
  slug: string;
  county: string;
  region: string;
  population: number | null;
  latitude: number;
  longitude: number;
  intro: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Industry {
  id: number;
  name: string;
  slug: string;
  description: string;
  painPoint: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LocalIntro {
  id: number;
  serviceId: number;
  locationId: number;
  content: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  serviceId: number | null;
  locationId: number | null;
  industryId: number | null;
  sortOrder: number;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  reviewText: string;
  source: string;
  locationId: number | null;
  createdAt: Date;
}

export interface ServiceIndustry {
  serviceId: number;
  industryId: number;
  relevanceNote: string | null;
}

/* ------------------------------------------------------------------ */
/*  Route / Page types                                                 */
/* ------------------------------------------------------------------ */

export type PageType = "service-hub" | "service-location" | "micro-location";

export interface ParsedRoute {
  pageType: PageType;
  service: Service;
  location?: Location;
}

/* ------------------------------------------------------------------ */
/*  SEO types                                                          */
/* ------------------------------------------------------------------ */

export interface MetaData {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  robots?: { index: boolean; follow: boolean };
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

/* ------------------------------------------------------------------ */
/*  Business constants                                                 */
/* ------------------------------------------------------------------ */

export const BUSINESS = {
  name: "Safe Lee Inspection & Consultancy Ltd",
  shortName: "Safe Lee",
  phone: "0161 706 2022",
  email: "admin@safeleeinspectionconsultancy.com",
  mobile: "+44746 3049866",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100083171920043",
    linkedin: "https://www.linkedin.com/company/safe-lee-inspection-consultancy/",
    x: "https://x.com/lee_safe",
  },
  address: {
    street: "Astley Rd",
    locality: "Irlam",
    city: "Manchester",
    postalCode: "M44 6AB",
    country: "GB",
  },
  founder: "Lee Charnock",
  url: "https://www.safeleeinspectionconsultancy.com",
  googleRating: 5.0,
  googleReviewCount: 3,
  openingHours: [
    { day: "Monday", open: "09:00", close: "17:00" },
    { day: "Tuesday", open: "09:00", close: "17:00" },
    { day: "Wednesday", open: "09:00", close: "17:00" },
    { day: "Thursday", open: "09:00", close: "17:00" },
    { day: "Friday", open: "09:00", close: "16:00" },
  ],
  credentials: ["Armed Forces Covenant Bronze Award"],
} as const;
