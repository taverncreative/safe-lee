/* ------------------------------------------------------------------ */
/*  Haversine distance — for "nearby areas" component                  */
/* ------------------------------------------------------------------ */

const R = 6371; // Earth radius in km

export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export interface NearbyLocation {
  id: number;
  name: string;
  slug: string;
  distance: number;
}

/**
 * Find the N nearest locations to a given lat/lon.
 * Excludes the current location itself.
 */
export function findNearbyLocations(
  currentId: number,
  currentLat: number,
  currentLon: number,
  allLocations: { id: number; name: string; slug: string; latitude: string; longitude: string }[],
  limit = 8
): NearbyLocation[] {
  return allLocations
    .filter((loc) => loc.id !== currentId)
    .map((loc) => ({
      id: loc.id,
      name: loc.name,
      slug: loc.slug,
      distance: haversineDistance(
        currentLat,
        currentLon,
        parseFloat(loc.latitude),
        parseFloat(loc.longitude)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}
