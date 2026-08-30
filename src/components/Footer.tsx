import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import type { Locale, Site } from "@/content/types";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Site;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-slate-900">
              {dict.hero.name}
            </p>
            <p className="mt-1 text-sm text-slate-600">{dict.hero.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {dict.contact.detailsTitle}
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-700" />
                <span>Hanoi, Vietnam</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-emerald-700" />
                <a
                  href="mailto:contact@hoangcd.com"
                  className="hover:text-emerald-700"
                >
                  contact@hoangcd.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {dict.contact.socialTitle}
            </p>
            <div className="mt-2 flex gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-emerald-700 hover:text-emerald-700"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {dict.hero.name}. {dict.footer.rights}
          </p>
          <Link href={`/${locale}`} className="hover:text-emerald-700">
            hoangcd.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
