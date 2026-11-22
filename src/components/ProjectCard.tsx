import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/hub";

function Monogram({ name }: { name: string }) {
  const letters = name
    .replace(/[^A-Za-zÀ-ỹ0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[13px] font-bold tracking-wide text-white">
      {letters.length > 1 ? letters : name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export default function ProjectCard({
  project,
  visitLabel,
}: {
  project: Project;
  visitLabel: string;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
    >
      <div className="flex items-start gap-3.5">
        <Monogram name={project.name} />
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-slate-900">
            {project.name}
          </h3>
          <p className="text-xs leading-snug text-slate-500">
            {project.fullName}
          </p>
        </div>
      </div>
      {project.role && (
        <p className="mt-3 inline-flex w-fit rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
          {project.role}
        </p>
      )}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-700">
        {visitLabel} {project.domain}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
