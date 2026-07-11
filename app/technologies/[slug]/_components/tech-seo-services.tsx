import Container from "@/components/container";
import { Check } from "lucide-react";
import type { TechServicesSection } from "@/lib/tech-page-content.types";

export function TechSeoServices({ data }: { data: TechServicesSection }) {
  return (
    <section className="py-16 md:py-24 bg-[#050A1B] border-t border-white/5">
      <Container className="max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16 text-center md:text-left">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {data.items.map((item) => (
            <article key={item.title} className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-white flex items-start gap-3">
                <Check
                  className="h-6 w-6 shrink-0 text-[#3B82F6] mt-0.5"
                  aria-hidden
                />
                <span>{item.title}</span>
              </h3>
              {item.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-400 leading-relaxed text-[15px] md:text-base pl-9"
                >
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
