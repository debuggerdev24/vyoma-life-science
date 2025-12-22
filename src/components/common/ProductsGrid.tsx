"use client";

import { useRouter } from "next/navigation";

interface Tag {
  label: string;
  bgColor: string;
  textColor: string;
}

interface Product {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  tags: Tag[];
  description: string;
}

interface ProductsGridProps {
  sectionLabel: string;
  title: string;
  description: string;
  products: Product[];
  paddingClasses?: string;
}

const ProductsGrid = ({
  sectionLabel,
  title,
  description,
  products,
  paddingClasses = "py-[110px]",
}: ProductsGridProps) => {
  const router = useRouter();

  const handleProductClick = (slug: string) => {
    router.push(`/productDetail/${slug}`);
  };

  return (
    <section className="bg-[#F6F7F1]">
      <div
        className={`flex relative max-w-[1512px] mx-auto px-6 md:px-24 ${paddingClasses} gap-[65px]`}
      >
        <img
          className="absolute bottom-1/3 left-0 max-w-[450px]"
          src="/wheat.png"
          alt=""
        />
        <img
          className="absolute bottom-1/3 right-0 max-w-[450px]"
          src="/wheat-flip.png"
          alt=""
        />
        <div className="flex flex-col justify-center items-center">
          <div className="font-semibold text-sm text-[#0A0A0AB2]">
            {sectionLabel}
          </div>
          <div className="text-[56px]">{title}</div>
          <div className="flex text-center text-[#0A0A0A]/60 text-sm font-normal max-w-[650px] mt-[10px]">
            {description}
          </div>
          <div className="grid grid-cols-4 z-10 mt-[70px] gap-9">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-white cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleProductClick(product.slug)}
              >
                <img
                  className=""
                  src={product.image}
                  alt={product.name.toLowerCase()}
                />
                <div className=" flex flex-col p-[30px] h-full">
                  <p className="text-[24px] font-medium text-[#0A0A0A]">
                    {product.name}
                  </p>
                  <p className="text-[#0a0a0aa2] text-sm">{product.subtitle}</p>
                  <div className="flex gap-[5px] mt-[30px]">
                    {product.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className={`${tag.bgColor} px-[7px] py-1 ${tag.textColor} text-[8px] font-semibold`}
                      >
                        {tag.label}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-[#0a0a0aa2] mt-[10px] mb-[50px]">
                    {product.description}
                  </div>
                  <div className="flex w-full bg-[#1F4E3D] text-white text-sm font-semibold justify-center items-center mt-auto py-[15px]">
                    know more
                  </div>
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
