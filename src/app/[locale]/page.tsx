import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  Lightbulb,
  Newspaper,
  Quote,
} from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { getHub } from "@/content/hub";
import ProfileHeader from "@/components/ProfileHeader";
import NewsCard from "@/components/NewsCard";
import { getNews } from "@/content/news";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const hub = getHub(l);
  const h = hub.home;

  const pillarMeta = {
    science: {
      href: `/${l}/science`,
      Icon: FlaskConical,
      chips: ["BIRALAB", "VAYSE", "ASTRI", "STI", "RITAD", "NITIA"],
    },
    innovation: {
      href: `/${l}/innovation`,
      Icon: Lightbulb,
      chips: ["Zinmed", "TechFair", "Đổi Mới Công Nghệ", "LIFVietnam"],
    },
  } as const;

  const latestNews = getNews().slice(0, 3);
  const latest = dict.media.curated.slice(0, 3);

  return (
    <div className="bg-slate-50 pb-16">
      <ProfileHeader locale={l} dict={dict} />

      <div className="mx-auto mt-8 max-w-5xl space-y-10 px-4 sm:px-6">
        {/* Positioning */}
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-700 sm:text-xl">
          {h.tagline}
        </p>

        {/* Pillars */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            {h.pillarsTitle}
          </h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {h.pillars.map((p) => {
              const meta = pillarMeta[p.key];
              const Icon = meta.Icon;
              return (
                <Link
                  key={p.key}
                  href={meta.href}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {meta.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Latest news */}
        <section>
          <div className="flex items-end justify-between gap-4">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold text-slate-900">
              <Newspaper className="h-5 w-5 text-emerald-700" />
              {h.newsTitle}
            </h2>
            <Link
              href={`/${l}/media`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              {h.newsAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {latestNews.length > 0 ? (
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((item) => (
                <NewsCard key={item.slug} item={item} locale={l} />
              ))}
            </div>
          ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {latest.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-emerald-300"
                >
                  <p className="text-xs font-medium text-slate-500">
                    {item.source} · {item.date}
                  </p>
                  <h3 className="mt-2 flex-1 text-[15px] font-semibold leading-snug text-slate-900 group-hover:text-emerald-800">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="mt-3 h-4 w-4 text-emerald-700" />
                </a>
              ))}
    </div>
          )}
        </section>

        {/* Quote + about */}
        <section className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <blockquote className="rounded-xl border-l-4 border-emerald-600 bg-white p-5 shadow-sm sm:p-6">
            <Quote className="h-5 w-5 text-emerald-600" />
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-800 sm:text-lg">
              {dict.profile.quote}
            </p>
            <footer className="mt-3 text-sm text-slate-500">
              {dict.profile.quoteSource}
            </footer>
          </blockquote>
          <Link
            href={`/${l}/about`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {h.aboutCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
