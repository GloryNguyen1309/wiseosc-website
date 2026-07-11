import Container from "@/components/container";
import { CTASection } from "../(main)/sections/cta-section";

export default function BlogsPage() {

  return (
    <main className="overflow-x-hidden">
      <section className="bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)] text-white relative overflow-hidden pb-12 md:pb-0">
        <div>
          <Container className="max-w-[1440px] w-full">
            <div className="container mx-auto px-4 pt-52 text-center sm:pt-60 relative z-10 pb-4 md:pb-0">
              <div className="inline-block w-fit bg-[#0e2648] py-2 px-5 pl-4 rounded-[12px] mb-6 bg-[linear-gradient(120deg,_#119CFF33_0%,_#119CFFAD_100%)]">
                <span className="text-[#3DB9F9] text-sm font-medium flex items-center">
                  <span className="text-center uppercase text-[#FFF] font-normal">
                    Blogs
                  </span>
                </span>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold sm:text-5xl md:text-6xl">
                Research-Driven{" "}
                <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent font-bold md:text-[60px]">
                  Insights
                </span>
              </h1>
            </div>
          </Container>
        </div>
      </section>
      <section className="bg-[#01071A] py-12 pb-24 md:py-24 md:pb-24">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400">
            No blogs yet. Check back soon.
          </p>
        </div>
      </section>
      <section className="bg-[#01071A] pb-24 pt-10 md:py-16 md:pb-16">
        <CTASection />
      </section>
    </main>
  );
}

