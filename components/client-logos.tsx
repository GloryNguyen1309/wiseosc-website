"use client";

import { useEffect, useRef } from "react";

const clients = [
  { src: "/clients/penta.png", name: "Penta" },
  { src: "/clients/vision.png", name: "Vision" },
  { src: "/clients/product.png", name: "Product" },
  { src: "/clients/nextmove.png", name: "Nextmove" },
  { src: "/clients/luminous.png", name: "Luminous" },
  { src: "/clients/umbrella.png", name: "Umbrella" },
  { src: "/clients/snapshot.png", name: "SnapShot" },
  { src: "/clients/sitemark.png", name: "Sitemark" },
];

export default function ClientLogos() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const clone = slider.innerHTML;
      slider.innerHTML += clone; // Duplicate content for smooth infinite scrolling
    }
  }, []);

  return (
    <div className="overflow-hidden relative w-full py-4">
      <div
        ref={sliderRef}
        className="flex w-max animate-scroll space-x-12"
        style={{
          animation: "scroll 100s linear infinite",
        }}
      >
        {clients.concat(clients).map((client, index) => (
          <div
            key={index}
            className="w-40 h-28 flex items-center  justify-center"
          >
            <img
              src={client.src}
              alt={client.name}
              className="h-full object-contain"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${clients.length}));
          }
        }
      `}</style>
    </div>
  );
}
