"use client";

import { doctorTemplateData as data } from "@/data/doctorTemplate";
import {
  Activity,
  Award,
  BookOpenCheck,
  BriefcaseMedical,
  CalendarDays,
  ChevronDown,
  CircleUserRound,
  Download,
  Facebook,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  MonitorCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  UserRoundCheck,
  X,
} from "lucide-react";
import { useState } from "react";

const nav = ["Home", "About", "Services", "Credentials", "Gallery", "Testimonials", "FAQ", "Contact"];

function Photo({
  src,
  label,
  className = "",
  overlay = false,
}: {
  src: string;
  label: string;
  className?: string;
  overlay?: boolean;
}) {
  return (
    <div
      aria-label={label}
      className={`relative overflow-hidden bg-slate-100 bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
      role="img"
    >
      {overlay ? <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/10" /> : null}
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-5 text-center">
      <h2 className="text-2xl font-black text-[#081f3d] sm:text-3xl">{title}</h2>
      <span className="mx-auto mt-2 block h-1 w-8 rounded-full bg-[#0785a6]" />
    </div>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5 text-amber-500" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={13} fill="currentColor" strokeWidth={1.5} />
      ))}
    </span>
  );
}

export function DoctorTrustProfileTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const statIcons = [CircleUserRound, Star, HeartPulse, GraduationCap, BriefcaseMedical];
  const expertiseIcons = [Stethoscope, ShieldCheck, HeartPulse, UserRoundCheck, Activity, Sparkles];
  const serviceIcons = [BriefcaseMedical, Stethoscope, BookOpenCheck, UserRoundCheck, Activity, Syringe];

  return (
    <main className="bg-[#f8fbfd] text-[#081f3d]">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl text-[#0785a6]">
              <HeartPulse size={34} strokeWidth={1.8} />
            </span>
            <span className="leading-tight">
              <strong className="block text-base font-black">{data.profile.name}</strong>
              <span className="text-xs font-bold text-slate-500">{data.profile.subtitle}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-black text-slate-600 lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#0785a6]">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden min-h-11 items-center gap-2 rounded-lg bg-[#0785a6] px-5 text-xs font-black text-white shadow-lg shadow-cyan-100 sm:inline-flex"
          >
            <CalendarDays size={15} />
            Book Appointment
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen ? (
          <nav className="grid gap-1 border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-black text-slate-700 hover:bg-sky-50"
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="mt-2 rounded-lg bg-[#0785a6] px-4 py-3 text-center text-sm font-black text-white">
              Book Appointment
            </a>
          </nav>
        ) : null}
      </header>

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <section
          id="home"
          className="grid overflow-hidden rounded-[1.65rem] border border-slate-200 bg-white shadow-soft lg:grid-cols-[0.78fr_1fr_0.74fr]"
        >
          <div className="relative min-h-[25rem] bg-sky-50">
            <div className="absolute left-7 top-8 h-44 w-44 rounded-full bg-sky-100" />
            <div className="absolute left-6 top-10 hidden grid-cols-3 gap-3 sm:grid">
              {Array.from({ length: 18 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-sky-200" />
              ))}
            </div>
            <Photo
              src={data.profile.heroImage}
              label={`${data.profile.name}, ${data.profile.title}`}
              className="absolute inset-0 bg-[center_18%] lg:bg-[center_top]"
            />
          </div>

          <div className="flex flex-col justify-center border-y border-slate-100 p-6 sm:p-8 lg:border-x lg:border-y-0">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-50 px-3 py-2 text-xs font-black text-[#0785a6]">
              <ShieldCheck size={14} />
              {data.profile.badge}
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-[#081f3d] sm:text-5xl">
              {data.profile.name}
            </h1>
            <p className="mt-2 text-lg font-black text-[#0785a6] sm:text-xl">{data.profile.title}</p>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-slate-600">{data.profile.intro}</p>
            <div className="mt-6 grid gap-3 sm:flex">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0785a6] px-5 text-sm font-black text-white shadow-lg shadow-cyan-100"
              >
                <CalendarDays size={16} />
                {data.profile.primaryCta}
              </a>
              <a
                href="#credentials"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-black text-slate-700"
              >
                <Download size={16} />
                {data.profile.secondaryCta}
              </a>
            </div>
            <div className="mt-7">
              <p className="text-xs font-black text-slate-500">Available for consultations</p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs font-bold text-slate-500">
                {data.profile.availability.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <MonitorCheck size={15} className="text-slate-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden bg-[linear-gradient(100deg,#ffffff_0%,#f0f8fb_100%)] lg:block">
            <Photo src="/templates/doctor-trust/clinic.webp" label="minimal clinic interior" className="absolute inset-0 opacity-40" />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white/95 p-5 shadow-card backdrop-blur">
              <Award className="text-[#0785a6]" size={30} />
              <strong className="mt-3 block text-3xl font-black">{data.profile.floatingStat}</strong>
              <span className="text-sm font-bold text-slate-500">{data.profile.floatingLabel}</span>
            </div>
          </div>
        </section>

        <section className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {data.stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <article key={stat.label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#0785a6]">
                  <Icon size={24} />
                </span>
                <span>
                  <strong className="block text-2xl font-black">{stat.value}</strong>
                  <span className="text-xs font-bold text-slate-500">{stat.label}</span>
                </span>
              </article>
            );
          })}
        </section>

        <section className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <SectionTitle title="Areas of Expertise" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {data.expertise.map((item, index) => {
              const Icon = expertiseIcons[index];
              return (
                <article key={item} className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-[#0785a6]">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-4 text-sm font-black">{item}</h3>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="mt-4 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1fr_1.1fr]">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-black">About Me</h2>
            <p className="mt-4 text-sm font-black text-[#0785a6]">My Story</p>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{data.about.story}</p>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">{data.about.second}</p>
            <p className="mt-7 font-serif text-3xl italic text-[#081f3d]">{data.about.signature}</p>
            <p className="mt-1 text-xs font-black">Dr. Amina Rahman</p>
          </div>
          <div className="grid border-t border-slate-100 lg:grid-cols-[0.9fr_1fr] lg:border-l lg:border-t-0">
            <div className="p-6 sm:p-8">
              <p className="text-sm font-black text-[#0785a6]">My Values</p>
              <div className="mt-5 grid gap-4">
                {data.about.values.map((value) => (
                  <div key={value.title} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#0785a6]">
                      <HeartPulse size={18} />
                    </span>
                    <span>
                      <strong className="block text-sm font-black">{value.title}</strong>
                      <span className="text-xs font-semibold leading-5 text-slate-500">{value.text}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Photo src={data.about.image} label="doctor consultation detail" className="min-h-72 lg:min-h-full" />
          </div>
        </section>

        <section id="services" className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <SectionTitle title="Services & Treatments" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {data.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article key={service.title} className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-[#0785a6]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-sm font-black">{service.title}</h3>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="credentials" className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <SectionTitle title="Credentials & Education" />
          <div className="relative grid gap-4 lg:grid-cols-6">
            <div className="absolute left-0 right-0 top-4 hidden h-px bg-[#0785a6]/60 lg:block" />
            {data.credentials.map(([year, title, place]) => (
              <article key={`${year}-${title}`} className="relative rounded-2xl bg-white p-4 text-center">
                <span className="mx-auto mb-3 block h-4 w-4 rounded-full border-2 border-[#0785a6] bg-white" />
                <strong className="text-sm font-black text-[#0785a6]">{year}</strong>
                <h3 className="mt-2 text-sm font-black">{title}</h3>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{place}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <SectionTitle title="Clinic & Practice" />
          <div className="no-scrollbar -mx-2 flex gap-3 overflow-x-auto px-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {data.gallery.map((item) => (
              <article key={item.title} className="min-w-56 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm lg:min-w-0">
                <Photo src={item.image} label={item.title} className="h-32" />
                <h3 className="px-3 py-3 text-center text-xs font-black">{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <SectionTitle title="What Patients Say" />
          <div className="grid gap-4 lg:grid-cols-3">
            {data.testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-black text-[#0785a6]">“</p>
                <p className="mt-1 text-sm font-semibold leading-7 text-slate-600">{item.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sm font-black text-[#0785a6]">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <span>
                    <strong className="block text-sm font-black">{item.name}</strong>
                    <Stars />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="mb-5 text-2xl font-black">Frequently Asked Questions</h2>
            <div className="grid gap-3">
              {data.faqs.map((faq, index) => (
                <div key={faq.question} className="rounded-xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="flex min-h-12 w-full items-center justify-between gap-3 px-4 text-left text-sm font-black"
                  >
                    {faq.question}
                    <ChevronDown className={openFaq === index ? "rotate-180 text-[#0785a6]" : "text-[#0785a6]"} size={17} />
                  </button>
                  {openFaq === index ? (
                    <p className="border-t border-slate-100 px-4 py-3 text-sm font-semibold leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <h2 className="text-2xl font-black">Get in Touch</h2>
              <div className="mt-5 grid gap-4 text-sm font-bold text-slate-600">
                <span className="flex gap-3">
                  <Phone className="text-[#0785a6]" size={18} /> {data.contact.phone}
                </span>
                <span className="flex gap-3">
                  <Mail className="text-[#0785a6]" size={18} /> {data.contact.email}
                </span>
                <span className="flex gap-3">
                  <MapPin className="mt-1 shrink-0 text-[#0785a6]" size={18} /> {data.contact.location}
                </span>
                <span className="flex gap-3 whitespace-pre-line">
                  <CalendarDays className="mt-1 shrink-0 text-[#0785a6]" size={18} /> {data.contact.hours}
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-sky-50 p-5">
              <h3 className="text-xl font-black">Book an Appointment</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                Your health is my priority. Book your appointment today.
              </p>
              <a href="#contact" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0785a6] px-5 text-sm font-black text-white">
                <CalendarDays size={16} />
                Book Appointment
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-8 bg-[#0785a6] px-4 py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <HeartPulse size={30} />
              <span>
                <strong className="block font-black">{data.profile.name}</strong>
                <span className="text-xs font-bold text-white/75">{data.profile.subtitle}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-semibold leading-6 text-white/75">
              Dedicated to providing compassionate, personalized and evidence-based healthcare.
            </p>
          </div>
          <div>
            <h3 className="font-black">Quick Links</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-white/80">
              {nav.slice(0, 4).map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black">More</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-white/80">
              {nav.slice(4).map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black">Follow Me</h3>
            <div className="mt-4 flex gap-3">
              {[Facebook, Mail, Phone].map((Icon, index) => (
                <span key={index} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                  <Icon size={17} />
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl text-center text-xs font-bold text-white/75">
          © 2026 Dr. Amina Rahman. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
