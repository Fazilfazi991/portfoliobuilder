import { projects, services } from "@/data/portfolios";
import { Dribbble, Github, Linkedin } from "lucide-react";
import { PersonAvatar } from "./PersonAvatar";

export type PortfolioPreviewData = {
  name: string;
  title: string;
  bio: string;
  location?: string;
  email?: string;
  phone?: string;
};

export function PortfolioPreview({
  data,
  mobileFrame = false,
}: {
  data: PortfolioPreviewData;
  mobileFrame?: boolean;
}) {
  const content = (
    <div className="overflow-hidden rounded-xl bg-white text-ink shadow-card">
      <section className="grid gap-6 bg-gradient-to-br from-slate-950 to-slate-900 p-5 text-white sm:grid-cols-[1fr_auto] sm:p-8">
        <div>
          <p className="text-xs font-bold text-blue-200">Product Designer</p>
          <h1 className="mt-3 text-3xl font-black leading-tight">{data.name}</h1>
          <h2 className="text-xl font-extrabold text-blue-100">{data.title}</h2>
          <p className="mt-4 max-w-md text-sm font-medium leading-6 text-slate-300">{data.bio}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="rounded-lg bg-brand-600 px-4 py-3 text-xs font-black text-white" href="#work">
              View My Work
            </a>
            <a className="rounded-lg border border-white/20 px-4 py-3 text-xs font-black text-white" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="mt-5 flex gap-3 text-slate-300">
            <Github size={18} />
            <Dribbble size={18} />
            <Linkedin size={18} />
          </div>
        </div>
        <PersonAvatar className="mx-auto h-44 w-36 sm:h-56 sm:w-44" />
      </section>
      <section id="work" className="p-5 sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xl font-black">My Work</h2>
          <a href="#" className="text-xs font-black text-brand-600">
            View All Projects
          </a>
        </div>
        <div className="mb-4 flex gap-2 overflow-x-auto">
          {["All", "UI/UX", "Web", "App"].map((item, index) => (
            <span
              key={item}
              className={`shrink-0 rounded-full px-3 py-2 text-xs font-black ${
                index === 0 ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
              <div
                className={`h-24 rounded-md ${
                  index === 0 ? "bg-slate-900" : index === 1 ? "bg-blue-100" : "bg-rose-100"
                }`}
              />
              <h3 className="mt-3 text-sm font-black">{project.title}</h3>
              <p className="mt-1 text-xs font-semibold text-slate-500">{project.type}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="grid gap-3 border-t border-slate-100 p-5 sm:grid-cols-3 sm:p-8">
        {services.map((service) => (
          <div key={service.title} className="rounded-lg border border-slate-100 p-4">
            <h3 className="text-sm font-black text-brand-600">{service.title}</h3>
            <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );

  if (!mobileFrame) {
    return content;
  }

  return (
    <div className="mx-auto max-w-sm rounded-[1.7rem] border border-slate-200 bg-slate-950 p-2 shadow-soft">
      <div className="overflow-hidden rounded-[1.25rem] bg-white">{content}</div>
    </div>
  );
}
