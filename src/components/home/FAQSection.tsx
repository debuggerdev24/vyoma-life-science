import FAQAccordion from "@/components/common/FAQAccordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "01",
      question: "Are these products safe for organic or natural farming?",
      answer:
        "Yes. Our formulations are plant-extract-based and suitable for organic, natural, and integrated farming systems. They leave no harmful residues and support sustainable agriculture practices.",
    },
    {
      id: "02",
      question:
        "Can they be used along with fertilizers or existing crop programs?",
      answer:
        "Absolutely. Our products are compatible with most fertilizers and can be integrated into existing crop protection programs. They work synergistically to enhance overall plant health and productivity.",
    },
    {
      id: "03",
      question: "Which crops do your products support?",
      answer:
        "Our products support a wide range of crops including vegetables (tomato, chili, brinjal), fruits (grapes, mango, pomegranate), grains (wheat, rice), sugarcane, and plantation crops (tea, coffee). They are effective across diverse farming conditions.",
    },
    {
      id: "04",
      question: "How do I apply the products via spray or soil?",
      answer:
        "Application methods vary by product. MITRA and RUDRA are typically applied as foliar sprays. ARKA can be used for seed treatment, soil application, or foliar spray. JIVA is applied as a foliar spray or soil drench. Detailed application guidelines are provided with each product.",
    },
  ];

  return (
    <FAQAccordion
      faqs={faqs}
      sectionTitle="Frequently Asked Questions"
      subtitle="Soil faqs and answers"
      backgroundColor="bg-[#F6F7F1]"
      showDecorations={true}
    />
  );
};

export default FAQSection;
