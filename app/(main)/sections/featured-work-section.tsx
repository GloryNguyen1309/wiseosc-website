import { SectionBadge } from "@/components/section-badge";
import { WorkCard } from "@/components/work-card";
import { FolderIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const works = [
  {
    image: "https://placehold.co/600x400",
    title: "Orizon Web development",
    categories: ["Web Development", "Wireframe & Prototyping"],
    link: "/work/orizon",
    delay: 0,
  },
  {
    image: "https://placehold.co/600x400",
    title: "Arno Business Consulting",
    categories: ["Web Development", "API Integration", "Cloud Solutions"],
    link: "/work/arno",
    delay: 150,
  },
  {
    image: "https://placehold.co/600x400",
    title: "Palet Platform",
    categories: ["Full Stack Development", "User Research", "System Architecture"],
    link: "/work/palet",
    delay: 300,
  },
  {
    image: "https://placehold.co/600x400",
    title: "Hostinger Redesign",
    categories: ["Web Development", "UI/UX Design"],
    link: "/work/hostinger",
    delay: 450,
  },
  {
    image: "https://placehold.co/600x400",
    title: "Bluprint Design System",
    categories: ["Design System", "UI Components"],
    link: "/work/bluprint",
    delay: 600,
  },
  {
    image: "https://placehold.co/600x400",
    title: "Consulto Business Website",
    categories: ["Web Development", "SEO Optimization"],
    link: "/work/consulto",
    delay: 750,
  },
];

function FeaturedWorkSection() {
  return (
    <section className="py-24 bg-[#0a1122]">
      <div className="container mx-auto px-4">
        <SectionBadge icon={<FolderIcon size={18} />} text="Our Work" />

        <h2 className="text-4xl md:text-5xl font-bold mb-16 font-dm-sans">
          Our <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent">Achievements</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <WorkCard key={work.title} {...work} />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 transition mt-8"
          >
            View all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export default FeaturedWorkSection;
