import { Check, Globe2, Lock, Monitor, Smartphone, Tablet } from "lucide-react";

export function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[40rem] rounded-2xl border border-slate-200 bg-white p-2 shadow-soft sm:p-3">
      <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-xs font-black text-white">
              P
            </span>
            <span className="text-sm font-extrabold text-ink">Portify</span>
          </div>
          <div className="hidden min-w-0 flex-1 items-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-500 sm:mx-5 sm:flex">
            <Lock size={12} />
            yourname.portify.site
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <Check size={13} />
            <span className="hidden sm:inline">Saved</span>
          </div>
        </div>

        <div className="grid min-h-[24rem] grid-cols-1 sm:grid-cols-[8.8rem_1fr]">
          <aside className="hidden border-r border-slate-200 bg-white p-3 sm:block">
            {["Dashboard", "Pages", "Design", "Sections", "Content", "Media", "Custom Domain", "Settings"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-1 rounded-md px-3 py-2 text-xs font-semibold ${
                    index === 0 ? "bg-brand-50 text-brand-600" : "text-slate-500"
                  }`}
                >
                  {item}
                </div>
              ),
            )}
          </aside>

          <div className="p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-2 text-slate-500">
                <Monitor size={16} />
                <Tablet size={16} />
                <Smartphone size={16} />
              </div>
              <button className="rounded-md bg-brand-600 px-3 py-2 text-xs font-bold text-white">
                Publish
              </button>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-card">
              <div className="grid min-h-[13.5rem] grid-cols-[1fr_8.5rem] bg-gradient-to-br from-white to-brand-50 sm:grid-cols-[1fr_14rem]">
                <div className="p-5 sm:p-7">
                  <p className="text-2xl font-black leading-tight text-ink sm:text-3xl">
                    Hi, I&apos;m
                    <br />
                    Alex Morgan
                  </p>
                  <p className="mt-3 max-w-[13rem] text-xs font-medium leading-5 text-slate-600 sm:text-sm">
                    Product designer crafting meaningful digital experiences.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-md bg-brand-600 px-3 py-2 text-[0.68rem] font-bold text-white">
                      Download CV
                    </span>
                    <span className="rounded-md bg-white px-3 py-2 text-[0.68rem] font-bold text-brand-600 shadow-sm">
                      Contact Me
                    </span>
                  </div>
                </div>
                <div className="relative flex items-end justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.13),transparent_65%)] pr-2">
                  <div className="mb-0 h-44 w-24 rounded-t-full bg-slate-200 sm:h-56 sm:w-36">
                    <div className="mx-auto mt-7 h-12 w-12 rounded-full bg-amber-200 sm:h-16 sm:w-16" />
                    <div className="mx-auto mt-4 h-24 w-20 rounded-t-3xl bg-sky-700 sm:h-32 sm:w-28" />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-ink">My Work</h3>
                  <Globe2 size={15} className="text-brand-600" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Fintech Dashboard", "Mobile Banking App", "E-commerce Website"].map((item, index) => (
                    <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 p-2">
                      <div
                        className={`h-14 rounded-md ${
                          index === 0 ? "bg-slate-900" : index === 1 ? "bg-sky-100" : "bg-rose-100"
                        }`}
                      />
                      <p className="mt-2 truncate text-[0.62rem] font-bold text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
