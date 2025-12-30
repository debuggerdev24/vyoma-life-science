import React from "react";

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  howToUse: string[];
  whatToExpect: string[];
  imagePosition?: "left" | "right";
}

export interface StepsProps {
  sectionLabel: string;
  title: string;
  subtitle?: string;
  steps: StepItem[];
  bgColor?: string;
  containerClasses?: string;
}

const Steps = ({
  sectionLabel,
  title,
  subtitle,
  steps,
  bgColor = "bg-[#F6F7F1]",
  containerClasses = "relative max-w-[1512px] mx-auto px-6 md:px-24 py-[60px] md:py-[110px]",
}: StepsProps) => {
  return (
    <section className={bgColor}>
      <div className={containerClasses}>
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-[60px]">
          <p className="text-sm font-semibold text-[#0A0A0AB2] mb-2">
            {sectionLabel}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] tracking-[-4px] lg:leading-[65px] font-light md:font-normal text-gray-900 leading-tight mb-[10px]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#0A0A0A]/60 font-normal text-base max-w-[785px]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col gap-[50px]">
          {steps.map((step, index) => {
            const ImageComponent = (
              <div className="relative h-full w-full">
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="w-full h-full h-[580px] object-cover"
                />
              </div>
            );

            const ContentComponent = (
              <div className="flex flex-col h-full justify-center">
                {/* Step Number Badge */}
                <div className="w-[50px] h-[50px] bg-[#EABE0D] rounded-full flex items-center justify-center mb-5">
                  <span className="text-black text-xl font-semibold">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title and Description */}
                <h3 className="text-[23px] leading-7 font-medium text-[#0A0A0A] mb-[5px]">
                  {step.title}
                </h3>
                <p className="text-[#0A0A0A]/60 font-normal text-base mb-5 leading-[150%]">
                  {step.description}
                </p>

                {/* How to Use Section */}
                <div className="mb-5">
                  <h4 className="text-base font-semibold text-[#0A0A0A] mb-[5px]">
                    How to Use:
                  </h4>
                  <ul className="flex flex-col gap-[5px]">
                    {step.howToUse.map((instruction, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <img
                          src="/correct.png"
                          alt="checkmark"
                          className="h-[18px] w-[18px] mt-0.5 flex-shrink-0"
                        />
                        <span className="text-[#0A0A0A] text-sm font-normal leading-[140%]">
                          {instruction}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Expect Section */}
                <div>
                  <h4 className="text-base font-semibold text-[#0A0A0A] mb-[5px]">
                    What to Expect:
                  </h4>
                  <ul className="flex flex-col gap-[5px]">
                    {step.whatToExpect.map((expectation, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0A0A0A] text-base flex-shrink-0">
                          •
                        </span>
                        <span className="text-[#0A0A0A]/80 text-sm font-normal leading-[140%]">
                          {expectation}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );

            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[50px] items-start  rounded-lg"
              >
                {step.imagePosition === "right" ? (
                  <>
                    {ContentComponent}
                    {ImageComponent}
                  </>
                ) : (
                  <>
                    {ImageComponent}
                    {ContentComponent}
                  </>
                )}
              </div>
            );
          })}
        </div>
        <img
          src="/wheat4.png"
          alt="wheat"
          className="absolute bottom-0 right-0 h-[399px] w-[296px]"
        />
      </div>
    </section>
  );
};

export default Steps;
