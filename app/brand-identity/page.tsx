import React from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProcessSection } from "../(main)/sections/process-section";
import { TestimonialsSection } from "../(main)/sections/testimonials-section";
import { CTASection } from "../(main)/sections/cta-section";

const accordions = [
  {
    title: "Full stack web development",
    content: "We build complete web solutions using modern technologies.",
  },
  {
    title: "eCommerce Builds",
    content: "Custom eCommerce solutions to grow your online business.",
  },
  {
    title: "Web & Mobile Apps",
    content: "Cross-platform applications for all devices.",
  },
  {
    title: "Integrations (CRM & API)",
    content:
      "Seamless integration with existing systems and third-party services.",
  },
  {
    title: "On-page SEO",
    content: "Optimization for search engines to improve visibility.",
  },
];

function BrandIdentityPage() {
  return (
    <main className="bg-[#010C24] text-white">
      {/* Hero Section */}
      <section className="pt-80 pb-16 flex flex-col gap-20">
        <Container>
          <div className="text-center">
            <div className="inline-block bg-[#0e2648] px-4 py-1 rounded-full mb-6">
              <span className="text-[#3DB9F9] text-sm font-medium">
                🚀 Software Development
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-2">
              W takes Software Development <br /> to&nbsp;
              <span className="text-[#3DB9F9]">the next level.</span>
            </h1>
          </div>
        </Container>
        <div className="flex flex-col md:flex-row md:items-center gap-5 px-20">
          <div className="w-full relative aspect-video">
            <Image
              src="/placeholder.svg"
              fill
              className="object-cover rounded-2xl"
              alt="Brand identity"
            />
          </div>
          <div className="w-full relative aspect-video">
            <Image
              src="/placeholder.svg"
              fill
              className="object-cover rounded-2xl"
              alt="Brand identity"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5 px-20">
          <h3 className="text-3xl w-full md:p-10">
            <span className="text-blue-400 font-bold">Software experts</span> that
            can help you build software solutions you're proud of
          </h3>
          <p className="w-full md:p-10 text-gray-400">
            We specialize in building robust software solutions that align with your business objectives. Our team combines technical expertise with strategic thinking to deliver applications that not only function flawlessly but also drive measurable business results.
          </p>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-10">
        <Container className="max-w-[1200px] flex w-full flex-col lg:flex-row lg:gap-40 items-start">
          <div className="inline-block shrink-0 bg-[#0e2648] px-4 py-1 rounded-full mb-6">
            <span className="text-[#3DB9F9] text-sm font-medium">
              OUR EXPERTISE
            </span>
          </div>

          <Accordion
            type="single"
            collapsible
            className="border-t w-full border-[#1e335a]"
          >
            {accordions.map((accordion, idx) => (
              <AccordionItem
                key={accordion.title}
                value={accordion.title}
                className="border-b border-[#1e335a] py-10"
              >
                <AccordionTrigger
                  hideIcon
                  className="py-6 hover:no-underline items-start justify-start gap-4"
                >
                  <p className="text-lg md:text-2xl ">0{idx + 1}</p>
                  <p className="text-3xl md:text-5xl font-[200] ">
                    {accordion.title}
                  </p>
                </AccordionTrigger>
                <AccordionContent className="pl-7 text-gray-400 pb-6 text-lg">
                  {accordion.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      <ProcessSection />
      <div
        style={{
          background: "radial-gradient(#012963, #0D193B)",
        }}
      >
        <Container className="h-[820px] grid place-items-center">
          <p className="text-center text-5xl leading-[84px] font-bold">
            "Your software development experts, crafting powerful solutions that drive
            your&nbsp;<span className="text-amber-500">business forward.</span>"
          </p>
        </Container>
      </div>
      <Container className="max-w-[1400px] flex flex-col lg:flex-row gap-4 py-10">
        <div className="flex flex-col gap-2">
            <div className="inline-block w-fit bg-[#0e2648] px-4 py-1 rounded-full">
            <span className="text-[#3DB9F9] text-sm font-medium">
              🚀 Software Development
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            Frequently Asked&nbsp;
            <span className="text-[#3DB9F9]">Questions</span>
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-5"
        >
          {accordions.map((accordion, idx) => (
            <AccordionItem
              key={accordion.title}
              value={accordion.title}
              className="border-0 bg-gradient-to-l from-[#0A294B] to-[#101F2F] rounded-lg"
            >
              <AccordionTrigger className="px-5 hover:no-underline">
                <div className="flex items-center gap-4">
                  <p className="text-xs">0{idx + 1}</p>
                  <p>{accordion.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-7 text-gray-400 pb-6">
                {accordion.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </main>
  );
}

export default BrandIdentityPage;
