import { PublicTemplate } from "@/data/publicTemplates";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

function Portrait({ template }: { template: PublicTemplate }) {
  return (
    <div className="relative mx-auto h-72 w-60 overflow-hidden rounded-[2rem] border border-white/25 bg-white/15 shadow-2xl sm:h-96 sm:w-80">
      <div className={`absolute inset-5 rounded-[1.5rem] ${template.theme.soft}`} />
      <div className="absolute left-1/2 top-12 h-24 w-24 -translate-x-1/2 rounded-full bg-amber-200 shadow-lg" />
      <div className="absolute bottom-0 left-1/2 h-48 w-44 -translate-x-1/2 rounded-t-[4rem] bg-sky-700" />
      <div className="absolute bottom-0 left-10 h-32 w-16 rotate-[-12deg] rounded-t-full bg-white/20" />
      <div className="absolute bottom-0 right-10 h-32 w-16 rotate-[12deg] rounded-t-full bg-white/20" />
      <div className="absolute left-1/2 top-[5.7rem] h-2 w-16 -translate-x-1/2 rounded-full bg-slate-900/20" />
    </div>
  );
}

function VisualTile({
  template,
  index,
  label,
}: {
  template: PublicTemplate;
  index: number;
  label: string;
}) {
  const fills = [
    "from-blue-600 to-slate-950",
    "from-cyan-400 to-blue-900",
    "from-rose-400 to-slate-900",
  ];

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
      <div className={`relative h-48 bg-gradient-to-br ${fills[index % fills.length]}`}>
        <div className="absolute left-5 top-5 h-20 w-32 rounded-xl bg-white/20 backdrop-blur-sm" />
        <div className="absolute bottom-5 right-5 h-24 w-28 rounded-2xl bg-white/25 backdrop-blur-sm" />
        <div className={`absolute bottom-5 left-5 h-10 w-24 rounded-lg ${template.theme.accent}`} />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black text-slate-950">{label}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
          A polished, measurable project built around clear goals and practical outcomes.
        </p>
      </div>
    </article>
  );
}

export function PublicPortfolioTemplate({ template }: { template: PublicTemplate }) {
  const darkPage = template.theme.text === "text-white";

  return (
    <main className={`${template.theme.bg} ${template.theme.text}`}>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className={`text-xl font-black ${darkPage ? "text-slate-950" : template.theme.text}`}>
            {template.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
            {template.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().split(" ")[0]}`} className="hover:text-brand-600">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className={`rounded-lg px-4 py-2 text-sm font-black text-white ${template.theme.accent}`}
          >
            Contact
          </a>
        </div>
      </header>

      <section className={`bg-gradient-to-br ${template.theme.hero}`}>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-black ${template.theme.soft} ${template.theme.accentText}`}>
              <Sparkles size={14} />
              {template.profession}
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
              {template.headline}
            </h1>
            <p className={`mt-5 max-w-2xl text-base font-semibold leading-7 sm:text-lg ${template.theme.muted}`}>
              {template.summary}
            </p>
            <div className="mt-8 grid gap-3 sm:flex">
              <a
                href="#contact"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-black text-white ${template.theme.accent}`}
              >
                {template.primaryCta}
                {template.primaryCta.includes("Download") ? <Download size={17} /> : <ArrowRight size={17} />}
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300/70 bg-white px-6 text-sm font-black text-slate-950"
              >
                {template.secondaryCta}
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {template.stats.map((stat, index) => (
                <div key={stat} className="rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <strong className="block text-2xl font-black text-slate-950">{stat}</strong>
                  <span className="mt-1 block text-xs font-bold leading-5 text-slate-600">
                    {template.statLabels[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Portrait template={template} />
        </div>
      </section>

      <section id="summary" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className={`grid gap-5 rounded-3xl p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] ${template.theme.soft}`}>
          <div>
            <p className={`text-sm font-black uppercase ${template.theme.accentText}`}>{template.title}</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">{template.aboutTitle}</h2>
          </div>
          <p className="text-base font-semibold leading-8 text-slate-700">{template.about}</p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">{template.servicesTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {template.services.map((service) => (
            <article key={service} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm">
              <CheckCircle2 className={template.theme.accentText} size={24} />
              <h3 className="mt-4 text-lg font-black">{service}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Clear strategy, polished execution, and outcomes that are easy to understand.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className={`py-12 ${darkPage ? "bg-black/30" : "bg-slate-50"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className={`text-sm font-black uppercase ${template.theme.accentText}`}>Selected proof</p>
              <h2 className="mt-2 text-3xl font-black">{template.projectsTitle}</h2>
            </div>
            <a href="#contact" className={`hidden text-sm font-black sm:inline-flex ${template.theme.accentText}`}>
              Work together
            </a>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {template.projects.map((project, index) => (
              <VisualTile key={project} template={template} index={index} label={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className={template.theme.accentText} />
            <h2 className="text-2xl font-black">{template.processTitle}</h2>
          </div>
          <div className="mt-6 grid gap-4">
            {template.process.map((item, index) => (
              <div key={item} className="flex gap-4">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black text-white ${template.theme.accent}`}>
                  {index + 1}
                </span>
                <p className="pt-2 text-sm font-bold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
          <div className="flex items-center gap-3">
            <Award className={template.theme.accentText} />
            <h2 className="text-2xl font-black">{template.credentialsTitle}</h2>
          </div>
          <div className="mt-6 grid gap-3">
            {template.credentials.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-sm font-bold text-slate-700">
                <CalendarCheck size={18} className={template.theme.accentText} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className={`rounded-3xl p-8 text-center ${template.theme.dark}`}>
          <MessageCircle className="mx-auto text-white" size={34} />
          <p className="mx-auto mt-5 max-w-3xl text-xl font-bold leading-9 text-white">
            “{template.testimonials[0]}”
          </p>
          <p className="mt-5 text-sm font-black text-white/70">Verified client testimonial</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className={`text-sm font-black uppercase ${template.theme.accentText}`}>Contact</p>
            <h2 className="mt-2 text-3xl font-black">{template.contactTitle}</h2>
            <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-600">
              {template.contactText}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Mail size={17} /> hello@example.com
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone size={17} /> +971 50 000 0000
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} /> Dubai, UAE
              </span>
            </div>
          </div>
          <form className="grid gap-3">
            <input className="min-h-12 rounded-lg border border-slate-200 px-4 text-sm font-bold outline-none" placeholder="Your name" />
            <input className="min-h-12 rounded-lg border border-slate-200 px-4 text-sm font-bold outline-none" placeholder="Email address" />
            <textarea className="min-h-28 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold outline-none" placeholder="Tell me what you need" />
            <button className={`min-h-12 rounded-lg text-sm font-black text-white ${template.theme.accent}`}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className={`border-t border-white/10 px-4 py-8 text-center text-sm font-bold ${template.theme.muted}`}>
        © 2026 {template.name}. Built with Portify.
      </footer>
    </main>
  );
}
