"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg" | "square";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  label,
  onClick,
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  variant = "primary",
  size = "md",
  type = "button",
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
    square: "p-2",
  };

  const variants = {
    primary: "bg-(--primary) text-white hover:bg-(--primary)/80",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-800 hover:bg-(--primary)/10 hover:text-(--primary)",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "text-gray-800 hover:bg-(--primary)/10 hover:text-(--primary)",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyle} ${sizes[size]} ${variants[variant]}`}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!loading && iconLeft && <span className="w-4 h-4">{iconLeft}</span>}
      {label && <span>{label}</span>}
      {!loading && iconRight && <span className="w-4 h-4">{iconRight}</span>}
    </button>
  );
}
