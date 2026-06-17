import { PremiumTemplate, PremiumTheme } from "@/data/premiumTemplates";
import {
  ArrowRight,
  Award,
  Briefcase,
  Camera,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Quote,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const themeStyles: Record<
  PremiumTheme,
  {
    page: string;
    ink: string;
    muted: string;
    header: string;
    section: string;
    card: string;
    primary: string;
    outline: string;
    darkBand: string;
    accent: string;
    heroVisual: string;
    image: string;
    serif: boolean;
  }
> = {
  storybook: {
    page: "bg-[#fffaf0] text-[#17264a]",
    ink: "text-[#17264a]",
    muted: "text-[#5f6581]",
    header: "border-[#f4d8c8]/80 bg-[#fffaf0]/92",
    section: "bg-[#fff7e8]",
    card: "border-[#f0d5c0] bg-white shadow-[0_18px_45px_rgba(238,128,112,0.12)]",
    primary: "bg-[#17264a] text-white hover:bg-[#22365f]",
    outline: "border-[#ef756b] text-[#ef756b]",
    darkBand: "bg-[#17264a] text-white",
    accent: "text-[#ef756b]",
    heroVisual: "from-[#ffd5c8] via-[#fff2c7] to-[#d8ead8]",
    image: "from-[#ffb7a9] via-[#ffe3a5] to-[#91c7a4]",
    serif: true,
  },
  elegant: {
    page: "bg-[#f7f2ea] text-[#17221d]",
    ink: "text-[#17221d]",
    muted: "text-[#756e63]",
    header: "border-[#ded5c6] bg-[#f7f2ea]/92",
    section: "bg-[#fbf7ef]",
    card: "border-[#dfd5c6] bg-[#fffdf8] shadow-[0_18px_45px_rgba(23,34,29,0.08)]",
    primary: "bg-[#112b24] text-white hover:bg-[#183b32]",
    outline: "border-[#b69a72] text-[#112b24]",
    darkBand: "bg-[#0f2a24] text-[#f7f2ea]",
    accent: "text-[#b19061]",
    heroVisual: "from-[#09231d] via-[#18352c] to-[#d4c2a3]",
    image: "from-[#18352c] via-[#6d5d48] to-[#e6dccb]",
    serif: true,
  },
  developer: {
    page: "bg-white text-slate-950",
    ink: "text-slate-950",
    muted: "text-slate-600",
    header: "border-slate-800 bg-[#070d1a]/95 text-white",
    section: "bg-white",
    card: "border-slate-200 bg-white shadow-card",
    primary: "bg-blue-600 text-white hover:bg-blue-500",
    outline: "border-blue-400 text-blue-600",
    darkBand: "bg-[#07101f] text-white",
    accent: "text-blue-500",
    heroVisual: "from-[#07101f] via-[#0d2450] to-[#1d4ed8]",
    image: "from-[#0b1220] via-[#183b78] to-[#60a5fa]",
    serif: false,
  },
  photographer: {
    page: "bg-[#050607] text-[#f3eee4]",
    ink: "text-[#f3eee4]",
    muted: "text-[#b7aa98]",
    header: "border-white/10 bg-[#050607]/94 text-[#f3eee4]",
    section: "bg-[#090b0b]",
    card: "border-white/10 bg-[#0d0f0f] shadow-[0_18px_45px_rgba(0,0,0,0.35)]",
    primary: "bg-transparent text-[#e0b46e] ring-1 ring-[#8a6b3d] hover:bg-[#e0b46e] hover:text-black",
    outline: "border-[#8a6b3d] text-[#e0b46e]",
    darkBand: "bg-black text-[#f3eee4]",
    accent: "text-[#d5a45b]",
    heroVisual: "from-[#050607] via-[#1f211d] to-[#8a6b3d]",
    image: "from-[#101112] via-[#263027] to-[#9c7650]",
    serif: true,
  },
  fashion: {
    page: "bg-[#f8f3eb] text-[#14110f]",
    ink: "text-[#14110f]",
    muted: "text-[#766a5e]",
    header: "border-[#d8cbb8] bg-[#15110e]/90 text-white",
    section: "bg-[#f8f3eb]",
    card: "border-[#ddd2c3] bg-[#fffbf5] shadow-[0_16px_42px_rgba(36,28,20,0.1)]",
    primary: "bg-[#d8b875] text-[#16120f] hover:bg-[#e4c987]",
    outline: "border-[#b99d68] text-[#14110f]",
    darkBand: "bg-[#0d0f10] text-[#f7efe3]",
    accent: "text-[#b99d68]",
    heroVisual: "from-[#17110d] via-[#6d5642] to-[#d8b875]",
    image: "from-[#17110d] via-[#8f765b] to-[#f1dfbd]",
    serif: true,
  },
  bold: {
    page: "bg-white text-black",
    ink: "text-black",
    muted: "text-zinc-600",
    header: "border-black bg-white/95",
    section: "bg-white",
    card: "border-black bg-white shadow-[8px_8px_0_rgba(0,0,0,1)]",
    primary: "bg-black text-white hover:bg-zinc-800",
    outline: "border-black text-black",
    darkBand: "bg-black text-white",
    accent: "text-[#c7ff00]",
    heroVisual: "from-[#c7ff00] via-[#7c3aed] to-[#ff6a00]",
    image: "from-black via-[#7c3aed] to-[#c7ff00]",
    serif: false,
  },
};

const visualLabels: Record<PremiumTheme, string[]> = {
  storybook: ["artist workspace", "storybook spread", "character art", "botanical print"],
  elegant: ["consultant portrait", "strategy board", "brand collateral", "studio detail"],
  developer: ["app dashboard", "code editor", "analytics screen", "product UI"],
  photographer: ["mountain frame", "coastal story", "forest road", "portrait session"],
  fashion: ["editorial portrait", "runway detail", "atelier mood", "campaign frame"],
  bold: ["brand poster", "package mockup", "mobile design", "editorial layout"],
};

function slugId(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function navHref(item: string) {
  const lower = item.toLowerCase();
  if (lower === "home") return "#home";
  if (lower === "portfolio" || lower === "work" || lower === "projects" || lower === "lookbook") return "#work";
  if (lower === "collections") return "#services";
  if (lower === "clients") return "#testimonials";
  if (lower === "press" || lower === "insights" || lower === "blog" || lower === "shop" || lower === "stories") return "#gallery";
  return `#${slugId(item)}`;
}

function IconBadge({ index, theme }: { index: number; theme: PremiumTheme }) {
  const icons = [Palette, Sparkles, Code2, Camera, Briefcase, Heart, Award, Zap, CheckCircle2];
  const Icon = icons[index % icons.length];
  const style = themeStyles[theme];

  return (
    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${theme === "bold" ? "bg-[#c7ff00] text-black" : "bg-white/12"} ${style.accent}`}>
      <Icon size={22} />
    </span>
  );
}

function MediaCard({
  theme,
  label,
  tall = false,
  wide = false,
  index = 0,
}: {
  theme: PremiumTheme;
  label: string;
  tall?: boolean;
  wide?: boolean;
  index?: number;
}) {
  const style = themeStyles[theme];
  const texture =
    theme === "developer"
      ? "bg-[linear-gradient(rgba(96,165,250,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.12)_1px,transparent_1px)] bg-[size:22px_22px]"
      : theme === "bold"
        ? "bg-[radial-gradient(circle_at_20%_20%,rgba(199,255,0,0.7),transparent_24%),radial-gradient(circle_at_75%_28%,rgba(124,58,237,0.65),transparent_28%),linear-gradient(135deg,#050505,#2b2b2b)]"
        : "bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.5),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_22%)]";

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border ${style.card} ${tall ? "min-h-[25rem]" : "min-h-[14rem]"} ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${style.image}`} />
      <div className={`absolute inset-0 opacity-80 ${texture}`} />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
      {theme === "storybook" ? (
        <>
          <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-[#ff7669]/80" />
          <div className="absolute right-8 top-12 h-24 w-32 rounded-[45%] bg-[#fff2bd]/90 rotate-6" />
          <div className="absolute bottom-16 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#6fa878]/80" />
        </>
      ) : null}
      {theme === "developer" ? (
        <div className="absolute left-5 top-5 right-5 rounded-lg border border-blue-300/20 bg-black/55 p-4 font-mono text-[0.68rem] text-blue-100">
          <div className="mb-3 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <p className="text-blue-300">const project = buildExperience();</p>
          <p className="mt-2 text-emerald-300">score.performance = 98;</p>
          <p className="mt-2 text-white/80">deploy(&quot;production&quot;);</p>
        </div>
      ) : null}
      {theme === "photographer" || theme === "fashion" ? (
        <div className="absolute inset-4 rounded-lg border border-white/15 bg-black/10" />
      ) : null}
      {theme === "bold" ? (
        <div className="absolute right-5 top-5 rotate-6 bg-black px-4 py-3 text-xl font-black uppercase text-white shadow-[6px_6px_0_#c7ff00]">
          #{index + 1}
        </div>
      ) : null}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-white/75">{visualLabels[theme][index % visualLabels[theme].length]}</p>
        <h3 className="mt-2 text-lg font-black text-white">{label}</h3>
      </div>
    </div>
  );
}

function SectionTitle({
  template,
  eyebrow,
  title,
  align = "left",
}: {
  template: PremiumTemplate;
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}) {
  const style = themeStyles[template.theme];
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow ? (
        <p className={`text-xs font-black uppercase tracking-[0.2em] ${style.accent}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`mt-2 text-3xl font-black leading-tight sm:text-4xl ${style.ink} ${style.serif ? "font-serif" : ""}`}>{title}</h2>
    </div>
  );
}

function HeaderBlock({ template }: { template: PremiumTemplate }) {
  const style = themeStyles[template.theme];

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur ${style.header}`}>
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="min-w-0">
          <p className={`text-lg font-black uppercase tracking-[0.16em] ${template.theme === "storybook" ? "normal-case tracking-normal" : ""}`}>{template.brand}</p>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] opacity-70">{template.subtitle}</p>
        </a>
        <nav className="hidden items-center gap-7 text-xs font-black uppercase tracking-[0.12em] lg:flex">
          {template.nav.map((item) => (
            <a key={item} href={navHref(item)} className="opacity-75 transition hover:opacity-100">
              {item}
            </a>
          ))}
        </nav>
        <a className={`hidden min-h-11 items-center justify-center rounded-none px-5 text-xs font-black uppercase tracking-[0.12em] lg:flex ${style.primary}`} href="#contact">
          {template.cta}
          {template.theme === "developer" ? <Download className="ml-2" size={15} /> : <ArrowRight className="ml-2" size={15} />}
        </a>
        <a href="#contact" className={`flex h-11 w-11 items-center justify-center rounded-lg lg:hidden ${style.primary}`} aria-label="Open menu">
          <Menu size={20} />
        </a>
      </div>
    </header>
  );
}

function Hero({ template }: { template: PremiumTemplate }) {
  const style = themeStyles[template.theme];
  const darkHero = ["developer", "photographer", "fashion", "elegant"].includes(template.theme);
  const isBold = template.theme === "bold";

  return (
    <section id="home" className={`relative overflow-hidden ${darkHero ? style.darkBand : style.section}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${style.heroVisual} ${darkHero ? "opacity-45" : "opacity-25"}`} />
      {template.theme === "developer" ? <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.14)_1px,transparent_1px)] bg-[size:34px_34px]" /> : null}
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
        <div>
          <p className={`text-xs font-black uppercase tracking-[0.22em] ${style.accent}`}>{template.hero.eyebrow}</p>
          <h1
            className={`mt-5 max-w-3xl leading-[0.95] ${
              isBold ? "text-6xl font-black uppercase sm:text-8xl lg:text-9xl" : "text-5xl font-black sm:text-6xl lg:text-7xl"
            } ${style.serif ? "font-serif" : ""}`}
          >
            {template.hero.headline}
          </h1>
          <p className={`mt-6 max-w-xl text-base font-medium leading-8 ${darkHero ? "text-white/76" : style.muted}`}>{template.hero.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className={`inline-flex min-h-12 items-center justify-center px-6 text-sm font-black ${style.primary}`}>
              {template.hero.primary}
              <ArrowRight className="ml-2" size={17} />
            </a>
            {template.hero.secondary ? (
              <a href="#about" className={`inline-flex min-h-12 items-center justify-center border px-6 text-sm font-black ${style.outline}`}>
                {template.hero.secondary}
              </a>
            ) : null}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em] opacity-80">
            {template.socialLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </div>
        </div>
        <div className="relative">
          <MediaCard theme={template.theme} label={template.brand} tall index={0} />
          {template.hero.sticker ? (
            <div className={`absolute right-3 top-4 max-w-40 rounded-xl border p-4 text-sm font-black uppercase shadow-xl sm:right-8 sm:top-8 ${style.card}`}>
              {template.hero.sticker}
            </div>
          ) : null}
          {template.theme === "developer" ? (
            <div className="absolute bottom-5 right-5 rounded-xl border border-blue-300/20 bg-[#0b1220]/90 p-4 text-white shadow-xl">
              <p className="text-xs font-bold text-blue-200">Project Preview</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-emerald-400 text-xl font-black">98</span>
                <span className="text-xs text-slate-300">Performance<br />Best Practices<br />SEO</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function About({ template }: { template: PremiumTemplate }) {
  const style = themeStyles[template.theme];
  const dark = template.theme === "bold";

  return (
    <section id="about" className={`px-4 py-14 sm:px-6 lg:px-8 ${dark ? style.darkBand : style.section}`}>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <MediaCard theme={template.theme} label={template.about.label} tall={template.theme === "fashion"} index={1} />
        <div className={`rounded-xl border p-6 sm:p-8 ${dark ? "border-white/15 bg-white/5" : style.card}`}>
          <p className={`text-xs font-black uppercase tracking-[0.2em] ${style.accent}`}>{template.about.label}</p>
          <h2 className={`mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-5xl ${style.serif ? "font-serif" : ""}`}>{template.about.heading}</h2>
          <p className={`mt-5 max-w-2xl text-sm font-medium leading-8 ${dark ? "text-white/75" : style.muted}`}>{template.about.text}</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {template.stats.map((stat) => (
              <div key={stat.label} className={`rounded-xl border p-4 ${dark ? "border-white/15 bg-black" : "border-current/10 bg-white/50"}`}>
                <p className={`text-3xl font-black ${style.accent}`}>{stat.value}</p>
                <p className="mt-1 text-xs font-bold opacity-75">{stat.label}</p>
              </div>
            ))}
          </div>
          <a href="#contact" className={`mt-7 inline-flex min-h-11 items-center justify-center px-5 text-sm font-black ${style.primary}`}>
            {template.about.link}
            <ArrowRight className="ml-2" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Work({ template }: { template: PremiumTemplate }) {
  const style = themeStyles[template.theme];
  const dark = template.theme === "photographer";

  return (
    <section id="work" className={`px-4 py-14 sm:px-6 lg:px-8 ${dark ? style.darkBand : style.page}`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionTitle
            template={template}
            eyebrow={template.theme === "fashion" ? "Lookbook" : template.theme === "photographer" ? "Featured Gallery" : "Featured Work"}
            title={
              template.theme === "storybook"
                ? "Illustration Gallery"
                : template.theme === "developer"
                  ? "Some things I've built"
                  : template.theme === "fashion"
                    ? "Latest Editorials"
                    : template.theme === "elegant"
                      ? "Real challenges. Strategic solutions. Measurable impact."
                      : template.theme === "bold"
                        ? "Featured Work"
                        : "Portfolio Categories"
            }
          />
          <a href="#contact" className={`inline-flex min-h-11 items-center text-sm font-black ${style.accent}`}>
            View all
            <ArrowRight className="ml-2" size={17} />
          </a>
        </div>
        {template.theme === "storybook" ? (
          <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto">
            {template.logos.map((tab, index) => (
              <span key={tab} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-black ${index === 0 ? "bg-[#17264a] text-white" : "border-[#f0d5c0] bg-white text-[#17264a]"}`}>
                {tab}
              </span>
            ))}
          </div>
        ) : null}
        <div className={`mt-8 grid gap-5 ${template.theme === "photographer" || template.theme === "fashion" ? "md:grid-cols-5" : "md:grid-cols-3"}`}>
          {template.gallery.map((item, index) => (
            <div key={item.title} className={template.theme === "photographer" || template.theme === "fashion" ? "md:col-span-1" : ""}>
              <MediaCard theme={template.theme} label={item.title} index={index + 2} />
              <p className={`mt-3 text-sm font-black ${dark ? "text-white" : style.ink}`}>{item.title}</p>
              <p className={`text-xs font-bold ${dark ? "text-white/55" : style.muted}`}>{item.meta}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {template.projects.map((project, index) => (
            <article key={project.title} className={`overflow-hidden rounded-xl border ${style.card}`}>
              <MediaCard theme={template.theme} label={project.title} index={index + 5} />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-lg font-black ${style.ink}`}>{project.title}</h3>
                  <span className={`rounded-full border px-3 py-1 text-[0.65rem] font-black ${style.outline}`}>{project.meta}</span>
                </div>
                {project.text ? <p className={`mt-3 text-sm leading-7 ${style.muted}`}>{project.text}</p> : null}
                <a href="#contact" className={`mt-4 inline-flex items-center text-sm font-black ${style.accent}`}>
                  View Project
                  <ArrowRight className="ml-2" size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ template }: { template: PremiumTemplate }) {
  const style = themeStyles[template.theme];
  const useDark = ["developer", "photographer", "fashion", "bold"].includes(template.theme);

  return (
    <section id="services" className={`px-4 py-14 sm:px-6 lg:px-8 ${useDark ? style.darkBand : style.section}`}>
      <div className="mx-auto max-w-7xl">
        {template.theme === "bold" ? (
          <div className="mb-10 grid gap-6 bg-[#c7ff00] p-6 text-black md:grid-cols-[0.7fr_1.3fr]">
            <h2 className="text-4xl font-black uppercase">Brand Identity</h2>
            <div className="grid gap-4 sm:grid-cols-5">
              {template.logos.map((logo) => (
                <span key={logo} className="text-center text-lg font-black uppercase">{logo}</span>
              ))}
            </div>
          </div>
        ) : null}
        <SectionTitle
          template={template}
          eyebrow={template.theme === "developer" ? "Services" : template.theme === "fashion" ? "Collections" : "What I Do"}
          title={
            template.theme === "elegant"
              ? "Strategic services for brands that are ready to grow."
              : template.theme === "developer"
                ? "What I can help you with"
                : template.theme === "fashion"
                  ? "Signature Collections"
                  : template.theme === "bold"
                    ? "Services"
                    : "Services and specialties"
          }
        />
        <div className={`mt-8 grid gap-4 ${template.services.length > 4 ? "sm:grid-cols-2 lg:grid-cols-5" : "md:grid-cols-3 lg:grid-cols-4"}`}>
          {template.services.map((service, index) => (
            <article key={service.title} className={`rounded-xl border p-5 ${useDark ? "border-white/12 bg-white/5" : style.card}`}>
              <IconBadge index={index} theme={template.theme} />
              <h3 className="mt-5 text-base font-black">{service.title}</h3>
              <p className={`mt-2 text-sm leading-6 ${useDark ? "text-white/65" : style.muted}`}>{service.text}</p>
            </article>
          ))}
        </div>
        {template.theme !== "bold" && template.theme !== "storybook" ? (
          <div className={`mt-10 flex flex-wrap items-center justify-center gap-8 border-t pt-8 text-center ${useDark ? "border-white/12" : "border-current/10"}`}>
            {template.logos.map((logo) => (
              <span key={logo} className={`text-sm font-black uppercase tracking-[0.18em] ${useDark ? "text-white/65" : style.muted}`}>{logo}</span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Testimonials({ template }: { template: PremiumTemplate }) {
  const style = themeStyles[template.theme];
  const dark = ["developer", "photographer", "fashion", "bold"].includes(template.theme);

  return (
    <section id="testimonials" className={`px-4 py-14 sm:px-6 lg:px-8 ${dark ? style.darkBand : style.section}`}>
      <div className="mx-auto max-w-7xl">
        <SectionTitle template={template} eyebrow="Kind Words" title={template.theme === "fashion" ? "What They Say" : "Client Love"} align="center" />
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {template.testimonials.map((testimonial, index) => (
            <article key={testimonial.name} className={`rounded-xl border p-6 ${dark ? "border-white/12 bg-white/5" : style.card}`}>
              <Quote className={style.accent} size={26} />
              <p className={`mt-4 text-sm font-medium leading-7 ${dark ? "text-white/78" : style.muted}`}>&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${style.image} text-sm font-black text-white`}>
                  {testimonial.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-black">{testimonial.name}</p>
                  <p className={`text-xs font-bold ${dark ? "text-white/55" : style.muted}`}>{testimonial.role}</p>
                  <div className="mt-1 flex gap-0.5 text-amber-400">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={`${index}-${star}`} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ template }: { template: PremiumTemplate }) {
  const style = themeStyles[template.theme];
  const dark = ["developer", "photographer", "bold"].includes(template.theme);

  return (
    <section id="contact" className={`px-4 py-14 sm:px-6 lg:px-8 ${dark ? style.darkBand : style.section}`}>
      <div className={`mx-auto grid max-w-7xl gap-8 rounded-xl border p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] ${dark ? "border-white/12 bg-white/5" : style.card}`}>
        <div>
          <SectionTitle template={template} eyebrow="Contact" title={template.contact.heading} />
          <p className={`mt-4 max-w-xl text-sm font-medium leading-7 ${dark ? "text-white/70" : style.muted}`}>{template.contact.text}</p>
          <div className="mt-7 space-y-4 text-sm font-bold">
            <a href={`mailto:${template.contact.email}`} className="flex items-center gap-3">
              <Mail className={style.accent} size={18} />
              {template.contact.email}
            </a>
            <p className="flex items-center gap-3">
              <Phone className={style.accent} size={18} />
              {template.contact.phone}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className={style.accent} size={18} />
              {template.contact.location}
            </p>
          </div>
        </div>
        <form className="grid gap-3">
          <input className={`min-h-12 rounded-none border bg-transparent px-4 text-sm outline-none ${dark ? "border-white/20 placeholder:text-white/35" : "border-current/15"}`} placeholder="Name" />
          <input className={`min-h-12 rounded-none border bg-transparent px-4 text-sm outline-none ${dark ? "border-white/20 placeholder:text-white/35" : "border-current/15"}`} placeholder="Email" />
          <textarea className={`min-h-32 rounded-none border bg-transparent p-4 text-sm outline-none ${dark ? "border-white/20 placeholder:text-white/35" : "border-current/15"}`} placeholder="Message" />
          <button className={`min-h-12 px-6 text-sm font-black ${style.primary}`} type="button">
            {template.contact.cta}
            <ExternalLink className="ml-2 inline" size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

export function PremiumOnePageTemplate({ template }: { template: PremiumTemplate }) {
  const style = themeStyles[template.theme];

  return (
    <div className={`min-h-screen overflow-x-hidden ${style.page}`}>
      <HeaderBlock template={template} />
      <main>
        <Hero template={template} />
        <About template={template} />
        <Work template={template} />
        <Services template={template} />
        <Testimonials template={template} />
        <Contact template={template} />
      </main>
      <footer className={`border-t px-4 py-7 sm:px-6 lg:px-8 ${["developer", "photographer", "fashion", "bold"].includes(template.theme) ? "border-white/10 bg-black text-white" : "border-current/10"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs font-bold opacity-80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {template.brand} <span className="opacity-60">/</span> {template.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {template.socialLinks.map((link) => (
              <a key={link} href="#contact">
                {link}
              </a>
            ))}
          </div>
          <p>&copy; 2024 {template.brand}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
