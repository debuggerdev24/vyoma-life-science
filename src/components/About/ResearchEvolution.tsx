"use client";

import React, { useRef, useState } from "react";

const ResearchEvolution = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
        <div className="flex flex-col items-center  text-center justify-center">
          <p className="text-[#0A0A0AB2] text-sm font-semibold">Our Journey</p>
          <div className="text-[#0A0A0A] text-[56px] font-normal tracking-[-4px] leading-[65px]">
            Our Evolution Through Research
          </div>
          <div className="text-[#0A0A0A]/60 text-sm font-normal mt-[10px]">
            Turning agricultural challenges into breakthroughs through
            nature-based science and continuous innovation.
          </div>
        </div>

        {/* scrollable container */}
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
          <div className="flex gap-[10px]">
            <div className="flex justify-center items-center gap-[10px] min-w-[424px]">
              <div className="flex justify-center items-center w-[61px] h-[61px] bg-[#EABE0D] mb-[10px] rounded-full text-center">
                1
              </div>

              <div className="flex justify-center items-center text-center border-[#E5E7DE] w-[353px] h-[1px] border-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-[10px] min-w-[424px]">
              <div className="flex justify-center items-center w-[61px] h-[61px] bg-[#EABE0D] mb-[10px] rounded-full text-center">
                2
              </div>

              <div className="flex justify-center items-center text-center border-[#E5E7DE] w-[353px] h-[1px] border-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-[10px] min-w-[424px]">
              <div className="flex justify-center items-center w-[61px] h-[61px] bg-[#EABE0D] mb-[10px] rounded-full text-center">
                3
              </div>

              <div className="flex justify-center items-center text-center border-[#E5E7DE] w-[353px] h-[1px] border-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-[10px] min-w-[400px]">
              <div className="flex justify-center items-center w-[61px] h-[61px] bg-[#EABE0D] mb-[10px] rounded-full text-center">
                4
              </div>

              <div className="flex justify-center items-center text-center border-[#E5E7DE] w-[353px] h-[1px] border-[1px]"></div>
            </div>
          </div>

          <div className="flex gap-[34px]">
            <div className="flex flex-col min-w-[400px]">
              <img
                src="/problem.png"
                alt="problem"
                className="w-[400px] h-[250px] mb-[10px]"
              />
              <div className="text-[#0A0A0A] text-[23px] font-medium leading-7 ">
                The Problem
              </div>
              <div className="text-[#0A0A0A]/60 text-base font-normal leading-[150%]">
                Chemical farming gave quick results, but long-term soil, water,
                and farmer health were severely damaged. Over time, pests became
                resistant and the ecosystem weakened, making agriculture
                unsustainable.
              </div>
            </div>

            <div className="flex flex-col min-w-[400px]">
              <img
                src="/understanding.png"
                alt="understanding"
                className="w-[400px] h-[250px] mb-[10px]"
              />
              <div className="text-[#0A0A0A] text-[23px] font-medium leading-7 ">
                Research & Understanding
              </div>
              <div className="text-[#0A0A0A]/60 text-base font-normal leading-[150%]">
                Vyoma began researching Ayurvedic plant compounds and validating
                them through modern agricultural science. Years of lab studies
                and continuous field trials led to reliable, scalable herbal
                formulations.
              </div>
            </div>

            <div className="flex flex-col min-w-[400px]">
              <img
                src="/solution.png"
                alt="solution"
                className="w-[400px] h-[250px] mb-[10px]"
              />
              <div className="text-[#0A0A0A] text-[23px] font-medium leading-7 ">
                The Solution
              </div>
              <div className="text-[#0A0A0A]/60 text-base font-normal leading-[150%]">
                We developed plant-extract products that boost crop immunity and
                protect against diseases and pests naturally. They are
                residue-free, biodegradable, safe for farmers, and support
                healthy long-term crop growth.
              </div>
            </div>

            <div className="flex flex-col min-w-[400px]">
              <img
                src="/Impact.png"
                alt="impact"
                className="w-[400px] h-[250px] mb-[10px]"
              />
              <div className="text-[#0A0A0A] text-[23px] font-medium leading-7 ">
                The Impact
              </div>
              <div className="text-[#0A0A0A]/60 text-base font-normal leading-[150%]">
                Farmers using Vyoma products reduce input costs and increase
                yield while cutting chemical dependency.  Food becomes safer,
                soil recovers, pollinators return, and farming becomes
                sustainable for future generations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchEvolution;
