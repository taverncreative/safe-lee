/* ------------------------------------------------------------------ */
/*  /resources — knowledge-base hub                                     */
/*                                                                      */
/*  Index of all articles registered in lib/content/resources.ts.       */
/*  Adding a new article to the registry surfaces it here automatically */
/*  — no edit needed to this file.                                      */
/* ------------------------------------------------------------------ */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { WebPageSchema } from "@/components/seo/WebPageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { BUSINESS } from "@/types";
import { RESOURCES } from "@/lib/content/resources";

const PAGE_URL = `${BUSINESS.url}/resources`;

export const metadata: Metadata = {
  title: "Inspection & Compliance Resources",
  description:
    "Plain-English guides to UK statutory inspection regulations — LOLER, PUWER, PSSR, COSHH and WAHR. Written by working inspection engineers.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Inspection & Compliance Resources | Safe Lee Inspection & Consultancy",
    description:
      "Plain-English guides to UK statutory inspection regulations — LOLER, PUWER, PSSR, COSHH and WAHR. Written by working inspection engineers.",
    url: PAGE_URL,
    siteName: BUSINESS.name,
    type: "website",
  },
};

export default function ResourcesIndexPage() {
  return (
    <>
      <WebPageSchema
        title="Inspection & Compliance Resources | Safe Lee Inspection & Consultancy"
        description="Plain-English guides to UK statutory inspection regulations — LOLER, PUWER, PSSR, COSHH and WAHR."
        url={PAGE_URL}
        mainEntityId={`${BUSINESS.url}/#organization`}
        hasBreadcrumb
      />
      <BreadcrumbSchema
        pageUrl={PAGE_URL}
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
        ]}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-sl-navy via-sl-navy to-sl-red py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                Resources
              </li>
            </ol>
          </nav>

          <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Inspection &amp; Compliance Resources
          </h1>
          <p className="speakable-subtitle mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Plain-English guides to UK statutory inspection regulations — written
            by working inspection engineers, for the duty holders who have to
            stay compliant.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource) => {
              const date = new Date(resource.publishedAt);
              return (
                <li key={resource.slug}>
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-sl-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sl-red hover:shadow-md"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-sl-red">
                      {resource.category}
                    </span>
                    <h2 className="mt-3 font-heading text-xl font-semibold text-sl-navy group-hover:text-sl-red">
                      {resource.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-sl-gray-600">
                      {resource.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-sl-gray-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {resource.readMinutes} min read
                      </span>
                      <time dateTime={resource.publishedAt}>
                        {date.toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sl-red">
                      Read article
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
