import { AppShellHeader } from "@/components/AppShellHeader";
import { PageIntro } from "@/components/PageIntro";
import { categories } from "@/data/categories";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CreatePage() {
  return (
    <>
      <AppShellHeader />
      <main className="mx-auto min-h-screen max-w-3xl px-4 py-8 sm:px-6">
        <PageIntro
          title="What type of portfolio do you want to create?"
          subtitle="Choose your profession to get started with the perfect template."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {categories.map(({ slug, title, description, icon: Icon, color }) => (
            <Link
              key={slug}
              href={`/templates?category=${slug}`}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${color}`}>
                <Icon size={22} />
              </div>
              <h2 className="text-sm font-black text-ink">{title}</h2>
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">{description}</p>
            </Link>
          ))}
        </div>
        <Link
          href="/templates"
          className="mt-4 flex min-h-14 items-center justify-between rounded-xl border border-brand-100 bg-brand-50 px-4 text-sm font-black text-brand-600"
        >
          Can&apos;t find your profession? Choose anyway
          <ArrowRight size={18} />
        </Link>
      </main>
    </>
  );
}
