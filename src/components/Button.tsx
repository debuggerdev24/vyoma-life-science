import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#2D5C2D] text-white hover:bg-[#1e421e] focus:ring-[#2D5C2D]",
    secondary:
      "bg-[#E8F5E8] text-[#2D5C2D] hover:bg-[#D4E8D4] focus:ring-[#2D5C2D]",
    outline:
      "border-2 border-[#2D5C2D] text-[#2D5C2D] hover:bg-[#2D5C2D] hover:text-white focus:ring-[#2D5C2D]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
