import {
  Factory,
  Building2,
  Warehouse,
  HardHat,
  Droplets,
  Flame,
  Utensils,
  GraduationCap,
  Hospital,
  Truck,
  Landmark,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface Industry {
  name: string;
  slug: string;
  description?: string;
  relevanceNote?: string | null;
}

interface IndustryRelevanceProps {
  industries: Industry[];
  serviceName?: string;
  locationName?: string;
}

const industryIconMap: Record<string, LucideIcon> = {
  manufacturing: Factory,
  construction: HardHat,
  warehousing: Warehouse,
  logistics: Truck,
  "oil-gas": Flame,
  "oil-and-gas": Flame,
  chemical: Droplets,
  chemicals: Droplets,
  "food-beverage": Utensils,
  "food-and-beverage": Utensils,
  education: GraduationCap,
  healthcare: Hospital,
  "property-management": Building2,
  property: Building2,
  "local-authority": Landmark,
  "public-sector": Landmark,
  engineering: Wrench,
};

function getIndustryIcon(slug: string): LucideIcon {
  const normalised = slug.toLowerCase();
  for (const [key, icon] of Object.entries(industryIconMap)) {
    if (normalised.includes(key)) return icon;
  }
  return Factory;
}

export function IndustryRelevance({
  industries,
  serviceName,
  locationName,
}: IndustryRelevanceProps) {
  const heading =
    serviceName && locationName
      ? `Industries Requiring ${serviceName} in ${locationName}`
      : "Industries We Serve";

  return (
    <section className="bg-sl-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-lg text-sl-gray-600">
              We work with businesses of all sizes across a wide range of
              sectors.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = getIndustryIcon(industry.slug);
            return (
              <Reveal key={industry.slug} delay={index * 0.05}>
                <div className="group rounded-xl border border-sl-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-sl-red/10 p-3">
                    <Icon className="h-6 w-6 text-sl-red" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-sl-gray-900">
                    {industry.name}
                  </h3>
                  {industry.relevanceNote && (
                    <p className="mt-2 text-sm leading-relaxed text-sl-gray-600">
                      {industry.relevanceNote}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
