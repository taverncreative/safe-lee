import { BUSINESS } from "@/types";

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceSlug: string;
  regulationName: string;
  locationName?: string;
  locationSlug?: string;
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceSlug,
  regulationName,
  locationName,
  locationSlug,
}: ServiceSchemaProps) {
  const url = locationSlug
    ? `${BUSINESS.url}/${serviceSlug}-${locationSlug}`
    : `${BUSINESS.url}/${serviceSlug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: locationName ? `${serviceName} in ${locationName}` : serviceName,
    serviceType: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${BUSINESS.url}/#organization`,
      name: BUSINESS.name,
      telephone: "+441617062022",
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.locality,
        addressRegion: BUSINESS.address.city,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.country,
      },
    },
    areaServed: locationName
      ? {
          "@type": "City",
          name: locationName,
        }
      : [
          { "@type": "City", name: "Manchester" },
          { "@type": "AdministrativeArea", name: "North West England" },
          { "@type": "Country", name: "United Kingdom" },
        ],
    url,
    termsOfService: regulationName,
    serviceOutput: {
      "@type": "Report",
      name: `${serviceName} Report`,
      description: `Comprehensive written report of thorough examination findings under ${regulationName}`,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: locationName
        ? { "@type": "City", name: locationName }
        : { "@type": "Country", name: "United Kingdom" },
      seller: {
        "@type": "ProfessionalService",
        "@id": `${BUSINESS.url}/#organization`,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS.googleRating),
      bestRating: "5",
      reviewCount: String(BUSINESS.googleReviewCount),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
