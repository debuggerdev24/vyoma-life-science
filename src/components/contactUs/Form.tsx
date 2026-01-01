"use client";

import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [village, setVillage] = useState("");
  const [cropName, setCropName] = useState("");
  const [issue, setIssue] = useState("");

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    state: "",
    city: "",
    village: "",
    cropName: "",
    issue: "",
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

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.trim())) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateAddress = (value: string) => {
    if (!value.trim()) {
      return "Address is required";
    }
    return "";
  };

  const validateState = (value: string) => {
    if (!value) {
      return "Please select a state";
    }
    return "";
  };

  const validateCity = (value: string) => {
    if (!value) {
      return "Please select a city";
    }
    return "";
  };

  const validateVillage = (value: string) => {
    if (!value) {
      return "Please select a village";
    }
    return "";
  };

  const validateCropName = (value: string) => {
    if (!value.trim()) {
      return "Crop name is required";
    }
    return "";
  };

  const validateIssue = (value: string) => {
    if (!value.trim()) {
      return "Issue or query is required";
    }
    if (value.trim().length < 10) {
      return "Please provide more details (at least 10 characters)";
    }
    return "";
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(name);
    const mobileError = validateMobile(mobile);
    const emailError = validateEmail(email);
    const addressError = validateAddress(address);
    const stateError = validateState(state);
    const cityError = validateCity(city);
    const villageError = validateVillage(village);
    const cropNameError = validateCropName(cropName);
    const issueError = validateIssue(issue);

    // Update errors
    setErrors({
      name: nameError,
      mobile: mobileError,
      email: emailError,
      address: addressError,
      state: stateError,
      city: cityError,
      village: villageError,
      cropName: cropNameError,
      issue: issueError,
    });

    // If no errors, submit the form
    if (
      !nameError &&
      !mobileError &&
      !emailError &&
      !addressError &&
      !stateError &&
      !cityError &&
      !villageError &&
      !cropNameError &&
      !issueError
    ) {
      // TODO: Add your form submission logic here
      console.log("Form submitted successfully:", {
        name,
        mobile,
        email,
        address,
        state,
        city,
        village,
        cropName,
        issue,
      });

      // Reset form
      setName("");
      setMobile("");
      setEmail("");
      setAddress("");
      setState("");
      setCity("");
      setVillage("");
      setCropName("");
      setIssue("");
      setErrors({
        name: "",
        mobile: "",
        email: "",
        address: "",
        state: "",
        city: "",
        village: "",
        cropName: "",
        issue: "",
      });

      alert("Thank you! We will respond within 24-48 hours.");
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
      case "email":
        error = validateEmail(value);
        break;
      case "address":
        error = validateAddress(value);
        break;
      case "state":
        error = validateState(value);
        break;
      case "city":
        error = validateCity(value);
        break;
      case "village":
        error = validateVillage(value);
        break;
      case "cropName":
        error = validateCropName(value);
        break;
      case "issue":
        error = validateIssue(value);
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  return (
    <section id="about-section" className="w-full bg-[#F6F7F1] relative">
      <div className="max-w-[1512px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 px-6 lg:px-24 py-14 lg:py-[110px]">
          {/* Left Column - Dark Green Background */}
          <div className="overflow-hidden ">
            {/* Decorative plant illustration */}
            <div className="absolute bottom-0 left-0">
              <img
                src="/wheat-last.png"
                alt=""
                className="w-[470px] h-[690px] hidden lg:block"
              />
            </div>

            <div className="relative z-10 max-w-[600px] lg:ml-auto">
              <p className="text-[#0A0A0AB2] font-semibold text-sm">
                Let's Grow Better
              </p>
              <h2 className="text-[#0A0A0A] text-3xl md:text-[56px] font-normal md:leading-[65px] mb-[10px]">
                Grow Better, Naturally
              </h2>
              <p className="text-[#0A0A0A]/60 text-base leading-relaxed mb-[30px] max-w-[590px]">
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
                    <p className="text-[#0A0A0A]/60 text-base font-normal mb-1">
                      Call Us / WhatsApp
                    </p>
                    <p className="text-[#0A0A0A] text-lg leading-7 font-medium">
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
                    <p className="text-[#0A0A0A]/60 text-base font-normal mb-1">
                      Email us
                    </p>
                    <p className="text-[#0A0A0A] text-lg leading-7 font-medium">
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
                    <p className="text-[#0A0A0A]/60 text-base font-normal mb-1">
                      Visit Us
                    </p>
                    <p className="text-[#0A0A0A] text-lg leading-7 font-medium">
                      Vyoma Life Sciences - Agricultural Innovation Center,
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white mt-10 p-6 lg:p-[50px] max-w-[740px]">
            <form className="" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-6">
                <label className="block text-[#0A0A0A] text-[14px] leading-[150%] font-medium mb-[5px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                  className={`w-full px-4 py-3 bg-white border text-sm placeholder:text-[#0A0A0A]/40 focus:outline-none transition-colors ${
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
              <div className="mb-6">
                <label className="block text-[#0A0A0A] text-[14px] leading-[150%] font-medium mb-[5px]">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  onBlur={(e) => handleBlur("mobile", e.target.value)}
                  className={`w-full px-4 py-3 bg-white border text-sm placeholder:text-[#0A0A0A]/40 focus:outline-none transition-colors ${
                    errors.mobile
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1F4E3D]"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* Email ID Field */}
              <div className="mb-6">
                <label className="block text-[#0A0A0A] text-[14px] leading-[150%] font-medium mb-[5px]">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter your email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e) => handleBlur("email", e.target.value)}
                  className={`w-full px-4 py-3 bg-white border text-sm placeholder:text-[#0A0A0A]/40 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1F4E3D]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Address Field */}
              <div className="mb-6">
                <label className="block text-[#0A0A0A] text-[14px] leading-[150%] font-medium mb-[5px]">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onBlur={(e) => handleBlur("address", e.target.value)}
                  className={`w-full px-4 py-3 bg-white border text-sm placeholder:text-[#0A0A0A]/40 focus:outline-none transition-colors ${
                    errors.address
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1F4E3D]"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* State, City, Village Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* State */}
                <div>
                  <label className="block text-[#0A0A0A] text-[14px] leading-[150%] font-medium mb-[5px]">
                    State
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    onBlur={(e) => handleBlur("state", e.target.value)}
                    className={`w-full px-4 py-3 bg-white border text-sm focus:outline-none transition-colors ${
                      state === "" ? "text-[#0A0A0A]/40" : "text-[#0A0A0A]"
                    } ${
                      errors.state
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#1F4E3D]"
                    }`}
                  >
                    <option value="" disabled>
                      Select state
                    </option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Haryana">Haryana</option>
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-[#0A0A0A] text-[14px] leading-[150%] font-medium mb-[5px]">
                    City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onBlur={(e) => handleBlur("city", e.target.value)}
                    className={`w-full px-4 py-3 bg-white border text-sm focus:outline-none transition-colors ${
                      city === "" ? "text-[#0A0A0A]/40" : "text-[#0A0A0A]"
                    } ${
                      errors.city
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#1F4E3D]"
                    }`}
                  >
                    <option value="" disabled>
                      Select city
                    </option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Ludhiana">Ludhiana</option>
                  </select>
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                  )}
                </div>

                {/* Village */}
                <div>
                  <label className="block text-[#0A0A0A] text-[14px] leading-[150%] font-medium mb-[5px]">
                    Village
                  </label>
                  <select
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    onBlur={(e) => handleBlur("village", e.target.value)}
                    className={`w-full px-4 py-3 bg-white border text-sm focus:outline-none transition-colors ${
                      village === "" ? "text-[#0A0A0A]/40" : "text-[#0A0A0A]"
                    } ${
                      errors.village
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#1F4E3D]"
                    }`}
                  >
                    <option value="" disabled>
                      Select village
                    </option>
                    <option value="Village 1">Village 1</option>
                    <option value="Village 2">Village 2</option>
                    <option value="Village 3">Village 3</option>
                    <option value="Village 4">Village 4</option>
                  </select>
                  {errors.village && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.village}
                    </p>
                  )}
                </div>
              </div>

              {/* Crop Name Field */}
              <div className="mb-6">
                <label className="block text-[#0A0A0A] text-[14px] leading-[150%] font-medium mb-[5px]">
                  Crop Name
                </label>
                <input
                  type="text"
                  placeholder="Crop you are growing"
                  value={cropName}
                  onChange={(e) => setCropName(e.target.value)}
                  onBlur={(e) => handleBlur("cropName", e.target.value)}
                  className={`w-full px-4 py-3 bg-white border text-sm placeholder:text-[#0A0A0A]/40 focus:outline-none transition-colors ${
                    errors.cropName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1F4E3D]"
                  }`}
                />
                {errors.cropName && (
                  <p className="text-red-500 text-xs mt-1">{errors.cropName}</p>
                )}
              </div>

              {/* Issue or Query Field */}
              <div className="mb-6">
                <label className="block text-[#0A0A0A] text-[14px] leading-[150%] font-medium mb-[5px]">
                  Issue or Query
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe the problem (viral, pest, fungal etc.)"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  onBlur={(e) => handleBlur("issue", e.target.value)}
                  className={`w-full px-4 py-3 bg-white border text-sm placeholder:text-[#0A0A0A]/40 resize-none focus:outline-none transition-colors ${
                    errors.issue
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1F4E3D]"
                  }`}
                ></textarea>
                {errors.issue && (
                  <p className="text-red-500 text-xs mt-1">{errors.issue}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#EABE0D] hover:bg-[#d4ab0c] text-white font-semibold py-4 transition-colors"
              >
                Submit Inquiry
              </button>

              {/* Response Time Notice */}
              <p className="text-[#0A0A0A]/60 italic text-sm text-left mt-[5px]">
                We respond within 24–48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
