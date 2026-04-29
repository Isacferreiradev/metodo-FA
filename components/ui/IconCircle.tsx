import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Tone = "rosa" | "amarelo" | "verde" | "azul" | "lilas" | "branco";
type Size = "sm" | "md" | "lg" | "xl";

interface IconCircleProps {
  children: ReactNode;
  tone?: Tone;
  size?: Size;
  className?: string;
}

const toneStyles: Record<Tone, string> = {
  rosa: "bg-rosa-suave",
  amarelo: "bg-amarelo-sol",
  verde: "bg-verde-menta",
  azul: "bg-azul-bebe",
  lilas: "bg-lilas-calmo",
  branco: "bg-branco-nuvem",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-10 w-10 text-xl",
  md: "h-14 w-14 text-2xl",
  lg: "h-20 w-20 text-4xl",
  xl: "h-28 w-28 text-5xl",
};

export default function IconCircle({
  children,
  tone = "azul",
  size = "md",
  className,
}: IconCircleProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full shadow-soft",
        toneStyles[tone],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
