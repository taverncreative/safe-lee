import Link from "next/link";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface Location {
  name: string;
  slug: string;
}

interface CoverageProps {
  locations?: Location[];
  serviceSlug?: string;
}

export function Coverage({ locations, serviceSlug }: CoverageProps) {
  return (
    <section className="bg-sl-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-sl-red/10 p-3">
              <MapPin className="h-6 w-6 text-sl-red" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
              Areas We Cover
            </h2>
            <p className="mt-4 text-lg text-sl-gray-600">
              Based in Irlam, Manchester, we provide inspection services across
              Greater Manchester, the North West, and nationwide.
            </p>
          </div>
        </Reveal>

        {locations && locations.length > 0 ? (
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {locations.map((location) => {
                const href = serviceSlug
                  ? `/${serviceSlug}-${location.slug}`
                  : `#${location.slug}`;
                return (
                  <Link
                    key={location.slug}
                    href={href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-sl-gray-200 bg-white px-4 py-2 text-sm font-medium text-sl-gray-700 transition-all hover:border-sl-red hover:bg-sl-red hover:text-white"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {location.name}
                  </Link>
                );
              })}
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.15}>
            <p className="mt-8 text-center text-sl-gray-600">
              We cover Greater Manchester, Lancashire, Cheshire, Merseyside, and
              the wider North West. We also undertake nationwide projects on
              request.{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-sl-red underline hover:text-sl-red-dark"
              >
                Get in touch
              </Link>{" "}
              to discuss your location.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
