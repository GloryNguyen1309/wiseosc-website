import Container from "@/components/container";
import type { TechEcosystemSection } from "@/lib/tech-page-content.types";

export function TechSeoEcosystem({ data }: { data: TechEcosystemSection }) {
  return (
    <section className="py-16 md:py-24 bg-white text-[#0f172a]">
      <Container className="max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {data.categories.map((cat) => (
            <div key={cat.title}>
              <div className="h-1 w-12 rounded-full bg-[#3B82F6] mb-4" />
              <h3 className="text-xl font-semibold mb-3">{cat.title}</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
                {cat.description}
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-1.5 text-[15px]">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
