"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { StarIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  avatar?: string
  delay?: number
}

export function TestimonialCard({ quote, author, company, avatar, delay = 0 }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={cn(
        "bg-[#1a1e2e] rounded-xl p-8 transition-all duration-700 ease-out transform h-full flex flex-col",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-blue-400 fill-blue-400" />
        ))}
      </div>

      <p className="text-white italic mb-8 flex-grow">{quote}</p>

      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-800/50 mr-4">
          {avatar ? (
            <Image
              src={avatar || "/placeholder.svg"}
              alt={author}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-blue-300">{author.charAt(0)}</div>
          )}
        </div>
        <div>
          <div className="text-white font-medium">{author}</div>
          <div className="text-gray-400 text-sm">{company}</div>
        </div>
      </div>
    </div>
  )
}

