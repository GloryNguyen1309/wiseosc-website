"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Project } from "@/app/(main)/sections/work-section";

export interface WorkCardProps {
  image: string;
  title: string;
  categories: string[];
  link: string;
  delay?: number;
}

export function WorkCard({
  image,
  title,
  categories,
  link,
  delay = 0,
}: WorkCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <Link
      href={link}
      ref={cardRef}
      className={cn(
        "group bg-[#1a1e2e] p-6 rounded-xl flex hover:border border-blue-500 flex-col gap-4 overflow-hidden transition-all duration-700 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="relative w-full rounded-xl aspect-[2.5/2] bg-red-200">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span key={index} className="text-gray-400 text-sm">
              {category}
              {index < categories.length - 1 && ","}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
