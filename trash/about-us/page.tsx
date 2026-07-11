import Container from "@/components/container";
import { CTASection } from "../../app/(main)/sections/cta-section";
import { ApproachSection } from "../../app/(main)/sections/approach-section";
import VisionMission from "./_components/vision-mission";
import OurValues from "./_components/our-values";
import AwardsSection from "./_components/awards";
import CoreTeam from "./_components/core-team";

export default function AboutUs() {
  return (
    <div className="bg-[#050A1B] min-h-screen flex flex-col pb-10 gap-10">
      <Container className="min-h-screen pt-80 lg:mt-0 grid place-items-center w-full max-w-[1400px] ">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-[#1E3A8A] px-3 py-1 rounded-md text-sm flex items-center">
                <span className="mr-1">🤝</span> ABOUT US
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              About <span className="text-[#3B82F6]">WiseOSC</span>
            </h1>
            <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg">
              WiseOSC is a leading digital product studio specializing in
              AI-powered software development, fullstack web applications, and
              mobile solutions. Learn more about the WiseOSC team and our
              commitment to excellence at wiseaccelerate.com.
            </p>
          </div>
        </div>
        {/* Approach Section */}
        <ApproachSection />
      </Container>
      <VisionMission />
      <OurValues />
      <AwardsSection />
      <CoreTeam />
      <Container className="w-full max-w-[1400px]">
        <CTASection className="h-[700px]" />
      </Container>
    </div>
  );
}
