import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Newspaper } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import PageIntro from "@/components/PageIntro";
import { press } from "@/content/press";
import {
  categoryLabels,
  getNews,
  newsUi,
  type NewsCategory,
} from "@/content/news";

const CATEGORIES: (NewsCategory | "all")[] = [
  "all",
  "science",
  "innovation",
  "policy",
  "event",
];

export default async function NewsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ c?: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l).media;
  const ui = newsUi[l];
  const { c } = await searchParams;

  const all = getNews();
  const active = CATEGORIES.includes(c as NewsCategory) ? (c as NewsCategory) : "all";
  const items = active === "all" ? all : all.filter((n) => n.category === active);
  const used = new Set(all.map((n) => n.category));
  const tabs = CATEGORIES.filter((cat) => cat === "all" || used.has(cat as NewsCategory));
  const [featured, ...rest] = items;
  const years = [...new Set(press.map((p) => p.date.slice(0, 4)))].sort().reverse();
  const fmt = (d: string) => d.split("-").reverse().join("/");

  return (
    <div className="bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        <PageIntro title={dict.title} intro={dict.intro} />

        {all.length > 0 && (
          <>
            {tabs.length > 2 && (
              <nav className="flex flex-wrap gap-2" aria-label="Categories">
                {tabs.map((cat) => (
                  <Link
                    key={cat}
                    href={cat === "all" ? `/${l}/media` : `/${l}/media?c=${cat}`}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      active === cat
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    {categoryLabels[l][cat]}
                  </Link>
                ))}
              </nav>
            )}

            {featured && <NewsCard item={featured} locale={l} featured />}

            {rest.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((item) => (
                  <NewsCard key={item.slug} item={item} locale={l} />
                ))}
              </div>
            )}
          </>
        )}

        <Card title={ui.pressTitle} icon={<Newspaper className="h-5 w-5" />}>
          <p className="text-sm text-slate-600">
            {ui.pressIntro} ({press.length})
          </p>
          <div className="mt-5 space-y-3">
            {years.map((year, yi) => {
              const list = press.filter((p) => p.date.startsWith(year));
              return (
                <details
                  key={year}
                  open={yi === 0}
                  className="group rounded-lg border border-slate-200 open:bg-slate-50/60"
                >
                  <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-slate-900 marker:content-none">
                    <span className="mr-2 inline-block text-emerald-700 transition-transform group-open:rotate-90">
                      ▶
                    </span>
                    {year}
                    <span className="ml-2 text-xs font-normal text-slate-400">
                      ({list.length})
                    </span>
                  </summary>
                  <ul className="divide-y divide-slate-100 border-t border-slate-200 bg-white">
                    {list.map((item) => (
                      <li key={item.url}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col gap-1 px-4 py-3 transition-colors hover:bg-emerald-50/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-slate-800">
                              {item.title}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500">
                              {item.outlet}
                              {item.type === "interview" && (
                                <span className="ml-2 rounded bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                                  {ui.interview}
                                </span>
                              )}
                            </p>
                          </div>
                          <span className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-500">
                            {fmt(item.date)}
                            <ExternalLink className="h-3.5 w-3.5 text-emerald-700" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
