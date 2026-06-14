import { AppShellHeader } from "@/components/AppShellHeader";
import { DashboardPortfolioCard } from "@/components/DashboardPortfolioCard";
import { dashboardPortfolios } from "@/data/portfolios";
import { Bell, Globe2, LayoutTemplate, Settings, UserRound } from "lucide-react";
import Link from "next/link";

const quickActions = [
  { label: "Templates", icon: LayoutTemplate, href: "/templates" },
  { label: "Domains", icon: Globe2, href: "/settings" },
  { label: "Leads", icon: UserRound, href: "/dashboard" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function DashboardPage() {
  return (
    <>
      <AppShellHeader
        action={
          <div className="hidden items-center gap-3 sm:flex">
            <Bell size={18} className="text-slate-600" />
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-xs font-black text-amber-700">
              AM
            </div>
          </div>
        }
      />
      <main className="mx-auto min-h-screen max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-black text-ink">Welcome back, Alex!</h1>
          <p className="mt-2 text-sm font-semibold text-slate-500">
            Here&apos;s what&apos;s happening with your portfolios.
          </p>
          <Link
            href="/create"
            className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-600 text-sm font-black text-white sm:w-auto sm:px-6"
          >
            + Create New Portfolio
          </Link>
        </div>
        <div className="mb-5 flex gap-2">
          {["All (3)", "Published (2)", "Drafts (1)"].map((tab, index) => (
            <button
              key={tab}
              className={`min-h-10 rounded-lg px-4 text-xs font-black ${
                index === 0 ? "bg-brand-50 text-brand-600" : "bg-white text-slate-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid gap-4">
          {dashboardPortfolios.map((portfolio) => (
            <DashboardPortfolioCard key={portfolio.url} portfolio={portfolio} />
          ))}
        </div>
        <h2 className="mb-4 mt-8 text-lg font-black text-ink">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {quickActions.map(({ label, icon: Icon, href }) => (
            <Link
              key={label}
              href={href}
              className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-sm font-black text-ink shadow-sm"
            >
              <Icon className="text-brand-600" size={24} />
              {label}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
