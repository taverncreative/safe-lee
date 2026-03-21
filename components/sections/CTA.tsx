import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface CTAProps {
  headline?: string;
  subheading?: string;
  serviceName?: string;
  locationName?: string;
}

export function CTA({
  headline,
  subheading,
  serviceName,
  locationName,
}: CTAProps) {
  const resolvedHeadline =
    headline ??
    (serviceName && locationName
      ? `Need ${serviceName} in ${locationName}?`
      : "Ready to Ensure Compliance?");

  const resolvedSubheading =
    subheading ??
    "Speak to our experienced engineers today for a free, no-obligation quote.";

  return (
    <section className="bg-gradient-to-r from-sl-red-dark to-sl-red py-14 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {resolvedHeadline}
          </h2>
          <p className="mt-3 text-lg text-white/80">{resolvedSubheading}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
