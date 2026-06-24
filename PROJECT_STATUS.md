# Project Status

## Architecture overview

VN Shopping Compare AI is a frontend-only React prototype built with Vite, TypeScript, and Tailwind CSS. The application runs entirely in the browser and does not currently depend on a backend, authentication service, database, API keys, or live marketplace integrations.

The runtime flow is:

1. `src/main.tsx` mounts the React application into the DOM and imports global Tailwind styles.
2. `src/App.tsx` owns the primary application state for product input fields, the selected platform/category, the current analysis history, clipboard actions, and local persistence.
3. `src/lib/analysis.ts` contains all mock analysis rules, static platform/category lists, generated checklist content, comparison rows, risk messages, and score calculation logic.
4. `src/components/AnalysisCard.tsx` renders the generated analysis result, including the score, summary, lists, seller questions, and comparison table.
5. `src/components/List.tsx` provides a reusable section component for rendering titled bullet lists with optional copy support.
6. `src/types/analysis.ts` defines the shared `Analysis` data shape used across the app.
7. Browser `localStorage` stores up to eight recent analyses under the `vn-shopping-compare-ai-history` key.

Because all analysis is deterministic client-side mock logic, the app is best understood as a static single-page prototype that demonstrates the intended buyer workflow and UI rather than a production AI or commerce system.

## Folder structure

```text
.
├── README.md                    # Project summary, feature list, and development commands
├── PROJECT_STATUS.md            # Current implementation status and recommendations
├── index.html                   # Vite HTML entry point
├── package.json                 # npm scripts and React/Vite/Tailwind/TypeScript dependencies
├── postcss.config.js            # PostCSS configuration for Tailwind processing
├── tailwind.config.js           # Tailwind content scanning configuration
├── tsconfig.json                # Strict TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with React plugin
└── src
    ├── App.tsx                  # Main application UI, state, history, and clipboard logic
    ├── main.tsx                 # React root bootstrap
    ├── index.css                # Tailwind layers, base styles, and reusable input class
    ├── vite-env.d.ts            # Vite TypeScript environment declarations
    ├── components
    │   ├── AnalysisCard.tsx     # Analysis result presentation
    │   └── List.tsx             # Reusable titled list component
    ├── lib
    │   └── analysis.ts          # Mock analysis generator and static form options
    └── types
        └── analysis.ts          # Analysis TypeScript type definition
```

## Implemented features

- Vite-powered React 18 single-page application with TypeScript and Tailwind CSS.
- Product input form for product name, marketplace platform, product category, budget/price, seller, and listing notes.
- Static platform options for Shopee, Lazada, TikTok Shop, Tiki, Facebook Marketplace, and Other.
- Static category options for Electronics, Fashion, Home & Kitchen, Beauty, Baby & Kids, Motorbike accessories, Grocery, and Other.
- Mock analysis generation with:
  - score out of 100,
  - product/platform summary,
  - pros,
  - cons,
  - risk signals,
  - buyer checklist,
  - seller questions,
  - comparison table rows.
- Score calculation that rewards provided budget, seller name, and longer listing notes, capped at 95.
- Category-sensitive risk message for Electronics versus non-electronics categories.
- Saved local history of the eight most recent analyses.
- Ability to promote a saved history item back to the current result by clicking it.
- Ability to clear saved history.
- Clipboard copy support for the current summary and seller questions.
- Responsive two-column desktop layout with single-column behavior on smaller screens.
- Strict TypeScript configuration with no unused locals or parameters.

## Missing features

- No real AI/LLM integration; all analysis is hard-coded mock logic.
- No live marketplace scraping, search, listing import, price tracking, seller reputation lookup, or product availability checks.
- No backend API, database, server-side persistence, or synchronization across devices.
- No user accounts, authentication, authorization, saved profiles, or cloud history.
- No validation beyond requiring a non-empty product name before analysis.
- No structured currency handling, price normalization, voucher/shipping calculation, or exchange-rate support.
- No image upload or listing URL parsing.
- No accessibility audit, keyboard workflow testing, or ARIA-specific enhancements beyond native form controls.
- No automated test suite, component tests, end-to-end tests, or lint script in `package.json`.
- No error handling or user feedback for clipboard failures, unavailable `localStorage`, unavailable `crypto.randomUUID`, or malformed stored history.
- No internationalization/localization despite the Vietnam-focused use case.
- No production deployment configuration beyond Vite build output.

## Known risks

- Users may over-trust the mock AI output even though it does not verify real listings, sellers, prices, authenticity, warranties, shipping, stock, or reviews.
- Clipboard writes can fail in unsupported or non-secure browser contexts and currently have no user-visible fallback.
- `localStorage` access can fail in private browsing modes, restricted environments, or quota-exceeded scenarios; history loading handles parse failures, but saving is not guarded.
- `crypto.randomUUID()` may not be available in older browsers or non-secure contexts.
- Stored history is parsed as `Analysis[]` without runtime schema validation, so incompatible or manually edited storage data could produce inconsistent UI behavior.
- The score calculation is simple and may produce a confidence-like number that is not backed by real evidence.
- The app has no tests, so regressions in form handling, persistence, rendering, and copy behavior would be easy to miss.
- The current project has no lockfile in the repository, which can make dependency installs less reproducible across environments.
- The UI references Vietnam shopping scenarios, but copy and formatting are English-only and do not handle Vietnamese text/currency conventions explicitly.

## Recommended next tasks

1. Add a clear in-app disclaimer that the current analysis is mock guidance and not verified marketplace or financial advice.
2. Add basic form validation and user feedback for missing product names, invalid/ambiguous budget values, and failed clipboard actions.
3. Guard `localStorage` writes and `crypto.randomUUID()` usage with safe fallbacks for restricted browser contexts.
4. Add unit tests for `buildAnalysis`, especially score calculation, category-specific risks, cap behavior, and output structure.
5. Add component tests for form submission, history promotion, history clearing, and copy button behavior.
6. Add an npm `lint` or `check` script so type checking, style checks, and tests can be run consistently in CI.
7. Introduce runtime validation for stored history before rendering saved analyses.
8. Improve Vietnam-specific UX with VND formatting, Vietnamese-language support, marketplace-specific checklist items, and localized seller questions.
9. Decide whether the next product milestone is still frontend-only or should add a backend for accounts, saved comparisons, real AI calls, and marketplace data integrations.
10. If real AI is added, define safety boundaries, source attribution, cost controls, prompt/version management, and privacy handling for user-provided listing data.
