const { StrictMode, useEffect, useMemo, useState } = React;
const { createRoot } = ReactDOM;

type Analysis = {
  id: string;
  product: string;
  platform: string;
  category: string;
  budget: string;
  seller: string;
  notes: string;
  score: number;
  summary: string;
  pros: string[];
  cons: string[];
  risks: string[];
  checklist: string[];
  questions: string[];
  comparisons: { factor: string; selected: string; alternative: string; verdict: string }[];
  createdAt: string;
};

const platforms = ['Shopee', 'Lazada', 'TikTok Shop', 'Tiki', 'Facebook Marketplace', 'Other'];
const categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Baby & Kids', 'Motorbike accessories', 'Grocery', 'Other'];
const storageKey = 'vn-shopping-compare-ai-history';

const baseChecklist = [
  'Confirm final price includes shipping and platform vouchers.',
  'Check seller response time, rating, and recent one-star reviews.',
  'Compare warranty terms with at least one competing listing.',
  'Save screenshots of the listing, chat, and payment confirmation.',
];

function buildAnalysis(form: Omit<Analysis, 'id' | 'score' | 'summary' | 'pros' | 'cons' | 'risks' | 'checklist' | 'questions' | 'comparisons' | 'createdAt'>): Analysis {
  const hasBudget = form.budget.trim().length > 0;
  const hasSeller = form.seller.trim().length > 0;
  const detailBoost = Math.min(18, form.notes.trim().length / 8);
  const score = Math.round(62 + (hasBudget ? 8 : 0) + (hasSeller ? 7 : 0) + detailBoost);
  const categoryRisk = form.category === 'Electronics' ? 'Counterfeit, used, or grey-market stock may have limited warranty coverage.' : 'Photos, sizing, condition, or material claims may differ from delivery.';

  return {
    ...form,
    id: crypto.randomUUID(),
    score: Math.min(score, 95),
    summary: `${form.product || 'This product'} on ${form.platform} looks ${score > 78 ? 'promising' : 'worth checking carefully'} based on the details provided. Verify seller proof, warranty, and comparable prices before paying.`,
    pros: [
      `${form.platform} usually makes it easy to compare vouchers, shipping fees, and reviews.`,
      `${form.category} listings often have multiple sellers, which helps benchmark price and warranty.`,
      hasBudget ? `Your budget of ${form.budget} gives a clear ceiling for negotiation.` : 'You can still improve the decision by adding a target budget.',
    ],
    cons: [
      'Mock analysis cannot verify real-time stock, seller identity, or price changes.',
      'Promotional prices may hide higher shipping fees or weak return terms.',
      hasSeller ? `Seller "${form.seller}" still needs external review checks.` : 'No seller name was provided for reputation checks.',
    ],
    risks: [
      categoryRisk,
      'Listings with few original photos, vague warranty language, or pressure to pay off-platform are higher risk.',
      'Very large discounts can indicate refurbished items, missing accessories, or replica goods.',
    ],
    checklist: baseChecklist,
    questions: [
      'Is this item authentic/new, and can you provide real photos taken today?',
      'What warranty applies in Vietnam, and who handles repair or replacement?',
      'What is included in the box, and are there any defects or missing accessories?',
      'Can I return the item if it is not as described or fails initial testing?',
    ],
    comparisons: [
      { factor: 'Price', selected: hasBudget ? `Compare against ${form.budget}` : 'Budget not set', alternative: 'Check 2-3 similar listings', verdict: hasBudget ? 'Good anchor' : 'Needs budget' },
      { factor: 'Seller trust', selected: hasSeller ? form.seller : 'Unknown seller', alternative: 'Higher-rated official store', verdict: hasSeller ? 'Verify reviews' : 'High caution' },
      { factor: 'Warranty', selected: 'Listing claim', alternative: 'Official distributor policy', verdict: 'Ask for written proof' },
      { factor: 'Delivery', selected: form.platform, alternative: 'Local pickup or another marketplace', verdict: 'Choose trackable shipping' },
    ],
    createdAt: new Date().toISOString(),
  };
}

function App() {
  const [product, setProduct] = useState('');
  const [platform, setPlatform] = useState(platforms[0]);
  const [category, setCategory] = useState(categories[0]);
  const [budget, setBudget] = useState('');
  const [seller, setSeller] = useState('');
  const [notes, setNotes] = useState('');
  const [history, setHistory] = useState<Analysis[]>(() => JSON.parse(localStorage.getItem(storageKey) || '[]') as Analysis[]);
  const current = history[0];

  useEffect(() => localStorage.setItem(storageKey, JSON.stringify(history)), [history]);

  const copiedText = useMemo(() => current ? `${current.summary}\n\nPros: ${current.pros.join('; ')}\nCons: ${current.cons.join('; ')}` : '', [current]);

  function analyze() {
    if (!product.trim()) return;
    const next = buildAnalysis({ product, platform, category, budget, seller, notes });
    setHistory((items) => [next, ...items].slice(0, 8));
  }

  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
  }

  return <main className="min-h-screen bg-slate-950 text-slate-100">
    <section className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-sky-500/10 p-5 shadow-2xl sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Frontend-only shopping helper</p>
        <h1 className="mt-3 text-3xl font-black sm:text-5xl">VN Shopping Compare AI</h1>
        <p className="mt-3 max-w-2xl text-slate-300">Compare marketplace listings with a mock AI review, practical risk checks, seller questions, and saved local history. No backend, auth, database, or API keys.</p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-bold">Product input</h2>
          <div className="mt-4 space-y-4">
            <label className="block"><span>Product name</span><input value={product} onChange={(e) => setProduct(e.target.value)} placeholder="iPhone 15 Pro 256GB" className="input" /></label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block"><span>Platform</span><select value={platform} onChange={(e) => setPlatform(e.target.value)} className="input">{platforms.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label className="block"><span>Category</span><select value={category} onChange={(e) => setCategory(e.target.value)} className="input">{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block"><span>Budget / price</span><input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="18,000,000 VND" className="input" /></label>
              <label className="block"><span>Seller</span><input value={seller} onChange={(e) => setSeller(e.target.value)} placeholder="Shop name" className="input" /></label>
            </div>
            <label className="block"><span>Listing notes</span><textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Warranty, condition, shipping, suspicious claims..." className="input min-h-28" /></label>
            <button onClick={analyze} className="w-full rounded-2xl bg-emerald-400 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-300">Run mock AI analysis</button>
          </div>
        </section>

        <section className="space-y-5">
          {current ? <AnalysisCard analysis={current} copiedText={copiedText} copy={copy} /> : <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-slate-300">Enter a product to generate your first comparison.</div>}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-3"><h2 className="text-xl font-bold">Saved history</h2><button className="text-sm text-rose-300" onClick={() => setHistory([])}>Clear</button></div>
            <div className="mt-3 space-y-2">{history.map((item) => <button key={item.id} onClick={() => setHistory((items) => [item, ...items.filter((old) => old.id !== item.id)])} className="w-full rounded-2xl bg-slate-900 p-3 text-left hover:bg-slate-800"><span className="font-semibold">{item.product}</span><span className="block text-sm text-slate-400">{item.platform} • {new Date(item.createdAt).toLocaleString()}</span></button>)}</div>
          </section>
        </section>
      </div>
    </section>
  </main>;
}

function AnalysisCard({ analysis, copiedText, copy }: { analysis: Analysis; copiedText: string; copy: (text: string) => Promise<void> }) {
  return <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-sm text-emerald-300">Mock AI score</p><h2 className="text-2xl font-black">{analysis.score}/100 — {analysis.product}</h2></div><button onClick={() => copy(copiedText)} className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold hover:bg-white/10">Copy summary</button></div>
    <p className="mt-4 rounded-2xl bg-slate-900 p-4 text-slate-200">{analysis.summary}</p>
    <div className="mt-5 grid gap-4 sm:grid-cols-2"><List title="Pros" items={analysis.pros} tone="text-emerald-300" /><List title="Cons" items={analysis.cons} tone="text-amber-300" /><List title="Risk signals" items={analysis.risks} tone="text-rose-300" /><List title="Buyer checklist" items={analysis.checklist} tone="text-sky-300" /></div>
    <div className="mt-5"><List title="Questions to ask the seller" items={analysis.questions} tone="text-violet-300" copy={copy} /></div>
    <div className="mt-5 overflow-hidden rounded-2xl border border-white/10"><table className="w-full text-left text-sm"><thead className="bg-slate-900 text-slate-300"><tr><th>Factor</th><th>Selected</th><th>Alternative</th><th>Verdict</th></tr></thead><tbody>{analysis.comparisons.map((row) => <tr key={row.factor} className="border-t border-white/10"><td>{row.factor}</td><td>{row.selected}</td><td>{row.alternative}</td><td>{row.verdict}</td></tr>)}</tbody></table></div>
  </article>;
}

function List({ title, items, tone, copy }: { title: string; items: string[]; tone: string; copy?: (text: string) => Promise<void> }) {
  return <section className="rounded-2xl bg-slate-900 p-4"><div className="flex items-center justify-between gap-2"><h3 className={`font-bold ${tone}`}>{title}</h3>{copy && <button onClick={() => copy(items.join('\n'))} className="text-xs text-slate-300 underline">Copy</button>}</div><ul className="mt-3 space-y-2 text-sm text-slate-300">{items.map((item) => <li key={item} className="flex gap-2"><span>•</span><span>{item}</span></li>)}</ul></section>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
