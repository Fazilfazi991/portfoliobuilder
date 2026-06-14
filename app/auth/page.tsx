import { AppShellHeader } from "@/components/AppShellHeader";
import { Apple, Chrome, Eye } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  return (
    <>
      <AppShellHeader compact />
      <main className="flex min-h-screen items-center justify-center px-4 py-8">
        <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
          <div className="grid grid-cols-2 rounded-lg border border-slate-200 bg-slate-50 p-1">
            <button className="min-h-10 rounded-md text-sm font-black text-slate-600">Log In</button>
            <button className="min-h-10 rounded-md bg-white text-sm font-black text-brand-600 shadow-sm">
              Sign Up
            </button>
          </div>
          <div className="mt-7 text-center">
            <h1 className="text-2xl font-black text-ink">Create your account</h1>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
              Start building your professional portfolio website today.
            </p>
          </div>
          <form className="mt-6 grid gap-4">
            {[
              ["Full Name", "Enter your full name", "text"],
              ["Email Address", "Enter your email", "email"],
            ].map(([label, placeholder, type]) => (
              <label key={label} className="grid gap-2 text-sm font-black text-slate-700">
                {label}
                <input
                  type={type}
                  placeholder={placeholder}
                  className="min-h-12 rounded-lg border border-slate-200 px-4 text-sm font-semibold outline-none focus:border-brand-300"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-black text-slate-700">
              Password
              <span className="flex min-h-12 items-center rounded-lg border border-slate-200 px-4 focus-within:border-brand-300">
                <input
                  type="password"
                  placeholder="Create a password"
                  className="min-w-0 flex-1 text-sm font-semibold outline-none"
                />
                <Eye size={18} className="text-slate-400" />
              </span>
            </label>
            <Link
              href="/dashboard"
              className="flex min-h-12 items-center justify-center rounded-lg bg-brand-600 text-sm font-black text-white"
            >
              Create Account
            </Link>
          </form>
          <div className="my-5 flex items-center gap-3 text-xs font-bold text-slate-400">
            <span className="h-px flex-1 bg-slate-200" />
            or continue with
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="grid gap-3">
            <button className="flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-200 text-sm font-black text-ink">
              <Chrome size={18} />
              Continue with Google
            </button>
            <button className="flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-200 text-sm font-black text-ink">
              <Apple size={18} />
              Continue with Apple
            </button>
          </div>
          <p className="mt-5 text-center text-sm font-semibold text-slate-500">
            Already have an account? <Link href="/dashboard" className="font-black text-brand-600">Log in</Link>
          </p>
        </section>
      </main>
    </>
  );
}
