interface HeroSectionProps {
  backgroundImage: string;
  title: string | React.ReactNode;
  description: string;
  showExploreMore?: boolean;
  overlayOpacity?: string;
  minHeight?: string;
}

const HeroSection = ({
  backgroundImage,
  title,
  description,
  showExploreMore = true,
  overlayOpacity = "bg-black/30",
  minHeight = "min-h-screen",
}: HeroSectionProps) => {
  return (
    <div className={`relative ${minHeight} w-full overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 flex items-center ${minHeight} top-16`}>
        <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-[1024px]">
            {/* Main Heading */}
            <h1 className="lg:text-7xl text-5xl lg:leading-[80px] font-normal text-white mb-5 lg:tracking-[-4px]">
              {title}
            </h1>
          </div>
          <div className="w-full flex flex-wrap gap-4 justify-between">
            <div className="flex gap-4">
              {/* Description */}
              <p className="text-white/90 text-xl mb-8 max-w-[785px]">
                {description}
              </p>
            </div>

            {showExploreMore && (
              <div className="flex gap-2 items-center text-white text-xl font-normal">
                <img src="/mouse.png" alt="explore more" className="w-6 h-6" />
                <span>Explore More</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
