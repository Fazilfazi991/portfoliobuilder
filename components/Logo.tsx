import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Portify home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-lg font-black text-white shadow-lg shadow-blue-200">
        P
      </span>
      <span className={`text-xl font-extrabold ${light ? "text-white" : "text-ink"}`}>
        Portify
      </span>
    </Link>
  );
}
