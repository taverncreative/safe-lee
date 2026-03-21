"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "LOLER", href: "/loler-inspections" },
  { label: "PSSR", href: "/pssr-inspections" },
  { label: "COSHH", href: "/coshh-lev-inspections" },
  { label: "PUWER", href: "/puwer-inspections" },
  { label: "WAHR", href: "/wahr-inspections" },
  { label: "Report Writing", href: "/report-writing" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
  }, []);

  /* Close on Escape */
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeAll]);

  /* Prevent body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="bg-camo sticky top-0 z-50 w-full border-b border-white/10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeAll}>
          <Image
            src="/images/Logos/Logo For Whit backgroun.svg"
            alt="Safe Lee Inspections & Consultancy"
            width={150}
            height={60}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-sl-red"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:01617062022"
          className="hidden items-center gap-2 rounded-lg bg-sl-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sl-red-dark lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          0161 706 2022
        </a>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile slide-out panel */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            onClick={closeAll}
            aria-hidden="true"
          />

          <div
            className="bg-camo fixed inset-y-0 right-0 z-50 w-full max-w-sm px-6 py-6 shadow-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" className="flex items-center" onClick={closeAll}>
                <Image
                  src="/images/Logos/Logo For Whit backgroun.svg"
                  alt="Safe Lee Inspections & Consultancy"
                  width={120}
                  height={48}
                />
              </Link>
              <button
                onClick={closeAll}
                className="rounded-lg p-2 text-white hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10 hover:text-sl-red"
                  onClick={closeAll}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile phone CTA */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href="tel:01617062022"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-sl-red px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-sl-red-dark"
              >
                <Phone className="h-5 w-5" />
                0161 706 2022
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
