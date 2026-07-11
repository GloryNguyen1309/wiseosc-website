import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { Globe, LayoutGrid, Shield, Zap, Lock, Users } from "lucide-react";
import type { TechWhyChooseSection } from "@/lib/tech-page-content.types";
import { cn } from "@/lib/utils";

const iconMap = {
  shield: Shield,
  lock: Lock,
  "layout-grid": LayoutGrid,
  users: Users,
  globe: Globe,
  zap: Zap,
} as const;

export function TechSeoWhyChoose({ data }: { data: TechWhyChooseSection }) {
  return (
    <section className="py-16 md:py-24 bg-[#01071A]">
      <Container className="max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {data.title}
            </h2>
            {data.imageSrc && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
          <div className="space-y-8">
            {data.features.map((f) => {
              const Icon = iconMap[f.icon] ?? Shield;
              return (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#119CFF]/15 text-[#3B82F6]">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-[15px] md:text-base">
                      {f.body}
                    </p>
                  </div>
                </div>
              );
            })}
            {data.ctaHref && data.ctaLabel && (
              <Link
                href={data.ctaHref}
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90",
                )}
                style={{
                  backgroundImage:
                    "linear-gradient(37deg, rgb(17, 156, 255) 50%, rgb(151, 248, 244) 100%)",
                }}
              >
                {data.ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
