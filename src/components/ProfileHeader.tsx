import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Building2, Mail, MapPin } from "lucide-react";
import type { Locale, Site } from "@/content/types";
import LinkedinIcon from "./icons/LinkedinIcon";
import FacebookIcon from "./icons/FacebookIcon";
import ScholarIcon from "./icons/ScholarIcon";
import {
  EMAIL_PERSONAL,
  FACEBOOK_URL,
  LINKEDIN_URL,
  SCHOLAR_URL,
} from "@/lib/links";

export default function ProfileHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Site;
}) {
  const p = dict.profile;

  const socials = [
    { href: LINKEDIN_URL, label: "LinkedIn", Icon: LinkedinIcon },
    { href: FACEBOOK_URL, label: "Facebook", Icon: FacebookIcon },
    { href: SCHOLAR_URL, label: "Google Scholar", Icon: ScholarIcon },
  ];

  return (
    <div className="bg-slate-50">
      {/* Cover */}
      <div className="relative h-28 w-full overflow-hidden bg-slate-900 sm:h-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(16,185,129,0.28),_transparent_55%),radial-gradient(circle_at_80%_0%,_rgba(56,189,248,0.18),_transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Profile card */}
        <div className="relative z-10 -mt-14 rounded-xl border border-slate-200 bg-white shadow-sm sm:-mt-16">
          <div className="px-5 pb-5 sm:px-7 sm:pb-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div className="-mt-12 shrink-0 sm:-mt-16">
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-white ring-4 ring-white sm:h-32 sm:w-32">
                  <Image
                    src="/images/profile.png"
                    alt={p.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1 sm:pt-4">
                <h1 className="flex flex-wrap items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {p.name}
                  <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-600" />
                </h1>
                <p className="mt-1 text-base font-medium text-emerald-700 sm:text-lg">
                  {p.headline}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="h-4 w-4" />
                    {p.org}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {p.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
              >
                <Mail className="h-4 w-4" />
                {p.ctaPrimary}
              </Link>
              <a
                href={SCHOLAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-700 hover:text-emerald-700"
              >
                <ScholarIcon className="h-4 w-4" />
                {p.ctaSecondary}
              </a>
              <span className="mx-1 hidden h-5 w-px bg-slate-200 sm:block" />
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-emerald-700 hover:text-emerald-700"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={`mailto:${EMAIL_PERSONAL}`}
                aria-label="Email"
                title={EMAIL_PERSONAL}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-emerald-700 hover:text-emerald-700"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <dl className="grid grid-cols-2 border-t border-slate-100 sm:grid-cols-4">
            {p.stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center px-5 py-3.5 text-center sm:px-6 ${
                  i > 0 ? "sm:border-l sm:border-slate-100" : ""
                } ${i % 2 === 1 ? "border-l border-slate-100" : ""} ${
                  i > 1 ? "border-t border-slate-100 sm:border-t-0" : ""
                }`}
              >
                <dt className="order-2 text-xs text-slate-500">{s.label}</dt>
                <dd className="text-xl font-bold text-slate-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-2 text-center text-xs text-slate-400">{p.statsNote}</p>
      </div>
    </div>
  );
}
