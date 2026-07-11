"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StatItemProps {
  number: string;
  label: string;
  delay?: number;
}

function StatItem({ number, label, delay = 0 }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={itemRef}
      className={cn(
        "text-center transition-all duration-700 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {number}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}

export function ApproachSection() {
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
    <section className="bg-[#01071A] py-0">
      {/* Top image */}
      {/* <div className="relative mx-auto w-full max-w-[80%] aspect-video">
        <Image
          src="/approach-image.jpg"
          alt="Team working together"
          fill
          className="object-cover"
        />
        <div className="bg-gradient-to-b from-transparent to-[#0a1122] opacity-90"></div>
      </div> */}

      {/* Content */}
      <div
        ref={sectionRef}
        className={cn(
          "container mx-auto px-4 py-16 transition-all duration-1000 ease-out transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              WiseOSC grounds our work in technical expertise, strategizes
              efficiently, and executes with precision, building applications,
              designing systems, and delivering exceptional digital solutions.
              Trust WiseOSC for your next project.
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Using Technology, Development, AI, and{" "}
              <span className="text-amber-500">innovation</span>, WiseOSC shapes{" "}
              <span className="text-amber-500">Digital Product</span>{" "}
              Experiences that propel your{" "}
              <span className="text-amber-500">success</span> in the digital
              realm. Partner with WiseOSC today.
            </h3>
          </div>
        </div>

        <div className="h-px w-full bg-[#D5DFFF5E] my-16"></div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem number="254 M+" label="Successful Projects" delay={0} />
          <StatItem number="13 Y" label="Years in business" delay={150} />
          <StatItem number="25+" label="Team Members" delay={300} />
          <StatItem number="34 M+" label="Award winning" delay={450} />
        </div> */}
      </div>
    </section>
  );
}
