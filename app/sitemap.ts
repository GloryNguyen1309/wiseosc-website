import type { MetadataRoute } from "next";
import { GEO_CONFIG } from "@/lib/geo-config";
import { TECHNOLOGIES } from "@/lib/technologies";

/** Slugs for dynamic work-detail pages (keep in sync with our-work-section / API) */
const WORK_DETAIL_SLUGS = [
  "heirwealth-family-wealth-management",
  "singapore-institute-of-technology",
  "cash-d",
  "sell-blue-ai",
  "zapiio",
  "lisa-training-manager",
  "apex-insurance",
] as const;

/** Slugs for dynamic job-detail pages (keep in sync with careers page) */
const JOB_DETAIL_SLUGS = [
  "senior-full-stack-developer",
  "frontend-developer",
  "backend-developer",
  "devops-engineer",
  "qa-engineer",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = GEO_CONFIG.baseUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/why-work-with-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/our-process`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/technologies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/start-project`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/brand-identity`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/web-development`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const technologyRoutes: MetadataRoute.Sitemap = TECHNOLOGIES.map((t) => ({
    url: `${baseUrl}/technologies/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workDetailRoutes: MetadataRoute.Sitemap = WORK_DETAIL_SLUGS.map(
    (slug) => ({
      url: `${baseUrl}/work-detail/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  const jobDetailRoutes: MetadataRoute.Sitemap = JOB_DETAIL_SLUGS.map(
    (slug) => ({
      url: `${baseUrl}/job-detail/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }),
  );

  return [...staticRoutes, ...technologyRoutes, ...workDetailRoutes, ...jobDetailRoutes];
}
