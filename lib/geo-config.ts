/**
 * Geo configuration for Generative Engine Optimization (GEO).
 * Centralizes geographic signals so AI systems and search engines
 * understand where the business operates and is based.
 */

export const GEO_CONFIG = {
  /** Canonical base URL (used in schema, sitemap, OG) */
  baseUrl: "https://www.wiseaccelerate.com",

  /** Primary locale / language of the site */
  locale: "en_US",
  inLanguage: "en",

  /** Headquarters / company base location */
  headquarters: {
    country: "VN",
    countryName: "Vietnam",
    /** Optional: region/city for more precise geo signals */
    addressRegion: undefined as string | undefined,
    addressLocality: undefined as string | undefined,
  },

  /**
   * Geographic areas served (for Schema.org areaServed).
   * Explicit list helps generative engines cite correct coverage.
   */
  areasServed: [
    { "@type": "Country" as const, name: "Vietnam" },
    { "@type": "Country" as const, name: "Australia" },
    { "@type": "Country" as const, name: "United States" },
    { "@type": "Country" as const, name: "United Kingdom" },
    { "@type": "Country" as const, name: "Singapore" },
    // Generic worldwide for any other region
    { "@type": "Place" as const, name: "Worldwide" },
  ],

  /**
   * For meta geo tags (legacy but still used by some crawlers).
   * ISO 3166-2 region e.g. VN-HN, or country only VN.
   */
  geoRegion: "VN",
  geoPlacename: "Vietnam",
} as const;
