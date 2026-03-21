import { Phone, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-sl-navy py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sl-red/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-sl-yellow/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/10 p-4">
            <ShieldCheck className="h-10 w-10 text-sl-yellow" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Protect Your Workforce Today
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Don&apos;t wait for an incident or an enforcement notice. Get in
            touch with Safe Lee Inspection &amp; Consultancy for professional,
            thorough statutory inspections you can rely on.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-white/70 sm:flex-row sm:gap-8">
            <a
              href="tel:01617062022"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5 text-sl-yellow" />
              <span className="font-medium">0161 706 2022</span>
            </a>
            <a
              href="mailto:admin@safeleeinspectionconsultancy.com"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5 text-sl-yellow" />
              <span className="font-medium">admin@safeleeinspectionconsultancy.com</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="tel:01617062022" variant="yellow" size="lg">
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
            <Button
              href="/contact-us"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-sl-navy"
            >
              Request a Quote
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
