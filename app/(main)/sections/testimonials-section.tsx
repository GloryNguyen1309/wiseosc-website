"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/section-badge";
import { TestimonialCard } from "@/components/testimonial-card";
import { StarIcon } from "lucide-react";

export function TestimonialsSection() {
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
    <section className="py-24 bg-[#0a1122]">
      <div
        ref={sectionRef}
        className={cn(
          "container mx-auto px-4 transition-all duration-1000 ease-out transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="flex justify-center mb-6">
          <SectionBadge icon={<StarIcon size={18} />} text="Testimonials" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-dm-sans">
          First impression, <span className="text-blue-300">our clients</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Their innovative approach to software development transformed our platform, driving remarkable growth and outstanding user experience!"
            author="Daniel Clark"
            company="HealthPlus"
            delay={0}
          />

          <TestimonialCard
            quote="Thanks to their staff augmentation model, we seamlessly integrated skilled developers who became valuable members of our team."
            author="Jessica Lee"
            company="StyleFusion"
            avatar="/testimonials/jessica.jpg"
            delay={150}
          />

          <TestimonialCard
            quote="Their technical expertise and agile methodologies helped us deliver our product faster than anticipated with exceptional quality."
            author="Michael Thompson"
            company="GreenGrocer"
            delay={300}
          />

          <TestimonialCard
            quote="Working with them was the best decision. Their software solutions increased our operational efficiency significantly."
            author="Emily Clark"
            company="FashionFlair"
            delay={450}
          />

          <TestimonialCard
            quote="Their innovative development strategies helped us scale our application and achieve our business goals quickly."
            author="Kevin Martinez"
            company="FitLife"
            delay={600}
          />

          <TestimonialCard
            quote="The results from their services are impressive. Their dedication to quality has truly elevated our software platform."
            author="Rachel Adams"
            company="PureBeauty"
            avatar="/testimonials/rachel.jpg"
            delay={750}
          />
        </div>
      </div>
    </section>
  );
}
