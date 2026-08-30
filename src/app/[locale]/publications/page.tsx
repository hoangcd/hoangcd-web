import { notFound } from "next/navigation";
import { FileText } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import PublicationGroupDisplay from "@/components/PublicationGroupDisplay";

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale).publications;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {dict.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        {dict.intro}
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-900">
          {dict.selectedTitle}
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {dict.groups.map((group) => (
            <PublicationGroupDisplay key={group.title} group={group} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <FileText className="h-5 w-5 text-emerald-700" />
          {dict.fullListTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          {dict.fullListIntro}
        </p>
        <div className="mt-6 space-y-3">
          {dict.fullListCategories.map((category) => (
            <details
              key={category.title}
              className="group rounded-lg border border-slate-200 open:bg-slate-50"
            >
              <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-slate-900 marker:content-none">
                <span className="mr-2 inline-block text-emerald-700 transition-transform group-open:rotate-90">
                  ▶
                </span>
                {category.title}
                <span className="ml-2 text-xs font-normal text-slate-400">
                  ({category.items.length})
                </span>
              </summary>
              <ul className="space-y-2 px-4 pb-4 pl-9 text-sm text-slate-600">
                {category.items.map((item, i) => (
                  <li key={i} className="list-disc leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-bold text-slate-900">
          {dict.reportsTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          {dict.reportsIntro}
        </p>
        <ul className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200">
          {dict.reports.map((report, i) => (
            <li
              key={i}
              className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm text-slate-800">{report.title}</span>
              <span className="text-xs font-medium text-slate-500">
                {report.date}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
