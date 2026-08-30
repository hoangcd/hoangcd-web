import { notFound } from "next/navigation";
import { GraduationCap, Award, Languages, Building2 } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale).about;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {dict.title}
      </h1>

      <div className="mt-8 space-y-5">
        {dict.intro.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-slate-700">
            {p}
          </p>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <GraduationCap className="h-5 w-5 text-emerald-700" />
          {dict.educationTitle}
        </h2>
        <div className="mt-5 space-y-4">
          {dict.education.map((e, i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200 p-4 sm:flex sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold text-slate-900">{e.degree}</p>
                <p className="text-sm text-slate-600">{e.school}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-500 sm:mt-0">
                {e.period}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <Award className="h-5 w-5 text-emerald-700" />
          {dict.certsTitle}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {dict.certs.map((c, i) => (
            <div key={i} className="rounded-lg border border-slate-200 p-4">
              <p className="font-medium text-slate-900">{c.title}</p>
              <p className="mt-1 text-sm text-slate-500">{c.meta}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Languages className="h-5 w-5 text-emerald-700" />
            {dict.languagesTitle}
          </h2>
          <ul className="mt-5 space-y-2">
            {dict.languages.map((lang, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-2.5 text-sm"
              >
                <span className="font-medium text-slate-800">
                  {lang.name}
                </span>
                <span className="text-slate-500">{lang.level}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Building2 className="h-5 w-5 text-emerald-700" />
            {dict.affiliationsTitle}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {dict.affiliations.map((a, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-600" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
