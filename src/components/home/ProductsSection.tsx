import ProductsGrid from "../common/ProductsGrid";

const ProductsSection = () => {
  const products = [
    {
      name: "MITRA",
      slug: "mitra",
      subtitle: "Viral Immunity Booster",
      image: "/mitra.png",
      tags: [
        {
          label: "Viral Diseases",
          bgColor: "bg-[#AF2B24]/10",
          textColor: "text-[#AF2B24]",
        },
        {
          label: "Preventive & Curative",
          bgColor: "bg-[#AF2B24]/10",
          textColor: "text-[#AF2B24]",
        },
      ],
      description:
        "Strengthens internal plant immunity, suppresses viral multiplication, improves leaf health and vegetative growth, and prevents major viral outbreaks across multiple crops consistently.",
    },
    {
      name: "ARKA",
      slug: "arka",
      subtitle: "Fungal & Bacterial Immunity Booster",
      image: "/arka.png",
      tags: [
        {
          label: "Seed",
          bgColor: "bg-[#115526]/10",
          textColor: "text-[#115526]",
        },
        {
          label: "Soil",
          bgColor: "bg-[#115526]/10",
          textColor: "text-[#115526]",
        },
        {
          label: "Foliar",
          bgColor: "bg-[#115526]/10",
          textColor: "text-[#115526]",
        },
      ],
      description:
        "Provides broad protection against fungal and bacterial pathogens, improving root strength, chlorophyll development, water absorption, and long-term resistance for healthier crops.",
    },
    {
      name: "JIVA",
      slug: "jiva",
      subtitle: "Growth Promoter & Immunity Booster",
      image: "/jiva.png",
      tags: [
        {
          label: "Growth & Yield",
          bgColor: "bg-[#B48E1C]/10",
          textColor: "text-[#B48E1C]",
        },
      ],
      description:
        "Boosts nutrient metabolism, encourages flowering and fruit set, reduces flower drop, enhances soil vitality, and supports increased crop yield with natural growth stimulation.",
    },
    {
      name: "RUDRA",
      slug: "rudra",
      subtitle: "Plant Protector Against Pests",
      image: "/arka.png",
      tags: [
        {
          label: "Pest Control",
          bgColor: "bg-[#1F5571]/10",
          textColor: "text-[#1F5571]",
        },
      ],
      description:
        "Controls sucking pests, flying insects, and larvae through natural multi-mode action, protecting plants without harming pollinators and supporting residue-free food production.",
    },
  ];

  return (
    <ProductsGrid
      sectionLabel="Our Products"
      title="Botanical Extracts Crop Protection Range"
      description="A curated range of four scientifically developed herbal formulations designed to boost plant immunity, support growth, and protect crops from diseases and pests safely and sustainably."
      products={products}
      variant="default"
    />
  );
};

export default ProductsSection;
