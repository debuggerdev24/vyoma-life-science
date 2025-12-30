import React from "react";
import QuoteSection from "@/components/common/QuoteSection";

const AboutQuoteSection = () => {
  return (
    <QuoteSection
      backgroundImage="/about-hero.png"
      subtitle="Agriculture feeds the world and we help agriculture thrive naturally."
      heading="Uniting Farmers, Dealers and Institutions to Build a Safe and Sustainable Future for Agriculture"
      primaryButtonText="Speak to our expert"
      secondaryButtonText="View our products"
      primaryButtonLink="/contact-us"
      secondaryButtonLink="/product"
    />
  );
};

export default AboutQuoteSection;
