import NewsCover from "./NewsCover";
import Link from "next/link";
import type { Locale } from "@/content/types";
import {
  categoryLabels,
  formatNewsDate,
  type NewsItem,
} from "@/content/news";

export default function NewsCard({
  item,
  locale,
  featured = false,
}: {
  item: NewsItem;
  locale: Locale;
  featured?: boolean;
}) {
  const href = `/${locale}/media/${item.slug}`;
  const meta = (
    <p className="flex flex-wrap items-center gap-x-2 text-xs font-medium text-slate-500">
      <span className="font-semibold uppercase tracking-wide text-emerald-700">
        {categoryLabels[locale][item.category]}
      </span>
      <span aria-hidden>·</span>
      <time dateTime={item.date}>{formatNewsDate(item.date, locale)}</time>
    </p>
  );

  if (featured) {
    return (
      <Link
        href={href}
        className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md md:grid-cols-[1.35fr_1fr]"
      >
        <div className="relative aspect-[16/10] bg-slate-100 md:aspect-auto md:min-h-[320px]">
          <NewsCover item={item} locale={locale} sizes="(min-width: 768px) 600px, 100vw" priority />
        </div>
        <div className="flex flex-col p-6 sm:p-7">
          {meta}
          <h2 className="mt-3 text-2xl font-bold leading-snug text-slate-900 group-hover:text-emerald-800">
            {item.title[locale]}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            {item.excerpt[locale]}
          </p>
          {item.sources[0] && (
            <p className="mt-auto pt-5 text-xs text-slate-400">
              {[...new Set(item.sources.map((s) => s.outlet))].join(" · ")}
            </p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] bg-slate-100">
        <NewsCover item={item} locale={locale} sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        {meta}
        <h3 className="mt-2 text-base font-semibold leading-snug text-slate-900 group-hover:text-emerald-800">
          {item.title[locale]}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {item.excerpt[locale]}
        </p>
      </div>
    </Link>
  );
}
