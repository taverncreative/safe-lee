import { db } from "@/lib/db";
import { faqs } from "@/lib/db/schema";
import { eq, and, isNull, asc, or } from "drizzle-orm";

/** General FAQs (no service/location/industry scope) */
export async function getGeneralFAQs() {
  return db
    .select()
    .from(faqs)
    .where(
      and(
        isNull(faqs.serviceId),
        isNull(faqs.locationId),
        isNull(faqs.industryId)
      )
    )
    .orderBy(asc(faqs.sortOrder));
}

/** FAQs for a specific service (including general ones) */
export async function getServiceFAQs(serviceId: number) {
  return db
    .select()
    .from(faqs)
    .where(
      or(
        eq(faqs.serviceId, serviceId),
        and(
          isNull(faqs.serviceId),
          isNull(faqs.locationId),
          isNull(faqs.industryId)
        )
      )
    )
    .orderBy(asc(faqs.sortOrder));
}

/** FAQs for a service+location combo */
export async function getServiceLocationFAQs(
  serviceId: number,
  locationId: number
) {
  return db
    .select()
    .from(faqs)
    .where(
      or(
        and(eq(faqs.serviceId, serviceId), eq(faqs.locationId, locationId)),
        and(eq(faqs.serviceId, serviceId), isNull(faqs.locationId)),
        and(
          isNull(faqs.serviceId),
          isNull(faqs.locationId),
          isNull(faqs.industryId)
        )
      )
    )
    .orderBy(asc(faqs.sortOrder));
}
