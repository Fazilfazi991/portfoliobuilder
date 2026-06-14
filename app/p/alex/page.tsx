import { PersonAvatar } from "@/components/PersonAvatar";
import { alexProfile, projects, services } from "@/data/portfolios";
import { Dribbble, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function PublicPortfolioPage() {
  return (
    <main className="bg-white text-ink">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/p/alex" className="text-2xl font-black">
            A
          </Link>
          <nav className="hidden gap-7 text-sm font-bold text-slate-600 md:flex">
            {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-600">
                {item}
              </a>
            ))}
          </nav>
          <a href="#contact" className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-black text-white">
            Hire Me
          </a>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-black text-brand-600">Product Designer</p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">Hi, I&apos;m Alex Morgan</h1>
          <h2 className="mt-2 text-2xl font-black text-slate-700">{alexProfile.title}</h2>
          <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-slate-600">{alexProfile.bio}</p>
          <div className="mt-7 grid gap-3 sm:flex">
            <a href="#portfolio" className="flex min-h-12 items-center justify-center rounded-lg bg-brand-600 px-6 text-sm font-black text-white">
              View My Work
            </a>
            <a href="#contact" className="flex min-h-12 items-center justify-center rounded-lg border border-slate-200 px-6 text-sm font-black text-ink">
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex gap-4 text-slate-600">
            <Github size={19} />
            <Dribbble size={19} />
            <Linkedin size={19} />
            <Mail size={19} />
          </div>
        </div>
        <PersonAvatar className="mx-auto h-72 w-56 sm:h-96 sm:w-72" />
      </section>

      <section id="services" className="border-y border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-black">What I Do</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-brand-600">{service.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black">My Work</h2>
          <a href="#" className="text-sm font-black text-brand-600">View All Projects</a>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {["All", "UI/UX", "Web Design", "App Design"].map((item, index) => (
            <span key={item} className={`shrink-0 rounded-full px-4 py-2 text-xs font-black ${index === 0 ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}>
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className={`h-44 ${index === 0 ? "bg-slate-950" : index === 1 ? "bg-blue-100" : "bg-rose-100"}`} />
              <div className="p-5">
                <h3 className="font-black">{project.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl bg-brand-50 p-6 sm:p-8">
          <h2 className="text-2xl font-black">About Alex</h2>
          <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-700">{alexProfile.longBio}</p>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="mx-auto max-w-2xl text-lg font-bold leading-8 text-slate-700">
            Alex turned our product vision into a polished experience our customers understood immediately.
          </p>
          <p className="mt-4 text-sm font-black text-ink">Maya Lee, Founder</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 rounded-2xl bg-slate-950 p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-black">Let&apos;s build something great.</h2>
            <p className="mt-2 text-sm font-semibold text-slate-300">Available for select product design projects.</p>
          </div>
          <a href="mailto:alex@example.com" className="flex min-h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-black text-slate-950">
            Contact Me
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-4 py-8 text-center text-sm font-bold text-slate-500">
        © 2026 Alex Morgan. Built with Portify.
      </footer>
    </main>
  );
}
