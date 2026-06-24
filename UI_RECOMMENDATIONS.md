# UI Recommendations

## Review context

This review looks at the current frontend-only prototype from a mobile-first shopping app perspective. The app currently provides a single-page shopping helper with a hero panel, product input form, mock analysis output, comparison table, and saved local history. The recommendations below assume the next iteration should make the experience feel safer, faster, and more useful for Vietnamese mobile shoppers while preserving the prototype nature of the product.

## UX issues

- **The primary value proposition is not action-oriented enough for mobile shoppers.** The hero explains that the app is a frontend-only helper, but shoppers usually need a direct task such as “Check if this listing is safe,” “Compare price,” or “Ask seller questions.” The headline and CTA should focus on shopper outcomes rather than implementation details.
- **The mock nature of the result needs stronger in-flow disclosure.** Because the UI presents a numeric score and detailed guidance, users may interpret the output as verified AI or marketplace intelligence. Add a persistent, plain-language notice near the score and submit button explaining that results are mock guidance and do not verify seller reputation, product authenticity, stock, warranty, or live prices.
- **Required input feedback is invisible.** Submitting an empty product name silently does nothing. Mobile users need immediate inline validation explaining what is missing and how to fix it.
- **The score lacks interpretation.** A `72/100` style score is easy to scan, but it does not explain whether the listing is safe, risky, incomplete, or needs follow-up. Add a short badge such as “Good to compare,” “Needs seller confirmation,” or “High risk.”
- **No clear next step after analysis.** Once a result appears, users can copy a summary or seller questions, but the UI does not guide them toward checking warranty, comparing alternatives, saving the listing, or asking the seller.
- **History behavior is not self-explanatory.** Tapping a saved item promotes it to the current result, but there is no label explaining this behavior. Add helper text such as “Tap an item to reopen it.”
- **The Clear history action is too destructive.** It is always visible and has no confirmation, undo, or disabled state when history is empty.
- **Copy actions have no feedback.** Users do not know whether copy succeeded or failed. Add short success/error states such as “Copied seller questions” or “Copy unavailable.”
- **The app does not reflect common Vietnam shopping decisions.** Users often care about shipping fee, vouchers, COD availability, warranty location, return windows, seller response speed, authenticity proof, installment options, and platform buyer protection. These should be first-class UI concepts.

## Layout issues

- **Desktop-first composition dominates the product flow.** The two-column layout is appropriate on large screens, but mobile should prioritize a step-by-step flow: input first, result second, history third.
- **The hero consumes valuable mobile vertical space.** On small screens, compress the hero copy and move implementation notes below the main task. A shopper should see the product input and main CTA quickly.
- **Form sections need stronger grouping.** Product identity, price details, seller details, and listing evidence are currently one long form. Use compact section labels or cards to make mobile scanning easier.
- **The analysis card is content-heavy.** Pros, cons, risks, checklist, questions, and table appear in one long page. On mobile, use collapsible sections, tabs, or prioritized cards so users can act on the most important risk items first.
- **The comparison table is not mobile-friendly.** Four columns will become cramped on narrow screens. Replace the table with stacked comparison cards on mobile, where each factor has selected, alternative, and verdict rows.
- **Saved history sits below the result without an empty explanation.** When history is empty, the section title and Clear button can feel broken or unnecessary. Show an explicit empty history message and hide or disable destructive actions.
- **Touch targets are mostly large, but secondary actions are visually small.** Text-only actions such as Clear and Copy can be difficult to tap confidently. Use minimum 44px target height, stronger visual affordances, and spacing around tappable elements.
- **Long product names may crowd the score header.** Consider truncation, wrapping rules, or a separate product title row so the score remains readable.

## Missing states

- **Validation states:** Missing product name, ambiguous budget, invalid price format, missing seller, and notes that are too short to produce useful guidance.
- **Copy states:** Copying, copied, copy failed, clipboard unavailable, and fallback instructions.
- **Storage states:** History save failed, history unavailable in private browsing, malformed saved history recovered, and storage quota exceeded.
- **Analysis states:** Analysis in progress, analysis complete, analysis failed, and stale result after form edits.
- **Result confidence states:** Not enough details, moderate detail, good detail, and needs marketplace verification.
- **History states:** Empty history, history loading from storage, clear confirmation, cleared successfully, and undo clear.
- **Compatibility states:** Browser does not support `crypto.randomUUID`, local storage, or clipboard APIs.
- **Offline/limited connectivity state:** Even though the app is currently frontend-only, a future shopping assistant should clearly communicate whether live marketplace checks are unavailable.

## Empty states

- **Initial result empty state:** Replace the single sentence with a more useful starter panel: example product, what the analysis will include, and a “Try sample listing” action.
- **History empty state:** Show “No saved comparisons yet” plus a short explanation that recent analyses appear automatically on this device.
- **Questions empty state:** If future logic cannot generate seller questions, show guidance for manually asking about warranty, return policy, authenticity, and shipping.
- **Comparison empty state:** If there is no alternative or category data, show a message explaining what information is needed to compare better.
- **Risk empty state:** Avoid implying “no risk” when information is missing. Use “No obvious risk from the details provided” and suggest adding seller, price, warranty, and notes.
- **Form helper empty state:** Before users type, show concise hints or chips for common shopping scenarios such as “New phone,” “Used laptop,” “Beauty product,” or “Facebook Marketplace pickup.”

## Loading states

- **Submit button loading state:** Even mock analysis should show immediate feedback if any delay is introduced. Use a disabled button label such as “Checking listing…” with a spinner.
- **Skeleton result card:** Reserve space for the score, summary, risk list, and seller questions to avoid layout jump.
- **Progressive reveal:** Show high-level score and risk summary first, then render checklist, questions, and comparison details.
- **Copy loading state:** Briefly show “Copying…” for copy actions and prevent repeated taps.
- **History hydration state:** If storage parsing becomes asynchronous or validated, show a subtle “Loading saved comparisons…” state.
- **Future marketplace loading states:** If live integrations are added, separate stages such as “Reading listing,” “Checking seller,” “Comparing prices,” and “Preparing questions.”

## Better mobile interactions

- **Use a sticky bottom CTA.** Keep “Run analysis” visible at the bottom on mobile once the user begins entering a product, while avoiding overlap with the keyboard and safe areas.
- **Support scan-friendly result cards.** Add a top risk summary card with the three most important actions before showing detailed pros and cons.
- **Convert the table into mobile cards.** Each comparison factor should become a tappable or stacked card with a clear verdict badge.
- **Add quick input chips.** Offer chips for common concerns like “No warranty,” “Used item,” “Too cheap,” “COD only,” “Imported goods,” and “Seller has few reviews.”
- **Add price-specific controls.** Use a numeric input mode for price, a VND suffix/prefix, and formatting while typing.
- **Add platform-aware prompts.** When a platform is selected, surface relevant hints such as vouchers for Shopee/Lazada, livestream credibility for TikTok Shop, seller verification for Facebook Marketplace, or official store checks for Tiki.
- **Make seller questions easier to use.** Add individual copy buttons per question, a copy-all button, and message-friendly formatting.
- **Provide undo for destructive actions.** Clearing history should support confirmation or a snackbar undo.
- **Enable fast re-analysis.** After reopening history, provide “Edit and run again” so users understand they can refine inputs.
- **Respect mobile keyboard flow.** Use appropriate input types, autocomplete hints, return key labels, and focus movement between fields.

## Accessibility improvements

- **Add visible validation messages connected to fields.** Use `aria-describedby` for helper and error text when validation is added.
- **Expose copy status to assistive tech.** Use an `aria-live` region for copied or failed clipboard messages.
- **Improve button labeling.** Text-only actions such as “Clear” and “Copy” should include accessible labels that clarify scope, for example “Clear saved history” or “Copy seller questions.”
- **Avoid color-only meaning.** Pros, cons, risks, and checklist rely heavily on colored headings. Add icons, labels, or text descriptors so meaning is not color-dependent.
- **Check contrast for muted text.** Slate text on dark translucent backgrounds may be low contrast, especially for placeholders and secondary metadata.
- **Improve table accessibility.** If the table remains, include a caption and ensure headers remain meaningful on mobile. If converted to cards, preserve semantic grouping.
- **Strengthen focus states.** Inputs have focus rings, but buttons need equally visible keyboard focus styles.
- **Respect reduced motion.** If animations, skeletons, or transitions are added, support `prefers-reduced-motion`.
- **Use semantic landmarks.** Add clearer regions for input, current analysis, and saved history so screen reader users can jump between major tasks.
- **Ensure touch target size.** Maintain at least 44px by 44px interactive targets for mobile and users with motor impairments.

## Recommended UI priorities

1. **Add trust and safety disclosure.** Clarify that the app is mock guidance and does not verify real marketplace data before users see or act on a score.
2. **Add validation and feedback.** Replace silent failure with inline required-field errors, budget guidance, and copy success/failure messages.
3. **Improve the mobile result hierarchy.** Put score interpretation, top risks, and next actions before detailed lists and tables.
4. **Replace the mobile table layout.** Use stacked comparison cards on small screens while keeping the table for larger screens if desired.
5. **Create complete empty and missing states.** Initial result, saved history, insufficient listing details, unavailable storage, and unavailable clipboard all need explicit UI.
6. **Optimize mobile input.** Add VND-aware price entry, quick concern chips, platform-aware helper text, and keyboard-friendly fields.
7. **Improve history controls.** Add empty history messaging, tap-to-reopen helper text, clear confirmation or undo, and disabled/hidden clear action when empty.
8. **Strengthen accessibility.** Prioritize accessible names, live status messages, focus styles, contrast, non-color indicators, and semantic regions.
9. **Localize for Vietnamese shoppers.** Add Vietnamese language support, VND formatting, local marketplace terminology, and localized seller questions.
10. **Prepare for real data states.** Design loading, error, stale, unavailable, and source attribution states before adding real AI or marketplace integrations.
