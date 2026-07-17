---
name: visual-audit
description: Open the Uni Lions site and perform a breakpoint-by-breakpoint audit of hierarchy, palette, typography, imagery, spacing, motion, and visual consistency.
---

# Visual Audit

## Inputs

- Running local URL
- Target route
- Reference assets
- Approved design tokens

## Workflow

1. Capture full-page screenshots at required viewports.
2. Identify:
   - hierarchy conflicts;
   - inconsistent containers;
   - typography drift;
   - raw color values;
   - image-crop failures;
   - contrast problems;
   - excessive card usage;
   - CTA inconsistency;
   - overflow;
   - motion issues.
3. Compare against `knowledge/brand/visual-language.md`.
4. Rank findings by impact.
5. Recommend token or component fixes before isolated CSS patches.
6. Re-capture after changes.

## Output

A table with severity, viewport, component, evidence, root cause, recommended fix, and retest status.
