import Link from "next/link";

export default function ProductsDistributorSection() {
  return (
    <section className="max-w-[1320px] mx-auto grid md:grid-cols-2">
      {/* Left Section - Yellow */}
      <div className="bg-[#E8C132] lg:p-[50px] p-8 flex flex-col items-center justify-center">
        <div className="max-w-[560px] text-center flex flex-col h-full">
          <h2 className="lg:text-[40px] lg:leading-[50px] text-3xl font-normal text-[#0A0A0A] mb-5">
            Find products available in your country/area
          </h2>
          <p className="lg:text-xl text-lg leading-[150%] text-[#0A0A0ACC] mb-10 ">
            Select your country or area to explore our products available in
            your region. Discover tailored solutions designed to meet your needs
            and drive success.
          </p>
          <div className="relative w-full max-w-xs mx-auto mt-auto">
            <select className="w-full bg-white text-gray-500 px-5 py-4 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
              <option>Select your state</option>
              <option>Maharashtra</option>
              <option>Gujarat</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Green */}
      <div className="bg-[#2C5F4F] lg:p-[50px] p-8 flex flex-col items-center justify-center">
        <div className="max-w-[560px] text-center flex flex-col">
          <h2 className="lg:text-[40px] lg:leading-[50px] text-3xl font-normal text-white mb-6">
            Are you a distributor or represent a company?
          </h2>
          <p className="lg:text-xl text-lg text-white mb-10">
            View our complete product portfolio and connect with us to explore
            opportunities for growth and partnership. Let's grow together!
          </p>
          <Link href="/contact-us">
            <button className="bg-[#E8C132] text-white font-medium text-sm md:px-[74px] px-10 py-4 hover:bg-[#d4af2b] transition-colors">
              Explore and connect
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
