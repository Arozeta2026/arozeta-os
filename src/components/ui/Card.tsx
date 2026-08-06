import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "border border-slate-800",
        "bg-slate-900/80",
        "backdrop-blur-xl",
        "shadow-2xl",
        "transition-all duration-300",
        "hover:border-slate-700",
        "hover:shadow-blue-500/10",
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}