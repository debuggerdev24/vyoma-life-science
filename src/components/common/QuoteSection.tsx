import React from "react";
import Link from "next/link";

interface QuoteSectionProps {
  backgroundImage: string;
  subtitle: string;
  heading: string | React.ReactNode;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({
  backgroundImage,
  subtitle,
  heading,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
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
              {subtitle}
            </p>

            {/* Main Heading */}
            <h1 className="lg:text-[54px] text-3xl lg:leading-[70px] font-normal text-white mb-5 lg:tracking-[-4px]">
              {heading}
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {primaryButtonLink ? (
                <Link href={primaryButtonLink}>
                  <button className="px-6 py-3 bg-[#EABE0D] hover:bg-[#e5a612] text-white font-semibold text-sm transition-colors">
                    {primaryButtonText}
                  </button>
                </Link>
              ) : (
                <button className="px-6 py-3 bg-[#EABE0D] hover:bg-[#e5a612] text-white font-semibold text-sm transition-colors">
                  {primaryButtonText}
                </button>
              )}
              {secondaryButtonLink ? (
                <Link href={secondaryButtonLink}>
                  <button className="px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium text-sm transition-colors">
                    {secondaryButtonText}
                  </button>
                </Link>
              ) : (
                <button className="px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium text-sm transition-colors">
                  {secondaryButtonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
