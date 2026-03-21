import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface InternalLinksProps {
  links: { label: string; href: string }[];
  heading?: string;
}

export function InternalLinks({
  links,
  heading = "Related Services",
}: InternalLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="bg-sl-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
            {heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-sl-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-sl-gray-700 transition-all hover:border-sl-red hover:bg-sl-red hover:text-white"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
