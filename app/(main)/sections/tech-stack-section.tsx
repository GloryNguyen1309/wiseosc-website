"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/section-badge";
import { CodeIcon } from "lucide-react";
import Image from "next/image";

// Define tech stack items with their icons
const techStack = [
  { name: "React", icon: "/tech-icons/react.svg" },
  { name: "React Native", icon: "/tech-icons/reactnative.svg" },
  { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
  { name: "Golang", icon: "/tech-icons/golang.svg" },
  { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
  { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
  { name: "OpenAI", icon: "/tech-icons/openai.svg" },
  { name: "Claude AI", icon: "/tech-icons/claude.svg" },
  { name: "CursorAI", icon: "/tech-icons/cursorai.svg" },
  { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg" },
  { name: "Supabase", icon: "/tech-icons/supabase.svg" },
  { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
  { name: "Python", icon: "/tech-icons/python.svg" },
  { name: "Langchain", icon: "/tech-icons/langchain.svg" },
  { name: "Azure", icon: "/tech-icons/azure.svg" },
  { name: "AWS", icon: "/tech-icons/aws.svg" },
  { name: "GCP", icon: "/tech-icons/gcp.svg" },
  { name: "MilvusDB", icon: "/tech-icons/milvusdb.svg" },
];

export function TechStackSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-[#01071A] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={sectionRef}
          className={cn(
            "transition-all duration-1000 ease-out transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <SectionBadge
                icon={<CodeIcon size={18} />}
                text="Our Tech Stack"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Modern{" "}
              <span className="text-blue-400">Technology</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build scalable,
              high-performance solutions that meet your business needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={cn(
                  "flex items-center gap-2 bg-[#182338] px-4 py-2 rounded-full transition-all duration-500",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative w-5 h-5">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="object-contain"
                    onError={(e) => {
                      // Fallback for missing icons
                      const target = e.target as HTMLImageElement;
                      target.src = "/tech-icons/default.svg";
                    }}
                  />
                </div>
                <span className="text-gray-200 font-medium text-sm">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
