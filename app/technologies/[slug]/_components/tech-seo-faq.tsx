"use client";

import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { TechFaqSection } from "@/lib/tech-page-content.types";

export function TechSeoFaq({ data }: { data: TechFaqSection }) {
  return (
    <section className="py-16 md:py-24 bg-[#01071A]">
      <Container className="max-w-[800px]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          {data.title}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {data.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-left text-white hover:text-[#93c5fd] py-5 text-[15px] md:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-5 text-[15px] md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
