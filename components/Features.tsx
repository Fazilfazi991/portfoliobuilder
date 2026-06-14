import { Globe2, Headphones, LockKeyhole, Search, Smartphone, Zap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const features = [
  {
    title: "Super Fast",
    text: "Build and launch your site in just 1-2 minutes.",
    icon: Zap,
  },
  {
    title: "Mobile Responsive",
    text: "Looks perfect on all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    title: "SEO Friendly",
    text: "Get discovered with clean and optimized code.",
    icon: Search,
  },
  {
    title: "Custom Domain",
    text: "Connect your domain and build your brand.",
    icon: Globe2,
  },
  {
    title: "Secure & Reliable",
    text: "SSL secured, fast hosting and daily backups.",
    icon: LockKeyhole,
  },
  {
    title: "24/7 Support",
    text: "We're here to help you anytime, anywhere.",
    icon: Headphones,
  },
];

export function Features() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionTitle title="Why choose Portify?" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {features.map(({ title, text, icon: Icon }) => (
          <div key={title} className="flex gap-3 rounded-xl bg-white p-4">
            <Icon className="mt-1 shrink-0 text-brand-600" size={24} />
            <div>
              <h3 className="text-sm font-extrabold text-ink">{title}</h3>
              <p className="mt-1 text-xs font-medium leading-5 text-slate-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
