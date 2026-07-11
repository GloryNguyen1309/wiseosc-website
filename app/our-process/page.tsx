import Container from "@/components/container";
import Image from "next/image";
import { ProcessSection } from "../(main)/sections/process-section";
import BrandTaglineSection from "../why-work-with-us/sections/brand-tagline-section";
import { CTASection } from "../(main)/sections/cta-section";

const OurProcessPage = () => {
  return (
    <main className="bg-[#01071A] text-white">
      <section className="flex flex-col gap-20">
        <div className="bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)] w-full">
          <Container className="pt-60 max-w-[1350px]">
            <div className="text-center">
              <div className="inline-block w-fit bg-[#0e2648] py-2 px-5 rounded-[12px] mb-6 bg-[linear-gradient(120deg,_#119CFF33_0%,_#119CFFAD_100%)]">
                <span className="text-[#3DB9F9] text-sm font-medium flex items-center">
                  {/* <span className="mr-2 py-0.5 text-[23px]">📰</span> */}
                  <span className="text-center uppercase text-[#FFF] font-normal">
                    Our Process
                  </span>
                </span>
              </div>
              <h1 className="text-[40px] md:text-[65px] font-medium mb-2 leading-[1.2]">
                Hyper fine-tuned Workflow
                <br />
                &nbsp;
                <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent font-bold md:text-[70px]">
                  For Partners
                </span>
              </h1>
            </div>
          </Container>
        </div>
      </section>

      <ProcessSection />

      <BrandTaglineSection />

      <CTASection />
    </main>
  );
};

export default OurProcessPage;
