/* ------------------------------------------------------------------ */
/*  ArticlePage                                                         */
/*                                                                      */
/*  Renders a single Resource article. Server component — no JS bundle. */
/*  Body content is a structured array of typed blocks (see             */
/*  lib/content/resources.ts) which keeps typography consistent and     */
/*  prevents arbitrary HTML injection while still allowing inline links */
/*  inside paragraphs.                                                  */
/* ------------------------------------------------------------------ */

import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { WebPageSchema } from "@/components/seo/WebPageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { BUSINESS } from "@/types";
import type { Resource, ContentBlock } from "@/lib/content/resources";
import { RESOURCES } from "@/lib/content/resources";
import { SERVICE_SEED } from "@/lib/content/service-data";

interface ArticlePageProps {
  resource: Resource;
}

export function ArticlePage({ resource }: ArticlePageProps) {
  const pageUrl = `${BUSINESS.url}/resources/${resource.slug}`;
  const publishedDate = new Date(resource.publishedAt);
  const updatedDate = new Date(resource.updatedAt);
  const datesDiffer = resource.publishedAt !== resource.updatedAt;

  /* Related services — full records for cards */
  const relatedServices = resource.relatedServiceSlugs
    .map((slug) => SERVICE_SEED.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  /* Other articles for the "Continue reading" rail */
  const otherArticles = RESOURCES.filter((r) => r.slug !== resource.slug).slice(
    0,
    3
  );

  return (
    <>
      <ArticleSchema
        url={pageUrl}
        headline={resource.title}
        description={resource.description}
        datePublished={resource.publishedAt}
        dateModified={resource.updatedAt}
      />
      <WebPageSchema
        title={`${resource.title} | Safe Lee Inspection & Consultancy`}
        description={resource.description}
        url={pageUrl}
        mainEntityId={`${pageUrl}#article`}
        hasBreadcrumb
      />
      <BreadcrumbSchema
        pageUrl={pageUrl}
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: resource.title, href: `/resources/${resource.slug}` },
        ]}
      />

      {/* Hero / header */}
      <section className="bg-gradient-to-br from-sl-navy via-sl-navy to-sl-red py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/resources" className="hover:text-white">
                  Resources
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="truncate text-white" aria-current="page">
                {resource.title}
              </li>
            </ol>
          </nav>

          <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
            {resource.category}
          </div>

          <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {resource.title}
          </h1>

          <p className="speakable-subtitle mt-5 max-w-3xl text-lg leading-relaxed text-white/85">
            {resource.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={resource.publishedAt}>
                {publishedDate.toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {datesDiffer && (
                <>
                  <span className="mx-1">·</span>
                  <span>
                    Updated{" "}
                    <time dateTime={resource.updatedAt}>
                      {updatedDate.toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </span>
                </>
              )}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {resource.readMinutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-base leading-relaxed text-sl-gray-700 lg:text-lg">
            {resource.content.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </div>
      </article>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="bg-sl-gray-50 py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-sl-gray-900 sm:text-3xl">
              Related inspection services
            </h2>
            <p className="mt-2 text-sl-gray-600">
              The regulations covered in this article apply to the equipment we
              examine. Click through for service detail and pricing.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-sl-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-sl-red hover:shadow-md"
                  >
                    <h3 className="font-heading text-lg font-semibold text-sl-navy group-hover:text-sl-red">
                      {service.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-sl-gray-600">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sl-red">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Continue reading */}
      {otherArticles.length > 0 && (
        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-heading text-2xl font-bold text-sl-gray-900 sm:text-3xl">
                Continue reading
              </h2>
              <Link
                href="/resources"
                className="hidden items-center gap-1.5 text-sm font-semibold text-sl-red sm:inline-flex"
              >
                All resources
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/resources/${other.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-sl-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-sl-red hover:shadow-md"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-sl-red">
                      {other.category}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-sl-navy group-hover:text-sl-red">
                      {other.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-sl-gray-600">
                      {other.excerpt}
                    </p>
                    <span className="mt-4 text-sm text-sl-gray-500">
                      {other.readMinutes} min read
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Back to hub */}
      <section className="bg-sl-gray-50 py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sl-navy hover:text-sl-red"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all resources
          </Link>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Block renderer                                                      */
/* ------------------------------------------------------------------ */

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p
          className="text-sl-gray-700"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case "h2":
      return (
        <h2
          id={block.id}
          className="mt-10 font-heading text-2xl font-bold text-sl-gray-900 sm:text-3xl"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          id={block.id}
          className="mt-8 font-heading text-xl font-semibold text-sl-gray-900 sm:text-2xl"
        >
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul className="ml-5 list-disc space-y-2 text-sl-gray-700 marker:text-sl-red">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="ml-5 list-decimal space-y-2 text-sl-gray-700 marker:text-sl-red marker:font-semibold">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      );

    case "callout": {
      const tone =
        block.tone === "warning"
          ? "border-sl-red bg-sl-red/5 text-sl-gray-900"
          : "border-sl-navy/20 bg-sl-navy/5 text-sl-gray-900";
      return (
        <aside
          className={`rounded-lg border-l-4 p-5 leading-relaxed ${tone}`}
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );
    }

    case "cta":
      return (
        <div className="mt-8">
          <Link
            href={block.href}
            className="inline-flex items-center gap-2 rounded-lg bg-sl-red px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-sl-red-dark"
          >
            {block.text}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      );
  }
}
