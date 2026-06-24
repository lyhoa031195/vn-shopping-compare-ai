import type { Analysis } from "../types/analysis";

export const platforms = [
  "Shopee",
  "Lazada",
  "TikTok Shop",
  "Tiki",
  "Facebook Marketplace",
  "Other",
];
export const categories = [
  "Used Electronics",
  "Computer Parts",
  "Phone Upgrade",
  "Software Subscription",
  "Online Course",
  "Other Purchase",
];

const baseChecklist = [
  "Confirm the final price or recurring cost before paying.",
  "Check seller or provider reputation, recent reviews, and support terms.",
  "Compare warranty, refund, cancellation, or return terms with one alternative.",
  "Save screenshots of the offer, claims, chat, and payment confirmation.",
];

type AnalysisInput = Omit<
  Analysis,
  | "id"
  | "score"
  | "summary"
  | "pros"
  | "cons"
  | "risks"
  | "checklist"
  | "questions"
  | "comparisons"
  | "createdAt"
>;

export function buildAnalysis(form: AnalysisInput): Analysis {
  const hasBudget = form.budget.trim().length > 0;
  const hasSeller = form.seller.trim().length > 0;
  const detailBoost = Math.min(18, form.notes.trim().length / 8);
  const score = Math.round(
    62 + (hasBudget ? 8 : 0) + (hasSeller ? 7 : 0) + detailBoost,
  );
  const categoryRisk =
    form.category === "Used Electronics"
      ? "Used devices may have hidden battery, repair, lock, or warranty issues."
      : form.category === "Computer Parts"
        ? "Compatibility, power requirements, prior heavy use, or warranty gaps can change the real value."
        : form.category === "Software Subscription"
          ? "Recurring plans can become wasteful if usage is occasional or cancellation is difficult."
          : "Missing proof, vague claims, or weak refund terms can make the purchase harder to reverse.";
  const recommendation =
    score >= 85 ? "Buy" : score >= 70 ? "Compare" : score >= 55 ? "Wait" : "Avoid";

  return {
    ...form,
    id: crypto.randomUUID(),
    score: Math.min(score, 95),
    summary: `${recommendation}: ${form.product || "This purchase"} from ${form.platform} looks ${score > 78 ? "promising" : "worth checking carefully"} based on the details provided. Verify proof, fit, terms, and comparable options before paying.`,
    pros: [
      `${form.platform} gives you a source to verify price, terms, and reputation.`,
      `${form.category} decisions benefit from comparing fit, risk, and alternatives before paying.`,
      hasBudget
        ? `Your budget of ${form.budget} gives a clear ceiling for negotiation.`
        : "You can still improve the decision by adding a target budget.",
    ],
    cons: [
      "Mock guidance cannot verify real-time availability, identity, quality, or price changes.",
      "Promotional pricing or persuasive claims may hide weak return, warranty, refund, or cancellation terms.",
      hasSeller
        ? `Seller "${form.seller}" still needs external review checks.`
        : "No seller name was provided for reputation checks.",
    ],
    risks: [
      categoryRisk,
      "Offers with vague evidence, unclear terms, or pressure to pay quickly are higher risk.",
      "Very large discounts can indicate hidden defects, missing value, outdated content, or low future usefulness.",
    ],
    checklist: baseChecklist,
    questions: [
      "Can you provide current proof for the condition, terms, limits, or included features?",
      "What warranty, refund, cancellation, or support policy applies?",
      "What exactly is included, excluded, or limited in this purchase?",
      "Can I return, cancel, refund, or resell it if it does not meet expectations?",
    ],
    comparisons: [
      {
        factor: "Cost",
        selected: hasBudget
          ? `Compare against ${form.budget}`
          : "Budget not set",
        alternative: "Check 2-3 similar listings",
        verdict: hasBudget ? "Compare" : "Wait",
      },
      {
        factor: "Seller / provider trust",
        selected: hasSeller ? form.seller : "Unknown seller",
        alternative: "Higher-rated official store",
        verdict: hasSeller ? "Compare" : "Avoid",
      },
      {
        factor: "Terms",
        selected: "Listing claim",
        alternative: "Official warranty, refund, or cancellation policy",
        verdict: "Wait",
      },
      {
        factor: "Alternative",
        selected: form.platform,
        alternative: "Keep current option or compare another provider",
        verdict: recommendation,
      },
    ],
    createdAt: new Date().toISOString(),
  };
}
