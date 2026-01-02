import HeroSection from "@/components/common/HeroSection";
import LogosSection from "@/components/common/LogosSection";
import QuoteSection from "@/components/common/QuoteSection";
import Content from "@/components/FAQs/Content";

const page = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="/faq-hero.png"
        title={<>Frequently Asked &nbsp;Questions</>}
        description="Find answers to the most common questions about our products, usage, dosage, safety, and support. If you still need help, our team is one click away."
        showExploreMore={true}
      />
      <Content />

      <QuoteSection
        backgroundImage="/about-hero.png"
        subtitle="Ready to Recover Your Crop Naturally?"
        heading="Get dosage guidance or consultation based on your crop and region."
        primaryButtonText="Call / Whatsapp"
        secondaryButtonText="Download Brochure"
      />
      <LogosSection />
    </div>
  );
};

export default page;
