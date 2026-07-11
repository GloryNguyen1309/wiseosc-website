"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "../logo";
import Link from "next/link";

import { NavDesktop, NavMobile } from "./navlist";
import Container from "@/components/container";
import { cn } from "@/lib/utils";

function Header() {
  const [bodyScrolled, setBodyScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setBodyScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "transition-colors duration-150",
        bodyScrolled ? "bg-blue-950" : "bg-transparent"
      )}
    >
      <Container className="max-w-[1400px]">
        <section className="flex pt-[15px] pb-[12px] justify-between items-center">
          <div className="p-[10px]">
            <Logo />
          </div>
          <div className="lg:hidden block ml-auto max-w-[600px]">
            <NavMobile />
          </div>
          <div className="hidden lg:block w-full max-w-[800px]">
            <NavDesktop />
          </div>
          <a href="/contact">
            <Button
              className="shrink-0 hidden lg:flex items-center rounded-full px-6 py-2.5 text-white hover:text-white focus-visible:text-white text-sm"
              style={{
                backgroundImage:
                  "linear-gradient(37deg, rgb(17, 156, 255) 50%, rgb(151, 248, 244) 100%)",
              }}
            >
              Get Free Trial <ChevronRight size={16} />
            </Button>
          </a>
        </section>
      </Container>
    </header>
  );
}

export default Header;
