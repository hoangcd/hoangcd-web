import { notFound } from "next/navigation";
import { ExternalLink, FileText, Newspaper } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import BlogCard from "@/components/BlogCard";
import Card from "@/components/Card";
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
    <div className="bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {dict.title}
        </h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          {dict.intro}
        </p>

        <div className="mt-8 space-y-6">
          {posts.length > 0 && (
            <Card title={dict.postsTitle} icon={<FileText className="h-5 w-5" />}>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    locale={l}
                    readMoreLabel={dict.readMore}
                  />
                ))}
              </div>
            </Card>
          )}

          <Card
            title={dict.curatedTitle}
            icon={<Newspaper className="h-5 w-5" />}
          >
            <p className="text-sm text-slate-600">{dict.curatedIntro}</p>
            <ul className="mt-5 divide-y divide-slate-100 overflow-hidden rounded-lg border border-slate-200">
              {dict.curated.map((item, i) => {
                const inner = (
                  <>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-800">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.source}
                      </p>
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
                return (
                  <li key={i}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-1.5 px-4 py-3.5 transition-colors hover:bg-emerald-50/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex flex-col gap-1.5 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {posts.length === 0 && (
              <p className="mt-5 text-sm text-slate-500">{dict.empty}</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
