"use client";

import type React from "react";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/section-badge";
import {
  HourglassIcon,
  FileTextIcon,
  UserCheckIcon,
  UsersIcon,
  ShieldCheckIcon,
} from "lucide-react";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function ProcessStep({
  icon,
  title,
  description,
  delay = 0,
}: ProcessStepProps) {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

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
      }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={stepRef}
      className={cn(
        "flex flex-col items-center text-center transition-all duration-700 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="bg-blue-600/50 rounded-full p-4 mb-4 w-14 h-14 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-blue-200/80 max-w-xs">{description}</p>
    </div>
  );
}

export function ProcessSection() {
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
    <section className="py-24 bg-[#01071A] relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0a1122] via-blue-900/30 to-blue-700/30 opacity-50"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={sectionRef}
          className={cn(
            "rounded-3xl background-contain p-16 transition-all duration-1000 ease-out transform relative overflow-hidden",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{
            background: "url(/process-bg.jpg)",
            backgroundSize: "cover",
          }}
        >
          {/* Triangle at bottom */}
          <div className="absolute bottom-[10px] z-20 rotate-180 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#01071A] border-r-[20px] border-r-transparent"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <SectionBadge
                icon={<HourglassIcon size={18} />}
                text="Want To See How We Work?"
              />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-blue-300 text-center mb-6">
              Staff Augmentation Process
            </h2>

            <p className="text-center text-white/90 max-w-3xl mx-auto mb-16 text-lg">
              Seamlessly integrate top-tier developers into your team with our streamlined process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <ProcessStep
                icon={<FileTextIcon className="w-6 h-6 text-blue-300" />}
                title="CV Sent"
                description="We carefully match qualified candidates to your requirements and send detailed CVs for your review."
                delay={0}
              />
              <ProcessStep
                icon={<UserCheckIcon className="w-6 h-6 text-blue-300" />}
                title="Client Review"
                description="You review candidate profiles, conduct interviews, and select the perfect fit for your team."
                delay={150}
              />
              <ProcessStep
                icon={<UsersIcon className="w-6 h-6 text-blue-300" />}
                title="Onboard"
                description="We facilitate smooth onboarding, ensuring seamless integration with your existing team and processes."
                delay={300}
              />
              <ProcessStep
                icon={<ShieldCheckIcon className="w-6 h-6 text-blue-300" />}
                title="Ongoing Support & QA"
                description="Continuous support, performance monitoring, and quality assurance to ensure long-term success."
                delay={450}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
