import ImageContentSection from "../common/ImageContentSection";

const InnovationSection = () => {
  const contentItems = [
    {
      icon: "/research.png",
      title: "Continuous Research",
      description:
        "We constantly improve and refine formulations using updated agricultural research, extensive crop trials, and continuous farmer feedback from real field conditions.",
      iconBgColor: "bg-[#FDB714] p-[15px]",
    },
    {
      icon: "/bulb.png",
      title: "Innovation-Driven",
      description:
        "Our R&D team actively tracks new diseases, pests, and farm stress patterns, creating customized herbal remedies for emerging agricultural challenges effectively.",
      iconBgColor: "bg-[#FDB714] p-[15px]",
    },
    {
      icon: "/tube.png",
      title: "Science-Backed Solutions",
      description:
        "Every product undergoes scientific validation, combining Ayurvedic knowledge with modern agricultural science to ensure reliable, consistent, and high-performance results across crops.",
      iconBgColor: "bg-[#FDB714] p-[15px]",
    },
    {
      icon: "/leaf2.png",
      title: "Standing Unique",
      description:
        "We specialize in custom, problem-specific herbal solutions that support sustainable farming, reduce chemical dependency, and deliver long-term ecological safety benefits.",
      iconBgColor: "bg-[#FDB714] p-[15px]",
    },
  ];

  return (
    <section className="bg-white">
      <ImageContentSection
        sectionLabel="Botanical Extracts Innovation Lab"
        title="Innovation & Sustainability"
        subtitle="We combine Ayurvedic wisdom with modern research to create science-backed herbal crop protection solutions that are safe, effective, and future-ready."
        image="/farmer3.png"
        imageAlt="farmer"
        contentItems={contentItems}
        imagePosition="left"
        bgColor=""
        containerClasses="max-w-[1512px] mx-auto px-6 lg:px-24 py-14 lg:py-[110px] gap-[50px]"
        imageClasses="h-full lg:max-h-[922px] w-full lg:max-w-[621px] object-cover"
      />

      <div className="flex flex-col justify-center items-center max-w-[850px] px-2 mx-auto mb-[110px]">
        <div className="text-[47px] leading-[50px] text-[#0A0A0A]">
          Yield Boost
        </div>
        <div className="text-center text-[23px] font-normal mt-5 text-[#0A0A0ACC]">
          "JIVA improved flowering and fruit holding dramatically. Flower drop
          reduced, fruit size increased, and yield was noticeably higher in our
          tomato farm compared to last season."
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
  );
};

export default InnovationSection;
