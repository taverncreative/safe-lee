import { db } from "@/lib/db";
import { reviews } from "@/lib/db/schema";
import { eq, desc, isNull, or } from "drizzle-orm";

/** All reviews (global) */
export async function getAllReviews() {
  return db.select().from(reviews).orderBy(desc(reviews.createdAt));
}

/** Reviews for a location, with fallback to all */
export async function getReviewsForLocation(locationId: number) {
  const locationReviews = await db
    .select()
    .from(reviews)
    .where(or(eq(reviews.locationId, locationId), isNull(reviews.locationId)))
    .orderBy(desc(reviews.createdAt));
  return locationReviews;
}
