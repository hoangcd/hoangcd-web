import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { getPostBySlug } from "@/lib/supabase";
import NewsCard from "@/components/NewsCard";
import NewsCover from "@/components/NewsCover";
import {
  categoryLabels,
  formatNewsDate,
  getNews,
  getNewsBySlug,
  newsUi,
} from "@/content/news";

const SITE = "https://www.hoangcd.com";

export function generateStaticParams() {
  return getNews().flatMap((n) => [
    { locale: "vi", slug: n.slug },
    { locale: "en", slug: n.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const l = locale as Locale;
  const item = getNewsBySlug(slug);
  if (item) {
    return {
      title: item.title[l],
      description: item.excerpt[l],
      alternates: {
        canonical: `${SITE}/${l}/media/${slug}`,
        languages: {
          vi: `${SITE}/vi/media/${slug}`,
          en: `${SITE}/en/media/${slug}`,
        },
      },
      openGraph: {
        type: "article",
        title: item.title[l],
        description: item.excerpt[l],
        publishedTime: item.date,
        images: [{ url: `${SITE}${item.cover?.src ?? "/images/profile.png"}` }],
      },
    };
  }
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return {};
  const title = l === "vi" ? post.title_vi : post.title_en;
  const excerpt = (l === "vi" ? post.excerpt_vi : post.excerpt_en) ?? undefined;
  return { title, description: excerpt };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const ui = newsUi[l];
  const item = getNewsBySlug(slug);

  if (!item) return <LegacyPost locale={l} slug={slug} />;

  const related = getNews()
    .filter((n) => n.slug !== item.slug)
    .sort(
      (a, b) =>
        Number(b.category === item.category) - Number(a.category === item.category)
    )
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title[l],
    description: item.excerpt[l],
    datePublished: item.date,
    image: [`${SITE}${item.cover?.src ?? "/images/profile.png"}`],
    inLanguage: l,
    author: { "@type": "Person", name: "Chử Đức Hoàng", url: SITE },
    isBasedOn: item.sources.map((s) => s.url),
    mainEntityOfPage: `${SITE}/${l}/media/${item.slug}`,
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 pt-10 pb-12 sm:px-6 sm:pt-14">
        <Link
          href={`/${l}/media`}
          className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          {ui.back}
        </Link>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          {categoryLabels[l][item.category]}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-[2.5rem]">
          {item.title[l]}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={item.date}>{formatNewsDate(item.date, l)}</time>
          </span>
          {item.role && (
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
              {ui.role}: {item.role[l]}
            </span>
          )}
          {item.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {item.location[l]}
            </span>
          )}
        </div>

        <p className="mt-6 text-lg font-medium leading-relaxed text-slate-800">
          {item.excerpt[l]}
        </p>

        {item.keyPoints && item.keyPoints[l].length > 0 && (
          <aside className="mt-6 rounded-xl border-l-4 border-emerald-600 bg-emerald-50/50 p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
              {ui.keyPoints}
            </h2>
            <ul className="mt-3 space-y-2">
              {item.keyPoints[l].map((k) => (
                <li key={k} className="flex gap-2.5 text-[15px] leading-relaxed text-slate-800">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {item.cover && (
          <figure className="mt-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
              <NewsCover item={item} locale={l} sizes="(min-width: 768px) 768px, 100vw" priority hoverZoom={false} />
            </div>
            <figcaption className="mt-2 text-sm text-slate-500">
              {item.cover.caption[l]}
              {item.photoCredit && (
                <span className="text-slate-400">
                  {" "}
                  — {ui.photo}: {item.photoCredit[l]}
                </span>
              )}
            </figcaption>
          </figure>
        )}

        <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-slate-700">
          {item.body[l].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {item.gallery && item.gallery.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-slate-900">
              {ui.galleryTitle}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {item.gallery.map((ph) => (
                <figure key={ph.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                    <Image
                      src={ph.src}
                      alt={ph.caption[l]}
                      fill
                      sizes="(min-width: 640px) 380px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-1.5 text-xs text-slate-500">
                    {ph.caption[l]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <aside className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            {ui.sourcesTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-500">{ui.sourcesNote}</p>
          <ul className="mt-3 space-y-2">
            {item.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-1.5 text-sm text-slate-700 hover:text-emerald-800"
                >
                  <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700" />
                  <span>
                    <strong className="font-semibold">{s.outlet}</strong>
                    {s.date && <span className="text-slate-400"> ({s.date})</span>}
                    {" — "}
                    <span className="underline decoration-slate-300 underline-offset-2 group-hover:decoration-emerald-600">
                      {s.title}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-lg font-semibold text-slate-900">{ui.related}</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((n) => (
                <NewsCard key={n.slug} item={n} locale={l} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

/** Posts stored in Supabase (managed from the dashboard). */
async function LegacyPost({ locale, slug }: { locale: Locale; slug: string }) {
  const dict = getDictionary(locale).media;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) notFound();

  const title = locale === "vi" ? post.title_vi : post.title_en;
  const content = locale === "vi" ? post.content_vi : post.content_en;
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString(
        locale === "vi" ? "vi-VN" : "en-US",
        { year: "numeric", month: "long", day: "numeric" }
      )
    : null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href={`/${locale}/media`}
        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
      >
        {dict.backToList}
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
        {title}
      </h1>
      {date && (
        <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
          <CalendarDays className="h-4 w-4" />
          {date}
        </p>
      )}
      {post.cover_image_url && (
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={post.cover_image_url}
            alt={title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="mt-8 whitespace-pre-line text-base leading-relaxed text-slate-700">
        {content}
      </div>
    </article>
  );
}
