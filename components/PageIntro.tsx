export function PageIntro({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-6 max-w-2xl text-center">
      <h1 className="text-3xl font-black leading-tight text-ink sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-600 sm:text-base">{subtitle}</p>
    </div>
  );
}
