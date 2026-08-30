import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { Locale } from "@/content/types";
import type { Post } from "@/lib/supabase";

export default function BlogCard({
  post,
  locale,
  readMoreLabel,
}: {
  post: Post;
  locale: Locale;
  readMoreLabel: string;
}) {
  const title = locale === "vi" ? post.title_vi : post.title_en;
  const excerpt =
    (locale === "vi" ? post.excerpt_vi : post.excerpt_en) ?? "";
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString(
        locale === "vi" ? "vi-VN" : "en-US",
        { year: "numeric", month: "long", day: "numeric" }
      )
    : null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 transition-shadow hover:shadow-lg">
      {post.cover_image_url && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <Image
            src={post.cover_image_url}
            alt={title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {date && (
          <p className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <CalendarDays className="h-3.5 w-3.5" />
            {date}
          </p>
        )}
        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          <Link
            href={`/${locale}/blog/${post.slug}`}
            className="hover:text-emerald-700"
          >
            {title}
          </Link>
        </h3>
        {excerpt && (
          <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">
            {excerpt}
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
        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          {readMoreLabel} →
        </Link>
      </div>
    </article>
  );
}
