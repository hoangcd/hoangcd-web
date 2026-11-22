import Image from "next/image";
import { FlaskConical, Landmark, Lightbulb, Mic } from "lucide-react";
import type { Locale } from "@/content/types";
import { categoryLabels, type NewsItem } from "@/content/news";

const ICONS = {
  science: FlaskConical,
  innovation: Lightbulb,
  policy: Landmark,
  event: Mic,
} as const;

const TONES = {
  science: "from-slate-900 via-slate-800 to-emerald-900",
  innovation: "from-emerald-900 via-emerald-800 to-slate-900",
  policy: "from-slate-900 via-sky-950 to-slate-800",
  event: "from-slate-800 via-slate-900 to-emerald-950",
} as const;

/**
 * Cover for a news item: the article photo when there is one, otherwise a
 * branded typographic panel (we never reuse press photos without permission).
 */
export default function NewsCover({
  item,
  locale,
  sizes,
  priority = false,
  hoverZoom = true,
}: {
  item: NewsItem;
  locale: Locale;
  sizes: string;
  priority?: boolean;
  hoverZoom?: boolean;
}) {
  if (item.cover) {
    return (
      <Image
        src={item.cover.src}
        alt={item.cover.caption[locale]}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${
          hoverZoom
            ? "transition-transform duration-500 group-hover:scale-[1.03]"
            : ""
        }`}
      />
    );
  }

  const Icon = ICONS[item.category];
  const outlets = [...new Set(item.sources.map((s) => s.outlet))].join(" · ");
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between bg-gradient-to-br p-5 text-white sm:p-6 ${TONES[item.category]}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,_rgba(16,185,129,0.3),_transparent_55%)]" />
      <div className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
        <Icon className="h-4 w-4" />
        {categoryLabels[locale][item.category]}
      </div>
      <Icon
        aria-hidden
        className="absolute right-5 bottom-4 h-24 w-24 text-white/[0.07] sm:h-28 sm:w-28"
        strokeWidth={1.25}
      />
      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {locale === "vi" ? "Nguồn" : "Source"}
        </p>
        <p className="mt-1 max-w-[80%] text-base font-semibold leading-snug text-white line-clamp-2">
          {outlets}
        </p>
      </div>
    </div>
  );
}
