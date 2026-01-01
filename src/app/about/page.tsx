import HeroSection from "@/components/About/HeroSection";
import MakesUsDifferent from "@/components/About/MakesUsDifferent";
import QuoteSection from "@/components/About/QuoteSection";
import ResearchEvolution from "@/components/About/ResearchEvolution";
import VisionSection from "@/components/About/VisionSection";
import AboutSection from "@/components/common/AboutSection";
import LogosSection from "@/components/common/LogosSection";
import ContactSection from "@/components/home/ContactSection";
import ProductsSection from "@/components/home/ProductsSection";

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <AboutSection
        id="about-section"
        tag="Who We Are"
        title={
          <>
            Rooted in Nature,
            <br />
            Driven by Science
          </>
        }
        paragraphs={[
          "Vyoma Life Sciences was founded with a purpose to create agricultural solutions that protect crops without harming farmers, soil, water, animals, or the environment. For many years, Indian agriculture has relied heavily on chemical inputs, and while they delivered quick control, they also brought long-term damage: reduced soil fertility, polluted water sources, declining biodiversity, and serious farmer health concerns from constant chemical exposure.",
          "Our approach puts farmers and soil at the center of innovation. We believe that agriculture should not compromise the health of the land or the people who nurture it. That is why our products are designed not only to protect crops but also to strengthen the plant’s internal immunity, restore soil biology, reduce external input dependency, and ensure safe food production for consumers.",
        ]}
        buttonText="Learn About Our Journey"
        showButton={false}
      />
      <LogosSection />
      <VisionSection />
      <ResearchEvolution />
      <MakesUsDifferent />
      <ProductsSection />
      <QuoteSection />
      <ContactSection />
    </div>
  );
}
