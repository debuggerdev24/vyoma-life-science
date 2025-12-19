const WhoWeServeSection = () => {
  return (
    <section className="bg-[#F6F7F1]">
      <div className="flex relative max-w-[1512px] mx-auto px-6 md:px-24 py-[110px] gap-[50px]">
        <img
          className="absolute bottom-0 left-0 max-w-[450px]"
          src="/wheat.png"
          alt=""
        />
        <div className="flex flex-col min-w-fit">
          <div className="font-semibold text-sm">Who Can Use Our Products?</div>
          <h2 className="text-[56px] leading-[65px] text-[#0A0A0A]">
            Who We Serve
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-x-[31px]">
          <div className="flex flex-col bg-white p-[30px] h-fit">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-[29px]">
              <img src="/leaf.png" alt="Vegetables" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base">Vegetables</div>
            <div className="text-sm text-[#0A0A0A]">
              Tomato, chilli, brinjal, okra, cabbage, cauliflower, and many
              other vegetables supported.
            </div>
          </div>

          <div className="flex flex-col bg-white p-[30px] h-fit  mt-20">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-[29px]">
              <img src="/apple.png" alt="Vegetables" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base">Fruits</div>
            <div className="text-sm text-[#0A0A0A]">
              Grapes, mango, banana, pomegranate, citrus, watermelon, and
              multiple seasonal fruit crops.
            </div>
          </div>

          <div className="flex flex-col bg-white p-[30px] h-fit ">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-[29px]">
              <img src="/grains.png" alt="Vegetables" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base">Grains & Paddy</div>
            <div className="text-sm text-[#0A0A0A]">
              Wheat, rice, millets, and maize cultivated under diverse regional
              farming conditions.
            </div>
          </div>

          <div className="flex flex-col bg-white p-[30px] h-fit ">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-[29px]">
              <img src="/leaf.png" alt="Vegetables" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base">Sugarcane</div>
            <div className="text-sm text-[#0A0A0A]">
              Improves sugarcane growth, strength, disease resistance, and
              overall field productivity consistently.
            </div>
          </div>

          <div className="flex flex-col bg-white p-[30px] h-fit  mt-20">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-[29px]">
              <img src="/flower.png" alt="Vegetables" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base">
              {" "}
              Horticulture & Floriculture
            </div>
            <div className="text-sm text-[#0A0A0A]">
              Rose, marigold, chrysanthemum, orchid, and flowering crops receive
              excellent protection naturally.
            </div>
          </div>

          <div className="flex flex-col bg-white p-[30px] h-fit ">
            <div className="bg-[#1F4E3D] p-[10px] w-fit mb-[29px]">
              <img src="/leaf.png" alt="Vegetables" className="w-10 h-10" />
            </div>
            <div className="font-semibold text-base">Plantation Crops</div>
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
