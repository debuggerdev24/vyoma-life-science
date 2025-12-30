import Form from "@/components/contactUs/Form";
import HeroSection from "@/components/contactUs/HeroSection";
import FAQSection from "@/components/home/FAQSection";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <Form />

      {/* Map Section */}
      <div className="w-full bg-white py-14 lg:py-[110px]">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411287501422!3d18.562253682539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1704194521234!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
      <FAQSection />
    </>
  );
};

export default page;
