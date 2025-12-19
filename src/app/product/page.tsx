import ContactSection from "@/components/home/ContactSection";
import StatsSection from "@/components/home/StatsSection";
import ProductHeroSection from "@/components/products/ProductHeroSection";
import ProductsDisplay from "@/components/products/ProductsDisplay";
import ProductsDistributorSection from "@/components/products/ProductsDistributorSection";

const Products = () => {
  return (
    <div className="relative">
      <ProductHeroSection />

      {/* Content container */}
      <div className="relative">
        {/* Sticky distributor section */}
        {/* <div className="sticky top-0 z-20">
          <ProductsDistributorSection />
        </div> */}

        {/* Rest of the content */}
        <div className="relative z-10">
          <ProductsDisplay />
          <StatsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Products;
