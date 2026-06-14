import { AppShellHeader } from "@/components/AppShellHeader";
import { TemplateThumbnail } from "@/components/TemplateThumbnail";
import { includedSections, templates } from "@/data/templates";
import { Check, Heart } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ templateId: string }>;
}) {
  const { templateId } = await params;
  const template = templates.find((item) => item.id === templateId);

  if (!template) {
    notFound();
  }

  return (
    <>
      <AppShellHeader />
      <main className="mx-auto min-h-screen max-w-5xl px-4 pb-28 pt-8 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-ink sm:text-3xl">{template.name}</h1>
            <p className="mt-1 text-sm font-bold text-slate-500">{template.label}</p>
          </div>
          <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600">
            <Heart size={20} />
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <TemplateThumbnail template={template} tall />
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
                  <TemplateThumbnail template={template} />
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-black text-ink">What&apos;s included</h2>
            <ul className="mt-4 space-y-3">
              {includedSections.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <Check size={17} className="text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href={template.publicPath}
                className="flex min-h-12 items-center justify-center rounded-lg border border-brand-200 text-sm font-black text-brand-600"
              >
                Preview Live Demo
              </Link>
              <Link
                href="/auth"
                className="flex min-h-12 items-center justify-center rounded-lg bg-brand-600 text-sm font-black text-white"
              >
                Use This Template
              </Link>
            </div>
          </aside>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white p-3 sm:hidden">
        <Link
          href="/auth"
          className="flex min-h-12 items-center justify-center rounded-lg bg-brand-600 text-sm font-black text-white"
        >
          Use This Template
        </Link>
      </div>
    </>
  );
}
