import Link from "next/link";
import {
  Award,
  Building2,
  Cpu,
  GraduationCap,
  HeartPulse,
  Landmark,
  Languages,
  ArrowRight,
} from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";

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

  return (
    <>
      <Hero locale={l} dict={dict} />

      {/* Roles */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              {dict.home.primaryRolesTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {dict.home.primaryRoles.map((role, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-lg border border-slate-200 p-4 text-sm font-medium text-slate-800"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              {dict.home.concurrentRolesTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {dict.home.concurrentRoles.map((role, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {dict.home.expertiseTitle}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {dict.home.expertise.map((item, i) => {
              const Icon = expertiseIcons[i] ?? Landmark;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
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
        </div>
      </section>

      {/* Bio */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {dict.home.bioTitle}
        </h2>
        <div className="mt-6 space-y-5">
          {dict.home.bio.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-slate-700">
              {p}
            </p>
          ))}
        </div>

        <section className="mt-14">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <GraduationCap className="h-5 w-5 text-emerald-700" />
            {dict.home.educationTitle}
          </h3>
          <div className="mt-5 space-y-4">
            {dict.home.education.map((e, i) => (
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
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <Award className="h-5 w-5 text-emerald-700" />
            {dict.home.certsTitle}
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {dict.home.certs.map((c, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-4">
                <p className="font-medium text-slate-900">{c.title}</p>
                <p className="mt-1 text-sm text-slate-500">{c.meta}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <Languages className="h-5 w-5 text-emerald-700" />
            {dict.home.languagesTitle}
          </h3>
          <ul className="mt-5 grid gap-2 sm:grid-cols-3">
            {dict.home.languages.map((lang, i) => (
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
      </section>

      {/* Explore */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            <Building2 className="h-6 w-6 text-emerald-700" />
            {dict.home.exploreTitle}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Link
              href={`/${l}/research`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {dict.home.exploreResearch}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {dict.home.exploreResearchDesc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href={`/${l}/management`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {dict.home.exploreManagement}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {dict.home.exploreManagementDesc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href={`/${l}/media`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {dict.home.exploreMedia}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {dict.home.exploreMediaDesc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
