"use client";

import { doctorTemplateData as data } from "@/data/doctorTemplate";
import {
  Award,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  X,
} from "lucide-react";
import { useState } from "react";

function DoctorPortrait({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-100 via-white to-teal-50 shadow-2xl ${
        compact ? "h-56 w-full" : "h-80 w-64 sm:h-[28rem] sm:w-[22rem]"
      }`}
      aria-label="Professional doctor portrait illustration"
    >
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sky-200/60" />
      <div className="absolute -left-8 bottom-12 h-32 w-32 rounded-full bg-teal-100" />
      <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-amber-200 shadow-md" />
      <div className="absolute left-1/2 top-[6.6rem] h-10 w-36 -translate-x-1/2 rounded-t-full bg-stone-700" />
      <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-t-[5rem] bg-white shadow-xl" />
      <div className="absolute bottom-0 left-1/2 h-44 w-24 -translate-x-1/2 bg-sky-950" />
      <div className="absolute bottom-14 left-1/2 h-2 w-20 -translate-x-1/2 rounded-full bg-sky-700" />
      <div className="absolute bottom-20 right-10 text-[0.55rem] font-black text-sky-800">
        Dr. Amina Rahman
      </div>
    </div>
  );
}

function ClinicVisual() {
  return (
    <div className="relative h-36 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 to-sky-50">
      <div className="absolute left-4 top-6 h-20 w-28 rounded-xl bg-white shadow-sm" />
      <div className="absolute bottom-4 left-5 h-10 w-32 rounded-xl bg-amber-100" />
      <div className="absolute right-6 top-5 h-24 w-20 rounded-t-full bg-teal-100" />
      <div className="absolute right-10 top-12 h-14 w-12 rounded-t-full bg-emerald-500/30" />
      <div className="absolute left-9 top-10 text-xs font-black text-teal-800">SkinCare</div>
    </div>
  );
}

function TreatmentVisual({ index }: { index: number }) {
  const styles = [
    "from-rose-100 to-amber-50",
    "from-sky-100 to-white",
    "from-stone-100 to-rose-50",
    "from-cyan-100 to-blue-50",
    "from-amber-100 to-white",
  ];

  return (
    <div className={`relative h-36 overflow-hidden rounded-t-2xl bg-gradient-to-br ${styles[index % styles.length]}`}>
      <div className="absolute left-6 top-8 h-20 w-20 rounded-full bg-amber-200" />
      <div className="absolute left-12 top-20 h-16 w-24 rounded-t-full bg-white/80" />
      <div className="absolute right-5 top-7 h-20 w-24 rounded-2xl bg-white/60 shadow-sm" />
      <div className="absolute right-10 top-12 h-2 w-14 rounded-full bg-sky-600/50" />
    </div>
  );
}

export function DoctorTrustProfileTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const nav = ["Home", "About", "Services", "Testimonials", "Contact"];

  return (
    <main className="bg-white text-[#08233f]">
      <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-teal-700">
              <HeartPulse size={25} />
            </span>
            <span className="text-base font-black leading-tight text-[#08233f]">
              Doctor Trust
              <br />
              <span className="text-teal-700">Profile</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-black text-slate-600 lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-sky-700">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden min-h-12 items-center gap-2 rounded-full bg-sky-700 px-5 text-sm font-black text-white shadow-lg shadow-sky-100 sm:inline-flex"
          >
            <CalendarDays size={17} />
            Book Appointment
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 text-slate-700 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen ? (
          <div className="border-t border-sky-100 bg-white px-4 py-4 lg:hidden">
            <nav className="grid gap-2">
              {nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-black text-slate-700 hover:bg-sky-50"
                >
                  {item}
                </a>
              ))}
              <a href="#contact" className="mt-2 rounded-xl bg-sky-700 px-4 py-3 text-center text-sm font-black text-white">
                Book Appointment
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/60 to-white">
        <div className="absolute right-[-5rem] top-24 hidden h-72 w-72 rounded-full bg-sky-100 lg:block" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-black uppercase text-sky-800">
              <ShieldCheck size={15} />
              {data.badge}
            </div>
            <h1 className="mt-6 text-4xl font-black leading-tight text-[#092547] sm:text-6xl">
              {data.name}
            </h1>
            <p className="mt-2 text-2xl font-black text-teal-700 sm:text-3xl">{data.title}</p>
            <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-slate-700 sm:text-lg">
              {data.intro}
            </p>
            <div className="mt-8 grid gap-3 sm:flex">
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-sky-700 px-6 text-sm font-black text-white shadow-lg shadow-sky-100">
                <CalendarDays size={17} />
                Book Appointment
              </a>
              <a href="tel:+971501234567" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-sky-300 bg-white px-6 text-sm font-black text-sky-800">
                <Phone size={17} />
                Call Clinic
              </a>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["S", "N", "F", "A"].map((item) => (
                    <span key={item} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-xs font-black text-amber-800">
                      {item}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-700">
                  <span className="block text-amber-500">★★★★★</span>
                  {data.reviews}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-teal-700">
                  <ShieldCheck size={21} />
                </span>
                <span className="text-sm font-bold text-slate-700">{data.trusted}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <DoctorPortrait />
            <div className="absolute bottom-4 right-0 max-w-[13rem] rounded-2xl border border-sky-100 bg-white/95 p-4 shadow-soft">
              <div className="flex gap-2 text-sm font-black text-[#092547]">
                <MapPin size={17} className="text-sky-700" />
                SkinCare Medical Center Dubai
              </div>
              <div className="mt-3">
                <ClinicVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-2 grid gap-3 rounded-2xl border border-sky-100 bg-white p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {data.stats.map((stat, index) => {
            const Icon = [Award, Stethoscope, CalendarDays, HeartPulse][index];

            return (
              <div key={stat.label} className="flex items-center gap-4 rounded-xl p-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                  <Icon size={22} />
                </span>
                <span>
                  <strong className="block text-2xl font-black text-[#092547]">{stat.value}</strong>
                  <span className="text-sm font-bold text-slate-600">{stat.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-wide text-teal-700">Areas of expertise</p>
          <h2 className="mt-2 text-3xl font-black text-[#092547]">Specializations</h2>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.specializations.map((item, index) => {
            const Icon = [HeartPulse, Sparkles, Stethoscope, Syringe][index];

            return (
              <article key={item.title} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                  <Icon size={28} />
                </div>
                <h3 className="font-black text-[#092547]">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_0.8fr_0.75fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-teal-700">About Dr. Amina Rahman</p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-[#092547]">
            Compassionate Care.
            <br />
            Evidence-based Results.
          </h2>
          <p className="mt-5 text-sm font-semibold leading-7 text-slate-700">{data.about}</p>
          <ul className="mt-5 grid gap-3">
            {data.aboutBullets.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-bold text-slate-700">
                <Check size={18} className="text-teal-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <DoctorPortrait compact />
        <aside className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
          <h3 className="mb-4 text-lg font-black text-[#092547]">Qualifications</h3>
          <div className="grid gap-4">
            {data.qualifications.map((item) => (
              <div key={item} className="flex gap-3 text-sm font-bold leading-6 text-slate-700">
                <Award size={18} className="mt-1 shrink-0 text-sky-700" />
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-wide text-teal-700">Clinic Information</p>
        <h2 className="mt-2 text-3xl font-black text-[#092547]">{data.clinicInfo.name}</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr_1fr_1fr]">
          <ClinicVisual />
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <h3 className="flex items-center gap-2 font-black text-[#092547]">
              <Clock size={18} className="text-sky-700" />
              Visiting Hours
            </h3>
            <div className="mt-4 grid gap-2">
              {data.clinicInfo.hours.map(([day, time]) => (
                <p key={day} className="flex justify-between gap-4 text-sm font-bold text-slate-600">
                  <span>{day}</span>
                  <span>{time}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <h3 className="flex items-center gap-2 font-black text-[#092547]">
              <MapPin size={18} className="text-sky-700" />
              Location
            </h3>
            <p className="mt-4 text-sm font-bold leading-6 text-slate-600">{data.clinicInfo.location}</p>
            <a href="#contact" className="mt-4 inline-flex rounded-lg border border-sky-300 px-4 py-2 text-sm font-black text-sky-800">
              Get Directions
            </a>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <h3 className="flex items-center gap-2 font-black text-[#092547]">
              <CalendarDays size={18} className="text-sky-700" />
              Appointments
            </h3>
            <p className="mt-4 text-sm font-bold leading-6 text-slate-600">
              Walk-ins welcome. Appointments recommended for minimal waiting time.
            </p>
            <a href="#contact" className="mt-4 inline-flex rounded-lg bg-sky-700 px-4 py-2 text-sm font-black text-white">
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-wide text-teal-700">Treatments & Services</p>
        <h2 className="mt-2 text-3xl font-black text-[#092547]">Expert Care for Healthy, Radiant Skin</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {data.services.map((service, index) => (
            <article key={service.title} className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
              <TreatmentVisual index={index} />
              <div className="p-4">
                <h3 className="text-sm font-black text-sky-800">{service.title}</h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">{service.text}</p>
                <a href="#contact" className="mt-3 inline-flex text-xs font-black text-sky-700">
                  Learn More -&gt;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-wide text-teal-700">Education & Certifications</p>
        <h2 className="mt-2 text-3xl font-black text-[#092547]">A Strong Foundation of Knowledge</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {data.education.map(([year, title, place]) => (
            <div key={year} className="relative rounded-2xl border border-sky-100 bg-white p-5 text-center shadow-sm">
              <span className="mx-auto mb-3 block h-3 w-3 rounded-full bg-teal-700" />
              <strong className="text-sm font-black text-sky-800">{year}</strong>
              <h3 className="mt-2 text-sm font-black text-[#092547]">{title}</h3>
              <p className="mt-1 text-xs font-bold text-slate-500">{place}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-wide text-teal-700">Patient Testimonials</p>
        <h2 className="mt-2 text-3xl font-black text-[#092547]">Trusted by Patients</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {data.testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
              <p className="text-3xl font-black text-sky-700">“</p>
              <p className="text-sm font-semibold leading-6 text-slate-700">{item.quote}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-sm font-black text-amber-800">
                    {item.name[0]}
                  </span>
                  <span>
                    <strong className="block text-sm font-black text-[#092547]">{item.name}</strong>
                    <span className="text-xs font-bold text-slate-500">{item.location}</span>
                  </span>
                </div>
                <span className="text-amber-500">★★★★★</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-4">
          {data.faqs.map((question, index) => (
            <div key={question} className="rounded-xl border border-sky-100 bg-white shadow-sm">
              <button
                className="flex min-h-12 w-full items-center justify-between gap-3 px-4 text-left text-sm font-black text-[#092547]"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                {question}
                <ChevronDown className={openFaq === index ? "rotate-180 text-sky-700" : "text-sky-700"} size={17} />
              </button>
              {openFaq === index ? (
                <p className="border-t border-sky-100 px-4 py-3 text-sm font-semibold leading-6 text-slate-600">
                  You can contact the clinic directly or use the appointment button. Our team will confirm your visit time and details.
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-5 px-4 pb-12 sm:px-6 lg:grid-cols-[0.9fr_1.6fr] lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-teal-700 to-sky-800 p-6 text-white shadow-soft">
          <h2 className="text-2xl font-black">Ready to achieve your best skin?</h2>
          <p className="mt-2 text-lg font-semibold text-white/85">Book your consultation today.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a href="#contact" className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white text-sm font-black text-sky-800">
              <CalendarDays size={17} />
              Book Appointment
            </a>
            <a href="tel:+971501234567" className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/50 text-sm font-black text-white">
              <Phone size={17} />
              Call Clinic
            </a>
          </div>
        </div>
        <div className="grid gap-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="text-lg font-black text-[#092547]">Get in Touch</h3>
            <div className="mt-4 grid gap-3 text-sm font-bold text-slate-600">
              <span className="flex gap-2"><Phone size={17} className="text-sky-700" /> {data.clinicInfo.phone}</span>
              <span className="flex gap-2"><Mail size={17} className="text-sky-700" /> {data.clinicInfo.email}</span>
              <span className="flex gap-2"><MapPin size={17} className="text-sky-700" /> {data.clinicInfo.location}</span>
            </div>
          </div>
          <div className="relative min-h-52 overflow-hidden rounded-2xl bg-sky-50">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,116,144,0.08)_1px,transparent_1px),linear-gradient(rgba(14,116,144,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute left-1/2 top-1/2 rounded-2xl bg-white p-4 text-sm font-black text-[#092547] shadow-card">
              <MapPin className="mb-2 text-rose-500" />
              SkinCare Medical Center
              <span className="block text-xs font-bold text-slate-500">Jumeirah Lake Towers</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-sky-100 px-4 py-8 text-center text-sm font-bold text-slate-500">
        Doctor Trust Profile - {data.clinicInfo.phone} - © 2026
      </footer>
    </main>
  );
}
