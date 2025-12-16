import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="VyomaLife" />
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

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
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
            <h3 className="font-semibold mb-4">OUR PRODUCTS</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
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
            <h3 className="font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
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

        {/* Bottom Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} VyomaLife Services — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
