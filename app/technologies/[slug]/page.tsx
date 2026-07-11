import { notFound } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";
import Container from "@/components/container";
import { getTechnologyBySlug, TECHNOLOGIES } from "@/lib/technologies";
import { getTechPageSeoContent } from "@/lib/tech-page-content";
import { GEO_CONFIG } from "@/lib/geo-config";
import { TechCtaForm } from "./_components/tech-cta-form";
import { TechSeoServices } from "./_components/tech-seo-services";
import { TechSeoWhyChoose } from "./_components/tech-seo-why-choose";
import { TechSeoEcosystem } from "./_components/tech-seo-ecosystem";
import { TechSeoKeyThings } from "./_components/tech-seo-key-things";
import { TechSeoFaq } from "./_components/tech-seo-faq";
import TrustedBySection from "@/app/(main)/sections/trusted-by-section";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return TECHNOLOGIES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) return { title: "Technology Not Found" };
  const canonical = `${GEO_CONFIG.baseUrl}/technologies/${slug}`;
  const ogTitle = `${tech.meta.title} | WiseOSC`;
  return {
    title: tech.meta.title,
    description: tech.meta.description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: tech.meta.description,
      url: canonical,
    },
  };
}

export default async function TechnologyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) notFound();

  const seo = getTechPageSeoContent(slug, tech.name);

  const faqJsonLd =
    seo.faq && seo.faq.items.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: seo.faq.items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: GEO_CONFIG.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Technologies",
        item: `${GEO_CONFIG.baseUrl}/technologies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tech.name,
        item: `${GEO_CONFIG.baseUrl}/technologies/${slug}`,
      },
    ],
  };

  return (
    <main className="bg-[#01071A] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <section className="bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)] pt-32 pb-16">
        <Container className="max-w-[1400px]">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="h-4 w-4" /> Home
            </Link>
            <span>/</span>
            <Link href="/technologies" className="hover:text-white">
              Technologies
            </Link>
            <span>/</span>
            <span className="text-white">{tech.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-sm uppercase tracking-wider text-gray-400">
                {tech.content.heroSubtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {tech.content.heroTitle}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                {tech.content.heroDescription}
              </p>
            </div>
            <div className="lg:col-span-1">
              <TechCtaForm
                techName={tech.name}
                ctaFormTitle={tech.content.ctaFormTitle}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container className="max-w-[1400px]">
          <p className="text-gray-400 text-sm">
            150+ companies have already trusted our technologies but mighty team
          </p>
        </Container>
      </section>

      {seo.services && <TechSeoServices data={seo.services} />}
      {seo.whyChoose && <TechSeoWhyChoose data={seo.whyChoose} />}
      {seo.ecosystem && <TechSeoEcosystem data={seo.ecosystem} />}
      {seo.keyThings && <TechSeoKeyThings data={seo.keyThings} />}
      {seo.faq && <TechSeoFaq data={seo.faq} />}

      <TrustedBySection />
    </main>
  );
}
