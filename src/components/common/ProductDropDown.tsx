"use client";

import { useRouter } from "next/navigation";
import { Product } from "./ProductsGrid";

interface ProductDropDownProps {
  products: Product[];
}

const ProductDropDown = ({ products }: ProductDropDownProps) => {
  const router = useRouter();

  const handleProductClick = (slug: string) => {
    router.push(`/productDetail/${slug}`);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1512px] mx-auto px-24 py-[50px]">
        {/* Products Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col cursor-pointer group"
              onClick={() => handleProductClick(product.slug)}
            >
              {/* Image Container with Overlay Button */}
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  src={product.image}
                  alt={product.name.toLowerCase()}
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col mt-[10px]">
                <h3 className="text-2xl font-medium leading-[30px] text-[#0A0A0A]">
                  {product.name}
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-[150%]">
                  {product.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDropDown;
