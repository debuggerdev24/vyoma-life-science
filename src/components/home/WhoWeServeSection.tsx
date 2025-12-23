const WhoWeServeSection = () => {
  return (
    <section className="bg-[#F6F7F1] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-[1512px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-[110px] gap-8 md:gap-10 lg:gap-[50px]">
        {/* Background Image - Hidden on mobile */}
        <img
          className="absolute bottom-0 left-0 max-w-[300px] md:max-w-[350px] lg:max-w-[450px] hidden md:block"
          src="/wheat.png"
          alt=""
        />

        {/* Header Section */}
        <div className="flex flex-col min-w-fit">
          <div className="font-semibold text-sm">Who Can Use Our Products?</div>
          <h2 className="text-3xl md:text-4xl lg:text-[56px] leading-tight md:leading-snug lg:leading-[65px] text-[#0A0A0A]">
            Who We Serve
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-x-[31px] lg:gap-y-0 w-full">
          <div className="flex flex-col bg-white p-6 md:p-[30px] h-fit">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-5 md:mb-[29px]">
              <img src="/leaf.png" alt="Vegetables" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base mb-2">Vegetables</div>
            <div className="text-sm text-[#0A0A0A]">
              Tomato, chilli, brinjal, okra, cabbage, cauliflower, and many
              other vegetables supported.
            </div>
          </div>

          <div className="flex flex-col bg-white p-6 md:p-[30px] h-fit lg:mt-20">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-5 md:mb-[29px]">
              <img src="/apple.png" alt="Fruits" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base mb-2">Fruits</div>
            <div className="text-sm text-[#0A0A0A]">
              Grapes, mango, banana, pomegranate, citrus, watermelon, and
              multiple seasonal fruit crops.
            </div>
          </div>

          <div className="flex flex-col bg-white p-6 md:p-[30px] h-fit">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-5 md:mb-[29px]">
              <img src="/grains.png" alt="Grains" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base mb-2">Grains & Paddy</div>
            <div className="text-sm text-[#0A0A0A]">
              Wheat, rice, millets, and maize cultivated under diverse regional
              farming conditions.
            </div>
          </div>

          <div className="flex flex-col bg-white p-6 md:p-[30px] h-fit">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-5 md:mb-[29px]">
              <img src="/leaf.png" alt="Sugarcane" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base mb-2">Sugarcane</div>
            <div className="text-sm text-[#0A0A0A]">
              Improves sugarcane growth, strength, disease resistance, and
              overall field productivity consistently.
            </div>
          </div>

          <div className="flex flex-col bg-white p-6 md:p-[30px] h-fit lg:mt-20">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-5 md:mb-[29px]">
              <img src="/Flower.png" alt="Floriculture" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base mb-2">
              Horticulture & Floriculture
            </div>
            <div className="text-sm text-[#0A0A0A]">
              Rose, marigold, chrysanthemum, orchid, and flowering crops receive
              excellent protection naturally.
            </div>
          </div>

          <div className="flex flex-col bg-white p-6 md:p-[30px] h-fit">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-5 md:mb-[29px]">
              <img src="/leaf.png" alt="Plantation" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base mb-2">Plantation Crops</div>
            <div className="text-sm text-[#0A0A0A]">
              Tea, coffee, cocoa, and rubber plantations stay healthy with
              continuous immunity support.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
