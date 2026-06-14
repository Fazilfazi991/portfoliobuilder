import { FileText, Rocket, Sparkles, Wand2 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const steps = [
  {
    title: "Choose a Template",
    text: "Pick a template that fits your style and profession.",
    icon: Sparkles,
  },
  {
    title: "Add Your Content",
    text: "Add your details, experience, skills, and projects.",
    icon: FileText,
  },
  {
    title: "Customize & Preview",
    text: "Edit colors, fonts, sections and preview in real-time.",
    icon: Wand2,
  },
  {
    title: "Publish & Share",
    text: "Publish your site and share your unique link.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section id="examples" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionTitle title="How it works" />
      <div className="grid gap-4 lg:grid-cols-4 lg:gap-8">
        {steps.map(({ title, text, icon: Icon }, index) => (
          <div key={title} className="relative rounded-xl bg-white p-5 text-left lg:text-center">
            {index < steps.length - 1 ? (
              <div className="absolute left-1/2 top-10 hidden h-px w-full border-t border-dashed border-brand-200 lg:block" />
            ) : null}
            <div className="relative z-10 flex items-center gap-4 lg:block">
              <div className="relative mx-0 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 lg:mx-auto">
                <Icon size={25} />
                <span className="absolute -left-2 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-black text-white lg:left-0">
                  {index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-ink lg:mt-5">{title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
