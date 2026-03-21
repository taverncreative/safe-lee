import { BUSINESS } from "@/types";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS.url}/#company`,
    name: BUSINESS.name,
    legalName: BUSINESS.name,
    url: BUSINESS.url,
    logo: `${BUSINESS.url}/images/Logos/Logo For Footer.png`,
    founder: {
      "@type": "Person",
      name: BUSINESS.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    telephone: "+441617062022",
    email: BUSINESS.email,
    sameAs: [
      BUSINESS.socials.facebook,
      BUSINESS.socials.linkedin,
      BUSINESS.socials.x,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
