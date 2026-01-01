import FAQAccordion from "@/components/common/FAQAccordion";

const Content = () => {
  // Product & Usage FAQs
  const productUsageFAQs = [
    {
      id: "01",
      question: "How often should I apply these products?",
      answer:
        "Most products can be applied every 10–12 days depending on crop stage and infection intensity. Preventive cycles give best results.",
    },
    {
      id: "02",
      question: "Can the product be used for all crops?",
      answer:
        "Yes, our products are formulated to be compatible with a wide range of crops including vegetables, fruits, grains, and plantation crops. Refer to the product label for specific crop recommendations and dosage.",
    },
    {
      id: "03",
      question: "How do I determine the correct dosage?",
      answer:
        "Dosage varies by product, crop type, and application method. Always follow the instructions on the product label. You can also consult our technical support team for personalized guidance based on your specific farming conditions.",
    },
    {
      id: "04",
      question: "Can I use it for preventive farming or only when damaged?",
      answer:
        "Absolutely. Our products work both as preventive and curative solutions. For best results, use them preventively before disease onset and continue applications as directed during active infections.",
    },
    {
      id: "05",
      question: "What is the correct dosage?",
      answer:
        "When stored properly in a cool, dry place away from direct sunlight, our products typically have a shelf life of 2-3 years. Check the manufacturing date and expiry date printed on the packaging.",
    },
  ];

  // Safety & Compatibility FAQs
  const safetyCompatibilityFAQs = [
    {
      id: "01",
      question: "Can they be mixed with fertilizers or pesticides?",
      answer:
        "Compatible with most bio-inputs & nutrition sprays, but avoid mixing with strong chemical antivirals or harsh pesticides.",
    },
    {
      id: "02",
      question: "Are Vyoma products safe for organic farming?",
      answer:
        "Farmers can mix our products with other plant-based or organic sprays. Avoid mixing with synthetic chemicals unless recommended by our technical team. Always follow the order of mixing: water first, then products.",
    },
    {
      id: "03",
      question: "Does it leave residue on crops or soil?",
      answer:
        "No, our herbal formulations are designed to break down naturally without leaving harmful residues. They are safe for organic farming and do not accumulate in soil or crops.",
    },
    {
      id: "04",
      question: "Will it harm bees or beneficial insects?",
      answer:
        "Our products work effectively in various climatic conditions. However, avoid spraying during extreme heat (above 35°C) or heavy rains. Early morning or late evening applications are recommended for optimal absorption.",
    },
  ];

  // Purchase & Delivery FAQs
  const purchaseDeliveryFAQs = [
    {
      id: "01",
      question: "Where can I buy Vyoma products?",
      answer:
        "Our products are available through authorized distributors, agricultural dealers, and online platforms. Contact our sales team or visit our website to find the nearest dealer in your area.",
    },
    {
      id: "02",
      question: "Do you offer bulk or dealer supply?",
      answer:
        "Yes, we deliver to both urban and rural locations across India. We work with reliable logistics partners to ensure timely delivery even to remote farming regions.",
    },
    {
      id: "03",
      question: "Do you deliver across India?",
      answer:
        "Yes, we offer wholesale pricing for bulk orders. Farmers, FPOs, and agricultural cooperatives can contact our sales team for special pricing and volume discounts.",
    },
  ];

  // Support & Assistance FAQs
  const supportAssistanceFAQs = [
    {
      id: "01",
      question: "How do I know which product suits my crop?",
      answer:
        "Our technical support team can help you choose the right product based on your crop, pest/disease challenges, and farming practices. You can reach out via phone, WhatsApp, or our contact form.",
    },
    {
      id: "02",
      question: "Can I send photos of my crop for guidance?",
      answer:
        "Absolutely. We provide field demonstrations, training sessions, and one-on-one consultations to help farmers use our products effectively. Contact us to schedule a visit or virtual consultation.",
    },
    {
      id: "03",
      question: "How fast will support respond?",
      answer:
        "For any product issues, concerns, or questions, contact our customer support team via phone at +91 25897 25687, email at info@vyomalifesciences.com, or through the contact form on our website. We're here to help!",
    },
  ];

  return (
    <div className="bg-white">
      {/* Product & Usage FAQs */}
      <FAQAccordion
        faqs={productUsageFAQs}
        sectionTitle="Product & Usage FAQs"
        backgroundColor="bg-[#F6F7F1]"
        showDecorations={true}
      />

      {/* Safety & Compatibility FAQs */}
      <FAQAccordion
        faqs={safetyCompatibilityFAQs}
        sectionTitle="Safety & Compatibility FAQs"
        backgroundColor="bg-white"
        showDecorations={false}
      />

      {/* Purchase & Delivery FAQs */}
      <div className="relative w-full bg-[#F6F7F1]">
        <img
          className="absolute top-20 left-0 max-w-[200px]"
          src="/wheat2.png"
          alt=""
        />
        <img
          className="absolute bottom-[-50px] right-0 max-w-[200px]"
          src="/wheat3.png"
          alt=""
        />
        <FAQAccordion
          faqs={purchaseDeliveryFAQs}
          sectionTitle="Purchase & Delivery FAQs"
          backgroundColor=""
          showDecorations={false}
        />
      </div>

      {/* Support & Assistance FAQs */}
      <FAQAccordion
        faqs={supportAssistanceFAQs}
        sectionTitle="Support & Assistance FAQs"
        backgroundColor="bg-white"
        showDecorations={false}
      />
    </div>
  );
};

export default Content;
