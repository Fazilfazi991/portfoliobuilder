import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

const categories = ["Portfolio Tips", "Career", "Freelancing", "Healthcare", "Marketing"];

const resources = [
  ["How to create a portfolio from your resume", "Portfolio Tips", "Turn work history into sections that are easy to scan and trust."],
  ["Portfolio tips for job seekers", "Career", "Show outcomes, skills, and credibility before an interview is booked."],
  ["Best portfolio sections for freelancers", "Freelancing", "Use services, proof, process, pricing context, and testimonials to convert visitors."],
  ["How doctors can build trust online", "Healthcare", "Present credentials, clinic information, services, reviews, and appointment paths clearly."],
  ["How to write a strong professional bio", "Career", "Write a bio that sounds credible, specific, and human without feeling inflated."],
  ["Portfolio SEO basics", "Marketing", "Make your portfolio easier to discover with titles, keywords, structure, and links."],
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-xs font-extrabold uppercase tracking-wide text-brand-600">
              <Sparkles size={14} />
              Guides and resources
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-ink sm:text-5xl">
              Resources to build a better portfolio
            </h1>
            <p className="mt-5 text-base font-medium leading-8 text-slate-600 sm:text-lg">
              Practical guides for turning your experience, services, and proof into a professional online presence.
            </p>
          </div>
          <div className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`min-h-10 shrink-0 rounded-lg border px-4 text-xs font-black ${
                  index === 0 ? "border-brand-600 bg-brand-600 text-white" : "border-slate-200 bg-white text-slate-700"
                }`}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map(([title, category, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <BookOpen size={23} />
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-wide text-brand-600">{category}</p>
                <h2 className="mt-2 text-lg font-black text-ink">{title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{text}</p>
                <Link href="/create" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brand-600">
                  Apply this in Portify
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-5 rounded-2xl border border-brand-100 bg-brand-50 p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-black text-ink sm:text-3xl">Ready to turn advice into a live portfolio?</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Choose a template and build from a guided structure instead of a blank page.</p>
            </div>
            <Link href="/create" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-600 px-6 text-sm font-extrabold text-white">
              Create Portfolio
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
