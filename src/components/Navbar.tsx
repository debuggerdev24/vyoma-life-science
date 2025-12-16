"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top Alert Bar */}
      <div className="w-full bg-green-900 text-white text-sm py-[13px] text-center shadow-sm">
        📢 Reduce your input costs by up to 25–30% per acre with our herbal crop
        solutions. Talk to our expert
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="h-[26px] w-full"
              src="/logo.png"
              alt="VyomaLife"
              width={100}
              height={100}
            />
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-10 text-gray-700">
            <li>
              <Link href="/" className="hover:text-green-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-700">
                About us
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-green-700">
                Product
              </Link>
            </li>
            <li>
              <Link href="/how-to-use" className="hover:text-green-700">
                How to Use
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-700">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-700">
                Contact us
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
          >
            Get In Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
