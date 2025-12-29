import HeroSection from "../common/HeroSection";

const AboutHeroSection = () => {
  return (
    <HeroSection
      backgroundImage="/about-hero.png"
      title={
        <>
          Sustainable Crop Protection
          <br />
          Powered by Nature and Science
        </>
      }
      description="Plant-extract based solutions that boost crop immunity, protect yields, and reduce dependency on harmful chemicals safe for farmers, soil, and the environment."
      showExploreMore={true}
    />
  );
};

export default AboutHeroSection;
