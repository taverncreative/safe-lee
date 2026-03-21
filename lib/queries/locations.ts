import { db } from "@/lib/db";
import { locations } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function getAllLocations() {
  return db.select().from(locations).orderBy(asc(locations.name));
}

export async function getLocationBySlug(slug: string) {
  const rows = await db
    .select()
    .from(locations)
    .where(eq(locations.slug, slug))
    .limit(1);
  return rows[0] ?? null;
}
