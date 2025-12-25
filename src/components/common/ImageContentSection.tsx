export interface ContentItem {
  icon: string | React.ReactNode; // Can be image path or SVG element
  title: string;
  description: string | string[]; // Can be single paragraph or list items
  iconBgColor?: string;
}

export interface ImageContentSectionProps {
  sectionLabel: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  contentItems: ContentItem[];
  imagePosition?: "left" | "right";
  bgColor?: string;
  containerClasses?: string;
  imageClasses?: string;
}

const ImageContentSection = ({
  sectionLabel,
  title,
  subtitle,
  image,
  imageAlt,
  contentItems,
  imagePosition = "left",
  bgColor = "bg-white",
  containerClasses = "max-w-[1512px] mx-auto px-6 md:px-24 py-[110px]",
  imageClasses = "w-full h-[826px] shadow-lg object-cover",
}: ImageContentSectionProps) => {
  const ImageComponent = (
    <div className="relative h-full">
      <img src={image} alt={imageAlt} className={imageClasses} />
    </div>
  );

  const ContentComponent = (
    <div className="">
      <p className="text-sm font-semibold text-[#0A0A0AB2] md:text-base">
        {sectionLabel}
      </p>
      <h2 className="text-4xl md:text-5xl md:text-[56px] md:tracking-[-4px] md:leading-[65px] font-light md:font-normal text-gray-900 leading-tight mb-[5px]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#0A0A0A]/60 font-normal text-base mb-[50px]">
          {subtitle}
        </p>
      )}

      {/* Items List */}
      <div
        className={`space-y-6 ${
          subtitle ? "" : "mt-[60px]"
        } flex flex-col gap-10`}
      >
        {contentItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div
              className={`${
                item.iconBgColor || "w-[60px] h-[60px] bg-[#EABE0D]"
              } rounded-full flex items-center justify-center flex-shrink-0`}
            >
              {typeof item.icon === "string" ? (
                item.icon.startsWith("/") || item.icon.startsWith("http") ? (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-[30px] w-[30px]"
                  />
                ) : (
                  <span className="text-white font-semibold">{item.icon}</span>
                )
              ) : (
                item.icon
              )}
            </div>
            <div className={item.iconBgColor ? "mt-[11px]" : ""}>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                {item.title}
              </h3>
              {Array.isArray(item.description) ? (
                <ul className="list-disc list-inside space-y-1 text-base font-normal text-[#0A0A0A]/60">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-base font-normal text-[#0A0A0A]/60 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={bgColor}>
      <div className={containerClasses}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:gap-[50px]">
          {imagePosition === "left" ? (
            <>
              {ImageComponent}
              {ContentComponent}
            </>
          ) : (
            <>
              {ContentComponent}
              {ImageComponent}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageContentSection;
