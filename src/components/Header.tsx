"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Locale, Site } from "@/content/types";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Site;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/research`, label: dict.nav.research },
    { href: `/${locale}/management`, label: dict.nav.management },
    { href: `/${locale}/media`, label: dict.nav.media },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  function isActive(href: string) {
    if (href === `/${locale}`) return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-slate-900"
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-slate-100">
            <Image
              src="/images/profile.png"
              alt=""
              fill
              sizes="32px"
              className="object-cover"
            />
          </span>
          {dict.profile.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-emerald-700"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-emerald-700" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LocaleSwitcher locale={locale} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3">
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      )}
    </header>
  );
}
