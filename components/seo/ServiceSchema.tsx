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
    "@id": `${url}/#service`,
    name: locationName ? `${serviceName} in ${locationName}` : serviceName,
    serviceType: serviceName,
    description: `${serviceDescription} Compliance with ${regulationName}.`,
    provider: {
      "@id": `${BUSINESS.url}/#organization`,
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
        "@id": `${BUSINESS.url}/#organization`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
