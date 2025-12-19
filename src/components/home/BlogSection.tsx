const BlogSection = () => {
  return (
    <div className="w-full bg-[#F6F7F1] ">
      <div className="max-w-[1512px] mx-auto px-6 md:px-24 mb-[110px] ">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-[#0A0A0AB2] font-semibold text-sm">
            Latest Updates
          </div>
          <h2 className="text-[40px] font-light text-[#0A0A0A] mb-3">
            Farming Knowledge
          </h2>
          <p className="text-[#0A0A0A] text-sm opacity-60 max-w-[650px] mx-auto">
            Stay informed with research-backed articles on herbal agriculture,
            crop protection, and modern farming trends written to support
            farmers, dealers, and agri-professionals.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-[22px]">
              <img
                src="/farming1.png"
                alt="Reduce Chemical Dependency"
                className="w-[416px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-[#0A0A0A]/60 font-medium text-sm mb-[5px]">
              Crop Protection
            </div>
            <h3 className="text-[28px] font-medium text-[#0A0A0A] mb-[10px]">
              How to Reduce Chemical Dependency Without Yield Loss
            </h3>
            <p className="text-sm text-[#0A0A0A] opacity-60">
              Sep 2, 2025 • 2 Comments
            </p>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-[22px]">
              <img
                src="/farming2.png"
                alt="Viral Diseases in Crops"
                className="w-[416px] h-[390px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-[#0A0A0A]/60 font-medium text-sm mb-[5px]">
              Plant Health
            </div>
            <h3 className="text-[28px] font-medium text-[#0A0A0A] mb-[10px]">
              Viral Diseases in Crops: Early Symptoms and Quick Response Guide
            </h3>
            <p className="text-sm text-[#0A0A0A] opacity-60">
              Sep 2, 2025 • 2 Comments
            </p>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-[22px]">
              <img
                src="/farming3.png"
                alt="Increase Yield Naturally"
                className="w-[416px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-[#0A0A0A]/60 font-medium text-sm mb-[5px]">
              Growth & Yield
            </div>
            <h3 className="text-[28px] font-medium text-[#0A0A0A] mb-[10px]">
              Increase Yield Naturally: Growth Management Practices for All
              Crops
            </h3>
            <p className="text-sm text-[#0A0A0A] opacity-60">
              Sep 2, 2025 • 2 Comments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
