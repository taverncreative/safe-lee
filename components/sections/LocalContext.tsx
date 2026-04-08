import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Building2 } from "lucide-react";
import type { LocationEnrichment } from "@/lib/content/location-data";
import { injectContextualLinks } from "@/lib/seo/inject-contextual-links";

interface LocalContextProps {
  content: string;
  locationName: string;
  serviceName: string;
  locationData?: LocationEnrichment;
  /** Current page path — used to auto-link service keywords without self-linking */
  pageHref?: string;
}

export function LocalContext({
  content,
  locationName,
  serviceName,
  locationData,
  pageHref,
}: LocalContextProps) {
  // Split multi-paragraph content on double newlines
  const paragraphs = content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
            About {serviceName} in {locationName}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="prose prose-lg mt-8 max-w-none text-sl-gray-700 prose-headings:font-heading prose-headings:text-sl-gray-900 prose-a:text-sl-red prose-a:underline hover:prose-a:text-sl-red-dark">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>
                {pageHref
                  ? injectContextualLinks(paragraph, pageHref)
                  : paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Location enrichment: key areas and landmarks */}
        {locationData && (locationData.keyAreas.length > 0 || locationData.localLandmarks) && (
          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {locationData.keyAreas.length > 0 && (
                <div className="rounded-xl border border-sl-gray-200 bg-sl-gray-50 p-6">
                  <div className="mb-3 flex items-center gap-2 text-sl-gray-900">
                    <MapPin className="h-5 w-5 text-sl-red" />
                    <h3 className="font-heading text-lg font-semibold">
                      Key Areas We Cover
                    </h3>
                  </div>
                  <ul className="space-y-1.5 text-sm text-sl-gray-600">
                    {locationData.keyAreas.map((area) => (
                      <li key={area} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sl-red" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {locationData.localLandmarks && (
                <div className="rounded-xl border border-sl-gray-200 bg-sl-gray-50 p-6">
                  <div className="mb-3 flex items-center gap-2 text-sl-gray-900">
                    <Building2 className="h-5 w-5 text-sl-red" />
                    <h3 className="font-heading text-lg font-semibold">
                      Local Landmarks
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-sl-gray-600">
                    {locationData.localLandmarks}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
