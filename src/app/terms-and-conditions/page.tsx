import HeroSection from "@/components/common/HeroSection";
import React from "react";

interface TermsSection {
  title: string;
  content: {
    type: "paragraph" | "bullets";
    text?: string | string[];
    items?: string[];
    isSemibold?: boolean;
  }[];
}

const termsData: TermsSection[] = [
  {
    title: "Overview of Website Use",
    content: [
      {
        type: "paragraph",
        text: "The website www.vyomalifescience.com provides general information about Vyoma Life Sciences, our herbal agricultural products, research initiatives, and support services for farmers, dealers, and agricultural institutions.",
      },
      {
        type: "paragraph",
        text: "This site may include product information, application guidelines, downloadable files, images, videos, pricing, or contact forms.",
      },
    ],
  },
  {
    title: "Right to Update Terms",
    content: [
      {
        type: "paragraph",
        text: 'Vyoma Life Sciences reserves the right to update, modify, or replace these Terms at any time, without prior notification. Updated terms will be posted here with a revised "Last Updated" date. Continued use of our website after such changes signifies your acceptance.',
      },
      {
        type: "paragraph",
        text: "We recommend reviewing this page periodically.",
      },
    ],
  },
  {
    title: "Website Ownership & Intellectual Property",
    content: [
      {
        type: "paragraph",
        text: "All website content including text, images, branding, product descriptions, graphics, layout, design, and downloadable files is the exclusive property of Vyoma Life Sciences.",
      },
      {
        type: "paragraph",
        text: "You may not:",
        isSemibold: true,
      },
      {
        type: "bullets",
        items: [
          "Copy, reproduce, modify or execute any action without our permission;",
          "Use content for commercial purposes without written approval;",
          "Remove copyright, watermark, confidentiality, or attribution labels",
        ],
      },
      {
        type: "paragraph",
        text: "You may:",
        isSemibold: true,
      },
      {
        type: "bullets",
        items: [
          "View, share, or download content for personal use or for crop guidance",
          "Share material as long as credit is given to Vyoma Life Sciences",
        ],
      },
    ],
  },
  {
    title: "Permitted Use of the Website",
    content: [
      {
        type: "paragraph",
        text: "This site is intended for:",
        isSemibold: true,
      },
      {
        type: "bullets",
        items: [
          "Farmers seeking crop protection solutions",
          "Dealers, distributors & agricultural networks;",
          "Individuals researching herbal-based crop care products",
          "Organic & sustainable farming communities",
        ],
      },
      {
        type: "paragraph",
        text: "You agree not to use the website for illegal, harmful, abusive, or misleading actions.",
      },
    ],
  },
  {
    title: "Third-Party Links & References",
    content: [
      {
        type: "paragraph",
        text: "Our website may include links to external websites, videos, or resources for additional information. Such resources are only for user convenience. Vyoma Life Sciences does not control or guarantee the accuracy, privacy standards, or policies of third-party websites.",
      },
      {
        type: "paragraph",
        text: "YYou are encouraged to review their policies before engagement.",
      },
    ],
  },
  {
    title: "Product Availability Disclaimer",
    content: [
      {
        type: "paragraph",
        text: "Product availability, formulation updates, usage guidelines, and region accessibility may vary by state or country. Agricultural outcomes depend on climatic conditions, crop variety, soil health, water quality, and application accuracy — therefore results can vary from field to field.",
      },
      {
        type: "paragraph",
        text: "Vyoma Life Sciences is not responsible for misuse, incorrect dosage, or improper handling of the product.",
      },
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      {
        type: "paragraph",
        text: "This website is provided “as is” and “as available”, without warranties of any kind, either expressed or implied. We do not guarantee the uninterrupted function, accuracy, or completeness of site information.",
      },
      {
        type: "bullets",
        items: [
          "It is for no in a matter if no errors or omissions.",
          "Any possible errors you face will run an unintended error.",
        ],
      },
      {
        type: "paragraph",
        text: "In these contexts we ask that you refrain from contacting us for any issue such as from this list.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "Vyoma Life Sciences is not liable for:",
        isSemibold: true,
      },
      {
        type: "bullets",
        items: [
          "Loss or damage caused by misuse of products",
          "Crop failure due to external environmental conditions",
          "Errors, interruptions, or delayed information on the website",
          "Loss resulting from reliance on website content",
        ],
      },
      {
        type: "paragraph",
        text: "Users are responsible for following proper dosage and safety instructions.",
      },
    ],
  },
  {
    title: "Severability Clause",
    content: [
      {
        type: "paragraph",
        text: "If any condition within these Terms is deemed invalid by law, the remaining sections will continue to remain active, enforceable, and legally valid.",
      },
    ],
  },
  {
    title: "Entire Agreement",
    content: [
      {
        type: "paragraph",
        text: "These Terms constitute the complete agreement between the website user and Vyoma Life Sciences. No additional verbal or written communication shall override what is stated here.",
      },
    ],
  },
];

const Page = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/contact-hero.png"
        title="Terms and conditions"
        showExploreMore={false}
        minHeight="h-[300px]"
        description=""
      />
      <div className="max-w-[1200px] mx-auto px-6 py-14 lg:py-[110px]">
        {termsData.map((section, index) => (
          <div key={index} className="mb-[50px]">
            <h2 className="text-[23px] leading-[28px] font-medium text-[#0A0A0A] mb-[14px]">
              {section.title}
            </h2>
            <div className="gap-[10px]">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {item.type === "paragraph" && (
                    <p
                      className={`text-[#0A0A0A]/60 text-[16px] leading-[160%] ${
                        item.isSemibold
                          ? "font-semibold mt-[14px]"
                          : "font-normal"
                      }`}
                    >
                      {item.text}
                    </p>
                  )}
                  {item.type === "bullets" && item.items && (
                    <ul className="list-disc  pl-6 space-y-2">
                      {item.items.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-[#0A0A0A]/60 text-[16px] leading-[160%] font-normal"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
