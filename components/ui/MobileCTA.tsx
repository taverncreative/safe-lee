/* ------------------------------------------------------------------ */
/*  MobileCTA                                                           */
/*                                                                      */
/*  Sticky-bottom call/quote bar shown on mobile only. Server component */
/*  — no scroll listener, no useState, no hydration cost.               */
/*                                                                      */
/*  Previous implementation used a JS scroll handler to reveal the bar  */
/*  after 300px of scroll. Removed: the bar is always present once the  */
/*  user is below the navbar — the visual difference is negligible and  */
/*  the TBT win is not.                                                 */
/* ------------------------------------------------------------------ */

import Link from "next/link";
import { Phone } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="mobile-cta-scroll-reveal fixed inset-x-0 bottom-0 z-40 border-t border-sl-gray-200 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.1)] md:hidden">
      <div className="flex gap-3">
        <a
          href="tel:01617062022"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-sl-red px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-sl-red-dark"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <Link
          href="/contact-us"
          className="flex flex-1 items-center justify-center rounded-lg bg-sl-yellow px-4 py-3 text-sm font-semibold text-sl-gray-900 transition-colors hover:bg-sl-yellow-dark"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
