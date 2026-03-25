import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const SERVICE_HERO_IMAGES: Record<string, string> = {
  "pssr-inspections": "/images/PSSR/Hero.webp",
  "loler-inspections": "/images/LOLER/HERO.webp",
  "wahr-inspections": "/images/WAHR/Hero.webp",
  "puwer-inspections": "/images/PUWER/Hero.webp",
  "coshh-lev-inspections": "/images/COSSH/hero.webp",
};

interface LocalServiceHeroProps {
  serviceName: string;
  locationName: string;
  county: string;
  shortName: string;
  serviceSlug?: string;
  subtitle?: string;
}

export function LocalServiceHero({
  serviceName,
  locationName,
  county,
  shortName,
  serviceSlug,
  subtitle,
}: LocalServiceHeroProps) {
  const heroImage = serviceSlug
    ? SERVICE_HERO_IMAGES[serviceSlug] ?? "/images/HERO.webp"
    : "/images/HERO.webp";

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={heroImage}
        alt={`${serviceName} in ${locationName} — Safe Lee Inspection & Consultancy`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Breadcrumb */}
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link
                  href={`/${serviceSlug ?? serviceName.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-white transition-colors"
                >
                  {serviceName}
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="text-white font-medium">{locationName}</li>
            </ol>
          </nav>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {serviceName} in {locationName}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {subtitle
              ? subtitle
              : `Professional ${shortName} inspections in ${locationName}, ${county}. Carried out by experienced, qualified engineers.`}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="tel:01617062022" variant="yellow" size="lg">
              <Phone className="h-5 w-5" />
              Call 0161 706 2022
            </Button>
            <Button
              href="/contact-us"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-sl-navy"
            >
              Get a Free Quote
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
