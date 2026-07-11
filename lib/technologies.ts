/**
 * Single source of truth for technology pages.
 * Used by: nav dropdown, /technologies, /technologies/[slug], sitemap.
 */

export type Technology = {
  slug: string;
  name: string;
  meta: {
    title: string;
    description: string;
  };
  content: {
    heroSubtitle: string;
    heroTitle: string;
    heroDescription: string;
    ctaFormTitle: string;
  };
};

function buildTech(slug: string, name: string): Technology {
  const nameForTitle = name.replace(/^\./, ""); // ".NET" -> "NET" for "NET DEVELOPMENT"
  const base = {
    slug,
    name,
    meta: {
      title: `Hire ${name} Developers`,
      description: `Wise Accelerate provides expert ${name} development. Count on us for architecture, performance optimization, and scalable solutions. Trusted by 150+ companies.`,
    },
    content: {
      heroSubtitle: `${nameForTitle.toUpperCase().replace(/\s/g, " ")} DEVELOPMENT COMPANY`,
      heroTitle: `Work with ${name} experts trusted by the world's top tech teams.`,
      heroDescription: `Over 20 clients consider us a leading ${name} development company. Count on us for all things ${name}: architecture, state management, performance optimization, and more.`,
      ctaFormTitle: `Get expert help for your ${name} project.`,
    },
  };

  if (slug === "ai") {
    return {
      ...base,
      meta: {
        title: "Hire AI & LLM Engineers | Generative AI & Agentic Workflows",
        description:
          "Wise Accelerate builds production GenAI: LLM APIs, RAG, embeddings, vector search, agentic workflows with tool use, guardrails, and MLOps. Trusted delivery for teams shipping real AI features.",
      },
      content: {
        ...base.content,
        heroSubtitle: "AI & GENERATIVE SOFTWARE COMPANY",
        heroTitle:
          "Ship LLM features, RAG, and agentic workflows—with engineering discipline.",
        heroDescription:
          "From retrieval-augmented generation to multi-step agents, Wise Accelerate combines model APIs, data pipelines, and safety patterns so AI ships as reliable product—not fragile demos.",
        ctaFormTitle: "Tell us about your AI or LLM roadmap.",
      },
    };
  }

  if (slug === "dotnet") {
    return {
      ...base,
      meta: {
        title: "Hire .NET Developers | ASP.NET Core, Azure & C#",
        description:
          "Wise Accelerate builds ASP.NET Core APIs, EF Core data layers, Azure-native .NET, and migration from .NET Framework. Production C# with security, CI/CD, and observability.",
      },
      content: {
        ...base.content,
        heroSubtitle: ".NET DEVELOPMENT COMPANY",
        heroTitle:
          "Build ASP.NET Core services, Azure workloads, and modern C# platforms—with enterprise discipline.",
        heroDescription:
          "From minimal APIs and microservices to EF Core and secure Azure deployments, Wise Accelerate delivers .NET that scales: identity, messaging, migrations, and long-term maintenance.",
        ctaFormTitle: "Discuss your .NET or Azure roadmap.",
      },
    };
  }

  if (slug === "python") {
    return {
      ...base,
      meta: {
        title: "Hire Python Developers | FastAPI, Django & Data-Ready APIs",
        description:
          "Wise Accelerate ships FastAPI and Django backends, async Python, Celery workers, and data/ML-adjacent services on AWS or Kubernetes—with tests, typing, and observability.",
      },
      content: {
        ...base.content,
        heroSubtitle: "PYTHON DEVELOPMENT COMPANY",
        heroTitle:
          "Production Python APIs, workers, and data pipelines—without cutting corners on quality.",
        heroDescription:
          "FastAPI, Django, async I/O, queues, and Dockerized deploys: Wise Accelerate builds Python services that match your scale, integrations, and compliance expectations.",
        ctaFormTitle: "Tell us about your Python product or platform.",
      },
    };
  }

  if (slug === "java") {
    return {
      ...base,
      meta: {
        title: "Hire Java Developers | Spring Boot & Cloud-Native JVM",
        description:
          "Wise Accelerate delivers Spring Boot microservices, JVM tuning, Kafka integrations, and Kubernetes-ready Java—with resilience patterns, observability, and secure CI/CD.",
      },
      content: {
        ...base.content,
        heroSubtitle: "JAVA DEVELOPMENT COMPANY",
        heroTitle:
          "Spring Boot, JVM performance, and event-driven services built for serious traffic.",
        heroDescription:
          "Enterprise APIs, Hibernate/JPA, resilience to Kafka outages, and OpenTelemetry traces: Wise Accelerate engineers Java stacks your platform and security teams can operate with confidence.",
        ctaFormTitle: "Plan your Java or Spring modernization.",
      },
    };
  }

  return base;
}

export const TECHNOLOGIES: Technology[] = [
  buildTech("dotnet", ".NET"),
  buildTech("nodejs", "Node.js"),
  buildTech("react", "React"),
  buildTech("python", "Python"),
  buildTech("java", "Java"),
  buildTech("angular", "Angular"),
  buildTech("vue", "Vue.js"),
  buildTech("typescript", "TypeScript"),
  buildTech("javascript", "JavaScript"),
  buildTech("aws", "AWS"),
  buildTech("golang", "Golang"),
  buildTech("django", "Django"),
  buildTech("azure", "Microsoft Azure"),
  buildTech("ruby", "Ruby"),
  buildTech("csharp", "C#"),
  buildTech("php", "PHP"),
  buildTech("kotlin", "Kotlin"),
  buildTech("flutter", "Flutter"),
  buildTech("react-native", "React Native"),
  buildTech("swift", "Swift"),
  buildTech("kubernetes", "Kubernetes"),
  buildTech("docker", "Docker"),
  buildTech("graphql", "GraphQL"),
  buildTech("mongodb", "MongoDB"),
  buildTech("postgresql", "PostgreSQL"),
  buildTech("redis", "Redis"),
  buildTech("google-cloud", "Google Cloud"),
  buildTech("power-bi", "Power BI"),
  buildTech("cpp", "C++"),
  buildTech("ai", "AI"),
];

export function getTechnologyBySlug(slug: string): Technology | undefined {
  return TECHNOLOGIES.find((t) => t.slug === slug);
}

export function getTechnologySlugs(): string[] {
  return TECHNOLOGIES.map((t) => t.slug);
}
