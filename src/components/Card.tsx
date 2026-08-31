import type { ReactNode } from "react";

export default function Card({
  title,
  icon,
  action,
  children,
  className = "",
}: {
  title?: string;
  icon?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {title && (
        <header className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 sm:px-6">
          <h2 className="flex items-center gap-2.5 text-base font-semibold text-slate-900 sm:text-lg">
            {icon && <span className="text-emerald-700">{icon}</span>}
            {title}
          </h2>
          {action}
        </header>
      )}
      <div className="px-5 py-5 sm:px-6">{children}</div>
    </section>
  );
}
