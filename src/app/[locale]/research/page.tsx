import { notFound } from "next/navigation";
import { ExternalLink, FileText, FlaskConical, ScrollText } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import Card from "@/components/Card";

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale as Locale);
  const dict = d.research;

  return (
    <div className="bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {dict.title}
        </h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          {dict.intro}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={dict.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
          >
            {dict.scholarLabel}
            <ExternalLink className="h-4 w-4" />
          </a>
          <div className="flex flex-wrap gap-2">
            {d.profile.stats.slice(1).map((s) => (
              <span
                key={s.label}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600"
              >
                <strong className="text-slate-900">{s.value}</strong> {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <Card
            title={dict.strongGroupsTitle}
            icon={<FlaskConical className="h-5 w-5" />}
          >
            <p className="text-sm text-slate-600">{dict.strongGroupsIntro}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {dict.groups.map((group, i) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-emerald-100 text-[11px] font-bold text-emerald-800">
                      {i + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {group.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card
            title={dict.selectedTitle}
            icon={<ScrollText className="h-5 w-5" />}
          >
            <div className="grid gap-7 sm:grid-cols-2">
              {dict.groups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-2.5 border-l-2 border-emerald-100 pl-4">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-slate-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card
            title={dict.fullListTitle}
            icon={<FileText className="h-5 w-5" />}
          >
            <p className="text-sm text-slate-600">{dict.fullListIntro}</p>
            <div className="mt-5 space-y-3">
              {dict.fullListCategories.map((category) => (
                <details
                  key={category.title}
                  className="group rounded-lg border border-slate-200 open:bg-slate-50/70"
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
          </Card>

          <Card
            title={dict.reportsTitle}
            icon={<ScrollText className="h-5 w-5" />}
          >
            <p className="text-sm text-slate-600">{dict.reportsIntro}</p>
            <ul className="mt-5 divide-y divide-slate-100 rounded-lg border border-slate-200">
              {dict.reports.map((report, i) => (
                <li
                  key={i}
                  className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-slate-800">{report.title}</span>
                  <span className="shrink-0 text-xs font-medium text-slate-500">
                    {report.date}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
