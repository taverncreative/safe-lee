import type { Metadata } from "next";
import { BUSINESS } from "@/types";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for ${BUSINESS.name}. Read our terms of service for inspection and consultancy services.`,
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sl-navy via-sl-red-dark to-sl-red py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-white/80">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="prose prose-lg prose-sl-gray mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2>Agreement</h2>
          <p>
            By engaging the services of {BUSINESS.name} (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;the Company&rdquo;), you agree to be
            bound by these terms and conditions. Please read them carefully
            before booking any inspection or consultancy service.
          </p>

          <h2>Services</h2>
          <p>
            We provide statutory inspection, thorough examination, and
            consultancy services in accordance with the relevant UK health and
            safety legislation, including but not limited to PSSR 2000, LOLER
            1998, PUWER 1998, WAHR 2005, and COSHH 2002. All inspections are
            carried out by competent persons with the appropriate qualifications
            and experience.
          </p>
          <p>
            Our reports and recommendations are based on the condition of the
            equipment at the time of inspection and the information made
            available to us. We do not guarantee that equipment will remain in a
            safe condition after the date of inspection.
          </p>

          <h2>Bookings</h2>
          <p>
            All bookings are subject to availability. We will confirm the date
            and time of your inspection in writing (typically by email). By
            confirming a booking, you agree to provide safe access to the
            equipment and premises, ensure relevant equipment is available and
            ready for examination, and provide any necessary documentation such
            as written schemes of examination.
          </p>

          <h2>Payment</h2>
          <p>
            Payment terms will be agreed upon at the time of booking. Unless
            otherwise stated, invoices are due within 30 days of the invoice
            date. We reserve the right to charge interest on overdue invoices in
            accordance with the Late Payment of Commercial Debts (Interest) Act
            1998.
          </p>

          <h2>Liability</h2>
          <p>
            Our liability is limited to the fee paid for the specific service
            giving rise to the claim. We shall not be liable for any indirect,
            consequential, or special losses arising from or in connection with
            our services.
          </p>
          <p>
            We maintain appropriate professional indemnity and public liability
            insurance. Details are available upon request.
          </p>
          <p>
            Nothing in these terms excludes or limits our liability for death or
            personal injury caused by our negligence, fraud, or any other
            liability that cannot be excluded by law.
          </p>

          <h2>Cancellation</h2>
          <p>
            If you need to cancel or reschedule an inspection, please notify us
            at least 48 hours before the scheduled date. Cancellations made
            with less than 48 hours&apos; notice may be subject to a
            cancellation charge to cover costs already incurred.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of England and Wales. Any disputes arising
            from or in connection with these terms shall be subject to the
            exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about these terms, please contact us:
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
