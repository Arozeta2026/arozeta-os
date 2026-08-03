import { ReactNode } from "react";

interface ExecutiveCardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function ExecutiveCard({
  title,
  subtitle,
  children,
  className = "",
}: ExecutiveCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-800/70
        bg-slate-900/70
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:border-slate-700
        hover:shadow-[0_0_40px_rgba(37,99,235,0.12)]
        ${className}
      `}
    >
      {(title || subtitle) && (
        <div className="border-b border-slate-800 px-6 py-5">

          {title && (
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          )}

        </div>
      )}

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}