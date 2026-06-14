import { AppShellHeader } from "@/components/AppShellHeader";

const sections = [
  ["Profile", "Update your name, email, and public profile details."],
  ["Billing", "Manage plans, invoices, and billing preferences."],
  ["Domains", "Connect custom domains and review DNS status."],
  ["Notifications", "Control email updates, leads, and product alerts."],
  ["Danger zone", "Export account data or request account deletion."],
];

export default function SettingsPage() {
  return (
    <>
      <AppShellHeader />
      <main className="mx-auto min-h-screen max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-ink">Settings</h1>
        <p className="mt-2 text-sm font-semibold text-slate-500">Basic account and app settings mockup.</p>
        <div className="mt-6 grid gap-4">
          {sections.map(([title, text]) => (
            <section key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className={`text-lg font-black ${title === "Danger zone" ? "text-rose-600" : "text-ink"}`}>
                {title}
              </h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{text}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input className="min-h-12 rounded-lg border border-slate-200 px-4 text-sm font-bold outline-none" placeholder={`${title} setting`} />
                <button className="min-h-12 rounded-lg bg-slate-950 px-4 text-sm font-black text-white">Save Changes</button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
