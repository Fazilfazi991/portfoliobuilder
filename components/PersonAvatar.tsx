export function PersonAvatar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-t-full bg-gradient-to-br from-slate-100 to-brand-50 ${className}`}
      aria-hidden="true"
    >
      <div className="mx-auto mt-[18%] h-[24%] w-[28%] rounded-full bg-amber-200" />
      <div className="mx-auto mt-[8%] h-[48%] w-[56%] rounded-t-[2rem] bg-sky-700" />
      <div className="absolute left-[36%] top-[30%] h-[7%] w-[7%] rounded-full bg-slate-900" />
      <div className="absolute right-[36%] top-[30%] h-[7%] w-[7%] rounded-full bg-slate-900" />
    </div>
  );
}
