/* ------------------------------------------------------------------ */
/*  /resources/[slug] — dynamic article route                           */
/*                                                                      */
/*  Statically generated for every resource registered in               */
/*  lib/content/resources.ts. Unknown slugs 404.                        */
/* ------------------------------------------------------------------ */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/templates/ArticlePage";
import { BUSINESS } from "@/types";
import { RESOURCE_BY_SLUG, RESOURCES } from "@/lib/content/resources";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCE_BY_SLUG[slug];
  if (!resource) return {};

  const url = `${BUSINESS.url}/resources/${resource.slug}`;
  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical: `/resources/${resource.slug}` },
    openGraph: {
      title: `${resource.title} | Safe Lee Inspection & Consultancy`,
      description: resource.description,
      url,
      siteName: BUSINESS.name,
      type: "article",
      publishedTime: resource.publishedAt,
      modifiedTime: resource.updatedAt,
    },
  };
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const resource = RESOURCE_BY_SLUG[slug];
  if (!resource) notFound();

  return <ArticlePage resource={resource} />;
}
