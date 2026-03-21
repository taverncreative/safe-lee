import Image from "next/image";

const accreditations = [
  {
    src: "/images/Acredations/rs=w_1200,h_902,cg_true.webp",
    alt: "HSE Health & Safety Executive",
    width: 120,
    height: 80,
  },
  {
    src: "/images/Acredations/428df7b7-41cb-4f25-9a19de55bc4eca25.jpg",
    alt: "SOE Society of Operations Engineers",
    width: 120,
    height: 80,
  },
  {
    src: "/images/Acredations/WhatsApp Image 2025-12-09 at 17.40.33 copy.jpeg",
    alt: "CPA Construction Plant-hire Association",
    width: 120,
    height: 80,
  },
  {
    src: "/images/Acredations/WhatsApp Image 2026-03-12 at 15.08.56.jpeg",
    alt: "Armed Forces Covenant Bronze Award",
    width: 120,
    height: 80,
  },
];

export function Accreditations() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {accreditations.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-16 w-auto object-contain md:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
