import { notFound } from "next/navigation";
import { ExternalLink, Newspaper } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import BlogCard from "@/components/BlogCard";
import { getPublishedPosts } from "@/lib/supabase";

export default async function MediaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l).media;

  let posts: Awaited<ReturnType<typeof getPublishedPosts>> = [];
  try {
    posts = await getPublishedPosts();
  } catch {
    posts = [];
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {dict.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        {dict.intro}
      </p>

      {posts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">
            {dict.postsTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                locale={l}
                readMoreLabel={dict.readMore}
              />
            ))}
          </div>
        </section>
      )}

      <section className="mt-14">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <Newspaper className="h-5 w-5 text-emerald-700" />
          {dict.curatedTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          {dict.curatedIntro}
        </p>

        <ul className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200">
          {dict.curated.map((item, i) => {
            const inner = (
              <>
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.source}</p>
                </div>
                <div className="flex items-center gap-2 sm:shrink-0">
                  <span className="text-xs font-medium text-slate-500">
                    {item.date}
                  </span>
                  {item.url && (
                    <ExternalLink className="h-3.5 w-3.5 text-emerald-700" />
                  )}
                </div>
              </>
            );
            return (
              <li key={i}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 px-4 py-3 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {posts.length === 0 && (
        <p className="mt-8 text-sm text-slate-500">{dict.empty}</p>
      )}
    </div>
  );
}
