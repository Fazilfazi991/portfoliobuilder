import { Check } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const plans = [
  {
    name: "Free",
    description: "Perfect to get started",
    price: "$0",
    cta: "Get Started",
    popular: false,
    features: ["1 Portfolio Website", "Portify Subdomain", "5 Templates", "Basic Sections"],
  },
  {
    name: "Pro",
    description: "Everything you need",
    price: "$6.99",
    cta: "Start Pro Trial",
    popular: true,
    features: ["Custom Domain", "Premium Templates", "Advanced Sections", "SEO Tools", "Priority Support"],
  },
  {
    name: "Business",
    description: "For professionals & teams",
    price: "$12.99",
    cta: "Start Business Trial",
    popular: false,
    features: ["Up to 5 Websites", "Custom Domain", "Premium Templates", "Team Collaboration", "Priority Support"],
  },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="w-full py-8">
      <SectionTitle title="Simple, transparent pricing" />
      <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold text-slate-500">
        <span>Billed Monthly</span>
        <span className="flex h-6 w-11 items-center rounded-full bg-slate-200 p-1">
          <span className="ml-auto h-4 w-4 rounded-full bg-white shadow-sm" />
        </span>
        <span className="text-ink">Billed Yearly</span>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-600">Save 20%</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative rounded-xl border bg-white p-5 shadow-sm ${
              plan.popular ? "border-brand-600 shadow-card ring-1 ring-brand-600" : "border-slate-200"
            }`}
          >
            {plan.popular ? (
              <div className="absolute -top-3 left-4 right-4 rounded-t-lg bg-brand-600 py-1 text-center text-xs font-black uppercase text-white">
                Most Popular
              </div>
            ) : null}
            <h3 className="mt-2 text-lg font-black text-ink">{plan.name}</h3>
            <p className="mt-1 text-xs font-semibold text-slate-500">{plan.description}</p>
            <div className="mt-5 flex items-end gap-1">
              <span className="text-4xl font-black text-ink">{plan.price}</span>
              <span className="pb-1 text-sm font-semibold text-slate-500">/month</span>
            </div>
            <ul className="mt-5 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <Check size={16} className="text-brand-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-7 flex min-h-11 items-center justify-center rounded-lg border px-4 py-3 text-sm font-extrabold ${
                plan.popular
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-slate-200 bg-white text-ink hover:border-brand-200 hover:text-brand-600"
              }`}
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
