import {
  BriefcaseBusiness,
  GraduationCap,
  Megaphone,
  Palette,
  Stethoscope,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";

const categories = [
  {
    title: "Job Seeker",
    description: "Showcase your skills, experience and resume.",
    icon: BriefcaseBusiness,
    color: "bg-blue-50 text-brand-600",
  },
  {
    title: "Freelancer",
    description: "Highlight your work and attract more clients.",
    icon: UserRound,
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Doctor",
    description: "Build trust with your professional profile.",
    icon: Stethoscope,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Designer",
    description: "Showcase your creative work beautifully.",
    icon: Palette,
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Teacher",
    description: "Share your expertise and achievements.",
    icon: GraduationCap,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Digital Marketer",
    description: "Grow your personal brand and get noticed.",
    icon: Megaphone,
    color: "bg-sky-50 text-sky-600",
  },
];

export function CategoryCards() {
  return (
    <section id="features" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionTitle title="Create a portfolio for every profession" />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6">
        {categories.map(({ title, description, icon: Icon, color }) => (
          <Link
            key={title}
            href="/templates"
            className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-card sm:p-5"
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${color}`}>
              <Icon size={23} />
            </div>
            <h3 className="text-sm font-extrabold text-ink sm:text-base">{title}</h3>
            <p className="mt-2 min-h-12 text-xs font-medium leading-5 text-slate-600">{description}</p>
            <span className="mt-4 inline-flex text-xs font-extrabold text-brand-600">
              Explore <span className="ml-1 transition group-hover:translate-x-1">-&gt;</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
