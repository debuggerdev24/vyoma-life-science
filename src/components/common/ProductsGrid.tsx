"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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

export interface ProductsGridProps {
  sectionLabel: string;
  title: string;
  description: string;
  products: Product[];
  paddingClasses?: string;
  variant?: "default" | "steps";
  isbgImageVisible?: boolean;
  ctaButtonLabel?: string;
  id?: string;
}

const ProductsGrid = ({
  sectionLabel,
  title,
  description,
  products,
  paddingClasses = "py-14 lg:py-[110px]",
  variant = "default",
  isbgImageVisible = false,
  ctaButtonLabel = "",
  id,
}: ProductsGridProps) => {
  const router = useRouter();

  const handleProductClick = (slug: string) => {
    router.push(`/productDetail/${slug}`);
  };

  return (
    <section
      id={id}
      className={`relative ${variant === "steps" ? "" : "bg-[#F6F7F1]"}`}
    >
      <div
        className={`flex max-w-[1512px] mx-auto px-6 md:px-24 ${paddingClasses} gap-[65px]`}
      >
        {/* Wheat images - hidden on mobile */}
        {isbgImageVisible && (
          <img
            className="hidden lg:block absolute bottom-1/3 left-0 max-w-[450px]"
            src="/wheat.png"
            alt=""
          />
        )}
        {isbgImageVisible && (
          <img
            className="hidden lg:block absolute bottom-1/3 right-0 max-w-[450px]"
            src="/wheat-flip.png"
            alt=""
          />
        )}

        <div className="flex flex-col justify-center items-center w-full">
          <div className="font-semibold text-sm text-[#0A0A0AB2]">
            {sectionLabel}
          </div>
          <div className="text-[22px] sm:text-2xl lg:text-[56px] leading-tight lg:leading-[65px] tracking-tight lg:tracking-[-4px] text-center break-words px-4">
            {title}
          </div>
          <div className="flex text-center text-[#0A0A0A]/60 text-sm leading-[150%] font-normal max-w-[650px] mt-[10px]">
            {description}
          </div>

          {/* Responsive grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 z-10 mt-10 lg:mt-[70px] gap-6 lg:gap-9 w-full">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-white cursor-pointer transition-shadow overflow-hidden"
                onClick={() => handleProductClick(product.slug)}
              >
                {/* Image Container */}
                <div className="relative">
                  <img
                    className="w-full"
                    src={product.image}
                    alt={product.name.toLowerCase()}
                  />

                  {/* Tags overlay for "steps" variant */}
                  {variant === "steps" && product.tags.length > 0 && (
                    <div className="absolute top-3 left-3 lg:top-4 lg:left-4 flex gap-2 flex-wrap">
                      {product.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className={`${tag.bgColor} px-[7px] py-1 ${tag.textColor} text-[8px] font-semibold`}
                        >
                          {tag.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div
                  className={`flex flex-col h-full ${
                    variant === "default" ? "p-5 lg:p-[30px]" : "py-[10px]"
                  }`}
                >
                  <p className="text-xl lg:text-[24px] font-medium text-[#0A0A0A]">
                    {product.name}
                  </p>

                  {variant === "default" && product.subtitle.length > 0 && (
                    <p className="text-[#0a0a0aa2] text-sm mt-1">
                      {product.subtitle}
                    </p>
                  )}

                  {/* Tags below title for "default" variant */}
                  {variant === "default" && product.tags.length > 0 && (
                    <div className="flex gap-[5px] mt-5 lg:mt-[30px] flex-wrap">
                      {product.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className={`${tag.bgColor} px-[7px] py-1 ${tag.textColor} text-[8px] font-semibold`}
                        >
                          {tag.label}
                        </div>
                      ))}
                    </div>
                  )}

                  {variant === "default" && product.description.length > 0 && (
                    <div className="text-xs text-[#0a0a0aa2] mt-[10px] mb-8 lg:mb-[50px]">
                      {product.description}
                    </div>
                  )}

                  {variant === "steps" && product.description.length > 0 && (
                    <div className="text-xs text-[#0a0a0aa2] line-clamp-2 mt-2">
                      {product.description}
                    </div>
                  )}

                  {/* CTA Button - Different for each variant */}
                  {variant === "default" ? (
                    <div className="flex w-full bg-[#1F4E3D] text-white text-sm font-semibold justify-center items-center mt-auto py-3 lg:py-[15px]">
                      Know More
                    </div>
                  ) : (
                    <div className="flex w-full text-[#0A0A0A] text-base font-semibold items-center gap-2 mt-4 lg:mt-5">
                      {ctaButtonLabel}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lg:w-6 lg:h-6"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                      </svg>
                    </div>
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

export default ProductsGrid;
