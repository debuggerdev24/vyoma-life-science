"use client";

import React, { useState } from "react";

interface ResultData {
  id: number;
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const RealResult = () => {
  const resultsData: ResultData[] = [
    {
      id: 1,
      beforeImage: "/before.png",
      afterImage: "/after.png",
      title: "Papaya — Viral Suppression + Shoot Renewal",
      description:
        "Rapid recovery, restored shoot growth, visible immunity response",
    },
    {
      id: 2,
      beforeImage: "/before.png",
      afterImage: "/after.png",
      title: "Tomato — Leaf Curl Recovery & Growth",
      description:
        "Reduced curling, improved leaf health, stronger plant structure",
    },
    {
      id: 3,
      beforeImage: "/before.png",
      afterImage: "/after.png",
      title: "Chilli — Mosaic Control & Vigor Boost",
      description:
        "Minimized mosaic patterns, enhanced green color, better yields",
    },
    {
      id: 4,
      beforeImage: "/before.png",
      afterImage: "/after.png",
      title: "Cotton — Stunting Reversal & Health",
      description: "Improved height, uniform growth, reduced viral symptoms",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? resultsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === resultsData.length - 1 ? 0 : prev + 1));
  };

  const currentResult = resultsData[currentIndex];

  return (
    <div className="flex flex-col max-w-[1140px] mx-auto items-center py-12 md:py-16 lg:py-[110px] px-6 md:px-12">
      <p className="text-[#0A0A0AB2] font-semibold text-sm">Real Results</p>
      <div className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-[56px] font-normal lg:leading-[65px] text-center mb-8 md:mb-10 lg:mb-12">
        Real Results You Can See
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[60px] items-center text-base font-normal w-full">
        {/* Previous Button - Desktop Only */}
        <button
          onClick={handlePrevious}
          className="hidden md:flex min-w-[60px] h-[60px] bg-[#EABE0D] items-center justify-center rounded-full text-[#0A0A0A] hover:bg-[#d4af0c] transition-colors"
          aria-label="Previous result"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 w-full max-w-[900px] mx-auto h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]">
            <div className="overflow-hidden relative border border-[#EABE0D] border-2">
              <div className="bg-gradient-to-b from-transparent to-black from-50% to-100% absolute inset-0"></div>
              <img
                src={currentResult.beforeImage}
                className="h-full w-full object-cover "
                alt="before"
              />
              <div className="absolute bg-[#AF2B24] top-5 left-5 w-[68px] px-[10px] py-[9px] text-white text-center text-[12px] leading-3">
                BEFORE
              </div>
              <div className="w-full max-w-[80%] absolute bottom-5 left-5 right-8 text-xs md:text-base leading-[150%] text-white">
                Virus-infected leaves with curling, yellowing, and mosaic
                patterns.
              </div>
            </div>
            <div className="overflow-hidden relative border border-[#EABE0D] border-2">
              <div className="bg-gradient-to-b from-transparent to-black from-50% to-100% absolute inset-0"></div>
              <img
                src={currentResult.afterImage}
                className="h-full w-full object-cover"
                alt="after"
              />
              <div className="absolute bg-[#115526] top-5 left-5 w-[68px] px-[10px] py-[9px] text-white text-center text-[12px] leading-3">
                AFTER
              </div>
              <div className="w-full max-w-[80%] absolute bottom-5 left-5 right-8 text-xs md:text-base leading-[150%] text-white">
                New leaves emerged green and healthy within 10–15 days after
                MITRA application.
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center gap-[5px] mt-4 md:mt-5 px-4">
            <div className="text-[#0A0A0A] text-lg md:text-xl lg:text-2xl leading-tight md:leading-[30px] font-medium">
              {currentResult.title}
            </div>
            <div className="text-[#0A0A0A]/60 text-xs font-normal leading-[150%]">
              {currentResult.description}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={handlePrevious}
              className="min-w-[50px] h-[50px] bg-[#EABE0D] flex items-center justify-center rounded-full text-[#0A0A0A] hover:bg-[#d4af0c] transition-colors"
              aria-label="Previous result"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="min-w-[50px] h-[50px] bg-[#EABE0D] flex items-center justify-center rounded-full text-[#0A0A0A] hover:bg-[#d4af0c] transition-colors"
              aria-label="Next result"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Next Button - Desktop Only */}
        <button
          onClick={handleNext}
          className="hidden md:flex min-w-[60px] h-[60px] bg-[#EABE0D] items-center justify-center rounded-full text-[#0A0A0A] hover:bg-[#d4af0c] transition-colors"
          aria-label="Next result"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RealResult;
