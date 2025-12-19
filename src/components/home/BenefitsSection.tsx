import ImageContentSection from "../common/ImageContentSection";

const BenefitsSection = () => {
  const contentItems = [
    {
      icon: "1",
      title: "Farmers Big Economic Advantage",
      description: [
        "Reduce input cost by 25–30% per acre",
        "Achieve 10–15% increase in yield",
        "Safer handling and a healthier farming environment",
      ],
    },
    {
      icon: "2",
      title: "Agri-Input Dealers / Retailers",
      description: [
        "Can offer clean, herbal alternatives alongside chemical portfolios",
        "Higher repeat demand because products improve farm performance",
      ],
    },
    {
      icon: "3",
      title: "FPOs & Farmer Cooperatives",
      description: [
        "Suitable for group farming programs and organic/natural initiatives",
        "Enables farmers to transition safely from chemical dependency",
      ],
    },
    {
      icon: "4",
      title: "Institutions, NGOs & Sustainable Farming Projects",
      description: [
        "Ideal for programs promoting residue-free agriculture, regenerative farming, and soil health restoration",
      ],
    },
  ];

  return (
    <ImageContentSection
      sectionLabel="Who We Support"
      title="Who Benefits From Our Solutions"
      image="/farmer2.png"
      imageAlt="farmer"
      contentItems={contentItems}
      imagePosition="right"
      imageClasses="h-full min-h-[922px] w-full max-w-[621px] object-cover"
    />
  );
};

export default BenefitsSection;
