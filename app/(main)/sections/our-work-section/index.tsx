"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Mousewheel } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import OurWorkItem from "./item";

const items = [
  {
    title: "Singapore Institute of Technology Real-time Interaction Monitoring",
    description: `WiseOSC built a sophisticated real-time learning analytics platform in partnership with Singapore Institute of Technology, leveraging the Experience API (xAPI) to capture, process, and analyze granular HTML element interactions within digital learning environments.`,
    imageSrc: "/project-thumb/SITThumbnail.png",
    link: "/work-detail/singapore-institute-of-technology",
  },
  {
    title: "CashD: Early wage access plugin for Australian HRM system",
    description: `WiseOSC developed a comprehensive financial wellness platform that enables employees to access their earned wages before the traditional payday, reducing financial stress and improving employee satisfaction. The system integrates seamlessly with major Australian accounting systems and provides real-time wage calculation based on approved timesheets.`,
    imageSrc: "/project-thumb/CashDThumbnail.png",
    link: "/work-detail/cash-d",
  },
  {
    title: "SellBlueAI",
    description: `WiseOSC created SellBlue, an AI-powered conversational marketing platform designed to revolutionize how businesses approach marketing, sales, and customer support on iOS. The platform leverages generative AI technology to create personalized, interactive customer experiences that drive higher conversion rates.`,
    imageSrc: "/project-thumb/SellBlueThumbnail.png",
    link: "/work-detail/sell-blue-ai",
  },
  {
    title: "Zapiio - Smart Tool For Smart Property Investment",
    description: `WiseOSC built Zapiio, the intelligent platform that empowers buyer's agents, mortgage brokers, and serious investors to navigate the property market with unparalleled clarity, strategic insight, and complete confidence.`,
    imageSrc: "/project-thumb/ZapiioThumbnail.png",
    link: "/work-detail/zapiio",
  },
  {
    title: "Lisa Training Manager - Tennis Academy Management Application",
    description: `WiseOSC developed Lisa Training Manager, a comprehensive sports management application for a Netherlands-based sports technology company, designed specifically to streamline operations for tennis academies and coaching facilities.`,
    imageSrc: "/project-thumb/LisaThumbnail.png",
    link: "/work-detail/lisa-training-manager",
  },
  {
    title: "Apex Insurance - Insurance Management Platform",
    description: `WiseOSC delivered an integrated insurance management platform that centralizes all customer, property, vehicle, and business data while providing AI-powered predictive analytics and risk assessment tools.`,
    imageSrc: "/project-thumb/ApexThumbnail.png",
    link: "/work-detail/apex-insurance",
  },
];

const OurWorkSection = () => {
  const swiperRef = useRef<SwiperType>(null);

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };

  return (
    <section className="py-20 bg-[#01071A] relative">
      <div className="m-auto">
        <div className="max-w-[1280px] m-auto px-[5%]">
          <div className="text-[21px]">OUR WORK</div>
          <div className="flex gap-[32px] pb-[3.75rem]">
            <h2 className="text-[32px] lg:text-[44px] bold">
              Explore our portfolio of successful software projects and see how
              we've helped businesses transform their digital presence
            </h2>
            <div className="flex gap-4">
              <ArrowLeft
                size={32}
                onClick={handlePrev}
                className="cursor-pointer"
              />
              <ArrowRight
                size={32}
                onClick={handleNext}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <Swiper
          freeMode
          mousewheel={{ enabled: true, forceToAxis: true }}
          slidesPerView="auto"
          modules={[FreeMode, Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {items.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="min-w-0 cursor-grab select-none !w-fit"
            >
              <OurWorkItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurWorkSection;
