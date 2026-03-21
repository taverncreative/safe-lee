import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ShieldCheck,
  Waves,
  HardHat,
  FlaskConical,
  Wind,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface ServiceCardProps {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  iconName: string;
}

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Waves,
  HardHat,
  FlaskConical,
  Wind,
  FileText,
};

export function ServiceCard({
  name,
  slug,
  shortName,
  description,
  iconName,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] ?? ShieldCheck;

  return (
    <Reveal>
      <Link
        href={`/${slug}`}
        className="group flex h-full flex-col rounded-xl border border-sl-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-sl-red/10 p-3 transition-colors group-hover:bg-sl-red">
          <Icon className="h-6 w-6 text-sl-red transition-colors group-hover:text-white" />
        </div>

        <h3 className="font-heading text-lg font-semibold text-sl-gray-900">
          {name}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-sl-red">
          {shortName}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-sl-gray-600">
          {description}
        </p>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sl-red transition-colors group-hover:text-sl-red-dark">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}
