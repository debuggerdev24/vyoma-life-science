interface AboutSectionProps {
  tag: string;
  title: string | React.ReactNode;
  paragraphs: string[];
  buttonText?: string;
  showButton?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  tag,
  title,
  paragraphs,
  buttonText = "Explore More",
  showButton = true,
}) => {
  return (
    <section className="bg-white py-14 lg:py-[110px]">
      <div className="max-w-[1512px] mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <p className="text-sm font-semibold text-[#0A0A0AB2] leading-[140%]">
              {tag}
            </p>
            <h2 className="text-4xl md:text-[56px] lg:leading-[65px] lg:tracking-[-4%] font-medium text-[#0A0A0A] ">
              {title}
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[#0A0A0A] text-xl font-normal">
                {paragraph}
              </p>
            ))}

            {showButton && (
              <button className="inline-flex items-center text-[#0A0A0A] font-semibold pt-[50px] text-base hover:text-gray-700 transition-colors">
                {buttonText}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
