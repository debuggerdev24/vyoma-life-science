import Button from "@/components/Button";
import {
  CheckCircle,
  Leaf,
  Shield,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
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
          <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 py-20">
            <div className="max-w-[821px]">
              {/* Main Heading */}
              <h1 className="text-7xl leading-[80px] font-normal text-white mb-6 tracking-[-4px]">
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
                <button className="px-6 py-3 bg-[#FDB714] hover:bg-[#e5a612] text-white font-medium rounded transition-colors">
                  View Products
                </button>
                <button className="px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded transition-colors">
                  Talk to Our Expert
                </button>
              </div>

              <div className="flex gap-2 items-center text-white text-xl font-normal">
                <img src="/mouse.png" alt="explore more" className="w-6 h-6" />
                <span>Explore More</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
        </div>
      </div>

      {/* Logos Section */}
      <section className="bg-white flex border-b border-[#E5E7DE] w-full mx-auto justify-center">
        <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
          <img className="h-20 w-full" src="/cargill.png" alt="Cargill" />
        </div>
        <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
          <img className="h-20 w-full" src="/syngenta.png" alt="Syngenta" />
        </div>

        <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
          <img src="/corteva.png" className="h-20 w-full" alt="Corteva" />
        </div>
        <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
          <img src="/cf.png" className="h-20 w-full" alt="CF" />
        </div>
        <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
          <img src="/vital.png" className="h-20 w-full" alt="vital" />
        </div>
        <div className="px-[30px] py-[60px] ">
          <img
            src="/LouisDreyfus.png"
            className="h-20 w-full"
            alt="Louis Dreyfus"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1512px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <p className="text-sm font-semibold text-[#0A0A0AB2] uppercase tracking-wide mb-4">
                About Vyoma Life Sciences
              </p>
              <h2 className="text-4xl md:text-5xl font-medium text-[#0A0A0A] ">
                Innovating the Future
                <br />
                of Agriculture
              </h2>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <p className="text-[#0A0A0A] text-xl font-normal">
                Vyoma Life Sciences develops plant-extract-based alternatives to
                conventional chemicals used in agriculture and in daily-use
                hygiene and healthcare products. The company was born out of a
                simple idea: chemicals that are in direct contact with humans,
                animals, and soil shouldn't slowly destroy their immunity and
                the environment around them.
              </p>

              <p className="text-[#0A0A0A] text-xl font-normal">
                At the heart of Vyoma's work is research and innovation. Using
                cutting-edge technologies in plant extraction, they develop
                unique alternatives that address emerging pests and diseases,
                and can be adapted as new challenges appear in the field.
              </p>

              <button className="inline-flex items-center text-[#0A0A0A] font-semibold pt-[50px] text-base hover:text-gray-700 transition-colors">
                Explore More
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-28 max-w-[1512px]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div>
              <p className="text-base font-normal text-[#0A0A0A] mb-[15px]">
                Cost Reduction
              </p>
              <p className="text-[70px] font-medium text-[##0A0A0A] mb-[2px] leading-[80px] tracking-[-2px]">
                25-30%
              </p>
              <p className="text-base font-normal text-[#0A0A0A]/60">
                Lower input costs vs traditional methods
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <p className="text-base font-normal text-[#0A0A0A] mb-[15px]">
                Yield Improvement
              </p>
              <p className="text-[70px] font-medium text-[##0A0A0A] mb-[2px] leading-[80px] tracking-[-2px]">
                10-15%
              </p>
              <p className="text-base font-normal text-[#0A0A0A]/60">
                Better plant immunity and growth lead to higher overall yield.
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <p className="text-base font-normal text-[#0A0A0A] mb-[15px]">
                Product Range
              </p>
              <p className="text-[70px] font-medium text-[##0A0A0A] mb-[2px] leading-[80px] tracking-[-2px]">
                04
              </p>
              <p className="text-base font-normal text-[#0A0A0A]/60">
                Four herbal solutions for viruses, fungi, pests, growth.
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <p className="text-base font-normal text-[#0A0A0A] mb-[15px]">
                Crop Coverage
              </p>
              <p className="text-[70px] font-medium text-[##0A0A0A] mb-[2px] leading-[80px] tracking-[-2px]">
                All Crops
              </p>
              <p className="text-base font-normal text-[#0A0A0A]/60">
                Works effectively across vegetables, fruits, grains, and paddy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical vs Herbal Comparison Section */}
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
                      Water and air pollution from chemical runoff and spray
                      drift
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
                      Higher long-term input dependency and rising production
                      cost
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
                    <span>
                      Enhances water retention and reduces soil stress
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>
                      Enables residue-free food production that’s safer for
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

      {/* What We Stand For Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1512px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <img
                src="/farmer.png"
                alt="Farmer in field"
                className="w-[621px] h-[826px] rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div className="">
              <p className="text-sm font-semibold text-[#0A0A0AB2]  ">
                Our Vision
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-[5px]">
                What We Stand For
              </h2>
              <p className="text-[#0A0A0A]/60 font-normal text-base mb-[50px]">
                Vyoma Life Sciences is committed to developing solutions
                designed with herbal crop protection that supports farmers, soil
                health, consumers, and the environment.
              </p>

              {/* Values List */}
              <div className="space-y-6">
                {/* Value 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-[60px] h-[60px] bg-[#EABE0D] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="/recycle.png"
                      alt="Crop Protection"
                      className="h-[30px] w-[30px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Sustainable Crop Protection
                    </h3>
                    <p className="text-base font-normal text-[#0A0A0A]/60 leading-relaxed">
                      We aim to replace chemical pesticides by empowering
                      farmers with herbal solutions that protect crops without
                      harming soil fertility or health.
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-[60px] h-[60px] bg-[#EABE0D] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-[30px] h-[30px] text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Environmental & Animal Safety
                    </h3>
                    <p className="text-base font-normal text-[#0A0A0A]/60">
                      Our plant-based formulations protect crops while
                      preserving groundwater, pollinators, beneficial insects,
                      livestock, and ecological balance.
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-[60px] h-[60px] bg-[#EABE0D] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="/plant.png"
                      alt="Plant"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Residue-Free Food Production
                    </h3>
                    <p className="text-base font-normal text-[#0A0A0A]/60">
                      We envision a farming ecosystem where food is clean and
                      managed naturally, providing safer produce free of toxic
                      residues for consumers.
                    </p>
                  </div>
                </div>

                {/* Value 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-[60px] h-[60px] bg-[#EABE0D] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="/heart.png"
                      alt="heart"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Standing Unique
                    </h3>
                    <p className="text-base font-normal text-[#0A0A0A]/60">
                      Farmers, peers, animals, and people deserve safety: our
                      products are designed to sustain life, not to disrupt it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-[#F6F7F1]">
        <div className="flex relative max-w-[1512px] mx-auto px-6 md:px-24 py-[110px] gap-[65px]">
          <img
            className="absolute bottom-0 left-0 max-w-[450px]"
            src="/wheat.png"
            alt=""
          />
          <div className="flex flex-col min-w-fit">
            <div className="font-semibold text-sm">
              Who Can Use Our Products?
            </div>
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
                Wheat, rice, millets, and maize cultivated under diverse
                regional farming conditions.
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
                Rose, marigold, chrysanthemum, orchid, and flowering crops
                receive excellent protection naturally.
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

      {/* Our Products */}
      <section className="bg-white">
        <div className="grid grid-cols-2 max-w-[1512px] mx-auto px-6 md:px-24 py-[110px] gap-[65px]">
          <div className="flex flex-col min-w-fit">
            <div className="font-semibold text-base text-[#0A0A0AB2]">
              Who We Support
            </div>
            <h2 className="text-[56px] leading-[65px] font-normal text-[#0A0A0A]">
              Who Benefits From Our Solutions
            </h2>
            <div className="flex flex-col gap-10 mt-[60px]">
              {/* Value 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div className="mt-[11px]">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Farmers Big Economic Advantage
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-base font-normal text-[#0A0A0A]/60">
                    <li>Reduce input cost by 25–30% per acre</li>
                    <li>Achieve 10–15% increase in yield</li>
                    <li>Safer handling and a healthier farming environment</li>
                  </ul>
                </div>
              </div>

              {/* Value 2 */}
              <div className="flex  items-start gap-4">
                <div className="w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div className="mt-[11px]">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Agri-Input Dealers / Retailers
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-base font-normal text-[#0A0A0A]/60">
                    <li>
                      Can offer clean, herbal alternatives alongside chemical
                      portfolios
                    </li>
                    <li>
                      Higher repeat demand because products improve farm
                      performance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Value 3 */}
              <div className="flex  items-start gap-4">
                <div className="w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div className="mt-[11px]">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    FPOs & Farmer Cooperatives
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-base font-normal text-[#0A0A0A]/60">
                    <li>
                      Suitable for group farming programs and organic/natural
                      initiatives
                    </li>
                    <li>
                      Enables farmers to transition safely from chemical
                      dependency
                    </li>
                  </ul>
                </div>
              </div>

              {/* Value 4 */}
              <div className="flex  items-start gap-4">
                <div className="w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div className="mt-[11px]">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Institutions, NGOs & Sustainable Farming Projects
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-base font-normal text-[#0A0A0A]/60">
                    <li>
                      Ideal for programs promoting residue-free agriculture,
                      regenerative farming, and soil health restoration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/farmer2.png"
              alt="farmer"
              className="h-[922px] w-[621px]"
            />
          </div>
        </div>
      </section>

      {/* Botanical Extracts Crop Protection Range */}
      <section className="bg-[#F6F7F1]">
        <div className="flex relative max-w-[1512px] mx-auto px-6 md:px-24 py-[110px] gap-[65px]">
          <img
            className="absolute bottom-1/3 left-0 max-w-[450px]"
            src="/wheat.png"
            alt=""
          />
          <img
            className="absolute bottom-1/3 right-0 max-w-[450px]"
            src="/wheat-flip.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <div className="font-semibold text-sm text-[#0A0A0AB2]">
              Our Products
            </div>
            <div className="text-[56px]">
              Botanical Extracts Crop Protection Range
            </div>
            <div className="flex text-center text-[#0A0A0A]/60 text-sm font-normal max-w-[650px] mt-[10px]">
              A curated range of four scientifically developed herbal
              formulations designed to boost plant immunity, support growth, and
              protect crops from diseases and pests safely and sustainably.
            </div>
            <div className="grid grid-cols-4 z-10 mt-[70px] gap-9">
              <div className="flex flex-col bg-white">
                <img className="" src="/mitra.png" alt="mitra" />
                <div className=" flex flex-col p-[30px] h-full">
                  <p className="text-[24px] font-medium text-[#0A0A0A]">
                    MITRA
                  </p>
                  <p className="text-[#0a0a0aa2] text-sm">
                    Viral Immunity Booster
                  </p>
                  <div className="flex gap-[5px] mt-[30px]">
                    <div className="bg-[#AF2B24]/10 px-[7px] py-1 text-[#AF2B24] text-[8px] font-semibold">
                      Viral Diseases
                    </div>
                    <div className="bg-[#AF2B24]/10 px-[7px] py-1 text-[#AF2B24] text-[8px] font-semibold">
                      Preventive & Curative
                    </div>
                  </div>
                  <div className="text-xs text-[#0a0a0aa2] mt-[10px] mb-[50px]">
                    Strengthens internal plant immunity, suppresses viral
                    multiplication, improves leaf health and vegetative growth,
                    and prevents major viral outbreaks across multiple crops
                    consistently.
                  </div>
                  <div className="flex w-full bg-[#1F4E3D] text-white text-sm font-semibold justify-center items-center mt-auto py-[15px] hover:cursor-pointer">
                    know more
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-white">
                <img className="" src="/arka.png" alt="arka" />
                <div className=" flex flex-col p-[30px] h-full">
                  <p className="text-[24px] font-medium text-[#0A0A0A]">ARKA</p>
                  <p className="text-[#0a0a0aa2] text-sm">
                    Fungal & Bacterial Immunity Booster
                  </p>
                  <div className="flex gap-[5px] mt-[30px]">
                    <div className="bg-[#115526]/10 px-[7px] py-1 text-[#115526] text-[8px] font-semibold">
                      Seed
                    </div>
                    <div className="bg-[#115526]/10 px-[7px] py-1 text-[#115526] text-[8px] font-semibold">
                      Soil
                    </div>
                    <div className="bg-[#115526]/10 px-[7px] py-1 text-[#115526] text-[8px] font-semibold">
                      Foliar
                    </div>
                  </div>
                  <div className="text-xs text-[#0a0a0aa2] mt-[10px] mb-[50px]">
                    Provides broad protection against fungal and bacterial
                    pathogens, improving root strength, chlorophyll development,
                    water absorption, and long-term resistance for healthier
                    crops.
                  </div>
                  <div className="flex w-full bg-[#1F4E3D] text-white text-sm font-semibold justify-center items-center mt-auto py-[15px] hover:cursor-pointer">
                    know more
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-white">
                <img className="" src="/jiva.png" alt="arka" />
                <div className=" flex flex-col p-[30px] h-full">
                  <p className="text-[24px] font-medium text-[#0A0A0A]">JIVA</p>
                  <p className="text-[#0a0a0aa2] text-sm">
                    Growth Promoter & Immunity Booster
                  </p>
                  <div className="flex gap-[5px] mt-[30px]">
                    <div className="bg-[#B48E1C]/10 px-[7px] py-1 text-[#B48E1C] text-[8px] font-semibold">
                      Growth & Yield
                    </div>
                  </div>
                  <div className="text-xs text-[#0a0a0aa2] mt-[10px] mb-[50px]">
                    Boosts nutrient metabolism, encourages flowering and fruit
                    set, reduces flower drop, enhances soil vitality, and
                    supports increased crop yield with natural growth
                    stimulation.
                  </div>
                  <div className="flex w-full bg-[#1F4E3D] text-white text-sm font-semibold justify-center items-center mt-auto py-[15px] hover:cursor-pointer">
                    know more
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-white">
                <img className="" src="/arka.png" alt="arka" />
                <div className=" flex flex-col p-[30px] h-full">
                  <p className="text-[24px] font-medium text-[#0A0A0A]">
                    RUDRA
                  </p>
                  <p className="text-[#0a0a0aa2] text-sm">
                    Plant Protector Against Pests
                  </p>
                  <div className="flex gap-[5px] mt-[30px]">
                    <div className="bg-[#1F5571]/10 px-[7px] py-1 text-[#1F5571] text-[8px] font-semibold">
                      Pest Control
                    </div>
                  </div>
                  <div className="text-xs text-[#0a0a0aa2] mt-[10px] mb-[50px]">
                    Controls sucking pests, flying insects, and larvae through
                    natural multi-mode action, protecting plants without harming
                    pollinators and supporting residue-free food production.
                  </div>
                  <div className="flex w-full bg-[#1F4E3D] text-white text-sm font-semibold justify-center items-center mt-auto py-[15px] hover:cursor-pointer">
                    know more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Sustainability */}
      <section className="bg-white">
        <div className="grid grid-cols-2 max-w-[1512px] mx-auto px-6 md:px-24 py-[110px] gap-[65px]">
          <div>
            <img
              src="/farmer3.png"
              alt="farmer"
              className="h-[922px] w-[621px]"
            />
          </div>
          <div className="flex flex-col min-w-fit">
            <div className="font-semibold text-sm text-[#0A0A0AB2]">
              Botanical Extracts Innovation Lab
            </div>
            <h2 className="text-[56px] leading-[65px] text-[#0A0A0A] tracking-[-4px]">
              Innovation & Sustainability
            </h2>
            <div className="text-[#0A0A0A]/60 text-base font-normal">
              We combine Ayurvedic wisdom with modern research to create
              science-backed herbal crop protection solutions that are safe,
              effective, and future-ready.
            </div>
            <div className="flex flex-col gap-10 mt-[60px]">
              {/* Value 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0 p-[15px]">
                  <img
                    src="/research.png"
                    className="h-[30px] w-[30px]"
                    alt="research"
                  />
                </div>
                <div className="mt-[11px]">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Continuous Research
                  </h3>
                  <div className="list-disc list-inside space-y-1 text-base font-normal text-[#0A0A0A]/60">
                    We constantly improve and refine formulations using updated
                    agricultural research, extensive crop trials, and continuous
                    farmer feedback from real field conditions.
                  </div>
                </div>
              </div>

              {/* Value 2 */}
              <div className="flex  items-start gap-4">
                <div className="bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0 p-[15px]">
                  <img
                    src="/bulb.png"
                    className="h-[30px] w-[30px]"
                    alt="Innovation-Driven"
                  />
                </div>
                <div className="mt-[11px]">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Innovation-Driven
                  </h3>
                  <div className="list-disc list-inside space-y-1 text-base font-normal text-[#0A0A0A]/60">
                    Our R&D team actively tracks new diseases, pests, and farm
                    stress patterns, creating customized herbal remedies for
                    emerging agricultural challenges effectively.
                  </div>
                </div>
              </div>

              {/* Value 3 */}
              <div className="flex  items-start gap-4">
                <div className="bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0 p-[15px]">
                  <img
                    src="/tube.png"
                    className="h-[30px] w-[30px]"
                    alt="Science-Backed Solutions"
                  />
                </div>
                <div className="mt-[11px]">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Science-Backed Solutions
                  </h3>
                  <div className="list-disc list-inside space-y-1 text-base font-normal text-[#0A0A0A]/60">
                    Every product undergoes scientific validation, combining
                    Ayurvedic knowledge with modern agricultural science to
                    ensure reliable, consistent, and high-performance results
                    across crops.
                  </div>
                </div>
              </div>

              {/* Value 4 */}
              <div className="flex  items-start gap-4">
                <div className="bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0 p-[15px]">
                  <img
                    src="/leaf2.png"
                    className="h-[30px] w-[30px]"
                    alt="Standing Unique"
                  />
                </div>
                <div className="mt-[11px]">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Standing Unique
                  </h3>
                  <div className="list-disc list-inside space-y-1 text-base font-normal text-[#0A0A0A]/60">
                    We specialize in custom, problem-specific herbal solutions
                    that support sustainable farming, reduce chemical
                    dependency, and deliver long-term ecological safety
                    benefits.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[850px] px-2 mx-auto">
          <div className="text-[47px] leading-[50px] text-[#0A0A0A]">
            Yield Boost
          </div>
          <div className="text-center text-[23px] font-normal mt-5 text-[#0A0A0ACC]">
            “JIVA improved flowering and fruit holding dramatically. Flower drop
            reduced, fruit size increased, and yield was noticeably higher in
            our tomato farm compared to last season.”
          </div>
          <div className="flex flex-col items-center mb-[5px] mt-[45px]">
            <img
              src="/LucasBennett.png"
              alt="Lucas Bennett"
              className="h-16 w-16"
            />
            <div className="text-sm font-semibold text-[#0A0A0A]">
              Lucas Bennett
            </div>
            <div className="text-xs font-normal text-[#0A0A0A] opacity-65">
              Tomato Farmer – Karnataka
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-[#F6F7F1] relative overflow-hidden">
        {/* Decorative wheat illustrations */}
        <img
          className="absolute top-20 left-0 max-w-[200px] "
          src="/wheat2.png"
          alt=""
        />
        <img
          className="absolute bottom-[500px] right-0 max-w-[200px] "
          src="/wheat3.png"
          alt=""
        />

        <div className="max-w-[1096px] mx-auto px-6 py-24 relative z-10">
          {/* Section Title */}
          <div
            className="text-semibold text-sm
            text-[#0A0A0A]/70"
          >
            Soil faqs and answers
          </div>
          <h2 className="text-[56px] font-normal text-[#0A0A0A] pb-[50px] border-b border-[#0A0A0A]">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-0 border-gray-300 mt-10">
            {/* FAQ 1 */}
            <details className="group border-b border-gray-300">
              <summary className="flex justify-between items-center pt-10 pb-[10px] cursor-pointer list-none">
                <div className="flex gap-[75px] items-center">
                  <span className="text-[#0A0A0A] font-medium opacity-[64%] text-[25px] leading-10">
                    01
                  </span>
                  <span className="text-[#0A0A0A] font-normal text-[#0A0A0A] text-3xl leading-[40px]">
                    Are these products safe for organic or natural farming?
                  </span>
                </div>
                <div className="w-[46px] h-[46px] rounded-full group-open:bg-black flex border border-[#0A0A0A4D] items-center justify-center flex-shrink-0">
                  <span className="text-black text-xl font-light group-open:hidden">
                    +
                  </span>
                  <span className="text-white text-xl font-light hidden group-open:block">
                    -
                  </span>
                </div>
              </summary>
              <div className="pb-6 pl-[105px] pr-10 max-w-[800px]">
                <p className="text-[#0A0A0A] text-sm leading-relaxed opacity-70">
                  Yes. Our formulations are plant-extract-based and suitable for
                  organic, natural, and integrated farming systems. They leave
                  no harmful residues and support sustainable agriculture
                  practices.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group border-b border-gray-300">
              <summary className="flex justify-between items-center pt-10 pb-[10px] cursor-pointer list-none">
                <div className="flex gap-[75px] items-center">
                  <span className="text-[#0A0A0A] font-medium opacity-[64%] text-[25px] leading-10">
                    02
                  </span>
                  <span className="text-[#0A0A0A] font-light text-3xl max-w-[800px]">
                    Can they be used along with fertilizers or existing crop
                    programs?
                  </span>
                </div>
                <div className="w-[46px] h-[46px] rounded-full group-open:bg-black flex border border-[#0A0A0A4D] items-center justify-center flex-shrink-0">
                  <span className="text-black text-xl font-light group-open:hidden">
                    +
                  </span>
                  <span className="text-white text-xl font-light hidden group-open:block">
                    -
                  </span>
                </div>
              </summary>
              <div className="pb-6 pl-[105px] pr-10">
                <p className="text-[#0A0A0A] text-sm leading-relaxed opacity-70 max-w-[700px]">
                  Absolutely. Our products are compatible with most fertilizers
                  and can be integrated into existing crop protection programs.
                  They work synergistically to enhance overall plant health and
                  productivity.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group border-b border-gray-300">
              <summary className="flex justify-between items-center pt-10 pb-[10px] cursor-pointer list-none">
                <div className="flex gap-[75px] items-center">
                  <span className="text-[#0A0A0A] font-medium opacity-[64%] text-[25px] leading-10">
                    03
                  </span>
                  <span className="text-[#0A0A0A] font-regular text-3xl max-w-[800px]">
                    Which crops do your products support?
                  </span>
                </div>
                <div className="w-[46px] h-[46px] rounded-full group-open:bg-black flex border border-[#0A0A0A4D] items-center justify-center flex-shrink-0">
                  <span className="text-black text-xl font-light group-open:hidden">
                    +
                  </span>
                  <span className="text-white text-xl font-light hidden group-open:block">
                    -
                  </span>
                </div>
              </summary>
              <div className="pb-6 pl-[105px] pr-10">
                <p className="text-[#0A0A0A] text-sm leading-relaxed opacity-70 max-w-[700px]">
                  Our products support a wide range of crops including
                  vegetables (tomato, chili, brinjal), fruits (grapes, mango,
                  pomegranate), grains (wheat, rice), sugarcane, and plantation
                  crops (tea, coffee). They are effective across diverse farming
                  conditions.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group border-b border-gray-300">
              <summary className="flex justify-between items-center pt-10 pb-[10px] cursor-pointer list-none">
                <div className="flex gap-[75px] items-center">
                  <span className="text-[#0A0A0A] font-medium opacity-[64%] text-[25px] leading-10">
                    04
                  </span>
                  <span className="text-[#0A0A0A] font-regular text-3xl max-w-[800px]">
                    How do I apply the products via spray or soil?
                  </span>
                </div>
                <div className="w-[46px] h-[46px] rounded-full group-open:bg-black flex border border-[#0A0A0A4D] items-center justify-center flex-shrink-0">
                  <span className="text-black text-xl font-light group-open:hidden">
                    +
                  </span>
                  <span className="text-white text-xl font-light hidden group-open:block">
                    -
                  </span>
                </div>
              </summary>
              <div className="pb-6 pl-[105px] pr-10">
                <p className="text-[#0A0A0A] text-sm leading-relaxed opacity-70 max-w-[700px]">
                  Application methods vary by product. MITRA and RUDRA are
                  typically applied as foliar sprays. ARKA can be used for seed
                  treatment, soil application, or foliar spray. JIVA is applied
                  as a foliar spray or soil drench. Detailed application
                  guidelines are provided with each product.
                </p>
              </div>
            </details>
          </div>
        </div>
        {/* Farming Knowledge Section */}
        <div className="max-w-[1512px] mx-auto px-6 md:px-12 mb-[110px]">
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
      </section>

      {/* Contact Section - Grow Better, Naturally */}
      <section className="bg-white pt-20">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Dark Green Background */}
            <div className="bg-[#1F4E3D] p-16 relative overflow-hidden">
              {/* Decorative plant illustration */}
              <div className="absolute bottom-0 left-0 opacity-10">
                <img
                  src="/wheat-last.png"
                  alt=""
                  className="w-[470px] h-[690px]"
                />
              </div>

              <div className="relative z-10">
                <p className="text-white/70 font-semibold text-sm">
                  Let’s Grow Better
                </p>
                <h2 className="text-white text-[56px] font-normal leading-[65px] mb-[10px]">
                  Grow Better, Naturally
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-[30px] max-w-[590px]">
                  Get in touch and our experts will help you choose the right
                  herbal crop protection solution based on your crop, season,
                  and farming challenges.
                </p>

                {/* Contact Information */}
                <div className="flex flex-col gap-[30px]">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-[61px] h-[61px] bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-[30px] h-[30px] text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-base font-normal mb-1">
                        Call Us / WhatsApp
                      </p>
                      <p className="text-white text-[23px] leading-7 font-medium">
                        +91 25897 25687
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-[61px] h-[61px] bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-[30px] h-[30px] text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-base font-normal mb-1">
                        EMAIL US
                      </p>
                      <p className="text-white text-[23px] leading-7 font-medium">
                        info@vyomalifesciences.com
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-[61px] h-[61px] bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-[30px] h-[30px] text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-base font-normal mb-1">
                        VISIT US
                      </p>
                      <p className="text-white text-[23px] leading-7 font-medium">
                        Vyoma Life Sciences - Agricultural Innovation Center,
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="py-[110px] px-[70px]">
              <h2 className="text-[#0A0A0A] text-[56px] font-normal leading-[65px] mb-[10px]">
                Send an Enquiry
              </h2>
              <p className="text-[#0A0A0A] text-sm font-normal opacity-60 mb-10">
                Quick response from our technical support team.
              </p>

              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:border-[#1F4E3D] transition-colors"
                  />
                </div>

                {/* Mobile Number Field */}
                <div>
                  <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:border-[#1F4E3D] transition-colors"
                  />
                </div>

                {/* State and Crop Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                      State
                    </label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-[#0A0A0A] focus:outline-none focus:border-[#1F4E3D] transition-colors">
                      <option>Select state</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                      <option>Gujarat</option>
                      <option>Punjab</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                      Crop
                    </label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-[#0A0A0A] focus:outline-none focus:border-[#1F4E3D] transition-colors">
                      <option>What crop you growing?</option>
                      <option>Tomato</option>
                      <option>Rice</option>
                      <option>Wheat</option>
                      <option>Cotton</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your farming challenge or requirement"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm resize-none focus:outline-none focus:border-[#1F4E3D] transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FDB714] hover:bg-[#e5a612] text-white font-semibold py-4 rounded transition-colors"
                >
                  Get Expert Guidance
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
