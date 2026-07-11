import type { MetadataRoute } from "next";
import { GEO_CONFIG } from "@/lib/geo-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${GEO_CONFIG.baseUrl}/sitemap.xml`,
  };
}
