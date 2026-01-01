import HeroSection from "@/components/home/HeroSection";
import LogosSection from "@/components/common/LogosSection";
import AboutSection from "@/components/common/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import VisionSection from "@/components/home/VisionSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ProductsSection from "@/components/home/ProductsSection";
import InnovationSection from "@/components/home/InnovationSection";
import FAQSection from "@/components/home/FAQSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <LogosSection />
      <AboutSection
        id="about-section"
        tag="About Vyoma Life Sciences"
        title={
          <>
            Innovating the Future
            <br />
            of Agriculture
          </>
        }
        paragraphs={[
          "Vyoma Life Sciences develops plant-extract-based alternatives to conventional chemicals used in agriculture and in daily-use hygiene and healthcare products. The company was born out of a simple idea: chemicals that are in direct contact with humans, animals, and soil shouldn't slowly destroy their immunity and the environment around them.",
          "At the heart of Vyoma's work is research and innovation. Using cutting-edge technologies in plant extraction, they develop unique alternatives that address emerging pests and diseases, and can be adapted as new challenges appear in the field.",
        ]}
        buttonText="Explore More"
        showButton={true}
      />
      <StatsSection />
      <ComparisonSection />
      <VisionSection />
      <WhoWeServeSection />
      <BenefitsSection />
      <ProductsSection />
      <InnovationSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Home;
