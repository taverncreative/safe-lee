/* ------------------------------------------------------------------ */
/*  ServiceOverview — 2-column overview section (server component)     */
/*  Mirrors the "Our Mission" layout on the homepage                   */
/* ------------------------------------------------------------------ */

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface ServiceOverviewProps {
  serviceName: string;
  description: string;
  regulationName: string;
  imageSrc: string;
  imageAlt: string;
}

export function ServiceOverview({
  serviceName,
  description,
  regulationName,
  imageSrc,
  imageAlt,
}: ServiceOverviewProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
                {serviceName}
              </h2>
              <span className="mt-3 inline-block rounded-full bg-sl-red/10 px-4 py-1.5 text-sm font-semibold text-sl-red">
                {regulationName}
              </span>
              <p className="mt-6 text-lg leading-relaxed text-sl-gray-600">
                {description}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
