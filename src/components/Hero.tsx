import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale, Site } from "@/content/types";
import QuoteBlock from "./QuoteBlock";

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Site;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {dict.hero.kicker}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {dict.hero.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            {dict.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/management`}
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              {dict.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-400"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-slate-800 shadow-xl sm:h-64 sm:w-64">
            <Image
              src="/images/profile.png"
              alt={dict.hero.name}
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <QuoteBlock quote={dict.hero.quote} source={dict.hero.quoteSource} dark />
      </div>
    </section>
  );
}
