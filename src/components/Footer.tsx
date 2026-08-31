import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import type { Locale, Site } from "@/content/types";
import LinkedinIcon from "./icons/LinkedinIcon";
import FacebookIcon from "./icons/FacebookIcon";
import ScholarIcon from "./icons/ScholarIcon";
import {
  EMAIL_PERSONAL,
  EMAIL_WORK,
  FACEBOOK_URL,
  LINKEDIN_URL,
  SCHOLAR_URL,
} from "@/lib/links";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Site;
}) {
  const year = new Date().getFullYear();

  const socials = [
    { href: LINKEDIN_URL, label: "LinkedIn", Icon: LinkedinIcon },
    { href: FACEBOOK_URL, label: "Facebook", Icon: FacebookIcon },
    { href: SCHOLAR_URL, label: "Google Scholar", Icon: ScholarIcon },
  ];

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/research`, label: dict.nav.research },
    { href: `/${locale}/management`, label: dict.nav.management },
    { href: `/${locale}/media`, label: dict.nav.media },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-100">
                <Image
                  src="/images/profile.png"
                  alt={dict.profile.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {dict.profile.name}
                </p>
                <p className="text-xs text-slate-500">{dict.profile.headline}</p>
              </div>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 shrink-0 text-emerald-700" />
              {dict.profile.location}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {dict.contact.detailsTitle}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {[EMAIL_PERSONAL, EMAIL_WORK].map((email) => (
                <li key={email} className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-emerald-700" />
                  <a
                    href={`mailto:${email}`}
                    className="text-slate-600 transition-colors hover:text-emerald-700"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm font-semibold text-slate-900">
              {dict.footer.connectTitle}
            </p>
            <div className="mt-3 flex gap-2.5">
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
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {dict.footer.navTitle}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 transition-colors hover:text-emerald-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {dict.profile.name}. {dict.footer.rights}
          </p>
          <Link
            href={`/${locale}`}
            className="transition-colors hover:text-emerald-700"
          >
            hoangcd.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
