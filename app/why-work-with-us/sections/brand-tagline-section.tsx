"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/container";
import { cn } from "@/lib/utils";

const BrandTaglineSection = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const current = useRef({ x: 50, y: 60 });
  const target = useRef({ x: 50, y: 60 });

  const overlayCurrent = useRef({ x: 50, y: 60 });
  const overlayTarget = useRef({ x: 50, y: 60 });

  const baseYRef = useRef(60);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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

  useEffect(() => {
    const el = bgRef.current;
    if (!el || typeof window === "undefined") return;

    const setBaseline = () => {
      baseYRef.current = window.matchMedia("(min-width: 768px)").matches
        ? 52
        : 60;
      target.current.y = baseYRef.current;
      overlayTarget.current.y = baseYRef.current;
    };
    setBaseline();

    current.current = { x: 50, y: baseYRef.current };
    target.current = { x: 50, y: baseYRef.current };
    overlayCurrent.current = { x: 50, y: baseYRef.current };
    overlayTarget.current = { x: 50, y: baseYRef.current };

    el.style.backgroundPosition = `${current.current.x}% ${current.current.y}%`;
    el.style.setProperty("--gx", `${overlayCurrent.current.x}%`);
    el.style.setProperty("--gy", `${overlayCurrent.current.y}%`);

    const MAX_SHIFT = 6;
    const OVERLAY_SHIFT = 3.5;
    const EASE = 0.12;
    const OVERLAY_EASE = 0.14;

    const animate = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * EASE;
      current.current.y += dy * EASE;

      const odx = overlayTarget.current.x - overlayCurrent.current.x;
      const ody = overlayTarget.current.y - overlayCurrent.current.y;
      overlayCurrent.current.x += odx * OVERLAY_EASE;
      overlayCurrent.current.y += ody * OVERLAY_EASE;

      if (bgRef.current) {
        bgRef.current.style.backgroundPosition = `${current.current.x}% ${current.current.y}%`;
        bgRef.current.style.setProperty("--gx", `${overlayCurrent.current.x}%`);
        bgRef.current.style.setProperty("--gy", `${overlayCurrent.current.y}%`);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const rx = (e.clientX - rect.left) / rect.width;
      const ry = (e.clientY - rect.top) / rect.height;
      const nx = (rx - 0.5) * 2;
      const ny = (ry - 0.5) * 2;

      target.current.x = 50 - nx * MAX_SHIFT;
      target.current.y = baseYRef.current - ny * MAX_SHIFT;

      overlayTarget.current.x = 50 - nx * OVERLAY_SHIFT;
      overlayTarget.current.y = baseYRef.current - ny * OVERLAY_SHIFT;
    };

    const handleLeave = () => {
      target.current = { x: 50, y: baseYRef.current };
      overlayTarget.current = { x: 50, y: baseYRef.current };
    };

    const handleResize = () => {
      setBaseline();
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div
        ref={bgRef}
        className="
      relative z-10 bg-[url('/wts-03.png')] bg-no-repeat bg-[center_60%] md:bg-[center_40%]
      bg-[length:30%_auto] md:bg-[length:20%_auto]
      before:content-[''] before:absolute before:inset-0 before:z-0
      before:bg-[radial-gradient(at_var(--gx)_var(--gy),_rgba(0,75,173,0.6)_0%,_rgba(1,7,26,0.9)_70%)] before:pointer-events-none
      [will-change:background-position]
    "
      >
        <Container className="relative z-20 h-[680px] grid place-items-center w-full px-[10px] md:max-w-[70%]">
          <p className="text-center text-[40px] md:text-[70px] font-bold leading-[1.2] font-bold [letter-spacing:-2px]">
            "Your software development experts, crafting powerful solutions that drive
            your&nbsp;
            <br />
            <span className="bg-[linear-gradient(165deg,_#FFFFFF,_#F58300)] bg-clip-text text-transparent">
              business forward.
            </span>
            "
          </p>
        </Container>
      </div>
    </section>
  );
};

export default BrandTaglineSection;
