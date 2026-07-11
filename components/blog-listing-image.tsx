"use client";

/* eslint-disable @next/next/no-img-element -- dynamic blog cover URLs */
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

const FALLBACK_SRC = "/placeholder.svg";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Ảnh listing blog: object-cover phủ kín khung bên trái; URL lỗi → fallback local.
 */
export function BlogListingImage({ src, alt, className }: Props) {
  const [current, setCurrent] = useState(src?.trim() || FALLBACK_SRC);

  const handleError = useCallback(() => {
    setCurrent((prev) => (prev === FALLBACK_SRC ? prev : FALLBACK_SRC));
  }, []);

  return (
    <img
      src={current}
      alt={alt}
      className={cn(
        "absolute inset-0 h-full w-full object-cover object-center",
        className,
      )}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
}
