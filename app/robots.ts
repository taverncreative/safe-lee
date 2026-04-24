import type { MetadataRoute } from "next";
import { BUSINESS } from "@/types";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        /*
         * /api/og is the dynamic OG image generator (edge route).
         * Googlebot-Image must be able to fetch it to render og:image previews,
         * so /api/ must NOT be disallowed here.
         */
      },
    ],
    sitemap: `${BUSINESS.url}/sitemap.xml`,
  };
}
