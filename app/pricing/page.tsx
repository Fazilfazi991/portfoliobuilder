"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Check, HelpCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    monthly: "$0",
    yearly: "$0",
    description: "For starting your first public profile.",
    features: ["1 portfolio", "Portify subdomain", "Basic templates", "Basic sections"],
  },
  {
    name: "Pro",
    monthly: "$6.99",
    yearly: "$5.59",
    description: "For professionals ready to look premium.",
    popular: true,
    features: ["Custom domain", "Premium templates", "Remove branding", "SEO tools", "Contact leads", "Analytics"],
  },
  {
    name: "Business",
    monthly: "$12.99",
    yearly: "$10.39",
    description: "For teams and service providers managing multiple sites.",
    features: ["Up to 5 websites", "Team access", "Premium support", "Client management", "Advanced analytics"],
  },
];

const comparison = [
  ["Portfolio websites", "1", "1", "5"],
  ["Custom domain", "-", "Yes", "Yes"],
  ["Premium templates", "-", "Yes", "Yes"],
  ["Analytics", "-", "Basic", "Advanced"],
  ["Support", "Community", "Priority", "Premium"],
];

const faqs = [
  ["Can I start for free?", "Yes. The Free plan lets you publish one portfolio on a Portify subdomain."],
  ["Do I need a developer?", "No. Portify is built for professionals who want to publish without coding."],
  ["Can I upgrade later?", "Yes. You can start free and upgrade when you need premium templates, analytics, or a custom domain."],
  ["Are payments connected now?", "This is mock pricing for the public website. Payment integration is not added yet."],
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-xs font-extrabold uppercase tracking-wide text-brand-600">
            <Sparkles size={14} />
            Pricing
          </div>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            Simple pricing for every professional
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            Start with a free portfolio and upgrade when you need premium templates, custom domains, leads, and analytics.
          </p>
          <div className="mt-7 inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
            {(["monthly", "yearly"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setBilling(item)}
                className={`min-h-10 rounded-lg px-5 text-sm font-black capitalize ${
                  billing === item ? "bg-brand-600 text-white" : "text-slate-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-2xl border bg-white p-6 shadow-sm ${
                  plan.popular ? "border-brand-600 shadow-card ring-1 ring-brand-600" : "border-slate-200"
                }`}
              >
                {plan.popular ? (
                  <div className="absolute -top-3 left-5 rounded-full bg-brand-600 px-3 py-1 text-xs font-black uppercase text-white">
                    Most Popular
                  </div>
                ) : null}
                <h2 className="text-xl font-black text-ink">{plan.name}</h2>
                <p className="mt-2 min-h-12 text-sm font-semibold leading-6 text-slate-600">{plan.description}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-black text-ink">{billing === "monthly" ? plan.monthly : plan.yearly}</span>
                  <span className="pb-1 text-sm font-semibold text-slate-500">/month</span>
                </div>
                <ul className="mt-6 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm font-semibold text-slate-700">
                      <Check size={17} className="shrink-0 text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/create"
                  className={`mt-7 flex min-h-12 items-center justify-center rounded-lg text-sm font-extrabold ${
                    plan.popular ? "bg-brand-600 text-white" : "border border-slate-200 text-ink hover:text-brand-600"
                  }`}
                >
                  Start Free
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-xs font-black uppercase text-slate-500">
              <span>Feature</span>
              <span>Free</span>
              <span>Pro</span>
              <span>Business</span>
            </div>
            {comparison.map((row) => (
              <div key={row[0]} className="grid grid-cols-4 gap-3 border-t border-slate-100 px-4 py-4 text-sm font-bold text-slate-700">
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <HelpCircle className="text-brand-600" size={22} />
                <h2 className="mt-3 font-black text-ink">{question}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-brand-600 p-6 text-center text-white shadow-soft sm:p-8">
            <h2 className="text-2xl font-black">Create your portfolio today</h2>
            <p className="mt-2 text-sm font-semibold text-blue-100">Start free, publish fast, and upgrade when your online presence needs more power.</p>
            <Link href="/create" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-extrabold text-brand-600">
              Start Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
