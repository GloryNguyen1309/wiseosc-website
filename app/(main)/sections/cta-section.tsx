"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CTASection({ className }: { className?: string }) {
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
      },
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
    <div
      ref={sectionRef}
      className={cn(
        "rounded-3xl overflow-hidden w-full h-full relative transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
    >
      {/* Background gradient */}
      <div className="relative h-full z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-16 bg-gradient-to-r from-blue-500 to-cyan-400">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Start With A
            <br />
            <span className="text-blue-900">Free Trial Onboarding</span>
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg mt-8 font-medium hover:bg-black/80 transition-colors"
          >
            Get Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="absolute right-0 bottom-0 w-[50%] aspect-square">
          <Image
            fill
            src="/circle-wave.png"
            alt="Wave"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}
