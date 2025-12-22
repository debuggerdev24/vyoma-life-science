import React from "react";

interface ContentItem {
  icon: string | React.ReactNode;
  title: string;
  description: string | string[];
  iconBgColor?: string;
}

const EasyUnderstanding = () => {
  const contentItems: ContentItem[] = [
    {
      icon: "/tube.png",
      title: "Herbal Antiviral Immunity Booster",
      description:
        "Made from plant-based bioactive extracts that support natural defense, improve crop resistance, and help plants fight viral stress internally without chemical residue.",
      iconBgColor: "w-[60px] h-[60px] bg-[#EABE0D]",
    },
    {
      icon: "/shield.png",
      title: "Viral Infections, Curl, Mosaic, Stunting",
      description:
        "Designed to control common viral symptoms such as leaf curl, yellow mosaic, distorted leaves, stunted growth, and weak shoot development often seen in Tomato, Chilli, Papaya & more.",
      iconBgColor: "w-[60px] h-[60px] bg-[#EABE0D]",
    },
    {
      icon: "/plant.png",
      title: "Vegetables | Fruits | Grains | Commercial Crops",
      description:
        "Suitable for a wide range of farm crops including horticulture, floriculture & plantations — providing broad-spectrum protection across growing seasons.",
      iconBgColor: "w-[60px] h-[60px] bg-[#EABE0D]",
    },
    {
      icon: "/watch.png",
      title: "Improvement within 10–20 Days",
      description:
        "Early new shoots, greener leaves, and reduced viral spread can be observed depending on infection stage and timely application best results when used consistently.",
      iconBgColor: "w-[60px] h-[60px] bg-[#EABE0D]",
    },
    {
      icon: "/drop.png",
      title: "Foliar Spray | Soil Drench | Seed Treatment",
      description:
        "Flexible usage based on crop requirement foliar for rapid action, drench for root-level strength, and seed treatment for early protection before planting.",
      iconBgColor: "w-[60px] h-[60px] bg-[#EABE0D]",
    },
    {
      icon: "/shield.png",
      title: "Viral Outbreak + Preventive Immunity",
      description:
        "Ideal during active infection phases and equally powerful as a preventive shield before disease pressure increases builds long-term immunity to keep crops safe.",
      iconBgColor: "w-[60px] h-[60px] bg-[#EABE0D]",
    },
  ];

  return (
    <section className="bg-[#F6F7F1]">
      <div className="relative max-w-[1512px] mx-auto">
        {/* Background Image - Hidden on mobile and tablet */}
        <div className="absolute bottom-0 left-0 hidden lg:block">
          <img src="/wheat-last.png" alt="" className="w-[470px] h-[690px]" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-[110px] gap-10 lg:gap-0">
          {/* Left Section - Header */}
          <div className="max-w-full lg:max-w-[536px]">
            <p className="text-[#0A0A0AB2] text-sm font-semibold leading-[150%]">
              Product Snapshot
            </p>
            <div className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-[56px] font-normal leading-tight md:leading-snug lg:leading-[65px] mb-[10px]">
              Quick Details for Easy Understanding
            </div>
            <div className="text-[#0A0A0A] text-base font-normal opacity-60 leading-[150%]">
              A fast, clear overview of MITRA's core functions, usage, and
              performance — helping you understand what it does in seconds.
            </div>
          </div>

          {/* Right Section - Items List */}
          <div className="flex flex-col gap-6 md:gap-[30px] max-w-full lg:max-w-[650px] w-full">
            {contentItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`${
                    item.iconBgColor || "w-[60px] h-[60px] bg-[#EABE0D]"
                  } rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  {typeof item.icon === "string" ? (
                    item.icon.startsWith("/") ||
                    item.icon.startsWith("http") ? (
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="h-[30px] w-[30px]"
                      />
                    ) : (
                      <span className="text-white font-semibold">
                        {item.icon}
                      </span>
                    )
                  ) : (
                    item.icon
                  )}
                </div>
                <div className={item.iconBgColor ? "mt-[11px]" : ""}>
                  <h3 className="text-lg md:text-xl lg:text-[23px] font-medium leading-6 md:leading-7 text-[#0A0A0A] mb-2 md:mb-[11px]">
                    {item.title}
                  </h3>
                  {Array.isArray(item.description) ? (
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base font-normal text-[#0A0A0A]/60">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm md:text-base font-normal text-[#0A0A0A]/60 leading-[150%]">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyUnderstanding;
