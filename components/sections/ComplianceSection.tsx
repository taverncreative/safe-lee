import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface ComplianceSectionProps {
  serviceName?: string;
  regulationName?: string;
  content?: string;
  businessContext?: string;
}

export function ComplianceSection({
  serviceName,
  regulationName,
  content,
  businessContext,
}: ComplianceSectionProps) {
  const defaultContent = regulationName
    ? `Under the ${regulationName}, employers and duty holders are legally required to ensure equipment is thoroughly examined by a competent person at regular intervals. Failure to comply can result in significant fines, enforcement action, and — most importantly — puts your workforce at serious risk.`
    : "UK health and safety law requires employers to ensure workplace equipment is regularly inspected and maintained by a competent person. Non-compliance can lead to significant fines, enforcement notices, prosecution, and puts lives at risk.";

  return (
    <section className="bg-amber-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-amber-100 p-4">
              <ShieldAlert className="h-10 w-10 text-amber-600" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
              Is Your Business Compliant?
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-sl-gray-700">
              {content ?? defaultContent}
            </p>
          </Reveal>

          {businessContext && (
            <Reveal delay={0.17}>
              <p className="mt-4 text-base leading-relaxed text-sl-gray-600">
                {businessContext}
              </p>
            </Reveal>
          )}

          {regulationName && (
            <Reveal delay={0.2}>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-amber-700">
                {regulationName} compliance is not optional
              </p>
            </Reveal>
          )}

          <Reveal delay={0.25}>
            <div className="mt-8">
              <Button href="/contact-us" variant="yellow" size="lg">
                {serviceName
                  ? `Book a ${serviceName} Today`
                  : "Check Your Compliance"}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
