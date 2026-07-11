"use client";

import { useFreeTrialCampaignOptional } from "@/components/free-trial-home-modal";
import type { CertificateItem } from "@/lib/certificates";
import { CertificatesMarqueeStrip } from "./certificates-marquee-section";
import React, { useEffect, useRef } from "react";

type HeroSectionProps = {
  certificates?: CertificateItem[];
};

function HeroSection({ certificates = [] }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const freeTrial = useFreeTrialCampaignOptional();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "true");
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    const tryPlay = () => {
      void v.play().catch(() => {});
    };

    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("canplay", tryPlay);

    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="/wave-gradient.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden
        tabIndex={-1}
        className="pointer-events-none absolute left-0 top-0 z-10 size-full object-cover select-none [-webkit-touch-callout:none]"
      />
      <div className="absolute z-10 size-full top-0 bg-blue-950/40" />
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center gap-6 px-6 pb-12 pt-28 text-center md:gap-8 md:px-[26px] md:pb-16 md:pt-32">
        <div
          className="max-w-[min(100%,22rem)] rounded-xl px-3 py-2 text-center text-xs font-medium leading-snug text-white sm:max-w-none sm:px-4 sm:text-sm"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #119CFF33 0%, #119CFFAD 100%)",
          }}
        >
          Trusted Software Development Powerhouse
        </div>

        <h1 className="w-full max-w-4xl text-balance px-2 text-center text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl md:text-5xl md:leading-[1.12] md:[word-spacing:-0.06em] lg:text-6xl lg:leading-[1.1] xl:text-[4.0625rem]">
          Outbuild Other Teams With{" "}
          <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text font-bold text-transparent">
            AI-supercharged Engineers
          </span>
        </h1>

        <p className="max-w-2xl font-manrope text-base font-light leading-relaxed text-white/85 md:text-lg">
          Elite Vietnamese engineers with agentic workflows. Wise Accelerate
          deliver AI-powered solutions in 3 months - what generic offshore takes
          12 to match, at a third of local hire cost.
        </p>

        {freeTrial?.isCampaignActive || certificates.length > 0 ? (
          <div className="mt-6 flex w-full max-w-full flex-col items-center gap-4 sm:mt-6">
            {freeTrial?.isCampaignActive ? (
              <button
                type="button"
                onClick={freeTrial.openModal}
                className="group text-center text-xs font-medium text-[#97F8F4]/90 underline decoration-[#97F8F4]/40 underline-offset-4 transition-colors hover:text-[#97F8F4] hover:decoration-[#97F8F4]/80 sm:text-sm"
              >
                Free 2-week trial · 5 Apr – 30 Apr
              </button>
            ) : null}
            {certificates.length > 0 ? (
              <CertificatesMarqueeStrip items={certificates} compact />
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default HeroSection;
