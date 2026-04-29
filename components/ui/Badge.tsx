import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Tone = "rosa" | "amarelo" | "verde" | "azul" | "lilas" | "coral";

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const toneStyles: Record<Tone, string> = {
  rosa: "bg-rosa-suave text-azul-profundo",
  amarelo: "bg-amarelo-sol text-azul-profundo",
  verde: "bg-verde-menta text-azul-profundo",
  azul: "bg-azul-bebe text-azul-profundo",
  lilas: "bg-lilas-calmo text-azul-profundo",
  coral: "bg-coral-quente text-white",
};

export default function Badge({ children, tone = "rosa", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-4 py-1.5 font-display text-sm font-semibold",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
