const StatsSection = () => {
  return (
    <section className="bg-white py-28 max-w-[1512px] mx-auto">
      <div className="px-6 md:px-24 ">
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
  );
};

export default StatsSection;
