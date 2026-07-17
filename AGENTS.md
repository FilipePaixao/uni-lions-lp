# AGENTS.md — Uni Lions Landing Page

## Mission

Restore and evolve the Uni Lions landing page as a premium corporate executive education experience.

The public product is **Ambidestria Executiva · Uni Lions**.

The core promise is to help owners and executives protect today's cash-generating operation with one hand while building the next business cycle with the other. AI is an instrument inside the management method, never the protagonist.

## Canonical context

Before changing public copy, layout, flows, pricing, dates, faculty, testimonials, analytics, or legal content, read:

1. `knowledge/brand/brand-core.md`
2. `knowledge/brand/visual-language.md`
3. `knowledge/brand/voice-and-messaging.md`
4. `knowledge/product/ambidestria-executiva.md`
5. `knowledge/audience/personas.md`
6. `knowledge/ux/landing-page-blueprint.md`
7. `knowledge/engineering/quality-gates.md`

## Non-negotiables

- Do not position Uni Lions as a prompt engineering course.
- Do not describe AI as a replacement for people.
- Do not invent faculty, companies, testimonials, statistics, dates, prices, availability, ROI, or scarcity.
- Do not copy StartSe wording, visual composition, proprietary methods, or assets.
- “Ambidestria” must be explained through the two hands in the same context.
- Public conversion routes end at `/aplicacao`; `/diagnostico` is intermediate.
- Keep the existing framework and routing unless migration is explicitly requested.
- Preserve semantic HTML, keyboard access, visible focus, reduced-motion support, and readable contrast.
- Prefer real evidence and real photography over generic AI imagery.
- Do not ship without browser validation at mobile and desktop breakpoints.

## Work protocol

1. Inspect the repository and current page.
2. Run the app and inspect it in the browser.
3. Separate factual defects, UX issues, visual debt, copy issues, technical debt, and conversion gaps.
4. Produce a reviewable plan before broad changes.
5. Implement in small, reversible slices.
6. Validate with automated checks and browser scenarios.
7. Report changed files, checks run, known gaps, and evidence.

## Commands

- Install: `npm install`
- Develop: `npm run dev`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Preview: `npm run preview`
- Deploy: `npm run deploy`

Lint, unit tests e E2E ainda não estão no `package.json`.

## Definition of done

A task is not done because the page compiles.

It is done when:

- the requirement is implemented;
- brand canon is preserved;
- responsive behavior is verified;
- keyboard and focus behavior are verified;
- no console error is introduced;
- tests and build pass;
- performance-sensitive assets are optimized;
- analytics events are not duplicated;
- factual claims remain traceable;
- the final report states evidence and limitations.
