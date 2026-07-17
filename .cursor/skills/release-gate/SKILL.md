---
name: release-gate
description: Run the final brand, factual, browser, accessibility, performance, SEO, analytics, and engineering gates before publishing the Uni Lions landing page.
---

# Release Gate

## Required checks

1. Facts and legal
2. Brand and copy
3. Build and tests
4. Browser journeys
5. Responsive screenshots
6. Keyboard and focus
7. Accessibility scan plus manual checks
8. Console and network
9. Core Web Vitals risk review
10. Metadata and social preview
11. Analytics event validation
12. Links and application route
13. Rollback readiness

## Result

Return one status:

- `GO`
- `GO WITH ACCEPTED RISKS`
- `NO-GO`

Every accepted risk requires an owner and follow-up date. A blocker cannot be waived silently.
