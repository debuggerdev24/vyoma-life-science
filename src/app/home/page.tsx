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
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
            <div className="max-w-2xl">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-normal text-white leading-tight mb-6">
                Herbal Crop Protection for
                <br />
                Sustainable Farming.
              </h1>

              {/* Description */}
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Plant-extract based solutions that boost crop immunity, protect
                yields, and reduce dependency on harmful chemicals safe for
                farmers, soil, and the environment.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="w-full px-24 absolute bottom-8 flex flex-wrap gap-4 justify-between">
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#FDB714] hover:bg-[#e5a612] text-white font-medium rounded transition-colors">
                View Products
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded transition-colors">
                Talk to Our Expert
              </button>
            </div>

            <div className="flex gap-2 text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span>Explore More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
            <img
              className="h-10 opacity-40 grayscale"
              src="/cargill.png"
              alt="Cargill"
            />
            <img
              className="h-10 opacity-40 grayscale"
              src="/syngenta.png"
              alt="Syngenta"
            />
            <img
              className="h-10 opacity-40 grayscale"
              src="/corteva.png"
              alt="Corteva"
            />
            <img className="h-10 opacity-40 grayscale" src="/cf.png" alt="CF" />
            <img
              className="h-10 opacity-40 grayscale"
              src="/vital.png"
              alt="vital"
            />
            <img
              className="h-10 opacity-40 grayscale"
              src="/LouisDreyfus.png"
              alt="Louis Dreyfus"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
                About Vyoma Life Sciences
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8">
                Innovating the Future
                <br />
                of Agriculture
              </h2>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Vyoma Life Sciences develops plant-extract-based alternatives to
                conventional chemicals used in agriculture and in daily-use
                hygiene and healthcare products. The company was born out of a
                simple idea: chemicals that are in direct contact with humans,
                animals, and soil shouldn't slowly destroy their immunity and
                the environment around them.
              </p>

              <p className="text-gray-700 leading-relaxed">
                At the heart of Vyoma's work is research and innovation. Using
                cutting-edge technologies in plant extraction, they develop
                unique alternatives that address emerging pests and diseases,
                and can be adapted as new challenges appear in the field.
              </p>

              <button className="inline-flex items-center text-gray-900 font-medium mt-4 hover:text-gray-700 transition-colors">
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

      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                Cost Reduction
              </p>
              <p className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                25-30%
              </p>
              <p className="text-sm text-gray-600">
                Lower input costs vs traditional methods
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                Yield Improvement
              </p>
              <p className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                10-15%
              </p>
              <p className="text-sm text-gray-600">
                Average yield increase across crops
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                Product Range
              </p>
              <p className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                04
              </p>
              <p className="text-sm text-gray-600">
                Countries with active distribution
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                Crop Coverage
              </p>
              <p className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                All Crops
              </p>
              <p className="text-sm text-gray-600">
                Suitable for various crop types
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical vs Herbal Comparison Section */}
      <section className="bg-[#F6F7F1] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Why Move Beyond Chemicals */}
            <div className="flex flex-col">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">
                Why Move Beyond Chemicals?
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
                Chemical
                <br />
                Inputs vs Herbal
                <br />
                Solutions
              </h2>
              {/* Wheat Illustration */}
              <div className="mt-auto">
                <img src="/wheat.png" alt="Wheat" />
              </div>
            </div>

            {/* Middle Column - The Problem with Chemical Farming */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                The Problem with Chemical
                <br />
                Farming
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Chemicals in the field of farming are only for the management of
                pests and diseases.
              </p>

              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-900 mb-3">
                  Problems / pain points
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>
                      Short-term solutions to farmers with issues reoccurring
                      leading to more diseases
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>
                      Soil degradation leading to declining fertility and soil
                      health
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
                      Health-related problems in farmers and in workers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>Chemical exposure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>
                      Excess of pesticides, fertilizers and towards birds and
                      beneficial insects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>
                      Higher crop input cost due expenses and rising
                      input/fertilizer cost
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - The Power of Plant-Based Products */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                The Power of Plant-Based
                <br />
                Products
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Plant extracts have sustainable,safe, and biodegradable mode of
                action, making them ideal for sustainable agriculture.
              </p>

              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-900 mb-3">
                  Advantages / benefits
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>Environmental friendly with less impact</span>
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
                      Less harmful to non-target species like bees and
                      beneficial insects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>
                      Enhances water retention and reduces soil erosion concerns
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>
                      Safer exposure for those who handle and apply these
                      products
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>
                      Protecting both human and environmental biodiversity only
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>Biodegradable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <img
                src="/farmer.png"
                alt="Farmer in field"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">
                Our Values
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
                What We Stand For
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Vyoma Life Sciences is committed to developing solutions
                designed with herbal crop protection that supports farmers, soil
                health, consumers, and the environment.
              </p>

              {/* Values List */}
              <div className="space-y-6">
                {/* Value 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Sustainable Crop Protection
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We aim to replace chemical pesticides by empowering
                      farmers with herbal solutions that protect crops without
                      harming soil fertility or health.
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
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
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our plant-based formulations protect crops while
                      preserving groundwater, pollinators, beneficial insects,
                      livestock, and ecological balance.
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Residue-Free Food Production
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We envision a farming ecosystem where food is clean and
                      managed naturally, providing safer produce free of toxic
                      residues for consumers.
                    </p>
                  </div>
                </div>

                {/* Value 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Standing Unique
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
            <div className="font-semibold text-sm">Who We Support</div>
            <h2 className="text-[56px] leading-[65px] text-[#0A0A0A]">
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
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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
            <img src="/farmer2.png" alt="farmer" />
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
            <div className="font-semibold text-sm">Our Products</div>
            <div className="text-[56px]">
              Botanical Extracts Crop Protection Range
            </div>
            <div className="flex text-center text-[#0A0A0A] text-sm max-w-[650px] mt-[10px]">
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
            <img src="/farmer3.png" alt="farmer" />
          </div>
          <div className="flex flex-col min-w-fit">
            <div className="font-semibold text-sm">
              Botanical Extracts Innovation Lab
            </div>
            <h2 className="text-[56px] leading-[65px] text-[#0A0A0A]">
              Innovation & Sustainability
            </h2>
            <div className="text-[#0A0A0A]">
              We combine Ayurvedic wisdom with modern research to create
              science-backed herbal crop protection solutions that are safe,
              effective, and future-ready.
            </div>
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
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>
                      Ideal for programs promoting residue-free agriculture,
                      regenerative farming, and soil health restoration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
