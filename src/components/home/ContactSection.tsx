const ContactSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Dark Green Background */}
          <div className="bg-[#1F4E3D] p-16 relative overflow-hidden">
            {/* Decorative plant illustration */}
            <div className="absolute bottom-0 left-0 opacity-10">
              <img
                src="/wheat-last.png"
                alt=""
                className="w-[470px] h-[690px]"
              />
            </div>

            <div className="relative z-10">
              <p className="text-white/70 font-semibold text-sm">
                Let's Grow Better
              </p>
              <h2 className="text-white text-[56px] font-normal leading-[65px] mb-[10px]">
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
                <div className="flex items-start gap-4">
                  <div className="w-[61px] h-[61px] bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
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
                    <p className="text-white text-[23px] leading-7 font-medium">
                      +91 25897 25687
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-[61px] h-[61px] bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-base font-normal mb-1">
                      EMAIL US
                    </p>
                    <p className="text-white text-[23px] leading-7 font-medium">
                      info@vyomalifesciences.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-[61px] h-[61px] bg-[#FDB714] rounded-full flex items-center justify-center flex-shrink-0">
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
                      VISIT US
                    </p>
                    <p className="text-white text-[23px] leading-7 font-medium">
                      Vyoma Life Sciences - Agricultural Innovation Center,
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="py-[110px] px-[70px]">
            <h2 className="text-[#0A0A0A] text-[56px] font-normal leading-[65px] mb-[10px]">
              Send an Enquiry
            </h2>
            <p className="text-[#0A0A0A] text-sm font-normal opacity-60 mb-10">
              Quick response from our technical support team.
            </p>

            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:border-[#1F4E3D] transition-colors"
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:border-[#1F4E3D] transition-colors"
                />
              </div>

              {/* State and Crop Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                    State
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-[#0A0A0A] focus:outline-none focus:border-[#1F4E3D] transition-colors">
                    <option>Select state</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Gujarat</option>
                    <option>Punjab</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#0A0A0A] text-sm font-medium mb-1">
                    Crop
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-[#0A0A0A] focus:outline-none focus:border-[#1F4E3D] transition-colors">
                    <option>What crop you growing?</option>
                    <option>Tomato</option>
                    <option>Rice</option>
                    <option>Wheat</option>
                    <option>Cotton</option>
                  </select>
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm resize-none focus:outline-none focus:border-[#1F4E3D] transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FDB714] hover:bg-[#e5a612] text-white font-semibold py-4 rounded transition-colors"
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
