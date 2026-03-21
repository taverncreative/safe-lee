/* ------------------------------------------------------------------ */
/*  Contextual internal linker                                         */
/*  Auto-links service keywords → hubs, location names → svc+loc      */
/*  Max 5 auto-links per content block, each keyword linked once       */
/* ------------------------------------------------------------------ */

interface LinkableKeyword {
  keyword: string;
  href: string;
  priority: number; // lower = higher priority
}

const SERVICE_KEYWORDS: LinkableKeyword[] = [
  { keyword: "PSSR inspections", href: "/pssr-inspections", priority: 1 },
  { keyword: "PSSR", href: "/pssr-inspections", priority: 5 },
  { keyword: "pressure systems", href: "/pssr-inspections", priority: 3 },
  { keyword: "LOLER inspections", href: "/loler-inspections", priority: 1 },
  { keyword: "LOLER", href: "/loler-inspections", priority: 5 },
  { keyword: "lifting equipment", href: "/loler-inspections", priority: 3 },
  { keyword: "WAHR inspections", href: "/wahr-inspections", priority: 1 },
  { keyword: "work at height", href: "/wahr-inspections", priority: 3 },
  { keyword: "PUWER inspections", href: "/puwer-inspections", priority: 1 },
  { keyword: "PUWER", href: "/puwer-inspections", priority: 5 },
  { keyword: "work equipment", href: "/puwer-inspections", priority: 3 },
  {
    keyword: "COSHH LEV inspections",
    href: "/coshh-lev-inspections",
    priority: 1,
  },
  { keyword: "COSHH LEV", href: "/coshh-lev-inspections", priority: 3 },
  { keyword: "LEV testing", href: "/coshh-lev-inspections", priority: 3 },
  { keyword: "report writing", href: "/report-writing", priority: 2 },
];

const MAX_LINKS_PER_BLOCK = 5;

/**
 * Returns an array of { keyword, href } matches found in the text,
 * limited to MAX_LINKS_PER_BLOCK. Each keyword matched only once.
 * Excludes links pointing to `currentHref` to avoid self-linking.
 */
export function findContextualLinks(
  text: string,
  currentHref: string
): { keyword: string; href: string }[] {
  const lowerText = text.toLowerCase();
  const usedHrefs = new Set<string>();
  const results: { keyword: string; href: string }[] = [];

  const sorted = [...SERVICE_KEYWORDS].sort(
    (a, b) => a.priority - b.priority || b.keyword.length - a.keyword.length
  );

  for (const { keyword, href } of sorted) {
    if (results.length >= MAX_LINKS_PER_BLOCK) break;
    if (href === currentHref) continue;
    if (usedHrefs.has(href)) continue;
    if (lowerText.includes(keyword.toLowerCase())) {
      results.push({ keyword, href });
      usedHrefs.add(href);
    }
  }

  return results;
}

/**
 * Generate cross-links: other services available in the same location.
 */
export function generateLocationCrossLinks(
  locationSlug: string,
  locationName: string,
  allServiceSlugs: { slug: string; shortName: string }[],
  currentServiceSlug: string
): { label: string; href: string }[] {
  return allServiceSlugs
    .filter((s) => s.slug !== currentServiceSlug && s.slug !== "report-writing")
    .map((s) => ({
      label: `${s.shortName} Inspections in ${locationName}`,
      href: `/${s.slug}-${locationSlug}`,
    }));
}
