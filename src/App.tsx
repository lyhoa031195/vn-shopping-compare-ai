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
        ? `${current.summary}\n\nPros: ${current.pros.join("; ")}\nCons: ${current.cons.join("; ")}`
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
            Frontend-only shopping helper
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            VN Shopping Compare AI
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Compare marketplace listings with a mock AI review, practical risk
            checks, seller questions, and saved local history. No backend, auth,
            database, or API keys.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-bold">Product input</h2>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span>Product name</span>
                <input
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="iPhone 15 Pro 256GB"
                  className="input"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span>Platform</span>
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
                  <span>Category</span>
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
                  <span>Budget / price</span>
                  <input
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="18,000,000 VND"
                    className="input"
                  />
                </label>
                <label className="block">
                  <span>Seller</span>
                  <input
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                    placeholder="Shop name"
                    className="input"
                  />
                </label>
              </div>
              <label className="block">
                <span>Listing notes</span>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Warranty, condition, shipping, suspicious claims..."
                  className="input min-h-28"
                />
              </label>
              <button
                onClick={analyze}
                className="w-full rounded-2xl bg-emerald-400 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-300"
              >
                Run mock AI analysis
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
                Enter a product to generate your first comparison.
              </div>
            )}
            <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold">Saved history</h2>
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
