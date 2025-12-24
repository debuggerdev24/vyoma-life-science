import ProductsGrid from "../common/ProductsGrid";
import { products } from "@/lib/productData";

const ProductsDisplay = () => {
  return (
    <ProductsGrid
      sectionLabel="Complete Product Line"
      title="Your one complete solutions"
      description="Our expanded portfolio of herbal formulations combines cutting-edge research with traditional botanical wisdom to deliver comprehensive plant protection and growth solutions."
      products={products}
      paddingClasses="pt-[310px] pb-[110px]"
      variant="steps"
      isbgImageVisible={true}
      ctaButtonLabel="View Product"
    />
  );
};

export default ProductsDisplay;
