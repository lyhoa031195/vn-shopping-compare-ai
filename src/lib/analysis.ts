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
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Baby & Kids",
  "Motorbike accessories",
  "Grocery",
  "Other",
];

const baseChecklist = [
  "Confirm final price includes shipping and platform vouchers.",
  "Check seller response time, rating, and recent one-star reviews.",
  "Compare warranty terms with at least one competing listing.",
  "Save screenshots of the listing, chat, and payment confirmation.",
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
    form.category === "Electronics"
      ? "Counterfeit, used, or grey-market stock may have limited warranty coverage."
      : "Photos, sizing, condition, or material claims may differ from delivery.";

  return {
    ...form,
    id: crypto.randomUUID(),
    score: Math.min(score, 95),
    summary: `${form.product || "This product"} on ${form.platform} looks ${score > 78 ? "promising" : "worth checking carefully"} based on the details provided. Verify seller proof, warranty, and comparable prices before paying.`,
    pros: [
      `${form.platform} usually makes it easy to compare vouchers, shipping fees, and reviews.`,
      `${form.category} listings often have multiple sellers, which helps benchmark price and warranty.`,
      hasBudget
        ? `Your budget of ${form.budget} gives a clear ceiling for negotiation.`
        : "You can still improve the decision by adding a target budget.",
    ],
    cons: [
      "Mock analysis cannot verify real-time stock, seller identity, or price changes.",
      "Promotional prices may hide higher shipping fees or weak return terms.",
      hasSeller
        ? `Seller "${form.seller}" still needs external review checks.`
        : "No seller name was provided for reputation checks.",
    ],
    risks: [
      categoryRisk,
      "Listings with few original photos, vague warranty language, or pressure to pay off-platform are higher risk.",
      "Very large discounts can indicate refurbished items, missing accessories, or replica goods.",
    ],
    checklist: baseChecklist,
    questions: [
      "Is this item authentic/new, and can you provide real photos taken today?",
      "What warranty applies in Vietnam, and who handles repair or replacement?",
      "What is included in the box, and are there any defects or missing accessories?",
      "Can I return the item if it is not as described or fails initial testing?",
    ],
    comparisons: [
      {
        factor: "Price",
        selected: hasBudget
          ? `Compare against ${form.budget}`
          : "Budget not set",
        alternative: "Check 2-3 similar listings",
        verdict: hasBudget ? "Good anchor" : "Needs budget",
      },
      {
        factor: "Seller trust",
        selected: hasSeller ? form.seller : "Unknown seller",
        alternative: "Higher-rated official store",
        verdict: hasSeller ? "Verify reviews" : "High caution",
      },
      {
        factor: "Warranty",
        selected: "Listing claim",
        alternative: "Official distributor policy",
        verdict: "Ask for written proof",
      },
      {
        factor: "Delivery",
        selected: form.platform,
        alternative: "Local pickup or another marketplace",
        verdict: "Choose trackable shipping",
      },
    ],
    createdAt: new Date().toISOString(),
  };
}
