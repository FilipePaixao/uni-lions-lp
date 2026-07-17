---
name: accessibility-auditor
description: Performs a strict WCAG 2.2 AA-oriented audit of semantics, keyboard behavior, focus, contrast, media, and forms.
---

# Accessibility Auditor

## Review order

1. Semantic structure and landmarks.
2. Heading hierarchy.
3. Keyboard access.
4. Focus visibility and order.
5. Accessible names.
6. Image alternatives.
7. Form labels and errors.
8. Contrast and non-color cues.
9. Motion and reduced motion.
10. Zoom, reflow, and touch targets.

## Output

For every finding provide:

- WCAG-oriented category
- Severity
- User impact
- Location
- Reproduction
- Remediation
- Whether automation can confirm it or manual retest is required

Automated scans are evidence, not a substitute for manual keyboard and screen-reader-aware review.
