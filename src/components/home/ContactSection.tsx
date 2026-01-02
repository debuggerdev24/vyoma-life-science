"use client";
import { useState } from "react";

const ContactSection = () => {
  // Form state
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [crop, setCrop] = useState("");
  const [message, setMessage] = useState("");

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    state: "",
    crop: "",
    message: "",
  });

  // Validation functions
  const validateName = (value: string) => {
    if (!value.trim()) {
      return "Name is required";
    }
    if (value.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    return "";
  };

  const validateMobile = (value: string) => {
    if (!value.trim()) {
      return "Mobile number is required";
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(value.trim())) {
      return "Please enter a valid 10-digit mobile number";
    }
    return "";
  };

  const validateState = (value: string) => {
    if (!value) {
      return "Please select a state";
    }
    return "";
  };

  const validateCrop = (value: string) => {
    if (!value) {
      return "Please select a crop";
    }
    return "";
  };

  const validateMessage = (value: string) => {
    if (!value.trim()) {
      return "Message is required";
    }
    if (value.trim().length < 10) {
      return "Message must be at least 10 characters";
    }
    return "";
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(name);
    const mobileError = validateMobile(mobile);
    const stateError = validateState(state);
    const cropError = validateCrop(crop);
    const messageError = validateMessage(message);

    // Update errors
    setErrors({
      name: nameError,
      mobile: mobileError,
      state: stateError,
      crop: cropError,
      message: messageError,
    });

    // If no errors, submit the form
    if (
      !nameError &&
      !mobileError &&
      !stateError &&
      !cropError &&
      !messageError
    ) {
      // TODO: Add your form submission logic here
      console.log("Form submitted successfully:", {
        name,
        mobile,
        state,
        crop,
        message,
      });

      // Reset form
      setName("");
      setMobile("");
      setState("");
      setCrop("");
      setMessage("");
      setErrors({
        name: "",
        mobile: "",
        state: "",
        crop: "",
        message: "",
      });

      alert("Thank you! Our team will contact you soon.");
    }
  };

  // Handle field blur for real-time validation
  const handleBlur = (field: string, value: string) => {
    let error = "";
    switch (field) {
      case "name":
        error = validateName(value);
        break;
      case "mobile":
        error = validateMobile(value);
        break;
      case "state":
        error = validateState(value);
        break;
      case "crop":
        error = validateCrop(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  return (
    <section className="bg-white">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Dark Green Background */}
          <div className="bg-[#1F4E3D] px-6 lg:px-24 py-14 lg:py-[110px] relative overflow-hidden">
            {/* Decorative plant illustration */}
            <div className="absolute bottom-0 left-0 opacity-10">
              <img
                src="/wheat-last.png"
                alt=""
                className="w-[470px] h-[690px]"
              />
            </div>

            <div className="relative z-10 max-w-[600px] lg:ml-auto">
              <p className="text-white/70 font-semibold text-sm">
                Let's Grow Better
              </p>
              <h2 className="text-white text-3xl md:text-[56px] font-normal md:leading-[65px] mb-[10px]">
                Grow Better, Naturally
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-[30px] max-w-[590px]">
                Get in touch and our experts will help you choose the right
                herbal crop protection solution based on your crop, season, and
                farming challenges.
              </p>

              {/* Contact Information */}
              <div className="flex flex-col gap-[30px]">
                {/* Phone */}
                <div className="flex items-center md:gap-4 gap-2">
                  <div className="md:w-[61px] md:h-[61px] h-[45px] w-[45px] bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-[30px] h-[30px] text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-base font-normal mb-1">
                      Call Us / WhatsApp
                    </p>
                    <p className="text-white text-lg leading-7 font-medium">
                      +91 25897 25687
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center md:gap-4 gap-2">
                  <div className="md:w-[61px] md:h-[61px] h-[45px] w-[45px] bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="/mail.png"
                      alt="mail"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div>
                    <p className="text-white/60 text-base font-normal mb-1">
                      Email us
                    </p>
                    <p className="text-white text-lg leading-7 font-medium">
                      info@vyomalifesciences.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center md:gap-4 gap-2">
                  <div className="md:w-[61px] md:h-[61px] h-[45px] w-[45px] bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-[30px] h-[30px] text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-base font-normal mb-1">
                      Visit Us
                    </p>
                    <p className="text-white text-lg leading-7 font-medium">
                      Vyoma Life Sciences - Agricultural Innovation Center,
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="py-14 lg:py-[110px] px-6 lg:px-24 max-w-[740px]">
            <h2 className="text-[#0A0A0A] md:text-[56px] text-3xl font-normal md:leading-[65px] mb-[10px]">
              Send an Enquiry
            </h2>
            <p className="text-[#0A0A0A] text-sm font-normal opacity-60 mb-10">
              Quick response from our technical support team.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                  className={`w-full px-4 py-3 bg-white border rounded text-sm focus:outline-none transition-colors ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1F4E3D]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  onBlur={(e) => handleBlur("mobile", e.target.value)}
                  className={`w-full px-4 py-3 bg-white border rounded text-sm focus:outline-none transition-colors ${
                    errors.mobile
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1F4E3D]"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* State and Crop Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                    State
                  </label>

                  <div className="relative w-full max-w-[283px] mx-auto mt-auto border border-[#DDDDDD]">
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      onBlur={(e) => handleBlur("state", e.target.value)}
                      className={`w-full bg-white px-5 py-4 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-black ${
                        state === "" ? "text-gray-500" : "text-[#0A0A0A]"
                      } ${
                        errors.state
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-[#1F4E3D]"
                      }`}
                    >
                      <option value="" disabled>
                        Select your state
                      </option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Punjab">Punjab</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                    Crop
                  </label>
                  <div className="relative w-full max-w-[283px] mx-auto mt-auto border border-[#DDDDDD]">
                    <select
                      value={crop}
                      onChange={(e) => setCrop(e.target.value)}
                      onBlur={(e) => handleBlur("crop", e.target.value)}
                      className={`w-full bg-white px-5 py-4 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-black ${
                        crop === "" ? "text-gray-500" : "text-[#0A0A0A]"
                      } ${
                        errors.crop
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-[#1F4E3D]"
                      }`}
                    >
                      <option value="" disabled>
                        What crop are you growing?
                      </option>
                      <option value="Tommato">Tommato</option>
                      <option value="Rice">Rice</option>
                      <option value="Wheat">Wheat</option>
                      <option value="Cotton">Cotton</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                  {errors.crop && (
                    <p className="text-red-500 text-xs mt-1">{errors.crop}</p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your farming challenge or requirement"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={(e) => handleBlur("message", e.target.value)}
                  className={`w-full px-4 py-3 bg-white border rounded text-sm resize-none focus:outline-none transition-colors ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1F4E3D]"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FDB714] hover:bg-[#e5a612] text-white font-semibold py-4 transition-colors"
              >
                Get Expert Guidance
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
