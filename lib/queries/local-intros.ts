import { db } from "@/lib/db";
import { localIntros } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";

export async function getLocalIntro(serviceId: number, locationId: number) {
  const rows = await db
    .select()
    .from(localIntros)
    .where(
      and(
        eq(localIntros.serviceId, serviceId),
        eq(localIntros.locationId, locationId)
      )
    )
    .limit(1);
  return rows[0] ?? null;
}
