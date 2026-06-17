import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  BarChart3,
  Contact,
  FileUp,
  Globe2,
  LayoutTemplate,
  MousePointerClick,
  Search,
  Send,
  Smartphone,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type Feature = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  { title: "Mobile-first builder", text: "Create and edit a polished portfolio from any screen size.", icon: Smartphone },
  { title: "Profession-specific templates", text: "Start from layouts built for doctors, freelancers, teachers, marketers, and more.", icon: LayoutTemplate },
  { title: "Resume-to-portfolio import", text: "Turn existing career details into structured website sections faster.", icon: FileUp },
  { title: "Custom domain", text: "Connect your own domain when you are ready to publish professionally.", icon: Globe2 },
  { title: "SEO tools", text: "Set page titles, descriptions, and clean content structure for discovery.", icon: Search },
  { title: "Contact forms", text: "Let visitors reach you directly from your portfolio.", icon: Contact },
  { title: "Lead collection", text: "Capture opportunity requests, client inquiries, and consultation interest.", icon: Users },
  { title: "Analytics", text: "See which pages and templates drive attention.", icon: BarChart3 },
  { title: "Fast publishing", text: "Go from draft to public portfolio without a developer handoff.", icon: Zap },
  { title: "No coding required", text: "Edit sections, content, and templates visually.", icon: MousePointerClick },
];

const audiences = [
  ["Job seekers", "Present experience, projects, resume highlights, and contact details in one credible profile."],
  ["Freelancers", "Package services, proof, testimonials, and inquiry paths for better client conversion."],
  ["Doctors", "Build patient trust with credentials, services, clinic details, reviews, and appointment CTAs."],
  ["Teachers", "Show subjects, teaching method, results, and trial class options clearly."],
  ["Marketers", "Turn campaign results, case studies, tools, and audit offers into a sharp public profile."],
  ["Designers", "Showcase visual work with premium layouts that keep the portfolio itself out of the way."],
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-xs font-extrabold uppercase tracking-wide text-brand-600">
              <Sparkles size={14} />
              Portify Features
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-ink sm:text-5xl">
              Everything you need to build your professional online presence
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
              Portify gives professionals the structure, templates, publishing tools, and trust-building sections they need to look established online.
            </p>
            <Link
              href="/create"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 text-sm font-extrabold text-white shadow-lg shadow-blue-200"
            >
              Create your portfolio today
              <Send size={17} />
            </Link>
          </div>
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:grid-cols-2">
            {features.slice(0, 4).map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-xl bg-slate-50 p-4">
                <Icon className="text-brand-600" size={24} />
                <h2 className="mt-4 text-sm font-black text-ink">{title}</h2>
                <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="text-brand-600" size={25} />
                <h2 className="mt-4 text-base font-black text-ink">{title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-soft sm:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-wide text-blue-200">Built for real professionals</p>
              <h2 className="mt-2 text-3xl font-black">How Portify helps different users</h2>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map(([title, text]) => (
                <article key={title} className="rounded-xl bg-white/8 p-5">
                  <h3 className="text-base font-black">{title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-5 rounded-2xl border border-brand-100 bg-brand-50 p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-black text-ink sm:text-3xl">Create your portfolio today</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Choose a template, add your details, and publish a professional page without code.</p>
            </div>
            <Link href="/create" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-600 px-6 text-sm font-extrabold text-white">
              Start Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
