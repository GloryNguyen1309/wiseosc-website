"use client";

import { useRef, useEffect, useState } from "react";
import Container from "@/components/container";
import { CTASection } from "../(main)/sections/cta-section";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Jobs = [
  {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    slug: "senior-full-stack-developer",
    location: "Remote in Sydney, Australia",
  },
  {
    title: "Frontend Developer",
    type: "Full-time",
    slug: "frontend-developer",
    location: "Remote in Vietnam",
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    slug: "backend-developer",
    location: "Remote in Sydney, Australia",
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    slug: "devops-engineer",
    location: "Remote in Vietnam",
  },
  {
    title: "QA Engineer",
    type: "Full-time",
    slug: "qa-engineer",
    location: "Remote in Vietnam",
  },
];

const JobItem = ({
  index,
  title,
  type,
  slug,
}: {
  index: number;
  title: string;
  type: string;
  slug: string;
}) => {
  return (
    <a
      href={`/job-detail/${slug}`}
      className="group bg-[#0a1635] rounded-[12px] py-6 px-2 md:px-6 flex items-center justify-between hover:bg-[#0d1b36] transition-colors duration-300 cursor-pointer"
    >
      <div className="flex items-center">
        <span className="text-gray-500 text-lg mr-4 md:mr-8">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="text-white text-[31px] md:text-[43px] font-extralight group-hover:text-[#9DFF00] transition-colors duration-300">
            {title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <div className="inline-flex items-center bg-white rounded-full px-3 py-1 text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-black font-medium">{type}</span>
            </div>
            <div className="inline-flex items-center bg-white/90 rounded-full px-3 py-1 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-black font-medium">{Jobs[index].location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 group-hover:bg-[#9DFF00] rounded-full py-[3px] px-[13px] transition-colors duration-300 flex items-center justify-center">
        <MoveRight />
      </div>
    </a>
  );
};

const CareersPage = () => {
  const [isJobsVisible, setJobsIsVisible] = useState(false);
  const jobsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setJobsIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (jobsSectionRef.current) {
      observer.observe(jobsSectionRef.current);
    }

    return () => {
      if (jobsSectionRef.current) {
        observer.unobserve(jobsSectionRef.current);
      }
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <section className="bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)] text-white relative overflow-hidden">
        <Container className="pt-60 max-w-[1350px] px-1 md:px-4">
          <div className="text-center">
            <div className="inline-block w-fit bg-[#0e2648] py-2 px-5 pl-4 rounded-[12px] mb-6 bg-[linear-gradient(120deg,_#119CFF33_0%,_#119CFFAD_100%)]">
              <span className="text-[#3DB9F9] text-sm font-medium flex items-center">
                {/* <span className="mr-3 py-0.5 text-[23px]"> 📈 </span> */}
                <span className="text-center uppercase text-[#FFF] font-normal">
                  Careers
                </span>
              </span>
            </div>
            <h1 className="text-[40px] md:text-[65px] font-medium mb-2 [word-spacing:-0.2rem] leading-[1.2]">
              Join our team and grow <br />
              &nbsp;
              <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent font-bold md:text-[70px]">
                your career
              </span>
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-16 px-[10px] bg-[#01071A]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[31px] md:text-[45px] font-extralight mb-8">
            <span className="bg-[linear-gradient(235deg,_#ECECEC,_#9DFF00)] bg-clip-text text-transparent font-bold">
              Our Agency
            </span>
            {" "}was born out of a desire to create lasting software solutions
            with{" "}
            <span className="bg-[linear-gradient(235deg,_#ECECEC,_#9DFF00)] bg-clip-text text-transparent font-bold">
              exceptional quality.
            </span>
          </h2>
          {/* <div className="w-full mt-8 space-y-5 text-[#ECECEC] leading-[2.1] tracking-[0.5px] text-[14px] md:text-[17px] font-normal">
            <p>
              We are a forward-thinking software development agency committed to building exceptional digital solutions that drive real business value.
            </p>
            <p>
              Our team thrives on innovation, collaboration, and continuous learning. We stay at the forefront of technology trends and best practices.
            </p>
            <p>
              We believe in creating an inclusive environment where talented developers can grow their careers while working on challenging projects that make a real impact.
            </p>
            <p>
              Join us to be part of a team that values technical excellence, creative problem-solving, and professional growth. We invest in our team's development through mentorship, training, and opportunities to work with cutting-edge technologies.
            </p>
          </div> */}
          <img src="/career.jpg" alt="Career Banner" className="w-full h-auto" />

            <div
              ref={jobsSectionRef}
              className={cn(
                "w-full mt-12 flex flex-col gap-4 transition-all duration-1000 ease-out transform",
                isJobsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              {Jobs.map((job, index) => (
                <JobItem
                  key={job.slug}
                  index={index}
                  title={job.title}
                  type={job.type}
                  slug={job.slug}
                />
              ))}
            </div>
        </div>
      </section>

      <section className="py-16 bg-[#01071A]">
        <CTASection />
      </section>
    </main>
  );
};

export default CareersPage;
