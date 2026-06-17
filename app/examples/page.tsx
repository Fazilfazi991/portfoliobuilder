import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TemplateThumbnail } from "@/components/TemplateThumbnail";
import { templates } from "@/data/templates";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import Link from "next/link";

const examples = [
  ["Doctor profile", "Doctor", "Doctor Trust Profile", "doctor-trust-profile", "/p/templates/doctor-trust-profile"],
  ["Designer portfolio", "Designer", "Visual Showcase", "designer-visual-showcase", "/p/templates/designer-visual-showcase"],
  ["Digital marketer portfolio", "Marketer", "Results First", "marketer-results-first", "/p/templates/marketer-results-first"],
  ["Teacher profile", "Teacher", "Learning Profile", "teacher-learning-profile", "/p/templates/teacher-learning-profile"],
  ["Freelancer profile", "Freelancer", "Client Magnet", "freelancer-client-magnet", "/p/templates/freelancer-client-magnet"],
  ["Job seeker profile", "Job Seeker", "Executive Profile", "job-seeker-executive", "/p/alex"],
];

export default function ExamplesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-xs font-extrabold uppercase tracking-wide text-brand-600">
              <Sparkles size={14} />
              Real portfolio examples
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-ink sm:text-5xl">
              See what you can create with Portify
            </h1>
            <p className="mt-5 text-base font-medium leading-8 text-slate-600 sm:text-lg">
              Browse example public portfolios for different professions, each built from a reusable Portify template.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map(([title, profession, templateName, templateId, href]) => {
              const template = templates.find((item) => item.id === templateId) ?? templates[0];

              return (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <TemplateThumbnail template={template} tall />
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-wide text-brand-600">{profession}</p>
                      <h2 className="mt-1 text-lg font-black text-ink">{title}</h2>
                      <p className="mt-2 text-sm font-semibold text-slate-500">Template used: {templateName}</p>
                    </div>
                    <Eye className="shrink-0 text-brand-600" size={21} />
                  </div>
                  <Link
                    href={href}
                    className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 text-sm font-extrabold text-white"
                  >
                    View Example
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
