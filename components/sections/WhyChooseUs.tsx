import { UserCheck, Award, MapPin, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const values = [
  {
    icon: UserCheck,
    title: "Experienced Engineers",
    description:
      "Years of hands-on industry experience across all major inspection disciplines.",
  },
  {
    icon: Award,
    title: "Fully Qualified",
    description:
      "Competent person status with recognised industry qualifications and accreditations.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description:
      "Based in Manchester, serving the North West and available for projects nationwide.",
  },
  {
    icon: Shield,
    title: "Armed Forces Covenant",
    description:
      "Proud holder of the Armed Forces Covenant Bronze Award, supporting our veteran community.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
              Why Choose Safe Lee?
            </h2>
            <p className="mt-4 text-lg text-sl-gray-600">
              Professional statutory inspections backed by real expertise.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="rounded-xl border border-sl-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-lg">
                  <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-xl bg-sl-red/10 p-4">
                    <Icon className="h-7 w-7 text-sl-red" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-sl-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sl-gray-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
