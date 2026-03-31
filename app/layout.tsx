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

const isProduction = process.env.NEXT_PUBLIC_SITE_URL === "https://www.safeleeinspectionconsultancy.com";

export const metadata: Metadata = {
  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.safeleeinspectionconsultancy.com").replace(/\/$/, "")
  ),
  title: {
    default: "Safe Lee Inspection & Consultancy | Statutory Inspections Manchester",
    template: "%s | Safe Lee Inspection & Consultancy",
  },
  description:
    "Professional PSSR, LOLER, WAHR, PUWER, and COSHH LEV inspections from Safe Lee Inspection & Consultancy Ltd. Serving Manchester, the North West, and beyond.",
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false },
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
