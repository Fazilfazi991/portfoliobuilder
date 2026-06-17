import { ArrowRight, CheckCircle2, Globe2, Play, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { AppPreview } from "./AppPreview";

const chips = [
  { label: "No coding required", icon: CheckCircle2 },
  { label: "Ready in 1-2 minutes", icon: Zap },
  { label: "Custom domain ready", icon: Globe2 },
];

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-14 pt-10 sm:px-6 md:pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:pb-16">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-xs font-extrabold uppercase tracking-wide text-brand-600">
          <Sparkles size={14} />
          AI Powered Portfolio Builder
        </div>
        <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.04] text-ink sm:text-5xl lg:text-6xl">
          Build a professional portfolio website in{" "}
          <span className="text-brand-600">1-2 minutes</span>
        </h1>
        <p className="mt-5 max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg">
          Create a beautiful personal portfolio website that helps you stand out, share your work,
          and get more opportunities.
        </p>
        <div className="mt-7 grid gap-3 sm:flex">
          <Link
            href="/create"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-extrabold text-white shadow-lg shadow-blue-200 transition hover:bg-brand-700"
          >
            Create My Portfolio - It&apos;s Free
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/examples"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-extrabold text-ink shadow-sm transition hover:border-brand-200 hover:text-brand-600"
          >
            <Play size={18} />
            Watch Demo
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
          {chips.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex min-h-12 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm"
            >
              <Icon size={18} className="shrink-0 text-brand-600" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <AppPreview />
    </section>
  );
}
