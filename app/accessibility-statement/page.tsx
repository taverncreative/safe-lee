import type { Metadata } from "next";
import { BUSINESS } from "@/types";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `Accessibility statement for ${BUSINESS.name}. Our commitment to making our website accessible to everyone.`,
  alternates: { canonical: "/accessibility-statement" },
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sl-navy via-sl-red-dark to-sl-red py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
              Accessibility Statement
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="prose prose-lg prose-sl-gray mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2>Our Commitment</h2>
          <p>
            {BUSINESS.name} is committed to ensuring that our website is
            accessible to everyone, including people with disabilities. We
            strive to provide an inclusive digital experience and continuously
            work to improve the accessibility and usability of our website.
          </p>
          <p>
            We believe that every visitor should be able to browse our site,
            learn about our inspection services, and contact us without barriers.
          </p>

          <h2>Standards</h2>
          <p>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG)
            2.1 at Level AA. These guidelines explain how to make web content
            more accessible to people with a wide range of disabilities,
            including visual, auditory, physical, speech, cognitive, language,
            learning, and neurological disabilities.
          </p>
          <p>Our efforts include:</p>
          <ul>
            <li>
              Providing alternative text for images so that screen readers can
              convey their content.
            </li>
            <li>
              Ensuring sufficient colour contrast between text and background
              elements.
            </li>
            <li>
              Making all functionality available via keyboard navigation.
            </li>
            <li>
              Using semantic HTML to provide a clear and logical document
              structure.
            </li>
            <li>
              Ensuring forms are clearly labelled and provide helpful error
              messages.
            </li>
            <li>
              Maintaining a responsive design that works across different devices
              and screen sizes.
            </li>
          </ul>

          <h2>Known Issues</h2>
          <p>
            While we strive to meet WCAG 2.1 Level AA standards, some areas of
            our website may not yet be fully compliant. We are aware of the
            following issues and are working to resolve them:
          </p>
          <ul>
            <li>
              Some third-party embedded content (such as Google Maps) may not be
              fully accessible. We provide equivalent information in text form
              where possible.
            </li>
            <li>
              Some older PDF documents may not be fully accessible. Please
              contact us if you require information in an alternative format.
            </li>
          </ul>

          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of our website. If you
            encounter any accessibility barriers, have difficulty accessing any
            content, or have suggestions for improvement, please let us know:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:01617062022">{BUSINESS.phone}</a>
            </li>
            <li>
              <strong>Address:</strong> {BUSINESS.address.street},{" "}
              {BUSINESS.address.locality}, {BUSINESS.address.city},{" "}
              {BUSINESS.address.postalCode}
            </li>
          </ul>
          <p>
            We aim to respond to accessibility feedback within five working days
            and will do our best to resolve any issues promptly.
          </p>
        </div>
      </section>
    </>
  );
}
