import { Template } from "@/data/templates";
import { PersonAvatar } from "./PersonAvatar";

export function TemplateThumbnail({
  template,
  tall = false,
}: {
  template: Pick<Template, "dark" | "accent" | "name">;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border ${
        template.dark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-100 bg-white text-ink"
      } ${tall ? "h-64" : "h-40"} shadow-inner`}
    >
      <div className="flex items-center justify-between px-4 py-3 text-[0.62rem] font-bold">
        <span>{template.dark ? "Portfolio" : "Alex Morgan"}</span>
        <div className="flex gap-3 opacity-70">
          <span>Home</span>
          <span>Work</span>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_5rem] gap-3 px-4 pt-2 sm:grid-cols-[1fr_6.5rem]">
        <div className="pt-3">
          <div className={`mb-2 h-3 w-20 rounded ${template.dark ? "bg-white/60" : "bg-slate-900"}`} />
          <div className={`mb-2 h-3 w-28 rounded ${template.dark ? "bg-white/35" : "bg-slate-200"}`} />
          <div className={`mb-4 h-2.5 w-24 rounded ${template.dark ? "bg-white/25" : "bg-slate-200"}`} />
          <div className={`h-7 w-20 rounded-md ${template.accent}`} />
        </div>
        <PersonAvatar className="h-24 w-full" />
      </div>
      <div className="absolute bottom-3 left-4 right-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((item) => (
          <div key={item} className={`h-9 rounded-md ${template.dark ? "bg-white/10" : "bg-slate-100"}`} />
        ))}
      </div>
      <div className="absolute bottom-3 right-4 h-24 w-14 rounded-lg border border-white/70 bg-white p-1 shadow-xl">
        <div className="h-2 rounded bg-slate-200" />
        <div className="mt-2 h-10 rounded bg-slate-100" />
        <div className={`mt-2 h-2 rounded ${template.accent}`} />
      </div>
    </div>
  );
}
