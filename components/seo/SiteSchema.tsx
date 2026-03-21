import { BUSINESS } from "@/types";

export function SiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    alternateName: "Safe Lee",
    description:
      "Professional PSSR, LOLER, WAHR, PUWER, and COSHH LEV statutory inspections and thorough examinations serving Manchester, the North West, and beyond.",
    url: BUSINESS.url,
    telephone: "+441617062022",
    email: BUSINESS.email,
    logo: `${BUSINESS.url}/images/Logos/Logo For Footer.png`,
    image: `${BUSINESS.url}/images/HERO.webp`,
    founder: {
      "@type": "Person",
      name: BUSINESS.founder,
      jobTitle: "Managing Director",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.4438,
      longitude: -2.4213,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS.googleRating),
      bestRating: "5",
      worstRating: "1",
      reviewCount: String(BUSINESS.googleReviewCount),
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: { "@type": "Person", name: "Lee Stanaway" },
        reviewBody:
          "Lee is a fantastic engineer and very approachable. He delivers examinations with minimal disturbance to your operations in a timely manner. If you need or are unsure if your equipment requires an examination, contact Lee and he will guide you through the process of becoming and staying compliant.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: { "@type": "Person", name: "Thomas Bullivant" },
        reviewBody:
          "Brilliant company! Can\u2019t recommend Lee enough. Great communication throughout and speedy reporting to ensure kit is compliant with LOLER and PUWER.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: { "@type": "Person", name: "Sean Crawford" },
        reviewBody:
          "Great service, very knowledgeable regarding my lifting equipment. If you\u2019re needing a LOLER examination carried out, get on to Safe Lee!",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Manchester" },
      { "@type": "City", name: "Liverpool" },
      { "@type": "City", name: "Leeds" },
      { "@type": "City", name: "Sheffield" },
      { "@type": "AdministrativeArea", name: "Greater Manchester" },
      { "@type": "AdministrativeArea", name: "North West England" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "award",
        name: "Armed Forces Covenant Bronze Award",
      },
    ],
    memberOf: [
      { "@type": "Organization", name: "Society of Operations Engineers" },
      { "@type": "Organization", name: "Construction Plant-hire Association" },
    ],
    knowsAbout: [
      "Pressure Systems Safety Regulations 2000",
      "Lifting Operations and Lifting Equipment Regulations 1998",
      "Work at Height Regulations 2005",
      "Provision and Use of Work Equipment Regulations 1998",
      "Control of Substances Hazardous to Health Regulations 2002",
      "Local Exhaust Ventilation Testing",
      "Thorough Examination",
      "Written Scheme of Examination",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Inspection Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "PSSR Inspections",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "PSSR Inspections",
                url: `${BUSINESS.url}/pssr-inspections`,
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "LOLER Inspections",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "LOLER Inspections",
                url: `${BUSINESS.url}/loler-inspections`,
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "WAHR Inspections",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WAHR Inspections",
                url: `${BUSINESS.url}/wahr-inspections`,
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "PUWER Inspections",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "PUWER Inspections",
                url: `${BUSINESS.url}/puwer-inspections`,
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "COSHH LEV Inspections",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "COSHH LEV Inspections",
                url: `${BUSINESS.url}/coshh-lev-inspections`,
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Report Writing",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Report Writing",
                url: `${BUSINESS.url}/report-writing`,
              },
            },
          ],
        },
      ],
    },
    sameAs: [
      BUSINESS.socials.facebook,
      BUSINESS.socials.linkedin,
      BUSINESS.socials.x,
    ],
    priceRange: "££",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
