"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ServiceCardProps {
  id?: number;
  title: string;
  subtitle: string;
  image: string;
  variant?: "dark" | "blue";
  delay?: number;
  path: string;
  className?: string;
}

export function ServiceCard({
  title,
  subtitle,
  image,
  variant = "dark",
  delay = 0,
  path,
  className,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay before setting visible for staggered animation
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      // href={path}
      ref={cardRef}
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-700 ease-out transform h-[420px] relative",
        variant === "blue"
          ? "bg-gradient-to-b from-blue-500 to-blue-800"
          : "bg-[#1a1e2e]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        "border-0 border-blue-500",
        className
      )}
    >
      <div className="p-8 h-full flex flex-col">
        <div className="mb-2 text-gray-300 font-medium">{title}</div>
        <h3
          className={cn(
            "text-3xl font-bold mb-6",
            variant === "blue" ? "text-blue-300" : "text-blue-300"
          )}
        >
          {subtitle}
        </h3>

        <Image
          src={image || "/placeholder.svg"}
          alt={subtitle}
          fill
          className="object-contain -z-10 object-bottom"
        />
      </div>
    </div>
  );
}
