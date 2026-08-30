import { notFound } from "next/navigation";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import BlogCard from "@/components/BlogCard";
import { getPublishedPosts } from "@/lib/supabase";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l).blog;

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

      {posts.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              locale={l}
              readMoreLabel={dict.readMore}
            />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-slate-500">{dict.empty}</p>
      )}
    </div>
  );
}
