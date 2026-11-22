import { FileText, FlaskConical, ScrollText } from "lucide-react";
import type { Site } from "@/content/types";
import Card from "@/components/Card";

export default function Publications({ dict }: { dict: Site["research"] }) {
  return (
    <div className="space-y-6">
          <Card
            title={dict.strongGroupsTitle}
            icon={<FlaskConical className="h-5 w-5" />}
          >
            <p className="text-sm text-slate-600">{dict.strongGroupsIntro}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
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
  );
}
