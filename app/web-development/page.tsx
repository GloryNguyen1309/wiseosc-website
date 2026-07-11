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

function WebDevelopmentPage() {
  return (
    <main className="bg-[#010C24] text-white">
      {/* Hero Section */}
      <section className="pt-80 pb-16">
        <Container>
          <div className="text-center">
            <div className="inline-block bg-[#0e2648] px-4 py-1 rounded-full mb-6">
              <span className="text-[#3DB9F9] text-sm font-medium">
                WEBSITE DEVELOPMENT
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-2">
              Website aligns with your
              <div className="text-[#3DB9F9]">business needs.</div>
            </h1>
          </div>
        </Container>

        <div className="mt-12 max-w-[1200px] mx-auto px-4">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=1000"
              alt="Developers working on code"
              width={1000}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-16">
        <Container className="max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl mb-4">
                A team of{" "}
                <span className="text-[#3DB9F9] font-semibold">
                  web design experts
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                that can help you design and build a website you're proud of
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                We specialize in building scalable, high-performance web applications using modern technologies and best practices. Our team of expert developers works closely with clients to understand their business needs and deliver solutions that exceed expectations in terms of functionality, performance, and user experience.
              </p>
            </div>
          </div>
        </Container>
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

      {/* Partners */}
      <section className="py-16">
        <Container className="text-center">
          <p className="text-gray-400 text-sm mb-6">
            Trusted by startups, companies, and indie devs
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="opacity-70 hover:opacity-100 transition">
              <svg
                width="110"
                height="30"
                viewBox="0 0 110 30"
                className="fill-white"
              >
                <rect width="110" height="30" fill="transparent" />
                <text
                  x="55"
                  y="20"
                  textAnchor="middle"
                  className="text-white text-sm"
                >
                  Product
                </text>
              </svg>
            </div>
            <div className="opacity-70 hover:opacity-100 transition">
              <svg
                width="110"
                height="30"
                viewBox="0 0 110 30"
                className="fill-white"
              >
                <rect width="110" height="30" fill="transparent" />
                <text
                  x="55"
                  y="20"
                  textAnchor="middle"
                  className="text-white text-sm"
                >
                  Nextmove
                </text>
              </svg>
            </div>
            <div className="opacity-70 hover:opacity-100 transition">
              <svg
                width="110"
                height="30"
                viewBox="0 0 110 30"
                className="fill-white"
              >
                <rect width="110" height="30" fill="transparent" />
                <text
                  x="55"
                  y="20"
                  textAnchor="middle"
                  className="text-white text-sm"
                >
                  Luminous
                </text>
              </svg>
            </div>
            <div className="opacity-70 hover:opacity-100 transition">
              <svg
                width="110"
                height="30"
                viewBox="0 0 110 30"
                className="fill-white"
              >
                <rect width="110" height="30" fill="transparent" />
                <text
                  x="55"
                  y="20"
                  textAnchor="middle"
                  className="text-white text-sm"
                >
                  Umbrella
                </text>
              </svg>
            </div>
            <div className="opacity-70 hover:opacity-100 transition">
              <svg
                width="110"
                height="30"
                viewBox="0 0 110 30"
                className="fill-white"
              >
                <rect width="110" height="30" fill="transparent" />
                <text
                  x="55"
                  y="20"
                  textAnchor="middle"
                  className="text-white text-sm"
                >
                  Snapshot
                </text>
              </svg>
            </div>
          </div>
        </Container>
      </section>

      <ProcessSection />
      <TestimonialsSection />
    </main>
  );
}

export default WebDevelopmentPage;
