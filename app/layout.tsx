import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SiteSchema } from "@/components/seo/SiteSchema";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";
import { MobileCTA } from "@/components/ui/MobileCTA";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.safeleeinspectionconsultancy.com").replace(/\/$/, "")
  ),
  title: {
    /*
     * default is the fallback title used when a route does not export its
     * own metadata.title. Keyword-first ordering matches the homepage and
     * keeps inner-page CTR consistent if a new page is ever added without
     * an explicit title.
     */
    default: "Statutory Inspections Manchester | Safe Lee Inspection & Consultancy",
    template: "%s | Safe Lee Inspection & Consultancy",
  },
  /*
   * Sitewide fallback description — used only when a page does not export
   * its own metadata.description. Kept under 155 chars to match the SERP
   * truncation limit so even fallback usage stays clean.
   */
  description:
    "Professional LOLER, PSSR, PUWER, WAHR & COSHH LEV inspections. Manchester-based, serving the North West & UK wide. 5.0★ on Google. Get a free quote.",
  /*
   * Sitewide default <meta name="robots">. Per-page metadata can override
   * this — e.g. legal pages set robots.index = false to keep them out of
   * search results while still allowing link equity to flow (follow = true).
   *
   * Explicit max-* directives instruct Google to use the largest snippet,
   * largest image preview, and unrestricted video preview length when
   * generating SERP results.
   */
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)] bg-white text-sl-gray-900">
        <SiteSchema />
        <WebSiteSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
