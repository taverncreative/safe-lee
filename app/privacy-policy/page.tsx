import type { Metadata } from "next";
import { BUSINESS } from "@/types";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS.name}. Learn how we collect, use, and protect your personal data.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sl-navy via-sl-red-dark to-sl-red py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-white/80">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="prose prose-lg prose-sl-gray mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p>
            {BUSINESS.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;) is committed to protecting and respecting your
            privacy. This policy explains how we collect, use, and safeguard
            your personal information when you use our website or services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following personal information:</p>
          <ul>
            <li>
              <strong>Contact details</strong> &mdash; name, email address,
              telephone number, and company name when you fill in our contact
              form or communicate with us.
            </li>
            <li>
              <strong>Enquiry details</strong> &mdash; information about the
              services you are interested in and the contents of your message.
            </li>
            <li>
              <strong>Technical data</strong> &mdash; IP address, browser type,
              device information, and pages visited, collected automatically via
              cookies and server logs.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and provide quotes.</li>
            <li>
              Deliver the inspection and consultancy services you have requested.
            </li>
            <li>
              Send service-related communications, such as appointment
              confirmations and inspection reports.
            </li>
            <li>
              Improve our website, services, and customer experience.
            </li>
            <li>
              Comply with legal and regulatory obligations.
            </li>
          </ul>
          <p>
            We will not share your personal data with third parties for
            marketing purposes without your explicit consent.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies &mdash; small text files placed on your
            device &mdash; to improve your browsing experience, analyse website
            traffic, and understand how visitors interact with our site. You can
            control cookie settings through your browser preferences. Disabling
            cookies may affect the functionality of certain parts of the
            website.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services such as Google Analytics and Google
            Maps to improve our website and understand visitor behaviour. These
            services may collect data in accordance with their own privacy
            policies. We encourage you to review the privacy policies of any
            third-party services we use.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to
            fulfil the purposes for which it was collected, including to satisfy
            legal, accounting, or reporting requirements. Contact form
            submissions are typically retained for up to 24 months unless a
            longer retention period is required by law.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under the UK General Data Protection Regulation (UK GDPR), you have
            the right to:
          </p>
          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>
              Request deletion of your personal data where there is no
              compelling reason for continued processing.
            </li>
            <li>Object to processing of your personal data.</li>
            <li>
              Request the transfer of your data to another party (data
              portability).
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the
            details below.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or how we
            handle your personal data, please contact us:
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
        </div>
      </section>
    </>
  );
}
