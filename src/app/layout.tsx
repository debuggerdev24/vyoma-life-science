import Navbar from "@/components/Navbar";
import "./globals.css";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
