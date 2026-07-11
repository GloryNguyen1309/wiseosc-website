"use client";
import Image from "next/image";
import { FC } from "react";

interface Props {
  leftImageSrc: string;
  companyImageSrc: string;
  title: string;
  label: string;
  description: string;
}

const VoiceOfOurClientsItem: FC<Props> = (props) => {
  const { leftImageSrc, companyImageSrc, title, label, description } = props;

  return (
    <div className="flex size-full flex-col gap-[12px] lg:flex-row lg:gap-0 px-[5%]">
      <Image
        alt="slide-image"
        src={leftImageSrc}
        width={600}
        height={600}
        className="h-72 w-full shrink-0 bg-cover bg-center bg-no-repeat object-cover md:h-96 lg:w-[320px]"
      />
      <div className="flex h-full grow flex-col p-md lg:p-0 lg:pl-8 md:h-96">
        <p className="w-full max-w-screen-md text-left text-[22px] leading-[34px]">
          {description}
        </p>
        <div className="lg:grow" />
        <div className="flex w-full items-center gap-5">
          <div className="mt-5 flex flex-col gap-2">
            <h3 className="font-[500] text-[22px]">{title}</h3>
            <p className="text-text-dim font-label-mb">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceOfOurClientsItem;
