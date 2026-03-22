import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/types";

const navigationLinks = [
  { label: "LOLER", href: "/loler-inspections" },
  { label: "PSSR", href: "/pssr-inspections" },
  { label: "COSHH", href: "/coshh-lev-inspections" },
  { label: "PUWER", href: "/puwer-inspections" },
  { label: "WAHR", href: "/wahr-inspections" },
];

export function Footer() {
  return (
    <footer>
      {/* Red accent bar */}
      <div className="h-1 w-full bg-sl-red" />

      {/* Main footer */}
      <div className="bg-camo-cover">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_auto_auto] lg:gap-12">
            {/* Column 1 — Logo */}
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/images/Logos/Logo For Whit backgroun.svg"
                  alt="Safe Lee Inspections & Consultancy"
                  width={180}
                  height={72}
                  className="h-auto w-44"
                />
              </Link>
            </div>

            {/* Column 2 — Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-sl-gray-300">
                <p>
                  Irlam, Greater Manchester
                  <br />
                  England, United Kingdom
                </p>
                <p>
                  T:{" "}
                  <a
                    href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {BUSINESS.phone}
                  </a>
                  <br />
                  M:{" "}
                  <a
                    href={`tel:${BUSINESS.mobile.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {BUSINESS.mobile}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="break-all transition-colors hover:text-white"
                  >
                    {BUSINESS.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Column 3 — Follow Us */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Follow Us
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={BUSINESS.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sl-gray-300 transition-colors hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sl-gray-300 transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sl-gray-300 transition-colors hover:text-white"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 — Navigation (far right) */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-sl-gray-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Locations */}
          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-white">
              Areas We Cover
            </h3>
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-xs text-sl-gray-300">
              {[
                "Manchester",
                "Salford",
                "Bolton",
                "Wigan",
                "Stockport",
                "Oldham",
                "Rochdale",
                "Bury",
                "Trafford",
                "Warrington",
                "St Helens",
                "Liverpool",
                "Preston",
                "Blackburn",
                "Burnley",
                "Blackpool",
                "Chester",
                "Crewe",
                "Widnes",
                "Southport",
              ].map((name, i, arr) => (
                <span key={name}>
                  {name}
                  {i < arr.length - 1 && <span className="mx-1">·</span>}
                </span>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-sl-gray-300/70">
              Covering Greater Manchester, Lancashire, Merseyside, Cheshire &amp; the wider North West
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-sl-gray-300 sm:flex-row sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-1">
              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-white"
              >
                Terms &amp; Conditions
              </Link>
              <span className="mx-1">|</span>
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <span className="mx-1">|</span>
              <Link
                href="/accessibility-statement"
                className="transition-colors hover:text-white"
              >
                Accessibility Statement
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span>
                &copy;{new Date().getFullYear()} Safe-Lee Inspections &amp;
                Consultancy
              </span>
              <span className="mx-1">|</span>
              <span>
                Website By{" "}
                <a
                  href="https://www.businesssortedkent.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  BSK
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
