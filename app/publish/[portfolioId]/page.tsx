"use client";

import { AppShellHeader } from "@/components/AppShellHeader";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PublishPage() {
  const [published, setPublished] = useState(false);

  return (
    <>
      <AppShellHeader compact />
      <main className="flex min-h-screen items-center justify-center px-4 py-8">
        <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <Rocket size={48} />
          </div>
          <h1 className="mt-6 text-2xl font-black text-ink">Publish Your Portfolio</h1>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
            Your portfolio is almost ready to go live.
          </p>
          <div className="mt-6 grid gap-4 text-left">
            <label className="rounded-xl border-2 border-brand-600 bg-brand-50 p-4">
              <span className="flex items-center gap-3 text-sm font-black text-ink">
                <input type="radio" defaultChecked name="publish" />
                Publish on Portify Subdomain
              </span>
              <p className="ml-6 mt-1 text-xs font-semibold text-slate-500">Get a free portfolio on portify.site</p>
              <input
                defaultValue="yourname.portify.site"
                className="mt-3 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold outline-none"
              />
            </label>
            <label className="rounded-xl border border-slate-200 p-4">
              <span className="flex items-center gap-3 text-sm font-black text-ink">
                <input type="radio" name="publish" />
                Publish on Custom Domain
              </span>
              <p className="ml-6 mt-1 text-xs font-semibold text-slate-500">Connect your own domain name</p>
              <input
                placeholder="www.yourdomain.com"
                className="mt-3 min-h-12 w-full rounded-lg border border-slate-200 px-4 text-sm font-bold outline-none"
              />
            </label>
          </div>
          <button
            onClick={() => setPublished(true)}
            className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-600 text-sm font-black text-white"
          >
            Publish Now
          </button>
          {published ? (
            <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-black text-emerald-700">
              Portfolio published successfully!{" "}
              <Link href="/p/alex" className="underline">
                View live site
              </Link>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}
