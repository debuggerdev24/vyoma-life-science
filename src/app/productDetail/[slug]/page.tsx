import { notFound } from "next/navigation";
import ProductInfo from "@/components/productDetail/ProductInfo";
import { getProductBySlug } from "@/lib/productData";
import EasyUnderstanding from "@/components/productDetail/EasyUnderstanding";
import WorksBetter from "@/components/productDetail/WorksBetter";
import QuoteSection from "@/components/productDetail/QuoteSection";
import ContactSection from "@/components/home/ContactSection";
import Effectively from "@/components/productDetail/Effectively";
import RealResult from "@/components/productDetail/RealResult";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <ProductInfo product={product} />
      <EasyUnderstanding />
      <WorksBetter />
      <Effectively />
      <RealResult />
      <QuoteSection />
      <ContactSection />
    </div>
  );
}
