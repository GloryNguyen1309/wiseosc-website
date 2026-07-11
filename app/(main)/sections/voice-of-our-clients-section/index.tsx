"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";
import VoiceOfOurClientsItem from "./item";

const items = [
  {
    leftImageSrc: "/voice-clients/Charbel-Zeaiter.png",
    companyImageSrc: "/logo3.png",
    description: `Working with Wise Accelerate has been transformative for our development process. Wise Accelerate's staff augmentation model allowed us to seamlessly integrate skilled developers who quickly became valuable members of our team. The quality of work and attention to detail from Wise Accelerate exceeded our expectations.`,
    title: "Charbel Zeaiter / CEO",
    label: "Faster Zebra",
  },
];

const VoiceOfOurClientsSection = () => {
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
    <section className="py-20 bg-[#01071A] relative ">
      <div className="max-w-[1280px] m-auto">
        <div className="px-[5%]">
          <div className="text-[21px]">VOICE OF OUR CLIENTS</div>
          <div className="flex gap-[32px] pb-[3.75rem] items-center">
            <h2 className="text-[32px] lg:text-[44px] bold">
              What our clients say about working with Wise Accelerate
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
          loop
          mousewheel={{ enabled: true, forceToAxis: true }}
          slidesPerView={1}
          className="cursor-grab"
          modules={[Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <VoiceOfOurClientsItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VoiceOfOurClientsSection;
