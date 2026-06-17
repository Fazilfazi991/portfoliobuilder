"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Templates", href: "/templates" },
  { label: "Examples", href: "/examples" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 text-sm font-semibold text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/auth" className="text-sm font-semibold text-slate-700 hover:text-brand-600">
            Log in
          </Link>
          <Link
            href="/create"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-brand-700"
          >
            Start Free
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-soft lg:hidden">
          <nav className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link className="rounded-lg px-3 py-3 text-base font-semibold text-slate-700" href="/auth" onClick={() => setOpen(false)}>
              Log in
            </Link>
            <Link
              href="/create"
              className="mt-2 rounded-lg bg-brand-600 px-4 py-3 text-center text-base font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Start Free
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
