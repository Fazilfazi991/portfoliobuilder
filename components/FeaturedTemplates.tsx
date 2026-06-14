import { templates } from "@/data/templates";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";
import { TemplateThumbnail } from "./TemplateThumbnail";

export function FeaturedTemplates() {
  return (
    <section id="templates" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionTitle
        title="Featured Templates"
        action={
          <Link href="/templates" className="hidden items-center gap-1 text-sm font-extrabold text-brand-600 sm:flex">
            View all templates <ArrowRight size={16} />
          </Link>
        }
      />
      <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {templates.slice(0, 4).map((template) => (
          <Link
            href={template.publicPath}
            key={template.id}
            className="min-w-[17.5rem] snap-start rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-card sm:min-w-0"
          >
            <TemplateThumbnail template={template} />
            <h3 className="mt-4 text-sm font-extrabold text-ink">{template.name}</h3>
            <p className="mt-1 text-xs font-semibold text-slate-500">{template.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
