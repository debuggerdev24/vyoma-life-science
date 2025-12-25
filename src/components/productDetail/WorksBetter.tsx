import React from "react";

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const WorksBetter = () => {
  const benefits: Benefit[] = [
    {
      icon: "/bar.png",
      title: "Strong Immunity Activation",
      description:
        "MITRA enhances the plant's natural defense mechanism, strengthening cell walls and boosting tolerance against viral attacks, even in vulnerable growth stages.",
    },
    {
      icon: "/shieldThunder.png",
      title: "Controls Viral Multiplication",
      description:
        "Once applied, it suppresses virus replication within plant tissue, preventing further spread and helping the crop recover without aggressive chemical intervention.",
    },
    {
      icon: "/plant.png",
      title: "Promotes New Healthy Shoots",
      description:
        "MITRA encourages fresh vegetative growth, helping crops produce healthier leaves, strong stems, and improved shoot development after viral stress.",
    },
    {
      icon: "/leaf2.png",
      title: "Reduces Curl, Mosaic & Stunting",
      description:
        "Visible improvement in symptoms such as leaf curl, yellow mosaic, patching, deformity, and stunted growth restoring vigor and uniform foliage.",
    },
    {
      icon: "/square-check.png",
      title: "Better Flowering & Fruit Holding",
      description:
        "With improved cellular health, crops respond better with more flower retention, reduced drop, and stronger fruit-setting performance for higher yield potential.",
    },
    {
      icon: "/user.png",
      title: "Preventive & Curative Action",
      description:
        "Can be used early to prevent viral establishment or applied during active infection to support recovery suitable for both routine and outbreak spraying.",
    },
    {
      icon: "/leaf3.png",
      title: "Fully Biodegradable",
      description:
        "Leaves no harmful traces on food, soil, or water, making it safe for consumption, export requirements, and continuous cropping without toxic buildup.",
    },
    {
      icon: "/check.png",
      title: "Safe for Farmers & Ecosystem",
      description:
        "Free from harsh chemicals safe to spray, field-friendly, non-hazardous to pollinators like bees, and contributes positively to soil microbial life.",
    },
  ];

  return (
    <section className="flex flex-col max-w-[1512px] mx-auto items-center px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-[110px]">
      <div className="text-center mb-10 md:mb-12 lg:mb-[60px]">
        <p className="text-[#0A0A0AB2] text-sm font-semibold leading-[150%]">
          Key Benefits
        </p>
        <div className="text-[#0A0A0A] font-normal text-3xl md:text-4xl lg:text-[56px] md:leading-snug lg:leading-[65px] mb-[10px]">
          Why MITRA Works Better
        </div>

        <p className="text-[#0A0A0A]/60 text-sm font-normal leading-[150%] max-w-2xl mx-auto">
          Stronger immunity, faster recovery, healthier growth — all without
          chemical residue or risk to farmers.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-9 w-full">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-[#1F4E3D] p-6 md:p-[30px]">
            <div className="bg-[#EABE0D] h-[50px] w-[50px] p-[13px] mb-4 md:mb-5 flex items-center justify-center">
              <img src={benefit.icon} alt={benefit.title} className="w-6 h-6" />
            </div>

            <p className="text-white text-base font-semibold leading-[140%] mb-[5px]">
              {benefit.title}
            </p>
            <div className="text-white/60 text-sm leading-[150%]">
              {benefit.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksBetter;
