import Link from "next/link";
import Container from "@/components/container";
import { TECHNOLOGIES } from "@/lib/technologies";
import { GEO_CONFIG } from "@/lib/geo-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Get experts in 100+ technologies. Cover any tech stack. Hire software developers in .NET, Node.js, React, Python, Java, and more.",
  alternates: { canonical: `${GEO_CONFIG.baseUrl}/technologies` },
};

export default function TechnologiesPage() {
  return (
    <main className="bg-[#01071A] text-white min-h-screen">
      <section className="bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)] pt-32 pb-20">
        <Container className="max-w-[1400px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technologies</h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-12">
            Get experts in 100+ technologies. Cover any tech stack. Choose a
            technology to learn more about our expertise and how we can help
            your project.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {TECHNOLOGIES.map((tech) => (
              <Link
                key={tech.slug}
                href={`/technologies/${tech.slug}`}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors text-white font-medium"
              >
                {tech.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
