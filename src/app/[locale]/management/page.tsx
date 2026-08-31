import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import Card from "@/components/Card";
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
    <div className="bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {dict.title}
        </h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          {dict.intro}
        </p>

        <div className="mt-5 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{dict.placeholderNote}</p>
        </div>

        <Card className="mt-6">
          <Timeline items={dict.items} />
        </Card>
      </div>
    </div>
  );
}
