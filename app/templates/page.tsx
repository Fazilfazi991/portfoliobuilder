import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageIntro } from "@/components/PageIntro";
import { TemplateCard } from "@/components/TemplateCard";
import { filters, templates } from "@/data/templates";

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <PageIntro
          title="Choose a Template"
          subtitle="Pick a template that matches your style and profession."
        />
        <div className="no-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`min-h-10 shrink-0 rounded-lg border px-4 text-xs font-black ${
                index === 0
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
