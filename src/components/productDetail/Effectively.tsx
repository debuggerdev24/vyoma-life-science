"use client";

import React, { useRef, useState } from 'react'
import { ResearchStep, SectionHeader } from '../About/ResearchEvolution';

const Effectively = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Section header data
  const headerData: SectionHeader = {
    subtitle: "How to Use",
    title: "How to Use MITRA Effectively",
    description:
      "MITRA can be applied in multiple ways depending on crop condition and stage. Proper use ensures faster visible recovery, improved shoot growth, and long-lasting immunity against viral stress. Below is the complete application guide",
  };

  // Research steps data
  const researchSteps: ResearchStep[] = [
    {
      id: 1,
      title: "Foliar Spray Application",
      subtitle: "2–3 ml per 1 litre of clean water",
      description:
        "Apply during early viral symptoms or as a preventive spray every 10–12 days depending on disease pressure. For heavily infected crops, repeat after 7–8 days for stronger recovery response.",
      image: "/problem.png",
      imageAlt: "problem",
    },
    {
      id: 2,
      title: "Soil Drench Application",
      subtitle: "5–10 ml per 1 litre of water",
      description:
        "Apply during early viral symptoms or as a preventive spray every 10–12 days depending on disease pressure. For heavily infected crops, repeat after 7–8 days for stronger recovery response.",
      image: "/understanding.png",
      imageAlt: "understanding",
    },
    {
      id: 3,
      title: "Seed Treatment",
      subtitle: "2–3 ml per 1 litre of clean water",
      description:
        "Apply during early viral symptoms or as a preventive spray every 10–12 days depending on disease pressure.  For heavily infected crops, repeat after 7–8 days for stronger recovery response.",
      image: "/solution.png",
      imageAlt: "solution",
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
    <div className="w-full bg-[#F6F7F1] max-w-[1512px] mx-auto">
      <div className="flex flex-col mx-auto py-[110px] gap-[60px]">
        {/* Dynamic Header Section */}
        <div className="flex flex-col items-center text-center justify-center">
          <p className="text-[#0A0A0AB2] text-sm font-semibold">
            {headerData.subtitle}
          </p>
          <div className="text-[#0A0A0A] text-[56px] font-normal tracking-[-4px] leading-[65px]">
            {headerData.title}
          </div>
          
          <div className="text-[#0A0A0A]/60 max-w-[873px] text-sm font-normal mt-[10px]">
            {headerData.description}
          </div>
        </div>

        {/* Scrollable container */}
        <div className="max-w-[1512px] w-full mx-auto pl-24">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col gap-[10px] overflow-x-auto w-full scrollbar-hide cursor-grab active:cursor-grabbing select-none"
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
                  <div>
                    <div className="text-[#0A0A0A]/60 text-base font-normal leading-[150%] mb-[10px]">
                      {step.subtitle}
                    </div>
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
  )
};

export default Effectively