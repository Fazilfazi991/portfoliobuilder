import { TemplateThumbnail } from "./TemplateThumbnail";
import { templates } from "@/data/templates";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

export function DashboardPortfolioCard({
  portfolio,
}: {
  portfolio: {
    name: string;
    url: string;
    status: string;
    views: string;
    leads: string;
    edited: string;
  };
}) {
  return (
    <article className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[6.5rem_1fr_auto]">
      <div className="overflow-hidden rounded-lg">
        <TemplateThumbnail template={templates[0]} />
      </div>
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="truncate text-base font-black text-ink">{portfolio.name}</h2>
            <p className="mt-1 truncate text-xs font-bold text-slate-500">{portfolio.url}</p>
          </div>
          <span
            className={`rounded-full px-2 py-1 text-[0.65rem] font-black ${
              portfolio.status === "Published" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-600"
            }`}
          >
            {portfolio.status}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-bold text-slate-500">
          <span>
            <strong className="block text-sm text-ink">{portfolio.views}</strong>
            Views
          </span>
          <span>
            <strong className="block text-sm text-ink">{portfolio.leads}</strong>
            Leads
          </span>
          <span>
            <strong className="block text-sm text-ink">{portfolio.edited}</strong>
            Edited
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 sm:block">
        <Link
          href="/builder/alex"
          className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-black text-brand-600"
        >
          Edit
        </Link>
        <button className="mt-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 sm:mt-3">
          <EllipsisVertical size={18} />
        </button>
      </div>
    </article>
  );
}
