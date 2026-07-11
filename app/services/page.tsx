import Container from "@/components/container";
import { SectionBadge } from "@/components/section-badge";
import ServicesSection from "../(main)/sections/services-section";
import { ServiceCard, ServiceCardProps } from "@/components/service-card";
import { ProcessSection } from "../(main)/sections/process-section";
import FeatureCards from "./_components/feature-cards";

const services = [
  {
    id: 5,
    title: "Social Media",
    subtitle: "Marketing",
    image: "/services/socials.png",
    delay: 150,
    path: "#",
  },
  {
    id: 6,
    title: "Website",
    subtitle: "Development",
    image: "/services/code.png",
    delay: 300,
    variant: "blue",
    path: "#",
  },
  {
    id: 4,
    title: "UI UX",
    subtitle: "Design",
    image: "/services/code.png",
    delay: 300,
    variant: "blue",
    path: "#",
  },
  {
    id: 3,
    title: "App",
    subtitle: "Development",
    image: "/services/app.png",
    delay: 450,
    path: "#",
  },
  {
    id: 1,
    title: "Brand",
    subtitle: "Identity",
    image: "/services/illustrate.png",
    delay: 600,
    variant: "blue",
    path: "#",
  },
  {
    id: 2,
    title: "SEO",
    subtitle: "Optimization",
    image: "/services/dashboard.jpg",
    delay: 750,
    variant: "blue",
    path: "#",
  },
] satisfies ServiceCardProps[];

export default function ServicesPage() {
  return (
    <section className="bg-gradient-to-r pt-80 from-[#050c1f] to-[#0a1635] text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <SectionBadge icon={"💼"} text="Services" />
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          WiseOSC Software Development&nbsp;
          <span className="text-blue-400">Services</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
          Discover comprehensive software development services from WiseOSC.
          From AI engineering to mobile apps, WiseOSC delivers cutting-edge
          solutions tailored to your business needs. Visit our website to learn
          more.
        </p>
      </div>
      {/* Services Section */}
      <Container className="max-w-[1400px]">
        <div className="gap-4 grid-cols-6 flex flex-col lg:grid">
          {services.map((service, idx) => (
            <ServiceCard
              className={
                idx < 2
                  ? "col-span-3"
                  : idx === 2 || idx === 5
                    ? "col-span-2"
                    : "col-span-1"
              }
              {...service}
              key={service.title}
            />
          ))}
        </div>
      </Container>

      <ProcessSection />

      <div
        className="h-[800px]"
        style={{
          background: "url(/placeholder.svg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <Container className="max-w-[1400px] flex gap-2 h-[200px] items-center justify-start">
        <SectionBadge text="How We Work" className="h-fit w-fit mx-0" />
        <p className="text-4xl">
          <span className="text-blue-300 font-bold">WiseOSC's methodology</span>
          has been tested and <br /> proven{" "}
          <span className="text-blue-300 font-bold">successful</span> across
          hundreds of projects. Trust WiseOSC for results.
        </p>
      </Container>
      <Container className="max-w-[1400px]">
        <FeatureCards />
      </Container>
    </section>
  );
}
