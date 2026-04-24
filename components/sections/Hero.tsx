import Image from "next/image";
import { Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/HERO.webp"
        alt="Statutory inspection engineer examining industrial equipment — Safe Lee Inspection & Consultancy"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/60"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          {/* Shield icon */}
          <Reveal delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 text-sl-yellow" />
              Statutory Inspection Specialists
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Statutory and Non-Statutory Inspections of Plant and Machinery
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="speakable-subtitle mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Expert examinations under LOLER, PUWER, PSSR, COSHH and WAHR.
              Manchester based inspections, supporting clients across the
              North&nbsp;West and UK&nbsp;wide.
            </p>
          </Reveal>

          {/* CTA buttons */}
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
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

          {/* Google rating badge */}
          <Reveal delay={0.4}>
            <div className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">
                5.0 Rating on Google
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
