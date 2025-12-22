import React from "react";

const QuoteSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-hero.png')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center py-[110px] px-8">
        <div className="w-full max-w-[1512px] mx-auto">
          <div className="max-w-[1096px] text-center flex flex-col mx-auto">
            {/* Small Text Above Heading */}
            <p className="text-white/70 text-base font-semibold tracking-wide">
              Ready to Recover Your Crop Naturally?
            </p>

            {/* Main Heading */}
            <h1 className="text-[54px] leading-[70px] font-normal text-white mb-5 tracking-[-4px]">
              Get dosage guidance or consultation based on your crop and region.
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="px-6 py-3 bg-[#EABE0D] hover:bg-[#e5a612] text-white font-semibold text-sm transition-colors">
                Call / Whatsapp
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium text-sm transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
