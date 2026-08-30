import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, isValidLocale, locales } from "@/lib/i18n";
import type { Locale } from "@/content/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: {
      default: dict.meta.title,
      template: `%s — ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    metadataBase: new URL("https://www.hoangcd.com"),
    alternates: {
      languages: { vi: "/vi", en: "/en" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: dict.meta.siteName,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: ["/images/profile.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
