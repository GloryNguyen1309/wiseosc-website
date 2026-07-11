/**
 * Nội dung SEO dài cho /technologies/[slug].
 *
 * Mỗi tech có thể có 1 file riêng trong `data/tech-pages/<slug>.json`
 * (cùng key với slug trong lib/technologies.ts, ví dụ: aws.json, javascript.json).
 * File chỉ cần chứa object: services, whyChoose, ecosystem, keyThings, faq
 * (xem tech-page-content.types.ts). Slug không có file → dùng nội dung mặc định
 * trong buildDefaultTechPageContent().
 */
import type { TechPageSeoContent } from "./tech-page-content.types";
import aiPage from "@/data/tech-pages/ai.json";
import awsPage from "@/data/tech-pages/aws.json";
import dotnetPage from "@/data/tech-pages/dotnet.json";
import javaPage from "@/data/tech-pages/java.json";
import javascriptPage from "@/data/tech-pages/javascript.json";
import pythonPage from "@/data/tech-pages/python.json";
import reactPage from "@/data/tech-pages/react.json";
import reactNativePage from "@/data/tech-pages/react-native.json";

const PAGE_OVERRIDES: Record<string, Partial<TechPageSeoContent>> = {
  ai: aiPage as Partial<TechPageSeoContent>,
  aws: awsPage as Partial<TechPageSeoContent>,
  dotnet: dotnetPage as Partial<TechPageSeoContent>,
  java: javaPage as Partial<TechPageSeoContent>,
  javascript: javascriptPage as Partial<TechPageSeoContent>,
  python: pythonPage as Partial<TechPageSeoContent>,
  react: reactPage as Partial<TechPageSeoContent>,
  "react-native": reactNativePage as Partial<TechPageSeoContent>,
};

function buildDefaultTechPageContent(techName: string): TechPageSeoContent {
  const t = techName;
  return {
    services: {
      title: `${t} Development Services We Provide`,
      items: [
        {
          title: `${t} Consulting & Architecture`,
          paragraphs: [
            `Our ${t} specialists help you define a clear technical roadmap, from proof-of-concept to production-grade systems. We align architecture decisions with your business goals, security posture, and long-term maintainability so your teams avoid costly rework.`,
            `Whether you are modernizing legacy stacks or launching a greenfield product, we document patterns, coding standards, and integration boundaries. Teams get a shared vocabulary for APIs, data models, testing strategy, and deployment pipelines—all centered on ${t} best practices.`,
          ],
        },
        {
          title: `${t} Application Development`,
          paragraphs: [
            `We build end-to-end applications where ${t} is a first-class citizen: performance budgets, observability, and scalable module boundaries are baked in from day one. Delivery cycles stay predictable with CI/CD, automated tests, and incremental releases.`,
            `From MVPs to enterprise platforms, we pair ${t} expertise with pragmatic UX and DevOps so features ship fast without sacrificing reliability. Code reviews, static analysis, and profiling keep quality high as your user base grows.`,
          ],
        },
        {
          title: `${t} Integration & APIs`,
          paragraphs: [
            `Connect ${t} services to CRMs, payment gateways, data warehouses, and internal tools. We design resilient integrations with retries, idempotency, and clear error contracts—reducing downtime when third parties change.`,
            `Our engineers implement REST, GraphQL, or event-driven patterns depending on your stack. Documentation and observability dashboards make handoffs to your in-house team straightforward.`,
          ],
        },
        {
          title: `${t} Performance & Optimization`,
          paragraphs: [
            `Slow experiences lose revenue. We profile ${t} workloads, remove bottlenecks, and tune caching, concurrency, and resource usage so pages and APIs stay responsive under load.`,
            `We establish baselines, set SLOs, and iterate with load tests and real-user monitoring. Optimization is not a one-off project—it becomes part of your delivery rhythm.`,
          ],
        },
        {
          title: `${t} Cloud & DevOps`,
          paragraphs: [
            `Deploy ${t} workloads on AWS, Azure, or GCP with infrastructure-as-code, secrets management, and least-privilege access. We help you choose containers, serverless, or VMs based on cost and latency.`,
            `Pipelines run automated tests, security scans, and staged rollouts. Rollbacks are one click away; logs and traces give your team fast incident response.`,
          ],
        },
        {
          title: `${t} Support & Maintenance`,
          paragraphs: [
            `Software evolves—libraries update, security patches land, and user needs shift. We provide ongoing ${t} maintenance: dependency upgrades, incident response, SLAs, and quarterly health reviews.`,
            `Monitoring alerts, runbooks, and on-call rotations keep your product stable. We treat your roadmap as a partnership, not a ticket queue.`,
          ],
        },
      ],
    },
    whyChoose: {
      title: `Why Choose WiseOSC for ${t} Development`,
      imageSrc: "/why-work-with-us/slide-2-3.jpg",
      imageAlt: `${t} development team collaboration`,
      features: [
        {
          icon: "shield",
          title: "Flexible engagement models",
          body: `We offer engagement models tailored to your roadmap: dedicated team, staff augmentation, or software outsourcing. Choose the ${t} collaboration style that fits your budget, risk profile, and internal capacity—without sacrificing quality or delivery cadence.`,
        },
        {
          icon: "globe",
          title: "Timezone-aligned, nearshore-friendly talent",
          body: `Pair with engineers who overlap your working hours for real-time collaboration. Clear communication, shared standups, and transparent reporting keep ${t} projects moving even when stakeholders are distributed across regions.`,
        },
        {
          icon: "zap",
          title: "Top-tier engineers, vetted delivery",
          body: `Our ${t} engineers are selected for depth, ownership, and communication. You work with professionals who ship production code, write tests, and document decisions—not just “hands on keyboard.”`,
        },
      ],
      ctaLabel: "Get Free Trial",
      ctaHref: "/contact",
    },
    ecosystem: {
      title: `The ${t} Ecosystem We Use in Client Work`,
      categories: [
        {
          title: "Core stack & runtimes",
          description:
            "Languages, runtimes, and foundations we rely on when building with this technology.",
          items: [
            `${t} runtime`,
            "Package & build tooling",
            "Linting & formatting",
          ],
        },
        {
          title: "Frameworks & libraries",
          description:
            "Productivity layers we combine with your stack to ship features faster and safer.",
          items: ["UI frameworks", "API layers", "Testing utilities"],
        },
        {
          title: "Data & persistence",
          description:
            "Stores and patterns for transactional workloads, caching, and analytics adjacent to this stack.",
          items: ["Relational DBs", "Document stores", "Caches & queues"],
        },
        {
          title: "Cloud & operations",
          description:
            "Deployment targets and observability practices for reliable production systems.",
          items: ["Containers", "CI/CD", "Logging & metrics"],
        },
      ],
    },
    keyThings: {
      title: `Key Things to Know About ${t}`,
      tabs: [
        {
          id: "benefits",
          label: `Benefits of ${t}`,
          sections: [
            {
              heading: "1. Faster time-to-value",
              body: `${t} helps teams iterate quickly when requirements change. Mature tooling, community packages, and established patterns reduce boilerplate so engineers focus on product differentiation—without reinventing infrastructure.`,
            },
            {
              heading: "2. Strong ecosystem",
              body: `A rich ecosystem means integrations, learning resources, and hiring pipelines. Companies adopting ${t} can tap into shared libraries, best practices, and long-term vendor or community support.`,
            },
            {
              heading: "3. Operational clarity",
              body: `When ${t} is standardized in your stack, onboarding, code review, and incident response become easier. Teams share debugging techniques, profiling approaches, and release strategies—lowering total cost of ownership.`,
            },
          ],
        },
        {
          id: "uses",
          label: `What is ${t} used for?`,
          sections: [
            {
              heading: "Typical use cases",
              body: `${t} appears across web, mobile, backend, and data workflows depending on your architecture. We map use cases to concrete modules, APIs, and ownership boundaries so teams stay aligned.`,
            },
            {
              heading: "When to choose it",
              body: `We help you evaluate fit: team skills, latency requirements, licensing, and integration needs. If ${t} is the right anchor, we design around it; if not, we recommend alternatives with clear trade-offs.`,
            },
          ],
        },
        {
          id: "facts",
          label: `Key facts about ${t}`,
          sections: [
            {
              heading: "Adoption & momentum",
              body: `${t} continues to evolve with new releases, security patches, and community tooling. We track upgrades, breaking changes, and long-term support so your roadmap stays sustainable.`,
            },
            {
              heading: "Risk management",
              body: `From dependency audits to supply-chain hygiene, we bake security and compliance into how we work with ${t}—especially for regulated industries and customer data.`,
            },
          ],
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions (FAQ)",
      items: [
        {
          question: `Why is ${t} a strong choice for modern product teams?`,
          answer: `${t} balances productivity, ecosystem maturity, and hiring market depth. When applied with clear architecture and testing discipline, it supports rapid delivery without sacrificing maintainability.`,
        },
        {
          question: `Can ${t} fit into an existing codebase or legacy system?`,
          answer: `Yes—often through strangler patterns, bounded contexts, or API gateways. We assess coupling, migration risk, and incremental rollout so you can adopt ${t} without a risky big-bang rewrite.`,
        },
        {
          question: `What skills should I look for in ${t} engineers?`,
          answer: `Beyond syntax, look for production experience: testing, observability, performance tuning, security awareness, and cross-team communication. Our teams bring these habits by default.`,
        },
        {
          question: `How do you handle maintenance for ${t}?`,
          answer: `We plan upgrades, monitor dependencies, and respond to incidents with defined SLAs. Health checks and quarterly reviews keep your stack current and secure.`,
        },
        {
          question: `What should I consider when choosing a ${t} development partner?`,
          answer: `Look for delivery transparency, code quality practices, and references in similar domains. WiseOSC emphasizes clear ownership, documentation, and long-term partnership—not just sprint output.`,
        },
        {
          question: `What types of applications commonly use ${t}?`,
          answer: `Depending on the technology, typical applications include customer-facing web apps, internal tools, APIs, data pipelines, and mobile experiences. We tailor the stack to your users and scale.`,
        },
      ],
    },
  };
}

function mergeTechContent(
  base: TechPageSeoContent,
  override: Partial<TechPageSeoContent>,
): TechPageSeoContent {
  return {
    services: override.services ?? base.services,
    whyChoose: override.whyChoose ?? base.whyChoose,
    ecosystem: override.ecosystem ?? base.ecosystem,
    keyThings: override.keyThings ?? base.keyThings,
    faq: override.faq ?? base.faq,
  };
}

export function getTechPageSeoContent(
  slug: string,
  techName: string,
): TechPageSeoContent {
  const defaults = buildDefaultTechPageContent(techName);
  const file = PAGE_OVERRIDES[slug];
  if (!file) return defaults;
  return mergeTechContent(defaults, file);
}
