import { db } from "@/lib/db";
import { industries, serviceIndustries } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function getAllIndustries() {
  return db.select().from(industries).orderBy(asc(industries.name));
}

export async function getIndustriesForService(serviceId: number) {
  return db
    .select({
      id: industries.id,
      name: industries.name,
      slug: industries.slug,
      description: industries.description,
      painPoint: industries.painPoint,
      relevanceNote: serviceIndustries.relevanceNote,
    })
    .from(serviceIndustries)
    .innerJoin(industries, eq(serviceIndustries.industryId, industries.id))
    .where(eq(serviceIndustries.serviceId, serviceId))
    .orderBy(asc(industries.name));
}
