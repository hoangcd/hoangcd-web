import type { TimelineItem } from "@/content/types";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l-2 border-slate-200 pl-6 sm:pl-8">
      {items.map((item, i) => (
        <li key={i} className="mb-10 last:mb-0">
          <span
            className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white ${
              item.current ? "bg-emerald-600" : "bg-slate-300"
            }`}
          />
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900">
              {item.role}
            </h3>
            {item.current && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                Current
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-emerald-700">{item.org}</p>
          <p className="mt-0.5 text-sm text-slate-500">{item.period}</p>
          <ul className="mt-3 space-y-1.5">
            {item.bullets.map((b, j) => (
              <li key={j} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
