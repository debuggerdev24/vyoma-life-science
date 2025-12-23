const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/heroImage.png')",
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
              Herbal Crop Protection for
              <br />
              Sustainable Farming.
            </h1>

            {/* Description */}
            <p className="text-white/90 text-xl mb-8 max-w-[785px]">
              Plant-extract based solutions that boost crop immunity, protect
              yields, and reduce dependency on harmful chemicals safe for
              farmers, soil, and the environment.
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-4 justify-between">
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#EABE0D] hover:bg-[#e5a612] text-white font-medium transition-colors">
                View Products
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium transition-colors">
                Talk to Our Expert
              </button>
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
