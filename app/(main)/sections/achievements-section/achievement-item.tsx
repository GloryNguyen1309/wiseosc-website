'use client'
import { FC, useEffect, useRef, useState } from "react";
import Countable from "./countable";
import { cn } from "@/lib/utils";
import useVisible from "@/hooks/use-visible";

interface Props {
  hasPlus?: boolean
  visibleDelay: number
  counterValue: number
  unit?: string
  title: string
  className?: string
}

const AchievementItem: FC<Props> = (props) => {
  const { hasPlus, visibleDelay, counterValue, unit, title, className } = props
  const { ref, isVisible } = useVisible({ visibleDelay })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out transform relative",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      <div className={cn("flex flex-col")}>
        <div className="py-2">
          <div className="flex font-[200] text-[28px] lg:text-[33px] justify-center">
            <Countable disabled={!isVisible} endValue={counterValue} />
            <span className="ml-2">{unit}</span>
            {hasPlus ? <span className="relative align-super text-sm ml-1">+</span> : null}
          </div>
          <div className="text-center sm:text-[16px] lg:text-[20px]">{title}</div>
        </div>
      </div>
    </div>
  )
}

export default AchievementItem;