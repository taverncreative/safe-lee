"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sl-gray-200 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.1)] md:hidden">
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
