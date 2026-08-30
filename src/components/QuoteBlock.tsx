import { Quote } from "lucide-react";

export default function QuoteBlock({
  quote,
  source,
  dark = false,
}: {
  quote: string;
  source: string;
  dark?: boolean;
}) {
  return (
    <blockquote
      className={`rounded-xl border-l-4 border-emerald-500 p-6 sm:p-8 ${
        dark
          ? "bg-slate-800/60 text-slate-100"
          : "bg-emerald-50 text-slate-800"
      }`}
    >
      <Quote className={`h-6 w-6 ${dark ? "text-emerald-400" : "text-emerald-600"}`} />
      <p className="mt-3 text-lg font-medium leading-relaxed sm:text-xl">
        {quote}
      </p>
      <footer
        className={`mt-4 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}
      >
        {source}
      </footer>
    </blockquote>
  );
}
