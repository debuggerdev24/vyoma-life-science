"use client";

import React, { useRef, useState } from "react";

// Interface for research step data
export interface ResearchStep {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
}

// Interface for section header
export interface SectionHeader {
  subtitle: string;
  title: string;
  description: string;
}

const ResearchEvolution = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Section header data
  const headerData: SectionHeader = {
    subtitle: "Our Journey",
    title: "Our Evolution Through Research",
    description:
      "Turning agricultural challenges into breakthroughs through nature-based science and continuous innovation.",
  };

  // Research steps data
  const researchSteps: ResearchStep[] = [
    {
      id: 1,
      title: "The Problem",
      description:
        "Chemical farming gave quick results, but long-term soil, water, and farmer health were severely damaged. Over time, pests became resistant and the ecosystem weakened, making agriculture unsustainable.",
      image: "/problem.png",
      imageAlt: "problem",
    },
    {
      id: 2,
      title: "Research & Understanding",
      description:
        "Vyoma began researching Ayurvedic plant compounds and validating them through modern agricultural science. Years of lab studies and continuous field trials led to reliable, scalable herbal formulations.",
      image: "/understanding.png",
      imageAlt: "understanding",
    },
    {
      id: 3,
      title: "The Solution",
      description:
        "We developed plant-extract products that boost crop immunity and protect against diseases and pests naturally. They are residue-free, biodegradable, safe for farmers, and support healthy long-term crop growth.",
      image: "/solution.png",
      imageAlt: "solution",
    },
    {
      id: 4,
      title: "The Impact",
      description:
        "Farmers using Vyoma products reduce input costs and increase yield while cutting chemical dependency. Food becomes safer, soil recovers, pollinators return, and farming becomes sustainable for future generations.",
      image: "/Impact.png",
      imageAlt: "impact",
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full bg-[#F6F7F1]">
      <div className="flex flex-col mx-auto px-24 py-[110px] gap-[70px]">
        {/* Dynamic Header Section */}
        <div className="flex flex-col items-center text-center justify-center">
          <p className="text-[#0A0A0AB2] text-sm font-semibold">
            {headerData.subtitle}
          </p>
          <div className="text-[#0A0A0A] text-[56px] font-normal tracking-[-4px] leading-[65px]">
            {headerData.title}
          </div>
          <div className="text-[#0A0A0A]/60 text-sm font-normal mt-[10px]">
            {headerData.description}
          </div>
        </div>

        {/* Scrollable container */}
        <div className="max-w-[1512px] w-full mx-auto">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col gap-[10px] overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Dynamic numbered steps with connecting lines */}
            <div className="flex">
              {researchSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex justify-center items-center gap-[10px] ${
                    index === researchSteps.length - 1
                      ? "min-w-[366px] max-w-[366px]"
                      : "min-w-[400px] max-w-[400px]"
                  }`}
                >
                  <div className="flex justify-center items-center min-w-[61px] h-[61px] bg-[#EABE0D] mb-[10px] rounded-full text-center">
                    {step.id}
                  </div>
                  <div
                    className={`flex justify-center items-center text-center border-[#E5E7DE] w-[353px] h-[1px] border-[1px]  ${
                      index === researchSteps.length - 1 ? "" : "mr-2.5"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Dynamic content cards */}
            <div className="flex">
              {researchSteps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col min-w-[400px] max-w-[400px] pr-[34px]"
                >
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-[250px] mb-[10px]"
                  />
                  <div className="text-[#0A0A0A] text-[23px] font-medium leading-7">
                    {step.title}
                  </div>
                  <div className="text-[#0A0A0A]/60 text-base font-normal leading-[150%]">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchEvolution;
