import Container from "@/components/container";
import { CTASection } from "../(main)/sections/cta-section";
import OurWorkSection from "../(main)/sections/our-work-section";
import TrustedBySection from "../(main)/sections/trusted-by-section";
import { TechStackSection } from "../(main)/sections/tech-stack-section";

const CaseStudiesPage = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)] text-white relative overflow-hidden">
        <div>
          <Container className="max-w-[1440px] w-full">
            <div className="container pt-60 text-center relative z-10 mx-auto">
              {/* <SectionBadge text="Our Work" /> */}
              <div className="inline-block w-fit bg-[#0e2648] py-2 px-5 pl-4 rounded-[12px] mb-6 bg-[linear-gradient(120deg,_#119CFF33_0%,_#119CFFAD_100%)]">
                <span className="text-[#3DB9F9] text-sm font-medium flex items-center">
                  {/* <span className="mr-3 py-0.5 text-[23px]"> 📈 </span> */}
                  <span className="text-center uppercase text-[#FFF] font-normal">
                    Case Studies
                  </span>
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our{" "}
                <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent font-bold md:text-[60px]">
                  Achievements
                </span>
              </h1>
            </div>
          </Container>
        </div>
      </section>
      <TrustedBySection />
      <section className="py-16 bg-[#01071A]">
        <CTASection />
      </section>
      <OurWorkSection />
      <TechStackSection />
    </main>
  );
};

export default CaseStudiesPage;
