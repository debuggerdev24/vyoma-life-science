import ImageContentSection from "../common/ImageContentSection";

const VisionSection = () => {
  const contentItems = [
    {
      icon: "/recycle.png",
      title: "Sustainable Crop Protection",
      description:
        "We aim to replace chemical pesticides by empowering farmers with herbal solutions that protect crops without harming soil fertility or health.",
    },
    {
      icon: (
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
      ),
      title: "Environmental & Animal Safety",
      description:
        "Our plant-based formulations protect crops while preserving groundwater, pollinators, beneficial insects, livestock, and ecological balance.",
    },
    {
      icon: "/plant.png",
      title: "Residue-Free Food Production",
      description:
        "We envision a farming ecosystem where food is clean and managed naturally, providing safer produce free of toxic residues for consumers.",
    },
    {
      icon: "/heart.png",
      title: "Standing Unique",
      description:
        "Farmers, peers, animals, and people deserve safety: our products are designed to sustain life, not to disrupt it.",
    },
  ];

  return (
    <ImageContentSection
      sectionLabel="Our Vision"
      title="What We Stand For"
      subtitle="Vyoma Life Sciences is committed to developing solutions designed with herbal crop protection that supports farmers, soil health, consumers, and the environment."
      image="/farmer.png"
      imageAlt="Farmer in field"
      contentItems={contentItems}
      imagePosition="left"
      containerClasses="max-w-[1512px] mx-auto px-6 md:px-24 py-20"
    />
  );
};

export default VisionSection;
