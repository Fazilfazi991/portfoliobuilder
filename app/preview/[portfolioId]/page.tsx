"use client";

import { PortfolioPreview } from "@/components/PortfolioPreview";
import { alexProfile } from "@/data/portfolios";
import { ArrowLeft, Monitor, Smartphone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PreviewPage() {
  const [mobile, setMobile] = useState(true);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="sticky top-0 z-40 flex items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3">
        <Link href="/builder/alex" className="flex items-center gap-2 text-sm font-black text-slate-700">
          <ArrowLeft size={18} />
          Back
        </Link>
        <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1">
          <button
            className={`flex h-9 w-10 items-center justify-center rounded-md ${!mobile ? "bg-white shadow-sm" : ""}`}
            onClick={() => setMobile(false)}
            aria-label="Desktop preview"
          >
            <Monitor size={17} />
          </button>
          <button
            className={`flex h-9 w-10 items-center justify-center rounded-md ${mobile ? "bg-white shadow-sm" : ""}`}
            onClick={() => setMobile(true)}
            aria-label="Mobile preview"
          >
            <Smartphone size={17} />
          </button>
        </div>
        <Link href="/publish/alex" className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-black text-white">
          Publish
        </Link>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-6">
        <PortfolioPreview data={alexProfile} mobileFrame={mobile} />
      </div>
    </main>
  );
}
