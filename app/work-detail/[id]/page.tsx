"use client";
import { Medal } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import { CTASection } from "@/app/(main)/sections/cta-section";
import { Project, ProjectResponse } from "@/app/(main)/sections/work-section";
import { useParams } from "next/navigation";

function WorkDetail() {
  const { id } = useParams();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const projectResponse: ProjectResponse = await response.json();
        const project = projectResponse.data.find((item) => item.id === id);
        if (project) setSelectedProject(project);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, [id]);

  return (
    <section className="relative flex flex-col gap-[100px] overflow-hidden bg-gradient-to-b from-[#0a1635] to-[#01071A] text-white">
      <section className="flex min-h-screen flex-col justify-center gap-[120px]">
        <Container className="mt-[200px] w-full max-w-[1400px]">
          <div className="flex flex-col gap-2">
            <div className="inline-flex w-fit items-center rounded-full bg-[#0A1428] px-4">
              <Medal className="mr-2 h-5 w-5 text-yellow-400" />
              <span className="text-sm uppercase tracking-wider">
                {selectedProject?.category}
              </span>
            </div>

            <h1 className="text-6xl font-bold md:text-7xl">
              <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent">
                {selectedProject?.title.split(" ")[0]}
              </span>{" "}
              {selectedProject?.title.split(" ")[1]}
              <br />
              {selectedProject?.title.split(" ").slice(2).join(" ")}
            </h1>
          </div>
        </Container>

        <div className="flex flex-col gap-20">
          <div className="border-y">
            <Container className="grid w-full max-w-[1400px] grid-cols-1 border-gray-800 md:grid-cols-4">
              <div className="border-b border-gray-800 px-4 py-8 md:border-b-0 md:border-r">
                <div className="mb-1 text-gray-400">CLIENT</div>
                <div>{selectedProject?.client}</div>
              </div>
              <div className="border-b border-gray-800 px-4 py-8 md:border-b-0 md:border-r">
                <div className="mb-1 text-gray-400">COMPLETED</div>
                <div>{selectedProject?.completed}</div>
              </div>
              <div className="border-b border-gray-800 px-4 py-8 md:border-b-0 md:border-r">
                <div className="mb-1 text-gray-400">LOCATION</div>
                <div>{selectedProject?.location}</div>
              </div>
              <div className="px-4 py-8">
                <div className="mb-1 text-gray-400">WEBSITE</div>
                <div>{selectedProject?.website}</div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <Container className="flex w-full max-w-[1400px] flex-col gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">
            Project{" "}
            <span className="bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent">
              Description
            </span>
          </h2>
          <p className="max-w-5xl leading-relaxed text-gray-300">
            {selectedProject?.projectDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
          <div className="order-1 space-y-8">
            <div className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <div className="inline-flex w-fit items-center rounded-full bg-[#0A1428] px-4 py-2 text-xs uppercase tracking-wider text-cyan-300">
                Strategic Focus
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedProject?.strategicFocus || selectedProject?.category}
              </h3>
            </div>

            <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-bold text-white">The Business Challenge</h3>
              <p className="leading-relaxed text-gray-300">
                {selectedProject?.businessChallenge || selectedProject?.projectDescription}
              </p>
            </div>

            {selectedProject?.aiEngineering?.length ? (
              <div className="space-y-5 rounded-2xl border border-cyan-500/25 bg-[#061328] p-8">
                <h3 className="text-2xl font-bold text-white">
                  AI Engineering & Agentic Solutions
                </h3>
                <div className="space-y-3">
                  {selectedProject.aiEngineering.map((item, idx) => (
                    <p key={`ai-${idx}`} className="leading-relaxed text-gray-300">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}

            {selectedProject?.dataEngineering?.length ? (
              <div className="space-y-5 rounded-2xl border border-indigo-500/25 bg-[#101527] p-8">
                <h3 className="text-2xl font-bold text-white">
                  Data-intensive Software Development
                </h3>
                <div className="space-y-3">
                  {selectedProject.dataEngineering.map((item, idx) => (
                    <p key={`data-${idx}`} className="leading-relaxed text-gray-300">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-bold text-white">Services Provided</h3>
              <div className="space-y-3">
                {selectedProject?.serviceProvided.map((service, idx) => (
                  <p key={`service-${idx}`} className="leading-relaxed text-gray-300">
                    • {service}
                  </p>
                ))}
              </div>
            </div>

            {selectedProject?.impactHighlights?.length ? (
              <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-2xl font-bold text-white">Key Outcomes</h3>
                <div className="space-y-3">
                  {selectedProject.impactHighlights.map((item, idx) => (
                    <p key={`impact-${idx}`} className="leading-relaxed text-gray-300">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}

            {selectedProject?.techStack?.length ? (
              <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={`tech-${idx}`}
                      className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="order-2 space-y-6">
            {selectedProject?.images.map((image, idx) => (
              <div
                className="group relative overflow-hidden rounded-lg border border-white/10"
                key={`image-${idx}`}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  width={900}
                  height={600}
                  className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="h-[700px] w-full max-w-[1700px] bg-[#01071A] py-10">
        <CTASection />
      </Container>
    </section>
  );
}

export default WorkDetail;
