import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  bgClassName?: string;
  className?: string;
  id?: string;
  innerClassName?: string;
}

export default function SectionContainer({
  children,
  bgClassName = "bg-branco-nuvem",
  className,
  innerClassName,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-4 py-12 md:px-8 md:py-20",
        bgClassName,
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-6xl", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
