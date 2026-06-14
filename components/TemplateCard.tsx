import { Template } from "@/data/templates";
import Link from "next/link";
import { TemplateThumbnail } from "./TemplateThumbnail";

export function TemplateCard({ template }: { template: Template }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
      <Link href={template.publicPath} aria-label={`Preview ${template.name}`}>
        <TemplateThumbnail template={template} />
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-black text-ink">{template.name}</h2>
          <p className="mt-1 text-xs font-semibold text-slate-500">{template.label}</p>
        </div>
        <span
          className={`rounded-full px-2 py-1 text-[0.65rem] font-black ${
            template.tier === "Free" ? "bg-brand-50 text-brand-600" : "bg-amber-50 text-amber-600"
          }`}
        >
          {template.tier}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Link
          href={template.publicPath}
          className="flex min-h-10 items-center justify-center rounded-lg border border-slate-200 text-xs font-black text-ink hover:text-brand-600"
        >
          Preview
        </Link>
        <Link
          href="/auth"
          className="flex min-h-10 items-center justify-center rounded-lg bg-brand-600 text-xs font-black text-white"
        >
          Use Template
        </Link>
      </div>
    </article>
  );
}
