import { Facebook, Github, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Templates", href: "/templates" },
      { label: "Examples", href: "/examples" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Create", href: "/create" },
      { label: "Login", href: "/auth" },
      { label: "Sample", href: "/p/alex" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/resources" },
      { label: "Careers", href: "/resources" },
      { label: "Privacy Policy", href: "/resources" },
      { label: "Terms of Service", href: "/resources" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-4 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm font-medium leading-7 text-slate-300">
            The easiest way to build a professional portfolio website in minutes. Showcase your
            work. Get noticed. Grow your career.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Instagram, Facebook, Github].map((Icon, index) => (
              <a
                href="#"
                key={index}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-200 hover:bg-brand-600"
                aria-label="Social profile"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-extrabold">{group.title}</h3>
            <div className="mt-4 grid gap-3">
              {group.links.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-extrabold">Newsletter</h3>
          <p className="mt-4 text-sm font-medium leading-6 text-slate-300">
            Stay updated with tips and resources to grow your personal brand.
          </p>
          <form className="mt-4 flex overflow-hidden rounded-lg bg-white p-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 px-3 py-2 text-sm text-ink outline-none"
            />
            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-600 text-white"
              aria-label="Subscribe"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-semibold text-slate-400">
        Copyright 2026 Portify. All rights reserved.
      </div>
    </footer>
  );
}
