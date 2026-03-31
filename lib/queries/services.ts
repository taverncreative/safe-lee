import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function getAllServices() {
  return db.select().from(services).orderBy(asc(services.sortOrder));
}

export async function getServiceBySlug(slug: string) {
  const rows = await db
    .select()
    .from(services)
    .where(eq(services.slug, slug))
    .limit(1);
  return rows[0] ?? null;
}
