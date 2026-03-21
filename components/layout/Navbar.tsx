"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, FileText, ChevronRight } from "lucide-react";

const serviceLinks = [
  { label: "LOLER", href: "/loler-inspections" },
  { label: "PSSR", href: "/pssr-inspections" },
  { label: "COSHH", href: "/coshh-lev-inspections" },
  { label: "PUWER", href: "/puwer-inspections" },
  { label: "WAHR", href: "/wahr-inspections" },
  { label: "Report Writing", href: "/report-writing" },
];

const navLinks = [
  ...serviceLinks,
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
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={closeAll}
            aria-hidden="true"
          />

          <div
            className="bg-camo fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Link href="/" className="flex items-center" onClick={closeAll}>
                <Image
                  src="/images/Logos/Logo For Whit backgroun.svg"
                  alt="Safe Lee Inspections & Consultancy"
                  width={100}
                  height={40}
                />
              </Link>
              <button
                onClick={closeAll}
                className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {/* Home */}
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                onClick={closeAll}
              >
                Home
              </Link>

              {/* Services section */}
              <p className="mb-1 mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                Inspections
              </p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={closeAll}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-white/30" />
                </Link>
              ))}

              {/* Contact */}
              <div className="mt-4 border-t border-white/10 pt-4">
                <Link
                  href="/contact-us"
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  onClick={closeAll}
                >
                  Contact Us
                </Link>
              </div>
            </nav>

            {/* Bottom CTAs */}
            <div className="border-t border-white/10 p-4 space-y-3">
              <a
                href="tel:01617062022"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-sl-red px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-sl-red-dark"
              >
                <Phone className="h-4 w-4" />
                Call 0161 706 2022
              </a>
              <Link
                href="/contact-us"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                onClick={closeAll}
              >
                <FileText className="h-4 w-4" />
                Get a Free Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
