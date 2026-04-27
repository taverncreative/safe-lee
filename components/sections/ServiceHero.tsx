import Image from "next/image";
import {
  ShieldCheck,
  Waves,
  HardHat,
  FlaskConical,
  Wind,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface ServiceHeroProps {
  serviceName: string;
  regulationName: string;
  shortDescription: string;
  iconName: string;
  heroImage?: string;
}

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Waves,
  HardHat,
  FlaskConical,
  Wind,
  FileText,
};

const SERVICE_HERO_IMAGES: Record<string, string> = {
  "PSSR Inspections": "/images/PSSR/Hero.webp",
  "LOLER Inspections": "/images/LOLER/HERO.webp",
  "WAHR Inspections": "/images/WAHR/Hero.webp",
  "PUWER Inspections": "/images/PUWER/Hero.webp",
  "COSHH LEV Inspections": "/images/COSSH/hero.webp",
  "Report Writing": "/images/Report Writing/Tele.webp",
};

export function ServiceHero({
  serviceName,
  regulationName,
  shortDescription,
  iconName,
  heroImage,
}: ServiceHeroProps) {
  const Icon = iconMap[iconName] ?? ShieldCheck;
  const imageSrc =
    heroImage ?? SERVICE_HERO_IMAGES[serviceName] ?? "/images/HERO.webp";

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background photo */}
      <Image
        src={imageSrc}
        alt={`${serviceName} — Safe Lee Inspection & Consultancy`}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-white/10 p-4">
            <Icon className="h-10 w-10 text-sl-yellow" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {serviceName}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-3 text-lg font-medium text-sl-yellow">
            {regulationName}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="speakable-subtitle mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {shortDescription}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10">
            <Button href="/contact-us" variant="yellow" size="lg">
              Book a {serviceName}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
