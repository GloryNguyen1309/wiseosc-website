"use client";

import { useRef, useEffect, useState } from "react";
import Container from "@/components/container";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { CTASection } from "../(main)/sections/cta-section";
import BrandTaglineSection from "./sections/brand-tagline-section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import SlideItem from "./slide-item";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const accordions = [
  {
    title: "Why choose us for your software development needs?",
    content:
      "We combine technical expertise with business acumen to deliver software solutions that drive real value. Our team of experienced developers specializes in modern technologies and agile methodologies, ensuring your project is delivered on time and within budget.",
  },
  {
    title: "What separates us from other software development agencies?",
    content:
      "Our unique approach focuses on staff augmentation and long-term partnerships. We don't just build software—we integrate seamlessly into your team, understand your business goals, and provide ongoing support with rigorous quality assurance. Our developers become an extension of your team.",
  },
  {
    title: "How much does software development cost?",
    content:
      "Pricing varies based on project scope, team size, and complexity. We offer flexible engagement models including staff augmentation, project-based development, and dedicated teams. Book a free trial onboarding discussion for a customized quote tailored to your specific requirements and budget.",
  },
  {
    title: "What software development services do you offer?",
    content:
      "We provide comprehensive software development services including full-stack web development, mobile app development, API integrations, cloud solutions, staff augmentation, quality assurance, and ongoing maintenance. Our expertise spans modern frameworks and technologies across the entire software development lifecycle.",
  },
];

const slideItems_1 = [
  {
    imageSrc: "/why-work-with-us/slide-1-1.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-1-2.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-1-3.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-1-1.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-1-2.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-1-3.jpg",
  },
];

const slideItems_2 = [
  {
    imageSrc: "/why-work-with-us/slide-2-1.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-2-2.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-2-3.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-2-1.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-2-2.jpg",
  },
  {
    imageSrc: "/why-work-with-us/slide-2-3.jpg",
  },
];

function WhyWorkWithUsPage() {
  const [isImagesVisible, setImagesIsVisible] = useState(false);
  const imagesSectionRef = useRef<HTMLDivElement>(null);

  const [isFAQVisible, setFAQIsVisible] = useState(false);
  const faqSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const imagesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImagesIsVisible(true);
        imagesObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const faqObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFAQIsVisible(true);
        faqObserver.unobserve(entry.target);
      }
    }, observerOptions);

    if (imagesSectionRef.current) {
      imagesObserver.observe(imagesSectionRef.current);
    }

    if (faqSectionRef.current) {
      faqObserver.observe(faqSectionRef.current);
    }

    return () => {
      if (imagesSectionRef.current) {
        imagesObserver.unobserve(imagesSectionRef.current);
      }
      if (faqSectionRef.current) {
        faqObserver.unobserve(faqSectionRef.current);
      }
    };
  }, []);

  return (
    <main className="bg-[#01071A] text-white">
      {/* Hero Section */}
      <section className="flex flex-col gap-20">
        <div className="bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)] w-full">
          <Container className="pt-60 max-w-[1350px]">
            <div className="text-center">
              <div className="inline-block w-fit bg-[#0e2648] py-2 px-5 rounded-[12px] mb-6 bg-[linear-gradient(120deg,_#119CFF33_0%,_#119CFFAD_100%)]">
                <span className="text-[#3DB9F9] text-sm font-medium flex items-center">
                  {/* <span className="mr-2 py-0.5 text-[23px]"> 🚀</span> */}
                  <span className="text-center uppercase text-[#FFF] font-normal">
                    Why Work With Us
                  </span>
                </span>
              </div>

              <h1 className="text-[40px] md:text-[65px] font-medium mb-2 [word-spacing:-0.2rem] leading-[1.2]">
                W takes Software Development to <br />
                &nbsp;
                <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent font-bold md:text-[70px]">
                  the next level.
                </span>
              </h1>
            </div>

            <div className="lg:flex lg:flex-row mt-20 gap-8 overflow-hidden max-w-[1280px]">
              <article className="my-auto flex flex-col lg:p-0 lg:order-2 lg:ml-xl lg:mx-20">
                <h1 className="mb-8 text-[1rem]">LEARN MORE ABOUT OUR TEAM</h1>
                <div className="text-[2rem] xl:text-[2.75rem] leading-[2.75rem] xl:leading-[3.5rem]">
                  We bring together creativity, efficiency-proven processes, and
                  top-tier software and AI engineering teams, helping you get
                  closer to your vision and accomplish your goals.
                </div>
                <a href="/contact" className="w-fit">
                  <Button
                    className="mt-8 shrink-0 lg:flex items-center rounded-full px-6 py-2.5 text-white hover:text-white focus-visible:text-white text-sm"
                    style={{
                      backgroundImage:
                        "linear-gradient(37deg, rgb(17, 156, 255) 50%, rgb(151, 248, 244) 100%)",
                    }}
                  >
                    Get Free Trial <ChevronRight size={16} />
                  </Button>
                </a>
              </article>
              <div className="flex lg:flex-col lg:h-[740px] lg:w-[255px] mt-8 lg:mt-0">
                <div className="flex lg:flex-col min-w-max animate-scroll-right lg:animate-scroll-up justify-center">
                  {slideItems_1.map((item, idx) => (
                    <SlideItem key={idx} src={item.imageSrc} />
                  ))}
                </div>
                <div className="flex lg:flex-col min-w-max animate-scroll-right lg:animate-scroll-up justify-center">
                  {slideItems_1.map((item, idx) => (
                    <SlideItem key={idx} src={item.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="flex lg:flex-col lg:h-[740px] lg:w-[255px]">
                <div className="flex lg:flex-col min-w-max animate-scroll-left lg:animate-scroll-down justify-center">
                  {slideItems_2.map((item, idx) => (
                    <SlideItem key={idx} src={item.imageSrc} />
                  ))}
                </div>
                <div className="flex lg:flex-col min-w-max animate-scroll-left lg:animate-scroll-down justify-center">
                  {slideItems_2.map((item, idx) => (
                    <SlideItem key={idx} src={item.imageSrc} />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* animation */}
        <div
          ref={imagesSectionRef}
          className={cn(
            "transition-all duration-1000 ease-out transform",
            isImagesVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10",
          )}
        >
          {/* <div className="flex flex-col md:flex-row md:items-center gap-5 px-4 md:px-20">
            <div className="w-full relative aspect-video">
              <Image
                src="/wts-04.jpg"
                fill
                className="rounded-2xl"
                alt="Brand identity"
              />
            </div>
            <div className="w-full relative aspect-video">
              <Image
                src="/wts-02.jpg"
                fill
                className=" rounded-2xl"
                alt="Brand identity"
              />
            </div>
          </div> */}
          <div className="flex flex-col max-w-[1400px] mx-auto md:flex-row md:items-center p-4 gap-5">
            <h3 className="text-3xl md:text-[45px] w-full md:w-3/5 md:py-10 md:pr-10 leading-[1.5]">
              <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent">
                Software experts{" "}
              </span>
              <span className="!font-extralight">
                that can help you build software solutions you're proud of
              </span>
            </h3>
            <p className="w-full md:w-2/5 md:p-4 text-gray-400 text-[17px] leading-[2.1]">
              Our team of expert developers specializes in building scalable,
              high-performance software solutions. We leverage cutting-edge
              technologies and best practices to deliver applications that not
              only meet your requirements but exceed expectations in terms of
              quality, performance, and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* animation */}
      <section
        ref={faqSectionRef}
        className={cn(
          "transition-all duration-1000 ease-out transform",
          isFAQVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10",
        )}
      >
        <Container className="max-w-[1400px] flex flex-col lg:flex-row gap-4 py-10">
          <div className="flex flex-col gap-6 items-center md:items-start">
            <div className="inline-block w-fit bg-[radial-gradient(at_center_center,_#01071A00_14%,_#008AFC61_100%)] px-3 py-3 pr-5 rounded-[12px]">
              <span className="text-[#3DB9F9] text-sm font-medium flex items-center">
                {/* <span className="text-[23px] mr-4"> 📰 </span> */}
                <span className="uppercase text-[#FFF]"> FAQ Questions</span>
              </span>
            </div>
            <h2 className="text-[31px] font-extralight md:text-[45px] mb-2 text-center md:text-left leading-[1.5]">
              Frequently Asked
              <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-5"
          >
            {accordions.map((accordion, idx) => (
              <AccordionItem
                key={accordion.title}
                value={accordion.title}
                className="border-0 bg-gradient-to-l from-[#0A294B] to-[#101F2F] rounded-lg"
              >
                <AccordionTrigger className="px-5 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <p className="text-[17px] font-normal">0{idx + 1}</p>
                    <p className="text-[17px] md:text-[23px] font-medium">
                      {accordion.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 text-gray-400 pb-6 md:text-[17px]">
                  {accordion.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>
      <BrandTaglineSection />
      <CTASection />
    </main>
  );
}

export default WhyWorkWithUsPage;
