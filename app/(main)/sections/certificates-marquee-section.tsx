"use client";

/* eslint-disable @next/next/no-img-element -- dynamic files from public/certificates */
import useVisible from "@/hooks/use-visible";
import { cn } from "@/lib/utils";
import type { CertificateItem } from "@/lib/certificates";

type Props = {
  items: CertificateItem[];
};

function CertificateSlide({ src, alt }: CertificateItem) {
  return (
    <div className="mr-10 flex h-[88px] w-[130px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 sm:mr-12 sm:h-[100px] sm:w-[150px] md:h-[110px] md:w-[170px]">
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

/** Dải marquee — dùng trong hero (compact) hoặc section riêng */
export function CertificatesMarqueeStrip({
  items,
  compact = false,
}: Props & { compact?: boolean }) {
  if (items.length === 0) return null;

  const track = (
    <>
      <div
        className="flex min-w-max animate-scroll-right items-center justify-center"
        style={{ animationDuration: compact ? "45s" : "55s" }}
      >
        {items.map((item, idx) => (
          <CertificateSlide key={`a-${item.src}-${idx}`} {...item} />
        ))}
      </div>
      <div
        className="flex min-w-max animate-scroll-right items-center justify-center"
        style={{ animationDuration: compact ? "45s" : "55s" }}
      >
        {items.map((item, idx) => (
          <CertificateSlide key={`b-${item.src}-${idx}`} {...item} />
        ))}
      </div>
    </>
  );

  if (compact) {
    return (
      <div className="mt-3 w-full sm:mt-4">
        <div className="flex w-full overflow-hidden px-0 sm:px-4 md:px-8">
          {track}
        </div>
      </div>
    );
  }

  return (
    <div className="flex overflow-hidden md:mx-12 lg:mx-24 xl:mx-40">
      {track}
    </div>
  );
}

export default function CertificatesMarqueeSection({ items }: Props) {
  const { ref, isVisible } = useVisible({ visibleDelay: 200 });

  if (items.length === 0) return null;

  return (
    <section
      ref={ref}
      className="relative border-t border-white/5 bg-[#01071A] py-10 md:py-14"
      aria-label="Certifications and credentials"
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] flex-col gap-6 px-4 transition-all duration-700 md:px-6 lg:px-8",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        <CertificatesMarqueeStrip items={items} />
      </div>
    </section>
  );
}
