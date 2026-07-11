"use client";

import { Mail } from "lucide-react";
import Script from "next/script";
import React, { useCallback, useEffect, useState } from "react";

const CALENDLY_URL =
  "https://calendly.com/eddy-wiseaccelerate/30min?hide_gdpr_banner=1&hide_landing_page_details=1";

const CALENDLY_ORIGINS = new Set([
  "https://calendly.com",
  "https://www.calendly.com",
]);

function parseCalendlyPageHeight(data: unknown): number | null {
  if (!data || typeof data !== "object") return null;
  const d = data as {
    event?: string;
    payload?: { height?: number } | number;
  };
  if (d.event !== "calendly.page_height") return null;
  const p = d.payload;
  if (typeof p === "number" && Number.isFinite(p)) return p;
  if (
    p &&
    typeof p === "object" &&
    typeof p.height === "number" &&
    Number.isFinite(p.height)
  ) {
    return p.height;
  }
  return null;
}

/** Max booker height (px) — keeps layout compact; may allow inner scroll if Calendly needs more */
const BOOKER_MAX_HEIGHT_PX = 720;

/** Fallback when resize events have not fired yet */
const CALENDLY_FALLBACK_HEIGHT = `min(${BOOKER_MAX_HEIGHT_PX}px, calc(100dvh - 6.5rem))`;

function ContactForm() {
  const [shellHeightPx, setShellHeightPx] = useState<number | null>(null);

  const onCalendlyMessage = useCallback((e: MessageEvent) => {
    if (!CALENDLY_ORIGINS.has(e.origin)) return;
    const h = parseCalendlyPageHeight(e.data);
    if (h == null || h < 400) return;
    const chrome = 128;
    const viewportCap = Math.max(480, window.innerHeight - chrome);
    const capped = Math.min(
      Math.ceil(h) + 12,
      viewportCap,
      BOOKER_MAX_HEIGHT_PX,
    );
    setShellHeightPx(capped);
  }, []);

  useEffect(() => {
    window.addEventListener("message", onCalendlyMessage);
    return () => window.removeEventListener("message", onCalendlyMessage);
  }, [onCalendlyMessage]);

  return (
    <section className="flex w-full flex-col pb-10 pt-32 md:pt-36 lg:min-h-[calc(100dvh-4.75rem)] lg:justify-center lg:pt-40">
      {/* Equal outer balance: centered block, 50/50 columns, tops aligned */}
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
        {/* Copy: first on mobile and desktop (left column on lg) */}
        <div className="order-1 mx-auto flex w-full max-w-[26rem] flex-col gap-5 self-start justify-center lg:mx-0 lg:max-w-[28rem] lg:justify-start">
          <div className="flex justify-center lg:justify-start">
            <div className="inline-block w-fit rounded-xl bg-[#0e2648] bg-[linear-gradient(120deg,_#119CFF33_0%,_#119CFFAD_100%)] px-4 py-2">
              <span className="text-xs font-medium uppercase tracking-wide text-white sm:text-sm">
                Free trial onboarding
              </span>
            </div>
          </div>

          <h1 className="text-center text-[1.65rem] font-medium leading-[1.2] [word-spacing:-0.12rem] text-white sm:text-3xl lg:text-left lg:text-[clamp(1.5rem,2.4vw,2.125rem)] lg:[word-spacing:-0.18rem]">
            Book your{" "}
            <span className="font-bold text-[#3B82F6] lg:text-[clamp(1.65rem,2.6vw,2.35rem)]">
              Free Trial Onboarding
            </span>{" "}
            with Eddy—see real output before you commit.
          </h1>

          <p className="text-center text-sm leading-relaxed text-gray-300 lg:text-left lg:text-[0.9375rem]">
            Limited spots: align on your goals, map the 2-week trial, and meet
            who ships for you—no pitch deck.{" "}
            <a
              href="mailto:info@wiseaccelerate.com"
              className="font-medium text-[#3B82F6] underline-offset-2 hover:underline"
            >
              info@wiseaccelerate.com
            </a>
          </p>

          <div className="hidden rounded-xl border border-white/10 bg-white/[0.04] p-4 lg:block">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/80">
              Connect with us
            </h3>
            <a
              href="mailto:info@wiseaccelerate.com"
              className="flex items-center gap-2 text-sm text-gray-200 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#3B82F6]" />
              info@wiseaccelerate.com
            </a>
          </div>
        </div>

        {/* Calendly: below copy on mobile; right column on lg */}
        <div className="order-2 flex min-h-0 w-full flex-col items-center self-start lg:w-full">
          <div className="flex w-full justify-center">
            <div className="w-full max-w-[400px] sm:max-w-[420px] lg:max-w-[440px]">
              <div
                className="contact-calendly-shell relative w-full overflow-hidden rounded-xl bg-transparent shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)]"
                style={{
                  height: shellHeightPx
                    ? `${shellHeightPx}px`
                    : CALENDLY_FALLBACK_HEIGHT,
                  maxHeight: `${BOOKER_MAX_HEIGHT_PX}px`,
                }}
              >
                <div
                  className="calendly-inline-widget h-full min-h-full w-full"
                  data-url={CALENDLY_URL}
                  data-resize="true"
                  style={{ minWidth: 320 }}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex w-full max-w-[440px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 lg:hidden">
            <Mail className="h-4 w-4 text-[#3B82F6]" />
            <a
              href="mailto:info@wiseaccelerate.com"
              className="text-sm text-gray-200 hover:text-white"
            >
              info@wiseaccelerate.com
            </a>
          </div>
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}

export default ContactForm;
