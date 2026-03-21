interface Step {
  title: string;
  description: string;
}

interface InspectionProcessProps {
  serviceName?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    title: "Initial Consultation",
    description:
      "We discuss your requirements, the equipment involved, and any specific regulatory obligations relevant to your site.",
  },
  {
    title: "Site Survey",
    description:
      "Our engineer visits your premises to assess the scope of the inspection and identify any immediate concerns.",
  },
  {
    title: "Thorough Examination",
    description:
      "A detailed, hands-on inspection of all relevant equipment carried out to the applicable statutory standards.",
  },
  {
    title: "Report & Recommendations",
    description:
      "You receive a comprehensive written report detailing findings, defects, and clear recommendations for remedial action.",
  },
  {
    title: "Ongoing Support",
    description:
      "We provide follow-up guidance, schedule future inspections, and help you maintain continuous compliance.",
  },
];

export function InspectionProcess({
  serviceName,
  steps,
}: InspectionProcessProps) {
  const processSteps = steps ?? defaultSteps;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
            {serviceName
              ? `Our ${serviceName} Process`
              : "Our Inspection Process"}
          </h2>
          <p className="mt-4 text-lg text-sl-gray-600">
            A straightforward, professional approach from first contact to
            ongoing compliance.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Vertical timeline line */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-0.5 bg-sl-gray-200 md:left-1/2 md:block md:-translate-x-px"
          />

          <ol className="space-y-10 md:space-y-14">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <li key={index} className="relative md:flex md:items-start">
                  <div
                    className={`flex items-start gap-5 md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    {/* Number badge */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sl-red text-lg font-bold text-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-semibold text-sl-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sl-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
