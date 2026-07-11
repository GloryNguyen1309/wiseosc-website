import { Flame } from "lucide-react";

export default function VisionMission() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-24 px-4 bg-gray-50">
      {/* Radial lines background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] opacity-10">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[400px] h-[1px] bg-gray-400 origin-left"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 10}deg)`,
              }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 mb-8">
          <Flame className="w-4 h-4 text-orange-500 mr-2" />
          <span className="font-medium text-purple-800 text-sm">
            VISION & MISSION
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Vision,
          </span>{" "}
          attention to detail, <br className="hidden md:block" />
          and passion for a <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            final product.
          </span>
        </h2>

        {/* Attribution */}
        <div className="text-center">
          <p className="font-semibold text-lg">William Martinez</p>
          <p className="text-gray-500">Founder, Director</p>
        </div>
      </div>
    </div>
  );
}
