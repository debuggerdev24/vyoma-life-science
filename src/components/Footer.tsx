import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12 ">
      <div className="container relative overflow-y-hidden mx-auto ">
        {/* Top Section */}
        <div className="flex gap-[213px] mb-[100px] px-6">
          {/* Left Column */}
          <div className="max-w-[312px]">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-footer.png"
                alt="VyomaLife"
                className="w-[145px] h-[26px]"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              High-performance products developed for safe, sustainable, and
              residue-free farming.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-xl">
              <Link href="#" className="hover:text-green-500">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:text-green-500">
                <FaInstagram />
              </Link>
              <Link href="#" className="hover:text-green-500">
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div className="flex gap-[160px] ">
            {/* Quick Links */}
            <div className="">
              <h3 className="font-semibold mb-5 min-w-max">QUICK LINKS</h3>
              <ul className="font-normal text-white/80 text-base">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/product">Products</Link>
                </li>
                <li>
                  <Link href="/how-to-use">How to Use</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Our Products */}
            <div>
              <h3 className="font-semibold mb-5">OUR PRODUCTS</h3>
              <ul className="font-normal text-white/80 text-base">
                <li>
                  <Link href="#">MTK+ – Vitaminozulty</Link>
                </li>
                <li>
                  <Link href="#">AG40 – Growth Enhancer</Link>
                </li>
                <li>
                  <Link href="#">JNV – Growth Promoter</Link>
                </li>
                <li>
                  <Link href="#">BUDINA – Plant Care</Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-5">SUPPORT</h3>
              <ul className="font-normal text-white/80 text-base">
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <img
          src="/logo-footer.png"
          alt="logo"
          className="w-full h-[199px] opacity-10 absolute -bottom-14 "
        />
        <div className="text-center text-white text-sm border-t border-gray-700 pt-5 pb-6">
          © {new Date().getFullYear()} VyomaLife Services — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
