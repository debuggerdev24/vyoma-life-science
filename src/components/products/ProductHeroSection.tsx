const ProductHeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/product-hero.png')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen -top-24 left-14">
        <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="flex flex-col items-center max-w-[1096px] text-center">
            {/* Main Heading */}
            <h1 className="text-7xl leading-[80px] font-normal text-white mb-[10px] tracking-[-4px]">
              Our Botanical Extracts Crop
              <br />
              Protection Range
            </h1>

            {/* Description */}
            <p className="text-white/90 text-xl max-w-[744px] text-center">
              Scientifically formulated plant-extract solutions designed to
              strengthen crops naturally without chemical residue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeroSection;
