import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { getPostBySlug } from "@/lib/supabase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return {};
  const title = locale === "vi" ? post.title_vi : post.title_en;
  const excerpt = (locale === "vi" ? post.excerpt_vi : post.excerpt_en) ?? undefined;
  return { title, description: excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l).blog;

  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) notFound();

  const title = l === "vi" ? post.title_vi : post.title_en;
  const content = l === "vi" ? post.content_vi : post.content_en;
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString(
        l === "vi" ? "vi-VN" : "en-US",
        { year: "numeric", month: "long", day: "numeric" }
      )
    : null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href={`/${l}/blog`}
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

      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>
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
