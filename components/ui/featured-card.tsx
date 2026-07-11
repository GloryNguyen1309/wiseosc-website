import { cn } from "@/lib/utils";
import type React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
  className,
}: FeatureCardProps & {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className={`relative h-[300px] rounded-xl p-6 transition-all duration-300 ease-in-out ${
        isActive
          ? "hover:rotate-[3deg] transform bg-gradient-to-br from-[rgb(17,156,255)] to-[rgb(151,248,244)] text-black"
          : "bg-[#1a1e33] text-white"
      } ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`rounded-lg w-12 h-12 flex items-center justify-center mb-6 ${
          isActive ? "bg-[#1a1e33]/20" : "bg-[#1a1e33] border border-gray-700"
        }`}
      >
        {icon}
      </div>
      <h3
        className={cn(
          `text-2xl font-bold mb-2`,
          isActive ? "text-black" : "text-[#3b9bff]"
        )}
      >
        {title}
      </h3>
      <p className={cn(isActive ? "text-black" : "text-white/70")}>
        {description}
      </p>
    </div>
  );
}
