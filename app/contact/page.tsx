import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactMeta } from "@/lib/seo/meta-generator";
import { ContactForm } from "@/components/forms/ContactForm";
import { BUSINESS } from "@/types";

export const metadata: Metadata = contactMeta();

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-sl-navy via-sl-red-dark to-sl-red py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Get in touch for a free, no-obligation quote. We typically respond
              within one working day.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left — Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-sl-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sl-gray-600">
                Fill out the form below and we will get back to you as soon as
                possible.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Right — Business Info + Map */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-sl-gray-900">
                Business Details
              </h2>
              <p className="mt-2 text-sl-gray-600">
                You can also reach us directly by phone or email.
              </p>

              <div className="mt-8 space-y-6">
                {/* Company name */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-sl-red/10 p-3">
                    <MapPin className="h-5 w-5 text-sl-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sl-gray-900">
                      {BUSINESS.name}
                    </h3>
                    <p className="mt-1 text-sl-gray-600">
                      {BUSINESS.address.street}
                      <br />
                      {BUSINESS.address.locality}, {BUSINESS.address.city}
                      <br />
                      {BUSINESS.address.postalCode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-sl-red/10 p-3">
                    <Phone className="h-5 w-5 text-sl-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sl-gray-900">Phone</h3>
                    <a
                      href="tel:01617062022"
                      className="mt-1 block text-sl-red hover:text-sl-red-dark"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-sl-red/10 p-3">
                    <Mail className="h-5 w-5 text-sl-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sl-gray-900">Email</h3>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="mt-1 block text-sl-red hover:text-sl-red-dark"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-sl-red/10 p-3">
                    <Clock className="h-5 w-5 text-sl-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sl-gray-900">
                      Opening Hours
                    </h3>
                    <ul className="mt-1 space-y-0.5 text-sm text-sl-gray-600">
                      {BUSINESS.openingHours.map((h) => (
                        <li key={h.day}>
                          <span className="inline-block w-28 font-medium">
                            {h.day}
                          </span>
                          {h.open} &ndash; {h.close}
                        </li>
                      ))}
                      <li>
                        <span className="inline-block w-28 font-medium">
                          Saturday
                        </span>
                        Closed
                      </li>
                      <li>
                        <span className="inline-block w-28 font-medium">
                          Sunday
                        </span>
                        Closed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-10 overflow-hidden rounded-xl border border-sl-gray-200">
                <iframe
                  title="Safe Lee Inspection & Consultancy location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.0!2d-2.4274!3d53.4450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0g0NCA2QUI!5e0!3m2!1sen!2sgb!4v1700000000000!5m2!1sen!2sgb"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
