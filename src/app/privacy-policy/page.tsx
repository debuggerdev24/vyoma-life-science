import HeroSection from "@/components/common/HeroSection";
import React from "react";

interface PolicySection {
  title: string;
  content: {
    type: "paragraph" | "bullets";
    text?: string | string[];
    items?: string[];
    isSemibold?: boolean;
  }[];
}

const policyData: PolicySection[] = [
  {
    title: "Privacy Statement",
    content: [
      {
        type: "paragraph",
        text: "Vyoma Life Sciences (“we”, “our”, “us”) is committed to protecting the personal privacy and information of individuals who visit and interact with this website.",
      },
      {
        type: "paragraph",
        text: "This Privacy Statement describes how we collect, use, and safeguard personal information submitted through our website. By accessing or using this site, you acknowledge and agree to the practices described below.",
      },
    ],
  },
  {
    title: "Effective Date",
    content: [
      {
        type: "paragraph",
        text: "August 1, 2020",
      },
    ],
  },
  {
    title: "Updates to This Statement",
    content: [
      {
        type: "paragraph",
        text: "Vyoma Life Sciences may update or change this Privacy Statement at any time. Any modifications will be posted here and, where significant, will apply only going forward. We encourage users to review this page regularly to stay informed about changes in how their information may be used.",
      },
    ],
  },
  {
    title: "Scope of This Statement",
    content: [
      {
        type: "paragraph",
        text: "This Privacy Statement applies to all personal data collected through our website. “Personal Information” includes any data that identifies you individually—alone or in combination with other information.",
      },
    ],
  },
  {
    title: "Commitment to Privacy",
    content: [
      {
        type: "paragraph",
        text: "We respect the personal privacy of every user who visits and interacts with our website. Our priority is to ensure that the information you share with us remains secure, confidential, and is used only for legitimate service purposes.",
      },
    ],
  },
  {
    title: "Scope of This Policy",
    content: [
      {
        type: "paragraph",
        text: "This Privacy Statement applies only to personal information collected through this website. Personal Information refers to details like your name, phone number, location, email address, and crop-related inquiry details which identify or relate to you directly.",
      },
    ],
  },
  {
    title: "Information We Collect",
    content: [
      {
        type: "paragraph",
        text: "We collect two types of information — personal data submitted by you (name, mobile, email, location, crop details) through forms or inquiry submissions, and non-personal/technical data such as IP address, browser type, device information, pages visited, and time spent, which helps us understand website performance and user interaction.",
      },
      {
        type: "paragraph",
        text: "Our website uses cookies and similar technologies to analyse how users navigate pages, how long they stay, and which content they interact with most. Cookies help us improve user experience, but can be turned off in browser settings if preferred.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      {
        type: "paragraph",
        text: "We use your information only to provide product guidance, respond to inquiries, recommend correct usage, share updates, improve website experience, meet legal requirements, and ensure secure use of services. We do not sell, misuse or monetize your personal information.",
      },
      {
        type: "paragraph",
        text: "Your data is shared only when necessary — such as with internal support teams or logistics partners to assist with product inquiries or services. Personal information is never sold or transferred for marketing without consent.",
      },
      {
        type: "paragraph",
        text: "You may request access, correction, updating or deletion of your personal information at any time. You may also withdraw consent for communication or data usage whenever needed, and we will respect and act on your request.",
      },
    ],
  },
  {
    title: "Data Security Measures",
    content: [
      {
        type: "paragraph",
        text: "We maintain strong security procedures to safeguard your personal information using technical and administrative controls. While no digital platform is 100% breach-proof, we take every reasonable step to prevent unauthorized access or misuse of data.",
      },
      {
        type: "paragraph",
        text: "This website is not intended for individuals under the age of 18. We do not knowingly collect information from minors, and any accidental submission can be requested for removal.",
      },
      {
        type: "paragraph",
        text: "We may update this Privacy Statement occasionally. Any change will be published here, and continued use of the website implies acceptance of updated terms. We encourage users to review this page periodically.",
      },
    ],
  },
];

const Page = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/contact-hero.png"
        title="Privacy Policy"
        showExploreMore={false}
        minHeight="h-[300px]"
        description=""
      />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 py-14 lg:py-[110px]">
        {policyData.map((section, index) => (
          <div key={index} className="mb-[50px]">
            <h2 className="text-[23px] leading-[28px] font-medium text-[#0A0A0A] mb-[14px]">
              {section.title}
            </h2>
            <div className="gap-[10px]">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {item.type === "paragraph" && (
                    <p
                      className={` my-[14px] text-[#0A0A0A]/60 text-[16px] leading-[160%] ${
                        item.isSemibold ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {item.text}
                    </p>
                  )}
                  {item.type === "bullets" && item.items && (
                    <ul className="list-square pl-6 space-y-2">
                      {item.items.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-[#0A0A0A]/60 text-[16px] leading-[160%] font-normal mt-[14px]"
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
