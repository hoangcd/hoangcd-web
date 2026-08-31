import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import Timeline from "@/components/Timeline";

export default async function ManagementPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale).management;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {dict.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        {dict.intro}
      </p>

      <div className="mt-6 flex gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <p>{dict.placeholderNote}</p>
      </div>

      <div className="mt-12">
        <Timeline items={dict.items} />
      </div>
    </div>
  );
}
