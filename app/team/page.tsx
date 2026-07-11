import Container from "@/components/container";
import { CTASection } from "../(main)/sections/cta-section";
import { ApproachSection } from "../(main)/sections/approach-section";
// import CoreTeam from "../../trash/about-us/_components/core-team";

export default function OurTeam() {
  return (
    <div className="bg-[#050A1B] min-h-screen flex flex-col pb-10 gap-10">
      <Container className="min-h-screen mt-[200px] lg:mt-0 grid place-items-center w-full max-w-[1400px] ">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-[#1E3A8A] px-3 py-1 rounded-md text-sm flex items-center">
                <span className="mr-1">🤝</span> MEET OUR TEAM
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Our core
              <span className="text-[#3B82F6]">Team</span>.
            </h1>
          </div>
        </div>
      </Container>
      {/* <CoreTeam /> */}
      <ApproachSection />
      <Container className="w-full max-w-[1400px]">
        <CTASection className="h-[700px]" />
      </Container>
    </div>
  );
}
