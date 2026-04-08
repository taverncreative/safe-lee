/* ------------------------------------------------------------------ */
/*  inject-contextual-links.tsx                                         */
/*  React-specific layer over contextual-linker.ts                      */
/*                                                                      */
/*  Takes a plain-text paragraph and returns React nodes with           */
/*  matched service keywords wrapped in <a> tags.                       */
/*                                                                      */
/*  Usage:                                                              */
/*    import { injectContextualLinks } from "@/lib/seo/inject-contextual-links"; */
/*    <p>{injectContextualLinks(paragraph, currentHref)}</p>            */
/* ------------------------------------------------------------------ */

import React from "react";
import { findContextualLinks } from "./contextual-linker";

interface MatchPos {
  start: number;
  end: number;
  href: string;
}

/**
 * Injects contextual internal links into a paragraph string.
 * Returns a React.ReactNode — use directly as `<p>` children.
 *
 * @param text        - A single paragraph of plain text
 * @param currentHref - The current page path (prevents self-linking)
 */
export function injectContextualLinks(
  text: string,
  currentHref: string
): React.ReactNode {
  const matches = findContextualLinks(text, currentHref);
  if (matches.length === 0) return text;

  // Locate each matched keyword in the original text (case-preserving)
  const positions: MatchPos[] = [];

  for (const { keyword, href } of matches) {
    const idx = text.toLowerCase().indexOf(keyword.toLowerCase());
    if (idx === -1) continue;

    // Skip if this range overlaps an already-claimed position
    const overlaps = positions.some(
      (p) => idx < p.end && idx + keyword.length > p.start
    );
    if (overlaps) continue;

    positions.push({ start: idx, end: idx + keyword.length, href });
  }

  if (positions.length === 0) return text;

  // Sort by position in the text so we can walk left to right
  positions.sort((a, b) => a.start - b.start);

  // Build the React node array
  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  for (const { start, end, href } of positions) {
    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }
    nodes.push(
      <a
        key={start}
        href={href}
        className="underline decoration-dotted hover:decoration-solid"
      >
        {text.slice(start, end)}
      </a>
    );
    cursor = end;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return <>{nodes}</>;
}
