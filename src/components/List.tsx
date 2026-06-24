type ListProps = {
  title: string;
  items: string[];
  tone: string;
  copy?: (text: string) => Promise<void>;
};

export function List({ title, items, tone, copy }: ListProps) {
  return (
    <section className="rounded-2xl bg-slate-900 p-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className={`font-bold ${tone}`}>{title}</h3>
        {copy && (
          <button
            onClick={() => copy(items.join("\n"))}
            className="text-xs text-slate-300 underline"
          >
            Copy
          </button>
        )}
      </div>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
