export function Testimonial() {
  return (
    <section className="flex items-stretch py-8">
      <div className="flex w-full flex-col justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-white p-7 text-center shadow-sm">
        <h2 className="text-2xl font-black text-ink">Loved by professionals</h2>
        <div className="mt-7 text-5xl font-black leading-none text-brand-600">“</div>
        <p className="mx-auto mt-1 max-w-sm text-base font-semibold leading-7 text-slate-700">
          Portify helped me create a stunning portfolio in minutes. I got my first client the same
          week I published my site.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-lg font-black text-rose-700">
            SJ
          </div>
          <div className="text-left">
            <p className="text-sm font-extrabold text-ink">Sarah Johnson</p>
            <p className="text-xs font-semibold text-slate-500">Freelance UX/UI Designer</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-600" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}
