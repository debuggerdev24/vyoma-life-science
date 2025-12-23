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
    <section className="bg-[#F6F7F1] relative overflow-hidden mt-[110px]">
      {/* Decorative wheat illustrations */}
      <img
        className="absolute top-20 left-0 max-w-[200px] "
        src="/wheat2.png"
        alt=""
      />
      <img
        className="absolute bottom-[-50px] right-0 max-w-[200px] "
        src="/wheat3.png"
        alt=""
      />

      <div className="max-w-[1096px] mx-auto px-6 py-14 lg:py-24 relative z-10">
        {/* Section Title */}
        <div className="text-semibold text-sm text-[#0A0A0A]/70">
          Soil faqs and answers
        </div>
        <h2 className="text-4xl lg:text-[56px] font-normal text-[#0A0A0A] pb-[50px] border-b border-[#0A0A0A]">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0 border-gray-300 mt-10">
          {faqs.map((faq) => (
            <details key={faq.id} className="group border-b border-gray-300">
              <summary className="flex justify-between items-center pt-10 pb-[10px] cursor-pointer list-none">
                <div className="flex gap-[75px] items-center">
                  <span className="text-[#0A0A0A] font-medium opacity-[64%] text-[25px] leading-10">
                    {faq.id}
                  </span>
                  <span className="text-[#0A0A0A] font-normal text-3xl leading-[40px] max-w-[800px]">
                    {faq.question}
                  </span>
                </div>
                <div className="w-[46px] h-[46px] rounded-full group-open:bg-black flex border border-[#0A0A0A4D] items-center justify-center flex-shrink-0">
                  <span className="text-black text-2xl font-light group-open:hidden">
                    +
                  </span>
                  <span className="text-white text-2xl font-light hidden group-open:block">
                    -
                  </span>
                </div>
              </summary>
              <div className="pb-6 pl-[105px] pr-10 max-w-[800px]">
                <p className="text-[#0A0A0A] text-sm leading-relaxed opacity-70">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
