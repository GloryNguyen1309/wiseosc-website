import type React from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

export function SectionBadge({ icon, text, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "bg-blue-900/50 rounded-full px-6 py-2 flex items-center gap-2 w-fit mx-auto mb-8",
        className
      )}
    >
      {icon && <span className="text-blue-300">{icon}</span>}
      <span className="text-white uppercase text-sm font-medium tracking-wide font-nunito-sans">
        {text}
      </span>
    </div>
  );
}
