import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  FlaskConical,
  GraduationCap,
  Languages,
  Layers,
  Newspaper,
  Quote,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { notFound } from "next/navigation";
import ProfileHeader from "@/components/ProfileHeader";
import Card from "@/components/Card";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const h = dict.home;

  const explore = [
    {
      href: `/${l}/research`,
      title: h.exploreResearch,
      desc: h.exploreResearchDesc,
      Icon: FlaskConical,
    },
    {
      href: `/${l}/management`,
      title: h.exploreManagement,
      desc: h.exploreManagementDesc,
      Icon: BriefcaseBusiness,
    },
    {
      href: `/${l}/media`,
      title: h.exploreMedia,
      desc: h.exploreMediaDesc,
      Icon: Newspaper,
    },
  ];

  return (
    <div className="bg-slate-50 pb-16">
      <ProfileHeader locale={l} dict={dict} />

      <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          {/* Main column */}
          <div className="space-y-6">
            <Card title={h.bioTitle} icon={<UserRound className="h-5 w-5" />}>
              <div className="space-y-4">
                {h.bio.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-relaxed text-slate-700"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Card>

            <Card
              title={h.primaryRolesTitle}
              icon={<Star className="h-5 w-5" />}
            >
              <ul className="space-y-3">
                {h.primaryRoles.map((role, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg bg-emerald-50/60 p-3.5 ring-1 ring-emerald-100"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-[15px] font-medium text-slate-800">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card
              title={h.concurrentRolesTitle}
              icon={<Layers className="h-5 w-5" />}
            >
              <ul className="space-y-2.5">
                {h.concurrentRoles.map((role, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15px] text-slate-700"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card
              title={h.expertiseTitle}
              icon={<Sparkles className="h-5 w-5" />}
            >
              <div className="space-y-4">
                {h.expertise.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-slate-200 p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50/30"
                  >
                    <h3 className="flex gap-2.5 text-[15px] font-semibold text-slate-900">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-emerald-100 text-[11px] font-bold text-emerald-800">
                        {i + 1}
                      </span>
                      {item.title}
                    </h3>
                    <p className="mt-2 pl-[30px] text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card
              title={h.honorsTitle}
              icon={<Award className="h-5 w-5" />}
            >
              <ul className="space-y-3">
                {h.honors.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-700">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <blockquote className="rounded-xl border-l-4 border-emerald-600 bg-white p-5 shadow-sm sm:p-6">
              <Quote className="h-5 w-5 text-emerald-600" />
              <p className="mt-3 text-base font-medium leading-relaxed text-slate-800 sm:text-lg">
                {dict.profile.quote}
              </p>
              <footer className="mt-3 text-sm text-slate-500">
                {dict.profile.quoteSource}
              </footer>
            </blockquote>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            <Card
              title={h.educationTitle}
              icon={<GraduationCap className="h-5 w-5" />}
            >
              <ol className="space-y-4">
                {h.education.map((e, i) => (
                  <li
                    key={i}
                    className="border-l-2 border-slate-100 pl-4 first:border-emerald-500"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {e.degree}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-600">{e.school}</p>
                    <p className="mt-0.5 text-xs font-medium text-slate-400">
                      {e.period}
                    </p>
                  </li>
                ))}
              </ol>
            </Card>

            <Card title={h.certsTitle} icon={<Award className="h-5 w-5" />}>
              <ul className="space-y-3.5">
                {h.certs.map((c, i) => (
                  <li key={i}>
                    <p className="text-sm font-medium text-slate-900">
                      {c.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{c.meta}</p>
                  </li>
                ))}
              </ul>
            </Card>

            <Card
              title={h.languagesTitle}
              icon={<Languages className="h-5 w-5" />}
            >
              <ul className="space-y-2">
                {h.languages.map((lang, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium text-slate-800">
                      {lang.name}
                    </span>
                    <span className="text-slate-500">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>

        {/* Explore */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900">
            {h.exploreTitle}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {explore.map(({ href, title, desc, Icon }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 flex items-center gap-1.5 text-base font-semibold text-slate-900">
                  {title}
                  <ArrowRight className="h-4 w-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
