import Link from "next/link";
import { Cpu, HeartPulse, Landmark } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { getPublishedPosts } from "@/lib/supabase";

const expertiseIcons = [Landmark, Cpu, HeartPulse];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  let posts: Awaited<ReturnType<typeof getPublishedPosts>> = [];
  try {
    posts = (await getPublishedPosts()).slice(0, 3);
  } catch {
    posts = [];
  }

  return (
    <>
      <Hero locale={l} dict={dict} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {dict.home.expertiseTitle}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {dict.home.expertise.map((item, i) => {
            const Icon = expertiseIcons[i] ?? Landmark;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {dict.home.aboutPreviewTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                {dict.home.aboutPreview}
              </p>
            </div>
            <Link
              href={`/${l}/about`}
              className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-emerald-700 hover:text-emerald-700"
            >
              {dict.home.readMore}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {dict.home.latestPostsTitle}
          </h2>
          <Link
            href={`/${l}/blog`}
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            {dict.home.viewAllPosts} →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                locale={l}
                readMoreLabel={dict.blog.readMore}
              />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-slate-500">{dict.home.noPosts}</p>
        )}
      </section>
    </>
  );
}
