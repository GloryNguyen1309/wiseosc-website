"use client";

import { SectionBadge } from "@/components/section-badge";
import { WorkCard } from "@/components/work-card";
import { cn } from "@/lib/utils";
import { FolderIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export type Project = {
  id: string;
  category: string;
  title: string;
  client: string;
  completed: string;
  location: string;
  website: string;
  thumbnail: string;
  strategicFocus?: string;
  businessChallenge?: string;
  projectDescription: string;
  serviceProvided: string[];
  aiEngineering?: string[];
  dataEngineering?: string[];
  impactHighlights?: string[];
  techStack?: string[];
  images: {
    title: string;
    subtitle: string;
    url: string;
  }[];
};

export type ProjectResponse = {
  message: string;
  data: Array<Project>;
};

function WorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Fetch projects data from the API
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const projectResponse: ProjectResponse = await response.json();
        setProjects(projectResponse.data || []); // Ensure data is an array
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // if (!projects) {
  //   return (
  //     <section className="py-20 bg-[#0a1122] relative">
  //       <div className="container mx-auto px-4 text-center">
  //         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
  //           Loading projects...
  //         </h2>
  //       </div>
  //     </section>
  //   );
  // }

  // if (!projects.length) {
  //   return null;
  // }

  return (
    <section className="py-20 bg-[#0a1122] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={sectionRef}
          className={cn(
            "transition-all duration-1000 ease-out transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <SectionBadge icon={<FolderIcon size={18} />} text="Our Work" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <WorkCard
                image={project.thumbnail || "/placeholder.svg"}
                title={project.title}
                categories={project.category
                  .split(",")
                  .map((cat) => cat.trim())}
                link={`/work-detail/${project.id}`}
                delay={index * 150}
                key={project.title + index} // Ensure unique key
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
