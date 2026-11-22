import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Info,
  Landmark,
  Rocket,
  Users,
  Waypoints,
} from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import { getHub } from "@/content/hub";
import Card from "@/components/Card";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";

export default async function InnovationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const v = getHub(l).innovation;

  return (
    <div className="bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        <PageIntro title={v.title} intro={v.intro} />

        {/* Startup */}
        <section>
          <h2 className="flex items-center gap-2.5 text-lg font-semibold text-slate-900">
            <Rocket className="h-5 w-5 text-emerald-700" />
            {v.startupTitle}
          </h2>
          <a
            href={v.startup.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 block overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm"
          >
            <div className="grid gap-0 md:grid-cols-[1.4fr_1fr]">
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  {v.startup.fullName}
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  {v.startup.name}
                </h3>
                {v.startup.role && (
                  <p className="mt-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
                    {v.startup.role}
                  </p>
                )}
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  {v.startup.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
                  {v.visit} {v.startup.domain}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
              <div className="border-t border-emerald-100 bg-emerald-50/60 p-6 sm:p-8 md:border-l md:border-t-0">
                <ul className="space-y-2.5">
                  {v.startup.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm font-medium text-slate-800"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex gap-2 text-sm leading-relaxed text-slate-600">
                  <Waypoints className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  {v.startup.bridge}
                </p>
              </div>
            </div>
          </a>
        </section>

        {/* Platforms */}
        <section>
          <h2 className="flex items-center gap-2.5 text-lg font-semibold text-slate-900">
            <Users className="h-5 w-5 text-emerald-700" />
            {v.platformsTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{v.platformsIntro}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {v.platforms.map((p) => (
              <ProjectCard key={p.domain} project={p} visitLabel={v.visit} />
            ))}
          </div>
        </section>

        {/* Policy */}
        <Card title={v.policyTitle} icon={<Landmark className="h-5 w-5" />}>
          <ul className="space-y-3">
            {v.policy.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] text-slate-700">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/${l}/about`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            {v.policyCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>

        {/* Community */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            {v.communityTitle}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {v.community.map((p) => (
              <ProjectCard key={p.domain} project={p} visitLabel={v.visit} />
            ))}
          </div>
        </section>

        <p className="flex gap-2.5 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          {v.disclaimer}
        </p>
      </div>
    </div>
  );
}
