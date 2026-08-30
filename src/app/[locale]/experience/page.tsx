import { notFound } from "next/navigation";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import Timeline from "@/components/Timeline";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale).experience;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {dict.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        {dict.intro}
      </p>

      <div className="mt-12">
        <Timeline items={dict.items} />
      </div>
    </div>
  );
}
