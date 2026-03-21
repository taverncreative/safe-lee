import { Reveal } from "@/components/ui/Reveal";

interface LocalContextProps {
  content: string;
  locationName: string;
  serviceName: string;
}

export function LocalContext({
  content,
  locationName,
  serviceName,
}: LocalContextProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
            About {serviceName} in {locationName}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="prose prose-lg mt-8 max-w-none text-sl-gray-700 prose-headings:font-heading prose-headings:text-sl-gray-900 prose-a:text-sl-red prose-a:underline hover:prose-a:text-sl-red-dark"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Reveal>
      </div>
    </section>
  );
}
