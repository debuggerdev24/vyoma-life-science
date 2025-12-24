import React from "react";

export interface CropUsageItem {
  icon: string;
  cropName: string;
  description: string;
  cycleFrequency: string;
  bestStageToUse: string;
  expectedBenefit: string;
}

export interface CropUsageProps {
  sectionLabel?: string;
  title?: string;
  subtitle?: string;
  crops: CropUsageItem[];
  bgColor?: string;
}

const CropUsage = ({
  sectionLabel = "Application Examples",
  title = "Crop Usage",
  subtitle = "See how to apply our products across different crops, including spray intervals, ideal timings, and expected results based on real field experiences.",
  crops,
  bgColor = "bg-white",
}: CropUsageProps) => {
  return (
    <section className={`flex flex-col max-w-[1512px] mx-auto items-center px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-[110px] ${bgColor}`}>
      {/* Header Section */}
      <div className="text-center mb-10 md:mb-12 lg:mb-[60px]">
        <p className="text-[#0A0A0AB2] text-sm font-semibold leading-[150%]">
          {sectionLabel}
        </p>
        <h2 className="text-[#0A0A0A] font-normal text-3xl md:text-4xl lg:text-[56px] leading-tight md:leading-snug lg:leading-[65px] mb-[10px]">
          {title}
        </h2>
        <p className="text-[#0A0A0A]/60 text-sm md:text-base font-normal leading-[150%] max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Crop Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-9 w-full">
        {crops.map((crop, index) => (
          <div key={index} className="bg-[#1F4E3D] p-6 md:p-[30px] flex flex-col">
            {/* Icon and Crop Name */}
            <div className="flex items-center gap-[11px] mb-3 md:mb-4">
              <div className="bg-[#EABE0D] h-[50px] w-[50px] flex items-center justify-center flex-shrink-0">
                <img src={crop.icon} alt={crop.cropName} className="w-[30px] h-[30px]" />
              </div>
              <h3 className="text-white text-[23px] leading-7 font-medium">
                {crop.cropName}
              </h3>
            </div>

            {/* Description */}
            <p className="text-white/60 text-sm leading-[150%] mb-[10px]">
              {crop.description}
            </p>

            {/* Cycle / Frequency */}
            <div className="mb-[10px]">
              <h4 className="text-white text-sm font-medium">
                Cycle / Frequency
              </h4>
              <p className="text-white/60 text-sm font-normal leading-[150%]">
                {crop.cycleFrequency}
              </p>
            </div>

            {/* Best Stage to Use */}
            <div className="mb-[10px]">
              <h4 className="text-white text-sm font-medium mb-1">
                Best Stage to Use
              </h4>
              <p className="text-white/60 text-sm font-normal leading-[150%]">
                {crop.bestStageToUse}
              </p>
            </div>

            {/* Expected Benefit */}
            <div>
              <h4 className="text-white text-sm font-medium mb-1">
                Expected Benefit
              </h4>
              <p className="text-white/60 text-sm font-normal leading-[150%]">
                {crop.expectedBenefit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CropUsage;