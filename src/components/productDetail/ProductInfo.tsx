"use client";
import React from "react";
import { Product } from "@/lib/productData";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const handleDownloadBrochure = () => {
    // Create a dummy PDF download link
    const link = document.createElement("a");
    link.href = "/product-brochure.pdf"; // Path to dummy PDF in public folder
    link.download = `${product.name}-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Map original tag colors to new colors for product detail page
  const getCustomTagColor = (originalBgColor: string): string => {
    const colorMap: { [key: string]: string } = {
      "bg-[#AF2B24]": "bg-[#E74C3C]/10",
      "bg-[#115526]": "bg-[#1155261A]",
      "bg-[#B48E1C]": "bg-[#F39C12]/10",
      "bg-[#1F5571]": "bg-[#3498DB]/10",
    };
    return colorMap[originalBgColor] || originalBgColor;
  };

  // Map original text colors to new text colors for product detail page
  const getCustomTextColor = (originalBgColor: string): string => {
    const textColorMap: { [key: string]: string } = {
      "bg-[#AF2B24]": "text-[#E74C3C]",
      "bg-[#115526]": "text-[#27AE60]", // Green text
      "bg-[#B48E1C]": "text-[#F39C12]", // Orange text
      "bg-[#1F5571]": "text-[#3498DB]", // Blue text
    };
    return textColorMap[originalBgColor] || "text-white";
  };

  return (
    <section className="w-full mx-auto">
      <div className="border border-[#0A0A0A1A]">
        <div className="max-w-[1512px] mx-auto text-[14px] leading-6 font-normal py-2 px-6 md:px-24  text-[#0A0A0ACC]">
          Home / Products /{" "}
          <span className="text-[#0A0A0A]">{product.name}</span>
        </div>
      </div>
      <div className="py-8 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 max-w-[1512px] flex mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-[50px] items-start w-full">
          {/* Left - Product Image */}
          <div className="flex-shrink-0 w-full">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full max-h-[400px] md:max-h-[500px] lg:max-h-[648px] lg:max-w-[648px] object-contain"
            />
          </div>

          {/* Right - Product Info */}
          <div className="flex flex-col flex-1 w-full">
            {/* Tags/Badges */}
            <div className="flex flex-wrap gap-[10px] mb-5 md:mb-[30px]">
              {product.tags.map((tag, index) => (
                <div
                  key={index}
                  className={`${getCustomTagColor(
                    tag.bgColor
                  )} px-[15px] py-[8px] ${getCustomTextColor(
                    tag.bgColor
                  )} text-xs font-semibold`}
                >
                  {tag.label}
                </div>
              ))}
            </div>

            {/* Product Title */}
            <h1 className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-[56px] font-medium leading-tight md:leading-snug lg:leading-[65px] mb-4 md:mb-5">
              {product.name} - {product.subtitle}
            </h1>

            {/* Product Description */}
            <p className="text-[#0A0A0A]/60 text-base md:text-lg lg:text-xl leading-[150%] mb-[10px] max-w-full lg:max-w-[600px]">
              {product.description}
            </p>

            {/* Additional Description */}
            <p className="text-[#0A0A0A]/60 text-base md:text-lg lg:text-xl leading-[150%] mb-6 md:mb-8 lg:mb-[40px] max-w-full lg:max-w-[600px]">
              This makes MITRA effective not as a prophylactic shield and a
              curative support when crops are already stressed or infected.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-[15px] w-full sm:w-auto">
              <button className="bg-[#1F4E3D] text-white font-semibold text-sm px-[35px] py-[15px] hover:bg-[#1a4234] transition-colors w-full sm:w-auto">
                Buy / Enquiry
              </button>
              <button
                onClick={handleDownloadBrochure}
                className="bg-[#EABE0D] text-white font-semibold text-sm px-[35px] py-[15px] hover:bg-[#d4af2b] transition-colors w-full sm:w-auto"
              >
                Product Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
