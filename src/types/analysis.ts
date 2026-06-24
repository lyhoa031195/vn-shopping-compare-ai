export type Analysis = {
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
  comparisons: {
    factor: string;
    selected: string;
    alternative: string;
    verdict: string;
  }[];
  createdAt: string;
};
