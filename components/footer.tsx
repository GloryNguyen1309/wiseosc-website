"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={cn(
        "bg-transparent bg-[radial-gradient(at_20%_68%,#004BAD_0%,#01071A_71%)] py-20",
        isVisible ? "opacity-100" : "opacity-0",
        "transition-opacity duration-1000",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Left Column */}
          <div>
            <p className="text-gray-400 text-sm mb-4">
              Ready To See Wise Accelerate's Magic?
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
              Let's talk <br />
              about{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                your project with Wise Accelerate
              </span>
            </h2>
            <a
              href="mailto:info@wiseaccelerate.com"
              className="inline-flex items-center text-white hover:text-blue-300 transition-colors group"
            >
              <span className="mr-2 uppercase text-sm font-medium">
                Email us
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Middle Column */}
          <div className="space-y-10">
            <div>
              <div className="bg-blue-900/50 rounded-full px-6 py-2 inline-block mb-6">
                <span className="text-white font-medium">Connect with us</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <a
                    href="mailto:info@wiseaccelerate.com"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    info@wiseaccelerate.com
                  </a>
                </div>

                {/* <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <a
                    href="tel:+61401685398"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    (+61) 401685398
                  </a>
                </div> */}
                <div className="flex flex-col mt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl pl-10 text-white hover:text-white transition-colors gap-3 py-3 text-md"
                    style={{
                      backgroundImage:
                        "linear-gradient(37deg, rgb(17, 156, 255) 50%, rgb(151, 248, 244) 100%)",
                    }}
                  >
                    Get Free Trial <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div></div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <div>
              <div className="bg-blue-900/50 rounded-full px-6 py-2 inline-block mb-6">
                <span className="text-white font-medium">Location</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-white">
                  <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-3 text-sm leading-relaxed text-white/90">
                    <p>
                      Dolphin Plaza Tower, 28 P. Trần Bình
                      <br />
                      Từ Liêm, Hà Nội 100000, Vietnam
                    </p>
                    <a
                      href="https://maps.app.goo.gl/YF3TWW17jSfCyERz5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-blue-300 hover:text-blue-100 underline underline-offset-2 transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-blue-900/50 rounded-full px-6 py-2 inline-block mb-6">
                <span className="text-white font-medium">Follow us</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* <a
                  target="_blank"
                  href="https://www.upwork.com/agencies/1679260680181690368/"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Upwork
                </a> */}

                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/wise-accelerate"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900/50 mt-16 pt-8 text-center text-blue-400 text-sm">
          <div className="mb-3">
            <Link
              href="/legal"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              Terms of Service & Privacy Policy
            </Link>
          </div>
          © {new Date().getFullYear()} W Digital Services Pty Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
