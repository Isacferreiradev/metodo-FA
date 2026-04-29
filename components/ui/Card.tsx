import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  bgClassName?: string;
  borderClassName?: string;
}

export default function Card({
  children,
  className,
  bgClassName = "bg-branco-nuvem",
  borderClassName,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card p-6 shadow-soft md:p-8",
        bgClassName,
        borderClassName && `border-2 ${borderClassName}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
