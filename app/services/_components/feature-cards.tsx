"use client";

import type React from "react";

import { useState } from "react";
import {
  Hash,
  Target,
  ViewIcon as Venn,
  Grid3X3,
  Maximize,
  Loader,
} from "lucide-react";
import FeatureCard from "@/components/ui/featured-card";
import { cn } from "@/lib/utils";

export default function FeatureCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Expert Direction",
      description: "Our experienced technical leads guide projects with strategic vision and industry best practices",
      icon: <Hash className="w-6 h-6" />,
    },
    {
      title: "Client Insights",
      description: "Deep understanding of your business needs to deliver solutions that drive real value",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Integrated Approach",
      description: "Seamless integration with your existing team and workflows through staff augmentation",
      icon: <Venn className="w-6 h-6" />,
    },
    {
      title: "Project Management",
      description: "Agile methodologies and transparent communication ensure projects stay on track",
      icon: <Grid3X3 className="w-6 h-6" />,
    },
    {
      title: "Remote Excellence",
      description: "Proven track record of delivering exceptional results through distributed teams",
      icon: <Maximize className="w-6 h-6" />,
    },
    {
      title: "Continuous Improvement",
      description: "Regular code reviews, performance monitoring, and iterative enhancements",
      icon: <Loader className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-rows-2 md:grid-cols-7">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          isActive={hoveredIndex === index || index === 0}
          className={cn({
            "md:col-[1/3] md:row-[1/2]": index === 0,
            "md:col-[3/5] md:row-[1/2]": index === 1,
            "md:col-[5/7] md:row-[1/2]": index === 2,
            "md:col-[2/4] md:row-[2/3]": index === 3,
            "md:col-[4/6] md:row-[2/3]": index === 4,
            "md:col-[6/8] md:row-[2/3]": index === 5,
          })}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
}
