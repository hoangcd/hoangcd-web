import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Newspaper } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import PageIntro from "@/components/PageIntro";
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
          <p className="text-sm text-slate-600">{ui.pressIntro}</p>
          <ul className="mt-5 divide-y divide-slate-100 overflow-hidden rounded-lg border border-slate-200">
            {dict.curated.map((item, i) => {
              const inner = (
                <>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-800">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{item.source}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">
                      {item.date}
                    </span>
                    {item.url && (
                      <ExternalLink className="h-3.5 w-3.5 text-emerald-700" />
                    )}
                  </div>
                </>
              );
              const cls =
                "flex flex-col gap-1.5 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4";
              return (
                <li key={i}>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cls} transition-colors hover:bg-emerald-50/40`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    </div>
  );
}
