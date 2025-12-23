export interface Tag {
  label: string;
  bgColor: string;
  textColor: string;
}

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  tags: Tag[];
  description: string;
}

export const products: Product[] = [
  {
    slug: "mitra",
    name: "MITRA",
    subtitle: "Viral Immunity Booster",
    image: "/mitra.png",
    tags: [
      {
        label: "Viral Diseases",
        bgColor: "bg-[#AF2B24]",
        textColor: "text-white",
      },
      {
        label: "Preventive & Curative",
        bgColor: "bg-[#AF2B24]",
        textColor: "text-white",
      },
    ],
    description:
      "Strengthens internal plant immunity, suppresses viral multiplication, improves leaf health and vegetative growth, and prevents major viral outbreaks across multiple crops consistently.",
  },
  {
    slug: "arka",
    name: "ARKA",
    subtitle: "Fungal & Bacterial Immunity Booster",
    image: "/arka.png",
    tags: [
      {
        label: "Seed",
        bgColor: "bg-[#115526]",
        textColor: "text-white",
      },
      {
        label: "Soil",
        bgColor: "bg-[#115526]",
        textColor: "text-white",
      },
      {
        label: "Foliar",
        bgColor: "bg-[#115526]",
        textColor: "text-white",
      },
    ],
    description:
      "Provides broad protection against fungal and bacterial pathogens, improving root strength, chlorophyll development, water absorption, and long-term resistance for healthier crops.",
  },
  {
    slug: "jiva",
    name: "JIVA",
    subtitle: "Growth Promoter & Immunity Booster",
    image: "/jiva.png",
    tags: [
      {
        label: "Growth & Yield",
        bgColor: "bg-[#B48E1C]",
        textColor: "text-white",
      },
    ],
    description:
      "Boosts nutrient metabolism, encourages flowering and fruit set, reduces flower drop, enhances soil vitality, and supports increased crop yield with natural growth stimulation.",
  },
  {
    slug: "rudra",
    name: "RUDRA",
    subtitle: "Plant Protector Against Pests",
    image: "/arka.png",
    tags: [
      {
        label: "Pest Control",
        bgColor: "bg-[#1F5571]",
        textColor: "text-white",
      },
    ],
    description:
      "Controls sucking pests, flying insects, and larvae through natural multi-mode action, protecting plants without harming pollinators and supporting residue-free food production.",
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug.toLowerCase());
};
