import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12">
      <div className="container relative overflow-hidden mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[213px] mb-[60px]">
          {/* Left Column */}
          <div className="max-w-full lg:max-w-[312px]">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-footer.png"
                alt="VyomaLife"
                className="w-[145px] h-[26px]"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
             Herbal crop protection solutions for safer, sustainable, and residue-free farming.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-[14px] text-xl">
              <div className="rounded-full border-[1px] border-white/10 p-[15px]">
                <Link href="#" className="hover:text-green-500">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="rounded-full border-[1px] border-white/10 p-[15px]">
                <Link href="#" className="hover:text-green-500">
                  <FaInstagram />
                </Link>
              </div>
              <div className="rounded-full border-[1px] border-white/10 p-[15px]">
                <Link href="#" className="hover:text-green-500">
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row gap-10 justify-between">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-5">QUICK LINKS</h3>
              <ul className="font-normal text-white/80 text-sm space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-use" className="hover:text-white transition-colors">
                    How to Use
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Products */}
            <div>
              <h3 className="font-semibold mb-5">OUR PRODUCTS</h3>
              <ul className="font-normal text-white/80 text-sm flex flex-col gap-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    MITRA - Viral Immunity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    AKRA - Fungal & Bacterial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    JIVA - Growth Promoter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    RUDRA - Pest Control
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-5">SUPPORT</h3>
              <ul className="font-normal text-white/80 text-sm space-y-2">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <img
          src="/logo-footer.png"
          alt="logo"
          className="w-full h-[199px] opacity-10 absolute -bottom-14 pointer-events-none"
        />
        <div className="text-center text-white text-sm border-t border-gray-700 pt-5 pb-6 relative z-10">
          © {new Date().getFullYear()} VyomaLife Services — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}