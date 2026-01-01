interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  sectionTitle?: string;
  subtitle?: string;
  backgroundColor?: string;
  showDecorations?: boolean;
}

const FAQAccordion = ({
  faqs,
  sectionTitle,
  subtitle,
  backgroundColor = "bg-[#F6F7F1]",
  showDecorations = true,
}: FAQAccordionProps) => {
  return (
    <section className={`${backgroundColor} relative overflow-hidden`}>
      {/* Decorative wheat illustrations */}
      {showDecorations && (
        <>
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
        </>
      )}

      <div className="max-w-[1096px] mx-auto px-6 py-14 lg:py-[110px] relative z-10">
        {/* Section Title - Optional */}
        {(subtitle || sectionTitle) && (
          <>
            {subtitle && (
              <div className="text-semibold text-sm text-[#0A0A0A]/70">
                {subtitle}
              </div>
            )}
            {sectionTitle && (
              <h2 className="text-3xl lg:text-[56px] leading-[65px] font-normal text-[#0A0A0A] pb-[50px] border-b border-[#0A0A0A]">
                {sectionTitle}
              </h2>
            )}
          </>
        )}

        {/* FAQ Items */}
        <div className="space-y-0 border-gray-300">
          {faqs.map((faq, index) => (
            <details
              key={faq.id}
              className={`group ${
                index !== faqs.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <summary className="flex justify-between items-center pt-10 pb-[10px] cursor-pointer list-none">
                <div className="flex gap-5 lg:gap-[75px] items-center">
                  <span className="text-[#0A0A0A] font-medium opacity-[64%] text-[25px] leading-10">
                    {faq.id}
                  </span>
                  <span className="text-[#0A0A0A] font-normal text-xl lg:text- lg:leading-[40px] max-w-[800px]">
                    {faq.question}
                  </span>
                </div>
                <div className="w-[46px] h-[46px] rounded-full group-open:bg-black flex border border-[#0A0A0A4D] items-center justify-center flex-shrink-0">
                  <span className="text-black text-xl font-light group-open:hidden">
                    +
                  </span>
                  <span className="text-white text-xl font-light hidden group-open:block">
                    -
                  </span>
                </div>
              </summary>
              <div className="pb-6 pl-10 lg:pl-[105px] pr-10 max-w-[800px]">
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

export default FAQAccordion;
