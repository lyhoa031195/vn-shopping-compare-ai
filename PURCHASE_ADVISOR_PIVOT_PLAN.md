# Purchase Advisor Pivot Plan

## Context

The current product is a frontend-only React prototype called **VN Shopping Compare AI**. It accepts a product, platform, category, price/budget, seller, and notes, then generates deterministic mock guidance with a score, pros, cons, risks, checklist, seller questions, comparison rows, and local browser history.

This pivot intentionally ignores the previous tool-and-tech direction and reframes the product as an **AI Purchase Advisor / Decision Checklist AI**: a general-purpose assistant that helps users decide whether a specific purchase, upgrade, subscription, course, device, component, or software plan is worth buying.

Typical target questions:

- Should I buy this used laptop?
- Should I buy RTX 3060?
- Should I pay for Claude Pro?
- Should I buy this course?
- Should I subscribe to this software?
- Should I upgrade my phone?

## Product positioning

### New product promise

Help users make safer, clearer buying decisions by turning messy purchase information into:

1. A buy / wait / avoid recommendation.
2. A decision checklist.
3. Key risks and missing information.
4. Questions to ask before paying.
5. Comparable alternatives or next-best options.
6. A confidence score based on evidence quality, fit, risk, and value.

### What changes from the current product

The app should move from **marketplace listing comparison** to **decision support across purchase types**.

Current framing:

> Compare marketplace listings with a mock AI review.

New framing:

> Get a practical buying recommendation, checklist, and risk review before spending money.

### What should not be promised in the MVP

The MVP should avoid claiming that it can verify real-time prices, marketplace availability, seller identity, product authenticity, investment value, course quality, or subscription ROI unless those checks are backed by live data or explicit user-provided evidence.

Use language such as:

- “Decision checklist”
- “Evidence-based guidance from the details you provide”
- “Risk review”
- “Questions to verify before buying”
- “Not a guarantee”

Avoid language such as:

- “Verified deal”
- “Best price guaranteed”
- “AI knows whether this is authentic”
- “Guaranteed ROI”

## 1. Existing components that can be reused

### Application shell

Reuse the current Vite + React + TypeScript + Tailwind single-page app architecture. The pivot does not require a backend for the first MVP because the existing local-only flow is enough to validate the purchase-advice workflow.

Reusable files / areas:

- `src/main.tsx` app bootstrap.
- `src/App.tsx` page-level layout, form state pattern, history pattern, and clipboard action pattern.
- `src/index.css` Tailwind setup and reusable `.input` class.
- `tailwind.config.js`, `postcss.config.js`, `vite.config.ts`, and `tsconfig.json`.

### Analysis generation pattern

Reuse the current `buildAnalysis()` pattern as the starting point for a new `buildPurchaseAdvice()` or similarly named function. The current function already returns a structured result with a score, summary, pros, cons, risks, checklist, questions, comparison rows, and timestamp.

Keep these output concepts:

- Score.
- Summary.
- Pros.
- Cons.
- Risk signals.
- Checklist.
- Questions to ask.
- Comparison rows.
- Created timestamp.

Modify the underlying semantics so the score means “purchase readiness / decision confidence,” not “shopping listing quality.”

### Analysis card UI

Reuse `AnalysisCard` as the result container, but relabel sections and add decision-specific sections. The existing card already supports:

- Score header.
- Summary block.
- Multiple titled lists.
- Copy summary button.
- Questions list.
- Comparison table.

Recommended reused sections:

- “Pros” can become “Reasons to buy.”
- “Cons” can become “Reasons to pause.”
- “Risk signals” remains useful.
- “Buyer checklist” remains central to the new product.
- “Questions to ask the seller” can become “Questions to verify.”
- The comparison table can become “Decision factors.”

### Reusable list component

Reuse `List` for all checklist-style sections. Purchase decisions naturally map to list outputs, including:

- Must-check items.
- Red flags.
- Missing evidence.
- Alternatives to compare.
- Questions to ask.
- Next actions.

### Local history

Reuse the current local history concept. Purchase-advice users benefit from revisiting prior decisions such as laptop listings, GPU options, subscriptions, courses, or upgrade ideas.

Modify labels from “Saved history” to “Recent decisions” or “Decision history.”

### Clipboard support

Reuse clipboard functionality for:

- Copying a summary.
- Copying questions to ask.
- Copying the final checklist.
- Copying a negotiation / verification message.

## 2. Components that need modification

### App-level copy and framing

Current hero copy is marketplace-specific and Vietnam-shopping-specific. It should be rewritten around purchase advice.

Replace:

- “Frontend-only shopping helper”
- “VN Shopping Compare AI”
- “Compare marketplace listings…”
- “Product input”
- “Run mock AI analysis”

With:

- “AI purchase decision checklist”
- “Purchase Advisor AI”
- “Decide whether to buy, wait, compare, or avoid.”
- “Decision input”
- “Get purchase advice”

### Form inputs

The current form is product/listing oriented. It should become decision oriented.

Current fields:

- Product name.
- Platform.
- Category.
- Budget / price.
- Seller.
- Listing notes.

Recommended MVP fields:

1. **What are you considering?**
   - Example: “Used ThinkPad X1 Carbon Gen 9” or “Claude Pro monthly plan.”
2. **Decision type**
   - Example: Used item, new product, subscription, course, upgrade, software, component.
3. **Price / monthly cost**
   - Supports one-time and recurring cost.
4. **Budget or willingness to pay**
   - Helps assess affordability and value.
5. **Current alternative**
   - Example: “Keep my current phone,” “Use free ChatGPT,” “Buy RTX 4060 instead.”
6. **Use case / goal**
   - Example: “Video editing,” “AI coding,” “college coursework,” “gaming at 1080p.”
7. **Evidence / notes**
   - Listing details, specs, warranty, seller claims, course syllabus, plan limits, pain points.

Optional later fields:

- Urgency.
- Region/currency.
- Condition.
- Warranty / refund terms.
- Existing device or software.
- Compatibility requirements.
- Risk tolerance.
- Usage frequency.

### Category model

The existing categories are shopping-marketplace categories. They need to become decision categories that cover physical goods, digital products, services, subscriptions, and upgrades.

See “New categories” below.

### Platform model

The existing platform selector is too marketplace-specific. For the MVP, it can be changed to **Purchase source** or removed in favor of **Where will you buy / subscribe?**

Suggested options:

- Marketplace.
- Retail store.
- Direct from brand.
- Used / peer-to-peer.
- App store.
- SaaS website.
- Course platform.
- Employer / school plan.
- Other.

### Analysis type

The current `Analysis` type should be renamed or extended to represent a purchase decision.

Current fields that need semantic changes:

- `product` → `item` or `decisionSubject`.
- `platform` → `source`.
- `category` → `decisionCategory`.
- `budget` → split into `price` and `budget` if possible.
- `seller` → `provider` or optional `sellerOrProvider`.
- `notes` → `evidence`.
- `pros` → `reasonsToBuy`.
- `cons` → `reasonsToPause`.
- `questions` → `verificationQuestions`.
- `comparisons` → `decisionFactors` or `alternatives`.

New fields to consider:

- `recommendation`: `Buy`, `Wait`, `Compare`, `Avoid`, or `Need more info`.
- `confidence`: Low / Medium / High.
- `missingInfo`: string array.
- `nextActions`: string array.
- `decisionType`: used / new / subscription / course / upgrade / software / component.
- `costType`: one-time / monthly / annual / unknown.

### Score behavior

The score should no longer be a generic product score. It should represent **purchase readiness** or **decision confidence**.

Recommended label:

- “Decision score”
- “Purchase readiness”
- “Buy confidence”

The score should be clearly tied to criteria such as value fit, risk, urgency, evidence quality, alternatives, and affordability.

### Result card sections

Recommended sections after pivot:

1. Decision score and recommendation.
2. Short verdict.
3. Reasons to buy.
4. Reasons to pause.
5. Risk signals.
6. Missing information.
7. Decision checklist.
8. Questions to verify.
9. Alternatives / comparison factors.
10. Recommended next action.

### History panel

Rename saved history to decision history. Each item should show:

- Decision subject.
- Recommendation.
- Score.
- Category.
- Date.

## 3. New categories

Use decision categories instead of broad retail categories.

### Recommended MVP categories

1. **Used electronics**
   - Used laptops, used phones, used cameras, used tablets, used monitors.
   - Key risks: battery health, hidden defects, stolen/locked devices, warranty, repair cost.

2. **Computer parts**
   - GPUs, CPUs, RAM, SSDs, motherboards, power supplies.
   - Key risks: compatibility, bottlenecks, power requirements, used mining cards, warranty.

3. **Phone / device upgrade**
   - Upgrading from an existing phone, laptop, tablet, or wearable.
   - Key risks: marginal improvement, battery life, storage needs, trade-in value, timing.

4. **Software subscription**
   - AI tools, productivity tools, design tools, developer tools, cloud services.
   - Key risks: recurring cost, actual usage frequency, free alternatives, lock-in, cancellation.

5. **Online course / learning product**
   - Courses, bootcamps, paid communities, coaching programs, certifications.
   - Key risks: outdated content, vague outcomes, refund policy, time commitment, credential value.

6. **New consumer product**
   - New electronics, appliances, accessories, home goods.
   - Key risks: overpaying, weak warranty, cheaper alternatives, unnecessary features.

7. **Service / membership**
   - Gym membership, paid community, premium support, warranty plans, insurance add-ons.
   - Key risks: cancellation friction, low utilization, exclusions, long-term commitment.

8. **Other purchase**
   - Catch-all category for early MVP flexibility.

### Later categories

Add after validating MVP demand:

- Travel purchase.
- Financial product.
- Car / motorbike purchase.
- Home appliance replacement.
- Professional equipment.
- Gaming setup.
- Creator equipment.
- Business SaaS.
- Team subscription.
- Warranty / extended protection.

## 4. New scoring criteria

The current score rewards budget, seller, and notes. The pivot needs a decision score that balances value, fit, risk, and evidence.

### Recommended score model

Use a 100-point score with transparent sub-scores.

| Criterion | Weight | Meaning |
| --- | ---: | --- |
| Need fit | 20 | Does the item solve a clear user goal or pain point? |
| Value for money | 20 | Is the price reasonable versus benefits, alternatives, and expected usage? |
| Evidence quality | 15 | Did the user provide enough details, specs, terms, screenshots, syllabus, or plan limits? |
| Risk level | 15 | Are there red flags such as no warranty, unknown seller, recurring lock-in, vague claims, or compatibility uncertainty? |
| Alternative comparison | 10 | Has the user compared keeping the current option, buying used/new, waiting, or choosing a competitor? |
| Affordability | 10 | Is the cost within stated budget or acceptable recurring spend? |
| Timing / urgency | 5 | Is there a real need now, or can the user wait for better pricing or more information? |
| Reversibility | 5 | Can the user return, cancel, refund, resell, or recover value if wrong? |

### Recommendation bands

| Score | Recommendation | Meaning |
| ---: | --- | --- |
| 85-100 | Buy if details are verified | Strong fit and low unresolved risk. |
| 70-84 | Good candidate, compare once more | Likely reasonable, but check alternatives or one missing issue. |
| 55-69 | Wait / gather more info | Decision depends on missing evidence or unclear value. |
| 40-54 | High caution | Important risks or weak fit. |
| 0-39 | Avoid for now | Poor fit, high risk, unaffordable, or insufficient evidence. |

### Category-specific scoring examples

#### Used laptop

Increase score when:

- Battery health is known.
- CPU/RAM/SSD match user workload.
- Photos and serial/model details are provided.
- Warranty or return window exists.
- Price is meaningfully below comparable listings.

Decrease score when:

- No battery cycle count or battery health.
- No test evidence.
- Damaged screen/keyboard/ports.
- BIOS/iCloud/activation locks are possible.
- Price is too close to a newer model.

#### RTX 3060 / computer part

Increase score when:

- Current PC compatibility is known.
- Power supply wattage and connectors match.
- Warranty remains.
- Price beats newer alternatives for the intended use.

Decrease score when:

- Used mining history is unknown.
- No stress test evidence.
- Power supply or case clearance is unknown.
- Better efficiency/new warranty alternatives are close in price.

#### Claude Pro / software subscription

Increase score when:

- User has frequent monthly usage.
- Paid limits solve a concrete bottleneck.
- Cost is small relative to productivity gain.
- Cancellation is easy.

Decrease score when:

- Usage is occasional.
- Free plan or competitor is enough.
- User cannot define expected benefit.
- Subscription overlaps with tools already paid for.

#### Online course

Increase score when:

- Syllabus is specific.
- Instructor credibility is verifiable.
- User has time to complete it.
- Refund policy is clear.
- Outcome aligns with a real goal.

Decrease score when:

- Claims are vague or income-focused.
- Content may be available free elsewhere.
- No recent reviews or projects.
- User lacks time or prerequisite knowledge.

### Confidence label

Separate the score from confidence.

A purchase may score well but have low confidence if user evidence is thin. Add:

- **High confidence**: enough evidence across price, fit, risks, and alternatives.
- **Medium confidence**: useful guidance but one or two important gaps.
- **Low confidence**: recommendation is mainly a checklist because key details are missing.

## 5. New UI labels

### App identity

Recommended names:

- Purchase Advisor AI.
- Buy or Wait AI.
- Decision Checklist AI.
- Should I Buy It?

Best MVP label:

> Purchase Advisor AI

### Hero section

Recommended copy:

**Eyebrow**

> AI purchase decision checklist

**Title**

> Should you buy it?

**Subtitle**

> Get a practical buy / wait / avoid recommendation, risk review, and checklist before spending money.

### Form labels

| Current label | New label |
| --- | --- |
| Product input | Decision input |
| Product name | What are you considering? |
| Platform | Purchase source |
| Category | Decision type |
| Budget / price | Price or monthly cost |
| Seller | Seller / provider |
| Listing notes | Details, evidence, and concerns |
| Run mock AI analysis | Get purchase advice |

### Placeholder examples

- “Used ThinkPad X1 Carbon Gen 9, 16GB RAM, 512GB SSD”
- “RTX 3060 12GB used card for 4,000,000 VND”
- “Claude Pro monthly plan”
- “React course on Udemy”
- “Upgrade from iPhone 12 to iPhone 15”

### Result labels

| Current label | New label |
| --- | --- |
| Mock AI score | Decision score |
| Pros | Reasons to buy |
| Cons | Reasons to pause |
| Risk signals | Risk signals |
| Buyer checklist | Decision checklist |
| Questions to ask the seller | Questions to verify before paying |
| Factor | Decision factor |
| Selected | This option |
| Alternative | Alternative / benchmark |
| Verdict | Recommendation |
| Copy summary | Copy decision summary |
| Saved history | Decision history |

### Recommendation labels

Use one of these in the score header:

- Buy if verified.
- Compare once more.
- Wait for more info.
- High caution.
- Avoid for now.

### Empty state

Replace:

> Enter a product to generate your first comparison.

With:

> Describe a purchase you are considering. Example: “Should I buy this used laptop for school?”

### Disclosure text

Add near the submit button and result score:

> This is decision-support guidance based on the details you provide. It does not verify real-time prices, seller identity, authenticity, availability, or future value.

## 6. Exact implementation tasks

The user requested documentation only for this change, but the following tasks define the exact implementation plan for the future pivot.

### Phase 1: Rename product framing

1. Update hero copy in `src/App.tsx`.
2. Rename the form heading from “Product input” to “Decision input.”
3. Rename submit button to “Get purchase advice.”
4. Rename empty result state to a purchase-decision prompt.
5. Rename “Saved history” to “Decision history.”
6. Add the purchase-advice disclosure near the form and result score.

Estimated effort: **0.5 day**.

### Phase 2: Update domain types

1. Rename or replace `Analysis` with `PurchaseAdvice` in `src/types/analysis.ts`.
2. Create explicit `PurchaseAdviceInput` instead of deriving input from output.
3. Add `recommendation`, `confidence`, `missingInfo`, `nextActions`, `decisionType`, `source`, `price`, and `budget` fields.
4. Rename `comparisons` to `decisionFactors` or keep the array shape but relabel UI headers.
5. Keep compatibility migration for local history or clear old history with a versioned storage key.

Estimated effort: **0.5-1 day**.

### Phase 3: Replace category and source options

1. Replace current category options with decision categories.
2. Replace platform options with source options.
3. Add placeholder examples that vary by selected category.
4. Add optional field hints for each category.
5. Ensure TypeScript uses `as const` arrays and union types for decision categories and source options.

Estimated effort: **0.5 day**.

### Phase 4: Rebuild scoring rules

1. Replace the existing score formula with the weighted purchase-readiness model.
2. Add helper functions for:
   - need fit score,
   - value score,
   - evidence score,
   - risk score,
   - alternative score,
   - affordability score,
   - urgency score,
   - reversibility score.
3. Generate a recommendation band from the final score.
4. Generate a separate confidence label from evidence completeness.
5. Add category-specific rule maps for used electronics, computer parts, subscriptions, courses, upgrades, and other purchases.
6. Ensure the displayed score, summary, and recommendation use the same capped score value.

Estimated effort: **1-2 days**.

### Phase 5: Update generated result content

1. Rename pros/cons content to reasons to buy / reasons to pause.
2. Generate category-specific risk signals.
3. Generate category-specific missing information.
4. Generate category-specific verification questions.
5. Generate next actions, such as:
   - ask for battery health,
   - compare one newer alternative,
   - check cancellation policy,
   - inspect course syllabus,
   - verify warranty in writing.
6. Update comparison rows into decision-factor rows.

Estimated effort: **1 day**.

### Phase 6: Update result UI

1. Update `AnalysisCard` labels.
2. Show recommendation label beside the score.
3. Add confidence label.
4. Add a missing-information section.
5. Add a next-actions section.
6. Rename table headers.
7. Add stronger disclosure under the score.
8. Optionally make the table mobile-friendly with stacked decision-factor cards.

Estimated effort: **1 day**.

### Phase 7: Improve input validation and reliability

1. Add required-field validation for decision subject.
2. Add optional validation for price / monthly cost.
3. Guard local storage read and write behavior.
4. Add fallback ID generation if `crypto.randomUUID()` is unavailable.
5. Add clipboard success/failure feedback.
6. Add safe history parsing or versioned history clearing.

Estimated effort: **1 day**.

### Phase 8: Add tests

1. Add Vitest and React Testing Library.
2. Add unit tests for score bands and recommendation labels.
3. Add unit tests for category-specific checklists.
4. Add unit tests for confidence labels.
5. Add component tests for form submission and result rendering.
6. Add component tests for history promotion and clearing.
7. Add tests for storage fallback and malformed history.

Estimated effort: **1-2 days**.

### Phase 9: Optional real AI integration later

1. Define a strict prompt contract and JSON schema for purchase advice.
2. Keep deterministic fallback rules for offline demos and tests.
3. Add source/evidence boundaries so the model does not claim verification it did not perform.
4. Add cost controls and rate limits if a backend is introduced.
5. Add privacy guidance for user-provided screenshots, serial numbers, receipts, or personal usage details.

Estimated effort: **2-5 days**, depending on backend scope.

## 7. Estimated effort

### MVP implementation estimate

| Workstream | Estimate |
| --- | ---: |
| Product copy and UI relabeling | 0.5 day |
| Domain type updates | 0.5-1 day |
| New categories and source options | 0.5 day |
| New scoring model | 1-2 days |
| Category-specific generated content | 1 day |
| Result UI updates | 1 day |
| Validation and browser API hardening | 1 day |
| Basic tests | 1-2 days |
| Total | 6.5-9 days |

### Documentation-only plan estimate

Creating this pivot plan only: **0.25 day**.

### Risk-adjusted estimate

For a polished MVP with tests, copy review, responsive result layout, and safer local persistence: **2 weeks**.

For a lightweight prototype without tests or hardening: **3-5 days**, but this is not recommended because the product gives decision-support guidance and should avoid brittle behavior or overconfident output.

## 8. Recommended MVP scope

### MVP goal

Validate whether users find a purchase-decision checklist useful before adding real AI, accounts, marketplace integrations, screenshots, or live data.

### Include in MVP

1. **Single-page purchase decision form**
   - Decision subject.
   - Decision category.
   - Purchase source.
   - Price or monthly cost.
   - Budget or willingness to pay.
   - Current alternative.
   - Use case / goal.
   - Details, evidence, and concerns.

2. **Decision score**
   - 0-100 purchase-readiness score.
   - Recommendation band.
   - Confidence label.

3. **Structured result**
   - Short verdict.
   - Reasons to buy.
   - Reasons to pause.
   - Risk signals.
   - Missing information.
   - Decision checklist.
   - Questions to verify.
   - Alternatives / decision factors.
   - Next actions.

4. **Decision history**
   - Store the last eight decisions locally.
   - Reopen a previous decision.
   - Clear history.

5. **Copy actions**
   - Copy summary.
   - Copy verification questions.
   - Copy checklist.

6. **Safety disclosure**
   - Clear statement that the app does not verify real-time data, seller identity, authenticity, or future value.

7. **Category-specific logic for six categories**
   - Used electronics.
   - Computer parts.
   - Phone / device upgrade.
   - Software subscription.
   - Online course / learning product.
   - Other purchase.

### Exclude from MVP

- Backend accounts.
- Payment or affiliate links.
- Live marketplace scraping.
- Real-time price verification.
- Image upload.
- URL parsing.
- Browser extension.
- Multi-user sharing.
- Full localization.
- Real LLM integration unless a backend and safety/cost boundaries are added.

### MVP success criteria

The MVP is successful if users can:

1. Enter a real purchase they are considering.
2. Understand the recommendation without overtrusting it.
3. Identify what information is missing.
4. Ask better verification questions before buying.
5. Compare at least one alternative.
6. Decide one of: buy, wait, compare, avoid, or gather more information.

### Recommended first release tagline

> Before you buy, get a checklist.

## Suggested implementation sequence

1. Create new `PurchaseAdvice` and `PurchaseAdviceInput` types.
2. Rename visible UI copy from shopping comparison to purchase advice.
3. Replace categories and platform/source options.
4. Implement the weighted decision score.
5. Add recommendation bands and confidence labels.
6. Generate category-specific checklists, risks, questions, missing info, and next actions.
7. Update result card labels and sections.
8. Add disclosure and validation.
9. Add tests for scoring, generated output, and core UI flow.
10. Consider real AI only after the deterministic MVP proves useful.

## Strategic recommendation

The strongest pivot is not “another shopping comparison app.” It is a **pre-purchase decision checklist** that works across common spending decisions. The current codebase is well suited for this because it already has the right skeleton: input form, structured analysis output, checklist sections, questions, comparison rows, copy actions, and history.

The MVP should stay deterministic and frontend-only long enough to test the value proposition. Once users repeatedly ask for deeper reasoning, screenshot parsing, live price checks, or personalized budget memory, then add a backend and real AI integration with strict safety boundaries.
