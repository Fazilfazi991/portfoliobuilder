"use client";

import { Logo } from "@/components/Logo";
import { PersonAvatar } from "@/components/PersonAvatar";
import { PortfolioPreview, PortfolioPreviewData } from "@/components/PortfolioPreview";
import { alexProfile } from "@/data/portfolios";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Eye,
  FileText,
  Mail,
  Monitor,
  Palette,
  Phone,
  Redo2,
  Save,
  Settings,
  Smartphone,
  Undo2,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const sections = [
  "Basic Info",
  "About",
  "Experience",
  "Education",
  "Skills",
  "Services",
  "Portfolio",
  "Testimonials",
  "Gallery",
  "Contact",
  "Social Links",
  "SEO Settings",
];

const mobileTabs = [
  { label: "Content", icon: FileText },
  { label: "Preview", icon: Eye },
  { label: "Style", icon: Palette },
  { label: "Settings", icon: Settings },
];

function Field({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-black text-slate-700">
      {label}
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-28 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold leading-6 outline-none focus:border-brand-300"
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-12 rounded-lg border border-slate-200 px-4 text-sm font-semibold outline-none focus:border-brand-300"
        />
      )}
    </label>
  );
}

function BasicInfoForm({
  data,
  setData,
}: {
  data: PortfolioPreviewData;
  setData: (data: PortfolioPreviewData) => void;
}) {
  const update = (key: keyof PortfolioPreviewData, value: string) => {
    setData({ ...data, [key]: value });
  };

  return (
    <div className="grid gap-4">
      <Field label="Full Name" value={data.name} onChange={(value) => update("name", value)} />
      <Field label="Title / Profession" value={data.title} onChange={(value) => update("title", value)} />
      <Field label="Short Bio" value={data.bio} onChange={(value) => update("bio", value)} multiline />
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-black text-slate-700">Profile Image</p>
        <div className="mt-3 flex items-center gap-4">
          <PersonAvatar className="h-20 w-16" />
          <button className="flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-black text-slate-700">
            <Upload size={16} />
            Change Image
          </button>
        </div>
      </div>
      <Field label="Location" value={data.location ?? ""} onChange={(value) => update("location", value)} />
      <Field label="Email" value={data.email ?? ""} onChange={(value) => update("email", value)} />
      <Field label="Phone / WhatsApp" value={data.phone ?? ""} onChange={(value) => update("phone", value)} />
    </div>
  );
}

function PlaceholderPanel({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-black text-ink">{title}</h3>
        <ChevronDown size={18} className="text-slate-500" />
      </div>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
        Add and arrange your {title.toLowerCase()} content here. This is a frontend-only placeholder for the builder flow.
      </p>
    </div>
  );
}

function BuilderTopBar() {
  return (
    <div className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4">
      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="lg:hidden" aria-label="Back to dashboard">
          <ArrowLeft size={20} />
        </Link>
        <Logo />
      </div>
      <div className="hidden items-center gap-2 lg:flex">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500">
          <Undo2 size={17} />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500">
          <Redo2 size={17} />
        </button>
        <div className="mx-3 flex rounded-lg border border-slate-200 bg-slate-50 p-1">
          <button className="flex h-9 w-10 items-center justify-center rounded-md bg-white shadow-sm">
            <Monitor size={17} />
          </button>
          <button className="flex h-9 w-10 items-center justify-center rounded-md">
            <Smartphone size={17} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="hidden min-h-10 rounded-lg border border-slate-200 px-4 text-xs font-black text-slate-700 sm:flex sm:items-center">
          <Save size={15} className="mr-2" />
          Save
        </button>
        <Link href="/preview/alex" className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-black text-slate-700">
          Preview
        </Link>
        <Link href="/publish/alex" className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-black text-white">
          Publish
        </Link>
      </div>
    </div>
  );
}

export function BuilderEditor() {
  const [data, setData] = useState<PortfolioPreviewData>(alexProfile);
  const [tab, setTab] = useState("Content");

  return (
    <main className="min-h-screen bg-slate-50">
      <BuilderTopBar />

      <div className="hidden h-[calc(100vh-4rem)] grid-cols-[14rem_24rem_1fr] lg:grid">
        <aside className="overflow-y-auto border-r border-slate-200 bg-white p-4">
          <h2 className="mb-3 text-xs font-black uppercase text-slate-400">Sections</h2>
          <div className="grid gap-1">
            {sections.map((section, index) => (
              <button
                key={section}
                className={`flex min-h-10 items-center gap-3 rounded-lg px-3 text-left text-sm font-bold ${
                  index === 0 ? "bg-brand-50 text-brand-600" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {index === 0 ? <FileText size={16} /> : index === 6 ? <BriefcaseBusiness size={16} /> : <Check size={16} />}
                {section}
              </button>
            ))}
          </div>
        </aside>
        <section className="overflow-y-auto border-r border-slate-200 bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <h1 className="text-lg font-black text-ink">Basic Information</h1>
            <button className="text-slate-400">×</button>
          </div>
          <BasicInfoForm data={data} setData={setData} />
        </section>
        <section className="overflow-y-auto p-6">
          <PortfolioPreview data={data} />
        </section>
      </div>

      <div className="pb-24 lg:hidden">
        {tab === "Content" ? (
          <section className="px-4 py-5">
            <div className="mb-4 rounded-xl border border-brand-100 bg-white p-4 shadow-sm">
              <h1 className="text-lg font-black text-ink">Basic Information</h1>
              <p className="mt-1 text-sm font-semibold text-slate-500">Edit your main portfolio details.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <BasicInfoForm data={data} setData={setData} />
            </div>
            <div className="mt-4 grid gap-3">
              {sections.slice(1).map((section) => (
                <PlaceholderPanel key={section} title={section} />
              ))}
            </div>
          </section>
        ) : null}

        {tab === "Preview" ? (
          <section className="px-4 py-5">
            <PortfolioPreview data={data} mobileFrame />
          </section>
        ) : null}

        {tab === "Style" ? (
          <section className="grid gap-4 px-4 py-5">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h1 className="text-lg font-black text-ink">Style</h1>
              <p className="mt-1 text-sm font-semibold text-slate-500">Choose simple colors and typography.</p>
              <div className="mt-5 grid grid-cols-4 gap-3">
                {["bg-brand-600", "bg-slate-950", "bg-emerald-500", "bg-rose-500"].map((color) => (
                  <button key={color} className={`h-12 rounded-lg ${color}`} aria-label="Color swatch" />
                ))}
              </div>
              <select className="mt-5 min-h-12 w-full rounded-lg border border-slate-200 px-4 text-sm font-bold">
                <option>Inter</option>
                <option>Modern Sans</option>
                <option>Classic Serif</option>
              </select>
            </div>
          </section>
        ) : null}

        {tab === "Settings" ? (
          <section className="grid gap-4 px-4 py-5">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h1 className="text-lg font-black text-ink">Settings</h1>
              <div className="mt-4 grid gap-4">
                <label className="grid gap-2 text-sm font-black text-slate-700">
                  SEO Title
                  <input className="min-h-12 rounded-lg border border-slate-200 px-4 text-sm font-semibold" defaultValue="Alex Morgan - Product Designer" />
                </label>
                <label className="grid gap-2 text-sm font-black text-slate-700">
                  Publish URL
                  <input className="min-h-12 rounded-lg border border-slate-200 px-4 text-sm font-semibold" defaultValue="alex.portify.site" />
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-black">
                    <Mail size={16} />
                    Leads
                  </button>
                  <button className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-black">
                    <Phone size={16} />
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-slate-200 bg-white lg:hidden">
        {mobileTabs.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setTab(label)}
            className={`flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-black ${
              tab === label ? "text-brand-600" : "text-slate-500"
            }`}
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </nav>
    </main>
  );
}
