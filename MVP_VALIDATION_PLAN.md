# MVP Validation Plan

## Context

This validation plan turns the market reality check into a practical MVP test plan. The strongest near-term direction is not a generic AI shopping comparison app. The MVP should validate a narrower, workflow-driven product: a **source-backed AI Tech Decision Assistant** that helps founders, builders, students, and small teams choose tools, vendors, and technical approaches under real constraints.

The validation goal is simple: prove that users will provide enough context, trust a structured recommendation, and use the resulting decision artifact in a real conversation or purchase/build decision.

## MVP positioning

> Decision memos for founders and small teams choosing software, tools, and technical architecture under real constraints: budget, team skill, timeline, lock-in, maintenance, and scale.

The MVP should not try to answer every technology question. It should handle a small set of repeated, high-anxiety decisions where a bad choice can waste time, money, or engineering effort.

Recommended initial decision categories:

1. Choosing a first SaaS or AI product stack.
2. Choosing between no-code, low-code, SaaS tools, agencies, and custom development.
3. Choosing core providers such as auth, database, hosting, payments, analytics, email, CRM, helpdesk, LLM provider, or vector database.
4. Comparing 2-4 tools the user is already considering.
5. Producing a shareable decision memo that explains the recommendation, trade-offs, implementation steps, and revisit triggers.

## Who is the ideal first user

The ideal first user is a **time-constrained early-stage builder or non-technical founder who must make a real tool or stack decision soon and does not have a trusted technical advisor available on demand**.

### Primary ideal user profile

- **Role:** Solo founder, indie hacker, non-technical founder, junior technical founder, small-business operator, agency owner, or student builder.
- **Stage:** Has an idea, prototype, client project, internal automation need, or MVP in progress.
- **Decision urgency:** Needs to choose a tool, platform, vendor, architecture, or build path within the next 1-14 days.
- **Pain:** Worried about choosing the wrong stack, overpaying for SaaS, getting locked into a vendor, hiring developers too early, or building something that cannot scale or be maintained.
- **Current behavior:** Asks ChatGPT, searches Google, reads Reddit/Hacker News, watches YouTube reviews, asks friends, or posts in founder communities.
- **Success moment:** Receives a concise decision memo they can share with a cofounder, developer, client, advisor, or investor.

### Best first-user segments

1. **Non-technical founders** choosing whether to build with no-code, hire an agency, buy SaaS tools, or commission custom development.
2. **Indie hackers** choosing a practical stack for a first SaaS/AI product.
3. **Small agencies** producing tool recommendations for clients.
4. **Small businesses** selecting operational software such as CRM, helpdesk, ecommerce, automations, analytics, or AI tools.
5. **Students and junior developers** choosing project stacks and wanting a defensible rationale.

## Top 10 real-world scenarios

### 1. Non-technical founder choosing no-code vs custom build

A founder wants to launch a marketplace MVP and is unsure whether to use Bubble, Webflow plus Airtable, a SaaS marketplace platform, an agency, or custom React/Node development.

**MVP value:** Clarifies the cheapest credible path, identifies what can be validated manually first, and prevents premature custom development.

### 2. Indie hacker choosing a SaaS starter stack

A solo builder wants to launch a subscription SaaS and is comparing Next.js, Rails, Laravel, Supabase, Firebase, Clerk, Stripe, Vercel, and self-hosted options.

**MVP value:** Recommends a coherent stack based on skill level, timeline, budget, expected scale, and maintenance tolerance.

### 3. Small business choosing a CRM

A local service business is comparing HubSpot, Zoho, Pipedrive, Notion, Airtable, and Google Sheets to manage leads.

**MVP value:** Converts vague feature comparisons into a practical recommendation based on team size, sales process, automation needs, migration effort, and monthly cost.

### 4. Founder choosing an AI provider

A startup is deciding between OpenAI, Anthropic, Google, open-source models, or a model router for an AI feature.

**MVP value:** Compares model capability, cost sensitivity, latency, reliability, privacy needs, implementation complexity, and fallback strategy.

### 5. Builder choosing a database

A developer is deciding between Postgres, Supabase, Firebase, MongoDB, PlanetScale, Neon, or a managed cloud database.

**MVP value:** Separates trendy choices from practical fit and creates a decision record tied to schema needs, query patterns, team familiarity, and operational burden.

### 6. Agency recommending a client tech stack

An agency needs to justify why a client should use Shopify, WooCommerce, custom ecommerce, or a headless setup.

**MVP value:** Produces a client-ready memo with trade-offs, cost ranges, implementation phases, risks, and a recommendation.

### 7. Startup choosing analytics tools

A founder is comparing PostHog, Mixpanel, Amplitude, Google Analytics, Plausible, and custom events.

**MVP value:** Maps the choice to product maturity, event volume, privacy expectations, funnel needs, pricing risk, and setup complexity.

### 8. Team choosing auth provider

A small team is deciding between Clerk, Auth0, Supabase Auth, Firebase Auth, NextAuth/Auth.js, or custom authentication.

**MVP value:** Highlights security, compliance, pricing, lock-in, implementation speed, social login needs, B2B requirements, and migration risks.

### 9. Founder deciding whether to buy SaaS or build internally

A founder needs workflow automation, customer support tooling, or reporting dashboards and is debating whether to buy tools, glue them together, or build custom software.

**MVP value:** Forces total cost of ownership thinking and identifies when buying is cheaper than engineering time.

### 10. Student or junior developer choosing a portfolio project stack

A student wants to build a portfolio app and is unsure whether to use React, Vue, Svelte, Next.js, Django, Rails, Laravel, Firebase, or Supabase.

**MVP value:** Recommends a stack that maximizes learning, deployability, portfolio credibility, and completion probability.

## What makes this workflow better than asking ChatGPT directly

The MVP is not better than ChatGPT because it is more intelligent. It is better only if it provides a more reliable **decision workflow** and a more usable **decision artifact**.

### 1. Structured intake instead of a blank prompt

Most users do not know what context to give ChatGPT. The MVP asks the necessary questions up front: budget, timeline, team skills, existing stack, risk tolerance, scale expectations, maintenance capacity, compliance needs, and must-have constraints.

### 2. Repeatable decision framework

ChatGPT can produce inconsistent answers depending on the prompt. The MVP should apply the same evaluation dimensions every time, such as cost, speed, complexity, lock-in, scalability, team fit, ecosystem maturity, operational burden, and reversibility.

### 3. Shareable decision memo

A chat answer is often hard to share or revisit. The MVP output should be a polished memo with a recommendation, scorecard, trade-offs, assumptions, risks, implementation checklist, and revisit triggers.

### 4. Explicit trade-off scoring

Instead of a generic pros/cons list, the workflow should show how each option scores against the user's stated constraints. This makes the recommendation feel grounded and auditable.

### 5. Better pushback

Users often ask ChatGPT to validate a preferred choice. The MVP should challenge weak assumptions, flag missing information, identify hidden costs, and recommend waiting or simplifying when appropriate.

### 6. Narrow domain templates

The MVP can use decision templates for common choices such as auth, database, hosting, analytics, CRM, AI provider, and no-code vs custom build. This reduces generic advice and improves consistency.

### 7. Decision memory

Over time, the product can remember prior decisions, constraints, and preferences. Users should not need to re-explain their budget, team skill level, stack, and risk tolerance every time.

### 8. Source-backed claims

Where current facts matter, the workflow should distinguish user-specific reasoning from external facts such as pricing, limits, supported features, docs, and vendor claims. This is essential for trust.

### 9. Actionable next steps

The output should not end with a recommendation. It should include what to do next: setup steps, validation tasks, questions to ask vendors or developers, and conditions that would change the decision.

### 10. Designed around real decision moments

ChatGPT is general-purpose. This MVP is purpose-built for the moment when a user must choose, justify, and act.

## What data users must provide

The MVP should minimize required input while still collecting enough context to produce a useful recommendation.

### Required data

1. **Decision type**
   - Example: choose a database, pick a CRM, compare AI providers, decide no-code vs custom build.

2. **Options under consideration**
   - User can provide 2-4 options, or ask the MVP to suggest reasonable options.

3. **Project or business context**
   - What the user is building or buying the tool for.
   - Current stage: idea, prototype, MVP, launched product, internal workflow, client project.

4. **Primary goal**
   - Speed, lowest cost, reliability, scalability, ease of use, learning, client handoff, compliance, or long-term maintainability.

5. **Budget constraints**
   - Monthly tool budget, one-time implementation budget, or maximum acceptable cost.

6. **Timeline**
   - When the decision must be made and when implementation must be completed.

7. **Team skills**
   - Technical level, preferred languages/frameworks, available developers, and maintenance capacity.

8. **Existing stack or tools**
   - Current website, app, database, CRM, hosting, automation tools, payment provider, analytics, or internal workflows.

9. **Must-have requirements**
   - Features, integrations, security, privacy, geography, compliance, performance, support, migration, or collaboration needs.

10. **Deal-breakers**
   - Vendor lock-in, high monthly cost, difficult migration, weak support, poor documentation, self-hosting requirement, complexity, or limited local payment support.

### Optional but valuable data

1. Links to vendor pages, pricing pages, documentation, GitHub repositories, marketplace listings, or comparison articles.
2. Screenshots of current tool setup, pricing quotes, dashboards, or proposals.
3. Current user/customer volume and expected growth.
4. Compliance or data sensitivity requirements.
5. Known internal constraints from a developer, advisor, client, or investor.
6. Preferred decision style: cheapest safe option, fastest launch option, most scalable option, easiest to hand off, or best learning path.
7. Prior bad experiences or tools the user refuses to use.
8. Geographic constraints such as local payment methods, language support, data residency, or vendor availability.

## What output users expect

Users do not want a long generic essay. They expect a concise, defensible decision artifact that helps them act.

### Primary MVP output

A **decision memo** containing:

1. **Executive recommendation**
   - One clear recommended option.
   - A short explanation of why it best fits the user's constraints.

2. **Confidence level**
   - High, medium, or low.
   - Explanation of what would increase or reduce confidence.

3. **Option scorecard**
   - Scores for each option across key criteria such as cost, speed, ease of implementation, maintainability, scalability, lock-in, ecosystem, team fit, and risk.

4. **Trade-off matrix**
   - What the user gains and gives up by choosing each option.

5. **Assumptions**
   - The facts or user inputs the recommendation depends on.

6. **Risks and mitigations**
   - Specific risks, likely impact, and ways to reduce them.

7. **Implementation checklist**
   - First steps to validate or implement the recommendation.

8. **Questions to ask before committing**
   - Questions for vendors, developers, agencies, teammates, or clients.

9. **When to revisit the decision**
   - Triggers such as user growth, cost threshold, team changes, compliance needs, performance issues, or vendor limitations.

10. **Alternative recommendation**
   - The best backup option if the user's priorities change.

### Secondary expected outputs

- One-page shareable summary.
- Founder-friendly explanation with minimal jargon.
- Developer-facing implementation notes.
- Client-ready recommendation format for agencies.
- Vendor comparison table.
- Copy-paste questions for sales calls or technical advisors.
- A final verdict: **choose option A**, **choose option B**, **delay decision**, **run a test first**, or **do not commit yet**.

## MVP success criteria

The MVP should be validated with real users making real decisions, not hypothetical prompts.

### Recruitment target

Test with **10-15 users** who have an active tool, vendor, stack, or build-vs-buy decision due within 14 days.

### Activation criteria

The MVP is promising if:

1. At least **10 users complete the intake** without facilitator help.
2. At least **8 of 10 users provide enough context** for a meaningful recommendation.
3. Median intake completion time is **under 10 minutes**.
4. At least **7 of 10 users say the questions captured constraints they would not have included in a normal ChatGPT prompt**.

### Output quality criteria

The MVP is promising if:

1. At least **7 of 10 users rate the decision memo 8/10 or higher** for usefulness.
2. At least **6 of 10 users say the recommendation is clearer than what they expected from a normal chatbot answer**.
3. At least **6 of 10 users say the scorecard or trade-off matrix improved their understanding**.
4. At least **5 of 10 users identify a risk, hidden cost, or assumption they had not considered**.
5. At least **5 of 10 users would share the memo with another person involved in the decision**.

### Behavior-change criteria

The MVP is truly valuable if:

1. At least **5 of 10 users use the memo in a real conversation** with a cofounder, developer, client, teammate, advisor, or vendor.
2. At least **4 of 10 users change, delay, simplify, or validate their decision** because of the memo.
3. At least **3 of 10 users request another decision memo** for a different decision.
4. At least **3 of 10 users say they would pay for this if it saved them time or prevented a bad decision**.

### Willingness-to-pay criteria

Early pricing is validated if:

1. At least **3 of 10 users would pay $10-$25 for a one-off decision memo**.
2. At least **2 of 10 users in founder, agency, or business segments would consider $29-$99/month** for recurring decision support.
3. At least **1 agency or consultant sees value in using it for client-facing recommendations**.

### Kill criteria

Stop or pivot if:

1. Users treat the memo as generic advice they could get from ChatGPT.
2. Fewer than **4 of 10 users would share the output**.
3. Fewer than **3 of 10 users change or clarify their decision**.
4. Users are unwilling to provide the required context.
5. Users consistently ask for live research, citations, or expert review before trusting the recommendation, and the MVP cannot provide that.

## 20 user test questions

Use these questions after the user completes a real decision workflow. Ask follow-ups when answers are vague.

1. What decision were you trying to make today, and how urgent is it?
2. Before using this, how were you planning to make the decision?
3. What would you normally ask ChatGPT, Google, Perplexity, Reddit, a friend, or a developer?
4. Did the intake questions capture the important constraints in your situation?
5. Which question felt most useful or made you think differently?
6. Which question felt unnecessary, confusing, or too hard to answer?
7. Was there any information you wanted to provide but could not?
8. Did the recommendation match, challenge, or change your initial preference?
9. Did the memo explain the trade-offs clearly enough to trust the recommendation?
10. Which part of the output was most valuable: recommendation, scorecard, risks, checklist, assumptions, questions to ask, or revisit triggers?
11. Which part of the output felt generic or replaceable by ChatGPT?
12. Did the memo surface any hidden cost, risk, dependency, or assumption you had not considered?
13. Would you share this memo with a cofounder, developer, client, teammate, advisor, or vendor? Why or why not?
14. What would need to be added for you to trust the recommendation more?
15. Did you need citations, current pricing, documentation links, expert review, or examples before acting on the memo?
16. How likely are you to use this again for another tool, vendor, stack, or build-vs-buy decision?
17. What decision would you use it for next?
18. If this saved you 2-5 hours of research or prevented a bad decision, what would you expect to pay for one memo?
19. Would you prefer this as a self-serve app, a guided interview, a chat workflow, a form-to-memo generator, or a human-reviewed report?
20. What is the one thing that would make this clearly better than asking ChatGPT directly?

## Recommended validation process

### Step 1: Manual concierge test

Before building more product, manually run 10 users through the workflow. Use a structured form for intake and create decision memos manually or semi-manually. The goal is to validate the decision artifact, not automation.

### Step 2: Compare against user's current method

Ask each user to bring the answer they would normally get from ChatGPT, Google, Perplexity, Reddit, a friend, or their own research. Compare whether the MVP memo is clearer, more actionable, and more shareable.

### Step 3: Measure real behavior

Do not rely only on satisfaction ratings. Follow up within 7 days and ask whether the user shared the memo, changed the decision, asked vendor questions, delayed a choice, chose an option, or requested another memo.

### Step 4: Identify the strongest wedge

After 10-15 tests, cluster the highest-value use cases. The MVP should narrow further around the segment where users provide context fastest, trust the memo most, and show the strongest willingness to pay.

## MVP validation verdict to seek

The MVP is worth continuing only if users say, in effect:

> "I could have asked ChatGPT, but I would not have known what context to provide, I would not have gotten this structured memo, and I can actually use this to make or defend my decision."

If users say the output feels like a polished prompt response, the product is not differentiated enough. The product wins only when it becomes a trusted workflow for high-stakes, real-world decisions.
