import { ArrowRight, Rocket } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 rounded-2xl border border-brand-100 bg-brand-50 p-6 shadow-sm sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
          <Rocket size={34} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-ink sm:text-3xl">
            Ready to build your professional portfolio?
          </h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 sm:text-base">
            Join thousands of professionals who trust Portify to build their online presence.
          </p>
        </div>
        <a
          href="#pricing"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-200"
        >
          Create My Portfolio - It&apos;s Free
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
