import { List } from "./List";
import type { Analysis } from "../types/analysis";

type AnalysisCardProps = {
  analysis: Analysis;
  copiedText: string;
  copy: (text: string) => Promise<void>;
};

export function AnalysisCard({
  analysis,
  copiedText,
  copy,
}: AnalysisCardProps) {
  const recommendation =
    analysis.score >= 85
      ? "Buy"
      : analysis.score >= 70
        ? "Compare"
        : analysis.score >= 55
          ? "Wait"
          : "Avoid";

  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm text-emerald-300">Decision score</p>
          <h2 className="text-2xl font-black">
            {analysis.score}/100 — {recommendation} — {analysis.product}
          </h2>
        </div>
        <button
          onClick={() => copy(copiedText)}
          className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold hover:bg-white/10"
        >
          Copy decision summary
        </button>
      </div>
      <p className="mt-4 rounded-2xl bg-slate-900 p-4 text-slate-200">
        {analysis.summary}
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <List title="Reasons to Buy" items={analysis.pros} tone="text-emerald-300" />
        <List title="Reasons to Pause" items={analysis.cons} tone="text-amber-300" />
        <List
          title="Risk signals"
          items={analysis.risks}
          tone="text-rose-300"
        />
        <List
          title="Decision checklist"
          items={analysis.checklist}
          tone="text-sky-300"
        />
      </div>
      <div className="mt-5">
        <List
          title="Questions to verify before paying"
          items={analysis.questions}
          tone="text-violet-300"
          copy={copy}
        />
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th>Decision factor</th>
              <th>This option</th>
              <th>Alternative / benchmark</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {analysis.comparisons.map((row) => (
              <tr key={row.factor} className="border-t border-white/10">
                <td>{row.factor}</td>
                <td>{row.selected}</td>
                <td>{row.alternative}</td>
                <td>{row.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
