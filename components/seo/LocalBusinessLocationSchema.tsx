import { BUSINESS } from "@/types";

interface LocalBusinessLocationSchemaProps {
  serviceName: string;
  serviceSlug: string;
  locationName: string;
  locationSlug: string;
  county: string;
}

export function LocalBusinessLocationSchema({
  serviceName,
  serviceSlug,
  locationName,
  locationSlug,
  county,
}: LocalBusinessLocationSchemaProps) {
  const pageUrl = `${BUSINESS.url}/${serviceSlug}-${locationSlug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${pageUrl}/#localbusiness`,
    name: BUSINESS.name,
    url: pageUrl,
    telephone: "+441617062022",
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    areaServed: {
      "@type": "City",
      name: locationName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: county,
      },
    },
    parentOrganization: {
      "@id": `${BUSINESS.url}/#organization`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS.googleRating),
      bestRating: "5",
      worstRating: "1",
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
