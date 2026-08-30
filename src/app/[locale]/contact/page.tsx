import { notFound } from "next/navigation";
import { Mail, MapPin } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import ContactForm from "@/components/ContactForm";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale).contact;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {dict.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        {dict.intro}
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            {dict.detailsTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2.5 text-slate-700">
              <MapPin className="h-4 w-4 shrink-0 text-emerald-700" />
              Hanoi, Vietnam
            </li>
            <li className="flex items-center gap-2.5 text-slate-700">
              <Mail className="h-4 w-4 shrink-0 text-emerald-700" />
              <a
                href="mailto:contact@hoangcd.com"
                className="hover:text-emerald-700"
              >
                contact@hoangcd.com
              </a>
            </li>
          </ul>

          <h2 className="mt-8 text-lg font-semibold text-slate-900">
            {dict.socialTitle}
          </h2>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-emerald-700 hover:text-emerald-700"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 p-6 sm:p-8">
          <ContactForm dict={dict} />
        </div>
      </div>
    </div>
  );
}
