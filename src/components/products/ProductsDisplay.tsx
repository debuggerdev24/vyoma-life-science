import ProductsGrid from "../common/ProductsGrid";
import { products } from "@/lib/productData";

const ProductsDisplay = () => {
  return (
    <ProductsGrid
      sectionLabel="Our Solutions"
      title="Your one complete solutions"
      description="We offer solutions to protect crops from all types of weeds, pests, and diseases at every stage of growth."
      products={products}
      paddingClasses="md:pt-[310px] pb-[110px]"
      variant="steps"
      isbgImageVisible={true}
      ctaButtonLabel="View Product"
    />
  );
};

export default ProductsDisplay;
