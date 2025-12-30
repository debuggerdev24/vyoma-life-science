"use client";
import ImageContentSection from "../common/ImageContentSection";
import { useState, useEffect } from "react";

const InnovationSection = () => {
  const contentItems = [
    {
      icon: "/research.png",
      title: "Continuous Research",
      description:
        "We constantly improve and refine formulations using updated agricultural research, extensive crop trials, and continuous farmer feedback from real field conditions.",
      iconBgColor: "bg-[#FDB714] p-[15px]",
    },
    {
      icon: "/bulb.png",
      title: "Innovation-Driven",
      description:
        "Our R&D team actively tracks new diseases, pests, and farm stress patterns, creating customized herbal remedies for emerging agricultural challenges effectively.",
      iconBgColor: "bg-[#FDB714] p-[15px]",
    },
    {
      icon: "/tube.png",
      title: "Science-Backed Solutions",
      description:
        "Every product undergoes scientific validation, combining Ayurvedic knowledge with modern agricultural science to ensure reliable, consistent, and high-performance results across crops.",
      iconBgColor: "bg-[#FDB714] p-[15px]",
    },
    {
      icon: "/leaf2.png",
      title: "Standing Unique",
      description:
        "We specialize in custom, problem-specific herbal solutions that support sustainable farming, reduce chemical dependency, and deliver long-term ecological safety benefits.",
      iconBgColor: "bg-[#FDB714] p-[15px]",
    },
  ];

  const testimonials = [
    {
      title: "Yield Boost",
      quote:
        '"JIVA improved flowering and fruit holding dramatically. Flower drop reduced, fruit size increased, and yield was noticeably higher in our tomato farm compared to last season."',
      image: "/LucasBennett.png",
      name: "Lucas Bennett",
      location: "Tomato Farmer – Karnataka",
    },
    {
      title: "Pest Control Success",
      quote:
        '"After using RAKSHAK, we saw a dramatic reduction in pest attacks. The organic formula protected our crops without harming beneficial insects. Highly recommend for sustainable farming."',
      image: "/LucasBennett.png",
      name: "Priya Sharma",
      location: "Cotton Farmer – Gujarat",
    },
    {
      title: "Disease Prevention",
      quote:
        '"SURAKSHA has been a game-changer for our wheat crops. The fungal infections that plagued us for years are now under control. Our harvest quality has improved significantly."',
      image: "/LucasBennett.png",
      name: "Rajesh Kumar",
      location: "Wheat Farmer – Punjab",
    },
    {
      title: "Healthy Growth",
      quote:
        '"Using VRIDHI showed amazing results in our vegetable farm. Plants grew stronger, greener, and more resistant to climate stress. The difference was visible within weeks."',
      image: "/LucasBennett.png",
      name: "Meena Patel",
      location: "Vegetable Farmer – Maharashtra",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="bg-white">
      <ImageContentSection
        sectionLabel="Botanical Extracts Innovation Lab"
        title="Innovation & Sustainability"
        subtitle="We combine Ayurvedic wisdom with modern research to create science-backed herbal crop protection solutions that are safe, effective, and future-ready."
        image="/farmer3.png"
        imageAlt="farmer"
        contentItems={contentItems}
        imagePosition="left"
        bgColor=""
        containerClasses="max-w-[1512px] mx-auto px-6 lg:px-24 py-14 lg:py-[110px] gap-[50px]"
        imageClasses="h-full lg:max-h-[922px] w-full lg:max-w-[621px] object-cover"
      />

      <div className="flex flex-col justify-center items-center max-w-[850px] px-2 mx-auto lg:mb-[110px] mb-[50px]">
        <div className="text-[47px] leading-[50px] text-[#0A0A0A]">
          {testimonials[currentSlide].title}
        </div>
        <div className="text-center text-[23px] font-normal mt-5 text-[#0A0A0ACC]">
          {testimonials[currentSlide].quote}
        </div>
        <div className="flex flex-col items-center mb-[5px] mt-[45px]">
          <img
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="text-sm font-semibold text-[#0A0A0A]">
            {testimonials[currentSlide].name}
          </div>
          <div className="text-xs font-normal text-[#0A0A0A] opacity-65">
            {testimonials[currentSlide].location}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#0A0A0A]"
                  : "bg-[#0A0A0A]/30 hover:bg-[#0A0A0A]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
