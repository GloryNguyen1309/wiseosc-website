"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  link: string;
  title: string;
  description: string;
  imageSrc: string;
}

const OurWorkItem: FC<Props> = (props) => {
  const { link, title, description, imageSrc } = props;

  return (
    <Link
      href={link}
      className="aspect-[4/6] flex flex-col justify-between group [&_img]:object-cover shrink-0 overflow-hidden transition-all sm:max-w-[25rem] max-h-[540px] w-full sm:max-h-[600px]"
      style={{
        background: "url(/process-bg.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="p-8">
        <div className="mb-2 text-[26px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 line-clamp-3 min-h-[126px]">
          {title}
        </div>
        <div className="text-[18px] text-gray-300 leading-[28px] line-clamp-4">
          {description}
        </div>
      </div>
      <div className="relative grow">
        <Image fill alt="our-work-img" src={imageSrc} />
      </div>
    </Link>
  );
};

export default OurWorkItem;
