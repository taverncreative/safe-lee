import { BUSINESS } from "@/types";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.name,
    url: BUSINESS.url,
    logo: `${BUSINESS.url}/images/Logos/Logo For Footer.png`,
    founder: {
      /*
       * Same @id as SiteSchema — both script tags are processed on the homepage,
       * and JSON-LD node merging unifies them into a single Person entity.
       */
      "@type": "Person",
      "@id": `${BUSINESS.url}/#founder`,
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
