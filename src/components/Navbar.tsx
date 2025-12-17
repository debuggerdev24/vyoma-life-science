"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/product", label: "Product" },
    { href: "/how-to-use", label: "How to Use" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact us" },
  ];

  return (
    <header className="w-full">
      {/* Top Alert Bar */}
      <div className="flex justify-center w-full bg-[#1F4E3D] text-white text-xs py-[13px] text-center shadow-sm font-medium">
        📢 Reduce your input costs by up to 25–30% per acre with our herbal crop
        solutions.
        <p className="font-bold ml-1">Talk to our expert</p>
      </div>

      {/* Main Navbar */}
      <nav className="w-full max-w-[1512px] mx-auto bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4">
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
          <ul className="hidden md:flex items-center gap-10 text-[#0A0A0A] text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={` pb-1 transition-colors ${isActive ? "" : ""}`}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 top-[42px] h-[2px] bg-[#1F4E3D] rounded-full" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-black font-semibold text-white text-sm px-5 py-2 hover:bg-gray-800"
          >
            Get In Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
