/* ------------------------------------------------------------------ */
/*  FAQAccordion                                                        */
/*                                                                      */
/*  Server component using native <details>/<summary> elements — no JS  */
/*  bundle, no hydration cost. Eliminating the previous client-side     */
/*  useState accordion shaved a hydration target off every page that    */
/*  renders an FAQ section, lowering Total Blocking Time.               */
/*                                                                      */
/*  The chevron rotation is handled with the Tailwind v4 `open:`        */
/*  variant which targets the parent <details open> state — pure CSS,   */
/*  no script.                                                          */
/* ------------------------------------------------------------------ */

import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  heading?: string;
}

export function FAQAccordion({
  faqs,
  heading = "Frequently Asked Questions",
}: FAQAccordionProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
          {heading}
        </h2>

        <div className="mt-12 divide-y divide-sl-gray-200 border-t border-b border-sl-gray-200">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 transition-colors hover:text-sl-red">
                <span className="font-heading text-lg font-semibold text-sl-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-sl-gray-600 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="pb-5">
                <p className="leading-relaxed text-sl-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
