const ComparisonSection = () => {
  return (
    <section className="bg-[#F6F7F1] py-28">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-[1512px] mx-auto px-6 md:px-24 relative">
          {/* Wheat Illustration */}
          <img
            className="absolute top-20 left-0 max-w-[450px]"
            src="/wheat.png"
            alt=""
          />
          {/* Left Column - Why Move Beyond Chemicals */}
          <div className="flex flex-col relative">
            <p
              className="text-sm text-[#0A0A0AB2] 
              font-semibold"
            >
              Why Move Beyond Chemicals?
            </p>
            <h2 className="text-[56px] font-normal text-[#0A0A0A] leading-[64px] tracking-[-4px]">
              Chemical <br />
              Inputs vs Herbal Solutions
            </h2>
          </div>

          {/* Middle Column - The Problem with Chemical Farming */}
          <div className="bg-white p-[30px] rounded-lg max-w-[419px]">
            <h3 className="text-2xl font-medium text-[#0A0A0A] mb-[10px]">
              The Problem with Chemical Farming
            </h3>
            <p className="text-sm font-normal text-[#0A0A0A]/60 mb-[30px]">
              Chemicals in the field of farming are only for the management of
              pests and diseases.
            </p>

            <div className="mt-[30px]">
              <p className="text-base font-semibold text-[#0A0A0A] mb-[5px]">
                Problems / pain points
              </p>
              <ul className="font-normal text-sm text-[#0A0A0A]/60">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Direct health hazards to farmers: skin issues, headaches,
                    toxicity, and chronic illnesses
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Soil degradation leading to declining fertility and
                    biological activity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Water and air pollution from chemical runoff and spray drift
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Development of pest resistance due to repeated chemical
                    exposure
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Decline in pollinators, beneficial insects, birds, and
                    biodiversity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Higher long-term input dependency and rising production cost
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - The Power of Plant-Based Products */}
          <div className="bg-white p-[30px] rounded-lg max-w-[419px] mt-[80px]">
            <h3 className="text-2xl font-medium text-[#0A0A0A] mb-[10px]">
              The Power of Plant-Based Products
            </h3>
            <p className="text-sm font-normal text-[#0A0A0A]/60 mb-[30px]">
              Plant extracts have sustainable,safe, and biodegradable mode of
              action, making them ideal for sustainable agriculture.
            </p>

            <div className="mt-[30px]">
              <p className="text-base font-semibold text-[#0A0A0A] mb-[5px]">
                Advantages / benefits
              </p>
              <ul className="font-normal text-sm text-[#0A0A0A]/60">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Safe for farmers to handle and apply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Improves soil structure, microbial activity, and long-term
                    fertility
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Strengthens plant immunity to handle pests and diseases
                    naturally
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Enhances water retention and reduces soil stress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Enables residue-free food production that's safer for
                    consumers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Protects pollinators and supports biodiversity while
                    increasing yield
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
