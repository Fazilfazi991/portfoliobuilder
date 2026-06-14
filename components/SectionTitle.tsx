export function SectionTitle({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <h2 className="text-2xl font-black tracking-normal text-ink sm:text-3xl">{title}</h2>
      {action}
    </div>
  );
}
