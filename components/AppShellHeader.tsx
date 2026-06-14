"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

export function AppShellHeader({
  action,
  compact = false,
}: {
  action?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-600 lg:flex">
          <Link href="/create" className="hover:text-brand-600">
            Create
          </Link>
          <Link href="/templates" className="hover:text-brand-600">
            Templates
          </Link>
          <Link href="/dashboard" className="hover:text-brand-600">
            Dashboard
          </Link>
          <Link href="/p/alex" className="hover:text-brand-600">
            Sample
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {action}
          {!compact ? (
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
