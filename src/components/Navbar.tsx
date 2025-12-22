"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/product", label: "Product" },
    { href: "/how-to-use", label: "How to Use" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact us" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full">
      {/* Top Alert Bar */}
      <div className="flex justify-center w-full bg-[#1F4E3D] text-white text-xs py-[13px] px-4 text-center shadow-sm font-medium">
        <span className="flex flex-wrap items-center justify-center gap-1">
          <span>
            📢 Reduce your input costs by up to 25–30% per acre with our herbal
            crop solutions.
          </span>
          <p className="font-bold">Talk to our expert</p>
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="w-full max-w-[1512px] mx-auto bg-white shadow-sm">
        <div className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="h-[22px] md:h-[26px] w-auto"
              src="/logo.png"
              alt="VyomaLife"
              width={100}
              height={26}
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-10 text-[#0A0A0A] text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link href={link.href} className="pb-1 transition-colors">
                    {link.label}
                  </Link>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 top-[42px] h-[2px] bg-[#1F4E3D] rounded-full" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:block bg-black font-semibold text-white text-sm px-5 py-2 hover:bg-gray-800"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col bg-white border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.href}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`block px-6 py-4 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#1F4E3D] bg-[#1F4E3D]/5"
                        : "text-[#0A0A0A] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            {/* Mobile CTA Button */}
            <li className="p-6">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full bg-black font-semibold text-white text-sm text-center px-5 py-3 hover:bg-gray-800"
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
