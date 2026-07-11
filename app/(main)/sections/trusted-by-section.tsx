"use client";
import useVisible from "@/hooks/use-visible";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { CSSProperties } from "react";

const items = [
  { name: "Fasterzebra", src: "/clients/fasterzebra.png" },
  { name: "SIT", src: "/clients/SIT.png" },
  { name: "Structur", src: "/clients/Structur.png" },
  { name: "Zapiio", src: "/clients/zapiio%20copy.png" },
  { name: "Peopled", src: "/clients/Peopled.png" },
  { name: "Software Holding", src: "/clients/Software%20holding.png" },
  { name: "Cause", src: "/clients/cause.png" },
  { name: "Lisa", src: "/clients/lisa.png" },
  { name: "Northbase", src: "/clients/northbase.png" },
  { name: "Self", src: "/clients/self.png" },
];

const CardItem = ({
  name,
  src,
  className,
  style,
}: {
  name: string;
  src: string;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "flex-1 flex justify-center items-center border rounded-[12px] p-2 border-[#87868636] w-[188px] h-[100px] mr-[50px]",
        className
      )}
      style={style}
    >
      <Image
        alt={`${name} — Wise Accelerate client`}
        src={src}
        width={188}
        height={100}
      />
    </div>
  );
};

const TrustedBySection = () => {
  const { ref, isVisible } = useVisible({ visibleDelay: 250 });

  return (
    <section ref={ref} className="relative py-20 bg-[#01071A]">
      <div
        className={cn(
          "flex flex-col gap-[32px] transition-all duration-1000 ease-out transform opacity-100 translate-y-0",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h4 className="text-center">Trusted by startups and enterprises worldwide - Why companies choose Wise Accelerate</h4>
        <div className="flex overflow-hidden mx-[100px] lg:mx-32 xl:mx-52">
          <div className="flex min-w-max animate-scroll-right justify-center" style={{ animationDuration: '50s' }}>
            {items.map((item, idx) => (
              <CardItem
                key={idx}
                name={item.name}
                src={item.src}
                className={
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
                style={{ transitionDelay: `${idx * 25}ms` }}
              />
            ))}
          </div>
          <div className="flex min-w-max animate-scroll-right justify-center" style={{ animationDuration: '50s' }}>
            {items.map((item, idx) => (
              <CardItem key={idx} name={item.name} src={item.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
