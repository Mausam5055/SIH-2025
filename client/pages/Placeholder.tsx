type Props = { title: string };

export default function Placeholder({ title }: Props) {
  return (
    <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-10 text-center shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
      <p className="mt-2 text-slate-500">
        This page is a placeholder. Ask to generate its contents when you're ready.
      </p>
    </div>
  );
}
