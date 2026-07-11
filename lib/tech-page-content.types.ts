/**
 * SEO body content for /technologies/[slug].
 * Per-slug JSON: `data/tech-pages/<slug>.json` (see README.txt there).
 * Slugs without a file use defaults in `lib/tech-page-content.ts`.
 */

export type TechServiceItem = {
  title: string;
  paragraphs: string[];
};

export type TechServicesSection = {
  title: string;
  items: TechServiceItem[];
};

export type TechWhyFeature = {
  icon: "shield" | "lock" | "layout-grid" | "users" | "globe" | "zap";
  title: string;
  body: string;
};

export type TechWhyChooseSection = {
  title: string;
  /** Optional image under /public */
  imageSrc?: string;
  imageAlt?: string;
  features: TechWhyFeature[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type TechEcosystemCategory = {
  title: string;
  description: string;
  items: string[];
};

export type TechEcosystemSection = {
  title: string;
  categories: TechEcosystemCategory[];
};

export type TechKeyThingsSection = {
  title: string;
  tabs: {
    id: string;
    label: string;
    sections: { heading: string; body: string }[];
  }[];
};

export type TechFaqItem = {
  question: string;
  answer: string;
};

export type TechFaqSection = {
  title: string;
  items: TechFaqItem[];
};

export type TechPageSeoContent = {
  services?: TechServicesSection;
  whyChoose?: TechWhyChooseSection;
  ecosystem?: TechEcosystemSection;
  keyThings?: TechKeyThingsSection;
  faq?: TechFaqSection;
};
