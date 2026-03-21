import Link from "next/link";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface NearbyArea {
  name: string;
  slug: string;
  distance: number;
}

interface NearbyAreasProps {
  areas: NearbyArea[];
  serviceSlug: string;
  serviceName: string;
}

export function NearbyAreas({
  areas,
  serviceSlug,
  serviceName,
}: NearbyAreasProps) {
  if (areas.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
              {serviceName} in Nearby Areas
            </h2>
            <p className="mt-4 text-lg text-sl-gray-600">
              We also provide {serviceName.toLowerCase()} services in these
              nearby locations.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/${serviceSlug}-${area.slug}`}
                className="group flex items-center rounded-lg border border-sl-gray-200 bg-white px-5 py-4 transition-all hover:border-sl-red hover:shadow-md"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sl-red" />
                  <span className="font-medium text-sl-gray-900 group-hover:text-sl-red">
                    {area.name}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
