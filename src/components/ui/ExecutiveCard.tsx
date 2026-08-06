import { ReactNode } from "react";

interface ExecutiveCardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export default function ExecutiveCard({
  title,
  subtitle,
  children,
  className = "",
  action,
}: ExecutiveCardProps) {
  return (
    <section
      className={`
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-[#111827]
        shadow-xl
        transition-all
        duration-300
        hover:border-slate-700
        hover:shadow-2xl
        ${className}
      `}
    >
      {(title || subtitle || action) && (
        <header className="flex items-start justify-between border-b border-slate-800 px-7 py-6">

          <div>

            {title && (
              <h2 className="text-lg font-semibold tracking-tight text-white">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-slate-400">
                {subtitle}
              </p>
            )}

          </div>

          {action && (
            <div>
              {action}
            </div>
          )}

        </header>
      )}

      <div className="p-7">
        {children}
      </div>

    </section>
  );
}