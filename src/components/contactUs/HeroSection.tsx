import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact-hero.png')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen top-16">
        <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-[821px]">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl lg:leading-[80px] font-normal text-white mb-6 lg:tracking-[-4px]">
              Get in Touch with
              <br />
              Vyoma Life Science
            </h1>

            {/* Description */}
            <p className="text-white/90 text-xl mb-5 max-w-[785px]">
              We're here to guide you with crop solutions, product support, and
              sustainable farming practices.
            </p>
          </div>
          <div className="flex flex-wrap gap-[30px] mb-[30px]">
            <div className="flex items-center gap-[5px]">
              <img
                src="/correct.png"
                alt="correct"
                className="h-[18px] w-[18px]"
              />
              <p className="text-sm text-white leading-[140%] font-medium">
                Farmer speaking on phone in field
              </p>
            </div>

            <div className="flex items-center gap-[5px]">
              <img
                src="/correct.png"
                alt="correct"
                className="h-[18px] w-[18px]"
              />
              <p className="text-sm text-white leading-[140%] font-medium">
                Nature + green blended background
              </p>
            </div>

            <div className="flex items-center gap-[5px]">
              <img
                src="/correct.png"
                alt="correct"
                className="h-[18px] w-[18px]"
              />
              <p className="text-sm text-white leading-[140%] font-medium">
                Product bottles subtly overlayed
              </p>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-4 justify-between">
            <div className="flex gap-4">
              <Link href="/how-to-use#video-player">
                <button className="px-6 py-3 bg-[#EABE0D] hover:bg-[#e5a612] text-white font-medium transition-colors">
                  Watch Demo Video
                </button>
              </Link>
            </div>

            <div className="flex gap-2 items-end text-white text-xl font-normal">
              <img src="/mouse.png" alt="explore more" className="w-6 h-6" />
              <span>Explore More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
