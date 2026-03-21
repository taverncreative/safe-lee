/* ------------------------------------------------------------------ */
/*  Content rotation arrays — seed-based selection per location        */
/*  Ensures non-duplicate content across pSEO pages                   */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_INTROS = [
  "Ensuring your business meets all statutory inspection requirements is not just a legal obligation — it protects your workforce and your reputation.",
  "Regulatory compliance is the foundation of a safe workplace. Falling behind on statutory inspections puts your employees at risk and exposes your business to prosecution.",
  "Health and safety legislation exists to prevent workplace injuries and fatalities. Staying compliant with inspection schedules demonstrates your commitment to worker safety.",
  "Non-compliance with statutory inspection requirements can result in enforcement notices, fines, and even criminal prosecution. We help you stay ahead of your obligations.",
  "Your duty of care to employees starts with ensuring all equipment is regularly inspected by a competent person. We make this straightforward and stress-free.",
] as const;

export const CTA_HEADLINES = [
  "Ready to Ensure Compliance?",
  "Book Your Inspection Today",
  "Need an Expert Inspection?",
  "Protect Your Workforce",
  "Stay Compliant, Stay Safe",
] as const;

export const CTA_SUBHEADINGS = [
  "Get in touch for a no-obligation quote and protect your business.",
  "Our experienced engineers are ready to help you meet your legal obligations.",
  "Contact us today for professional, reliable inspection services.",
  "Don't wait for an incident — book your statutory inspection now.",
  "We make compliance straightforward. Call us or request a callback.",
] as const;

export const PROCESS_INTROS = [
  "Our inspection process is thorough, efficient, and designed to minimise disruption to your operations.",
  "We follow a systematic approach to every inspection, ensuring nothing is overlooked.",
  "From initial contact to final report, our process is transparent and professional.",
  "Every inspection follows our rigorous methodology, developed over years of industry experience.",
  "We pride ourselves on a thorough yet efficient inspection process that respects your time.",
] as const;

export const INDUSTRY_INTROS = [
  "Our inspection services are trusted across a wide range of industries, each with unique compliance requirements.",
  "We understand that different sectors face different risks. Our inspections are tailored to your industry's specific needs.",
  "From manufacturing to healthcare, we provide specialist inspection services to businesses across every sector.",
  "Whether you operate in construction, food processing, or petrochemicals, we have the expertise to keep you compliant.",
  "Our engineers have experience across diverse industries, giving us the insight to identify sector-specific risks.",
] as const;

/* ------------------------------------------------------------------ */
/*  Seed-based deterministic picker                                    */
/* ------------------------------------------------------------------ */

export function pickByLocation(
  arr: readonly string[],
  locationName: string
): string {
  let hash = 0;
  for (let i = 0; i < locationName.length; i++) {
    hash = (hash * 31 + locationName.charCodeAt(i)) | 0;
  }
  return arr[Math.abs(hash) % arr.length];
}
