import React from "react";
import ImageContentSection from "../common/ImageContentSection";

const MakesUsDifferent = () => {
  const contentItems = [
    {
      icon: "/research.png",
      title: "Ayurveda × Modern Science",
      description:
        "Our formulations are inspired by Ayurvedic plant wisdom and strengthened through modern agricultural research, ensuring both natural origin and scientific reliability in field performance.",
    },
    {
      icon: "/Frame.png",
      title: "  Zero Residue & Biodegradable ",
      description:
        "Our solutions leave no harmful chemical residue on crops, soil, farmers, or food. They are fully biodegradable, supporting clean farming and safe consumption.",
    },
    {
      icon: "/recycle.png",
      title: "Problem-Specific, Crop-Specific Solutions",
      description:
        "Instead of generic sprays, our products are designed to target specific disease categories viral, fungal, bacterial, pest, and growth-related challenges across multiple crops and regions.",
    },
    {
      icon: "/leaf2.png",
      title: "Safe for Farmers & Pollinators",
      description:
        "Our plant-extract formulations pose no toxicity risk to farmers, livestock, honeybees, or beneficial insects, ensuring agriculture supports life — not destroys it.",
    },
    {
      icon: "/check.png",
      title: "Higher ROI per Acre",
      description:
        "Farmers experience 25–30% reduced input costs and 10–15% higher yield, making the switch to herbal farming not only sustainable but more profitable.",
    },
  ];
  return (
    <ImageContentSection
      sectionLabel="Herbal Formulations. Commercial Performance."
      title="What Makes Us Different"
      image="/makesUsDifferent.png"
      imageAlt="Makes us different"
      contentItems={contentItems}
      imagePosition="right"
      imageClasses="h-full min-h-[922px] w-full object-cover"
    />
  );
};

export default MakesUsDifferent;
