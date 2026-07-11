"use client";

import Container from "@/components/container";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { TechKeyThingsSection } from "@/lib/tech-page-content.types";

export function TechSeoKeyThings({ data }: { data: TechKeyThingsSection }) {
  const [activeId, setActiveId] = useState(data.tabs[0]?.id ?? "");

  const active = data.tabs.find((t) => t.id === activeId) ?? data.tabs[0];

  return (
    <section className="py-16 md:py-24 bg-[#050A1B] border-t border-white/5">
      <Container className="max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-14">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <nav
            className="lg:col-span-4 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 lg:pr-8"
            aria-label="Key topics"
          >
            {data.tabs.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    "text-left py-4 border-b border-white/10 last:border-0 flex items-center justify-between gap-2 transition-colors",
                    isActive
                      ? "text-[#3B82F6] font-medium"
                      : "text-gray-400 hover:text-white",
                  )}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
                  )}
                </button>
              );
            })}
          </nav>
          <div className="lg:col-span-8 space-y-8">
            {active?.sections.map((s) => (
              <div key={s.heading}>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {s.heading}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[15px] md:text-base">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
