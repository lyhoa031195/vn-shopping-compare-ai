import { useEffect, useMemo, useState } from "react";
import { AnalysisCard } from "./components/AnalysisCard";
import { buildAnalysis, categories, platforms } from "./lib/analysis";
import type { Analysis } from "./types/analysis";

const storageKey = "vn-shopping-compare-ai-history";

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]") as Analysis[];
  } catch {
    return [];
  }
}

export function App() {
  const [product, setProduct] = useState("");
  const [platform, setPlatform] = useState(platforms[0]);
  const [category, setCategory] = useState(categories[0]);
  const [budget, setBudget] = useState("");
  const [seller, setSeller] = useState("");
  const [notes, setNotes] = useState("");
  const [history, setHistory] = useState<Analysis[]>(loadHistory);
  const current = history[0];

  useEffect(
    () => localStorage.setItem(storageKey, JSON.stringify(history)),
    [history],
  );

  const copiedText = useMemo(
    () =>
      current
        ? `${current.summary}\n\nReasons to Buy: ${current.pros.join("; ")}\nReasons to Pause: ${current.cons.join("; ")}`
        : "",
    [current],
  );

  function analyze() {
    if (!product.trim()) return;
    const next = buildAnalysis({
      product,
      platform,
      category,
      budget,
      seller,
      notes,
    });
    setHistory((items) => [next, ...items].slice(0, 8));
  }

  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-sky-500/10 p-5 shadow-2xl sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            AI purchase decision checklist
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Purchase Advisor AI
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Decide whether to buy, wait, compare, or avoid with practical
            risk checks, verification questions, and saved local decision history.
            No backend, auth, database, or API keys.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-bold">Decision input</h2>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span>What are you considering?</span>
                <input
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="Used ThinkPad X1 Carbon Gen 9"
                  className="input"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span>Purchase source</span>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="input"
                  >
                    {platforms.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span>Decision type</span>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="input"
                  >
                    {categories.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span>Price or monthly cost</span>
                  <input
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="18,000,000 VND"
                    className="input"
                  />
                </label>
                <label className="block">
                  <span>Seller / provider</span>
                  <input
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                    placeholder="Shop, provider, or course platform"
                    className="input"
                  />
                </label>
              </div>
              <label className="block">
                <span>Details, evidence, and concerns</span>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Condition, specs, warranty, subscription limits, course syllabus, concerns..."
                  className="input min-h-28"
                />
              </label>
              <button
                onClick={analyze}
                className="w-full rounded-2xl bg-emerald-400 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-300"
              >
                Get purchase advice
              </button>
            </div>
          </section>

          <section className="space-y-5">
            {current ? (
              <AnalysisCard
                analysis={current}
                copiedText={copiedText}
                copy={copy}
              />
            ) : (
              <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-slate-300">
                Enter a purchase decision to get your first recommendation.
              </div>
            )}
            <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold">Decision history</h2>
                <button
                  className="text-sm text-rose-300"
                  onClick={() => setHistory([])}
                >
                  Clear
                </button>
              </div>
              <div className="mt-3 space-y-2">
                {history.map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setHistory((items) => [
                        item,
                        ...items.filter((old) => old.id !== item.id),
                      ])
                    }
                    className="w-full rounded-2xl bg-slate-900 p-3 text-left hover:bg-slate-800"
                  >
                    <span className="font-semibold">{item.product}</span>
                    <span className="block text-sm text-slate-400">
                      {item.platform} •{" "}
                      {new Date(item.createdAt).toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}
