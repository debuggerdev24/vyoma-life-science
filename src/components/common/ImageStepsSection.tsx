import React from 'react'
import { ImageContentSectionProps } from './ImageContentSection';


const ImageStepsSection = ({
  sectionLabel,
  title,
  subtitle,
  image,
  imageAlt,
  contentItems,
  imagePosition = "left",
  bgColor = "bg-white",
  containerClasses = "max-w-[1512px] mx-auto px-6 md:px-24 py-14 lg:py-[110px]",
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
      <h2 className="text-4xl md:text-5xl md:text-[56px] lg:tracking-[-4px] md:leading-[65px] font-light md:font-normal text-gray-900 mb-[5px]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#0A0A0A]/60 font-normal text-base mb-[50px]">
          {subtitle}
        </p>
      )}

      {/* Items List */}
      <div
        className={`${
          subtitle ? "" : "mt-[60px]"
        } flex flex-col gap-[10px]`}
      >
        {contentItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
  {/* LEFT ICON + LINE */}
  <div className="flex flex-col items-center h-[-webkit-fill-available]">
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
          <span className="text-[#000000] font-semibold">{item.icon}</span>
        )
      ) : (
        item.icon
      )}
    </div>

    {/* 🔑 KEY FIX HERE */}
    <div className={`flex-1 w-[1px] bg-[#E5E7DE] mt-2.5 ${index === contentItems.length - 1 ? "hidden" : ""}`} />
  </div>

  {/* RIGHT CONTENT */}
  <div className={`pb-[30px] ${item.iconBgColor ? "mt-[11px]" : ""}`}>
    <h3 className="text-lg font-medium text-gray-900 mb-[11px]">
      {item.title}
    </h3>

    {Array.isArray(item.description) ? (
  <ul className="space-y-1 text-base font-normal text-[#0A0A0A]/60">
    {item.description.map((point, i) => (
      <li key={i} className="flex gap-2">
        <span className="w-[2px] h-[2px] bg-[#0A0A0A]/60 mt-3"></span>
        <span className="flex-1">{point}</span>
      </li>
    ))}
  </ul>
) : (
  <p className="text-base font-normal text-[#0A0A0A]/60 leading-[150%]">
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
  )
}

export default ImageStepsSection