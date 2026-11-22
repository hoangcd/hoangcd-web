import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Building2,
  FlaskConical,
  Microscope,
  ScrollText,
  UserRoundSearch,
} from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { getHub } from "@/content/hub";
import Card from "@/components/Card";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import Publications from "@/components/Publications";

export default async function SciencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const d = getDictionary(l);
  const s = getHub(l).science;

  return (
    <div className="bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        <PageIntro title={s.title} intro={s.intro} />

        {/* Current research */}
        <Card title={s.currentTitle} icon={<Microscope className="h-5 w-5" />}>
          <div className="grid gap-4 sm:grid-cols-2">
            {s.current.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 p-4"
              >
                <h3 className="text-[15px] font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                {item.links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-50"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Featured lab */}
        <section>
          <h2 className="flex items-center gap-2.5 text-lg font-semibold text-slate-900">
            <FlaskConical className="h-5 w-5 text-emerald-700" />
            {s.labTitle}
          </h2>
          <a
            href={s.lab.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 block overflow-hidden rounded-2xl bg-slate-900 text-white shadow-sm"
          >
            <div className="relative p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,_rgba(16,185,129,0.35),_transparent_55%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  {s.lab.fullName}
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  {s.lab.name}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-200">
                  {s.lab.description}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.lab.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-slate-100"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                  {s.visit} {s.lab.domain}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </a>
        </section>

        {/* Profiles */}
        <Card
          title={s.profilesTitle}
          icon={<UserRoundSearch className="h-5 w-5" />}
        >
          <p className="text-sm text-slate-600">{s.profilesIntro}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {s.profiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-slate-200 p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40"
              >
                <p className="flex items-center justify-between text-[15px] font-semibold text-slate-900">
                  {p.name}
                  <ArrowUpRight className="h-4 w-4 text-emerald-700" />
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {p.detail}
                </p>
              </a>
            ))}
          </div>
        </Card>

        {/* Organizations */}
        <section>
          <h2 className="flex items-center gap-2.5 text-lg font-semibold text-slate-900">
            <Building2 className="h-5 w-5 text-emerald-700" />
            {s.orgsTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{s.orgsIntro}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.orgs.map((org) => (
              <ProjectCard key={org.domain} project={org} visitLabel={s.visit} />
            ))}
          </div>
        </section>

        {/* Publications */}
        <section>
          <h2 className="flex items-center gap-2.5 text-lg font-semibold text-slate-900">
            <ScrollText className="h-5 w-5 text-emerald-700" />
            {s.publicationsTitle}
          </h2>
          <p className="mt-1 mb-4 text-sm text-slate-600">
            {s.publicationsIntro}
          </p>
          <Publications dict={d.research} />
        </section>
      </div>
    </div>
  );
}
