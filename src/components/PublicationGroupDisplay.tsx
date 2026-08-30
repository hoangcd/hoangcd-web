import type { PublicationGroup } from "@/content/types";

export default function PublicationGroupDisplay({
  group,
  compact = false,
}: {
  group: PublicationGroup;
  compact?: boolean;
}) {
  return (
    <div>
      <h3
        className={`font-semibold text-slate-900 ${
          compact ? "text-base" : "text-lg"
        }`}
      >
        {group.title}
      </h3>
      <ul className="mt-3 space-y-2.5 border-l-2 border-slate-100 pl-4">
        {group.items.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed text-slate-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
