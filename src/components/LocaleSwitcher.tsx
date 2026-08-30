"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels } from "@/lib/i18n";
import type { Locale } from "@/content/types";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function pathFor(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-sm">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathFor(l)}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-3 py-1 font-medium transition-colors ${
            l === locale
              ? "bg-emerald-700 text-white"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          {l.toUpperCase()}
          <span className="sr-only"> — {localeLabels[l]}</span>
        </Link>
      ))}
    </div>
  );
}
