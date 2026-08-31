import { notFound } from "next/navigation";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import ScholarIcon from "@/components/icons/ScholarIcon";
import {
  EMAIL_PERSONAL,
  EMAIL_WORK,
  FACEBOOK_URL,
  LINKEDIN_URL,
  SCHOLAR_URL,
} from "@/lib/links";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale as Locale);
  const dict = d.contact;

  const socials = [
    { href: LINKEDIN_URL, label: "LinkedIn", handle: "/in/chuduchoang", Icon: LinkedinIcon },
    { href: FACEBOOK_URL, label: "Facebook", handle: "/chuduchoang", Icon: FacebookIcon },
    { href: SCHOLAR_URL, label: "Google Scholar", handle: "Hoang ChuDuc", Icon: ScholarIcon },
  ];

  return (
    <div className="bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {dict.title}
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
          {dict.intro}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            <Card title={dict.detailsTitle} icon={<Mail className="h-5 w-5" />}>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2.5 text-slate-700">
                  <MapPin className="h-4 w-4 shrink-0 text-emerald-700" />
                  {d.profile.location}
                </li>
                {[EMAIL_PERSONAL, EMAIL_WORK].map((email) => (
                  <li key={email} className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 shrink-0 text-emerald-700" />
                    <a
                      href={`mailto:${email}`}
                      className="text-slate-700 transition-colors hover:text-emerald-700"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title={dict.socialTitle} icon={<MessageSquare className="h-5 w-5" />}>
              <ul className="space-y-2">
                {socials.map(({ href, label, handle, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-slate-900">
                          {label}
                        </span>
                        <span className="block truncate text-xs text-slate-500">
                          {handle}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card>
            <ContactForm dict={dict} />
          </Card>
        </div>
      </div>
    </div>
  );
}
