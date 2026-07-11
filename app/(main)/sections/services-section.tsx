import { SectionBadge } from "@/components/section-badge";
import { ServiceCard, ServiceCardProps } from "@/components/service-card";
import { BriefcaseIcon } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Fullstack Web Application",
    subtitle: "Development",
    image: "/services/code.png",
    delay: 150,
    path: "#",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Engineering",
    image: "/services/socials.png",
    delay: 300,
    variant: "blue",
    path: "#",
  },
  {
    title: "Mobile App",
    subtitle: "Development",
    image: "/services/app.png",
    delay: 450,
    path: "#",
  },
  // {
  //   title: "Brand",
  //   subtitle: "Identity",
  //   image: "/services/illustrate.png",
  //   delay: 600,
  //   variant: "blue",
  //   path: "#",
  // },
  // {
  //   title: "SEO",
  //   subtitle: "Optimization",
  //   image: "/services/dashboard.jpg",
  //   delay: 750,
  //   variant: "blue",
  //   path: "#",
  // },
] satisfies ServiceCardProps[];

function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#020718] to-[#01071A]">
      <div className="container mx-auto px-4">
        {/* <SectionBadge icon={<BriefcaseIcon size={18} />} text="Services" /> */}
        <div className="flex w-full items-center justify-center">
          <div className="inline-block w-fit bg-[#0e2648] py-2 px-5 pl-4 rounded-[12px] mb-6 bg-[linear-gradient(120deg,_#119CFF33_0%,_#119CFFAD_100%)]">
            <span className="text-[#3DB9F9] text-sm font-medium flex items-center">
              <span className="text-center uppercase text-[#FFF] font-normal">
                Services
              </span>
            </span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-dm-sans">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Expertise
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            WiseOSC holds exceptional expertise in 3 main areas: AI Engineering,
            Fullstack Web Development, and Mobile App Development. Let's
            discover what WiseOSC can build for you.
          </p>
        </div>

        <div className="gap-4 grid-cols-6 flex flex-col lg:grid">
          {services.map((service, idx) => (
            <ServiceCard
              className={idx < 3 ? "col-span-2" : "col-span-3"}
              {...service}
              key={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
