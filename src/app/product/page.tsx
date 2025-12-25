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
        <div className="md:absolute mx-auto w-full md:top-0 md:-translate-y-1/2 z-20 md:px-24 px-6 max-md:py-6">
          <ProductsDistributorSection />
        </div>

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
