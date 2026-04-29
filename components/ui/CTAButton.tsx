"use client";

import { cn } from "@/lib/utils";
import { appendUtms } from "@/lib/utm";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg" | "xl";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
}

const sizeStyles: Record<Size, string> = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-coral-quente text-white hover:brightness-105 active:brightness-95 shadow-soft",
  secondary:
    "bg-azul-profundo text-white hover:brightness-105 active:brightness-95",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  ariaLabel,
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) return;

    const finalUrl = appendUtms(href);
    if (finalUrl !== href) {
      e.preventDefault();
      window.location.href = finalUrl;
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-pill font-display font-bold transition-all duration-200 hover:-translate-y-0.5",
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
