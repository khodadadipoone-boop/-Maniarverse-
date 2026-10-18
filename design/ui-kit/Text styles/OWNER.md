# Text Styles & Typography Ownership

## Scope & Purpose
This directory contains the official typography scale, font hierarchies, and text style tokens (Headings, Body scales, Descriptions) for the Maniarverse design system.

---

## Deliverables & Version History

| ID | Deliverable / Specification | Reference / Spec | Version | Designed / Created By | Role | Delivery Date | Commit Hash | Status |
| :--- | :--- | :--- | :---: | :--- | :--- | :---: | :---: | :--- |
| 1 | Typography Scale & Hierarchy | Inline Guidelines | v1.0 | Hadis Alidokht | Product Designer | 2026-10-05 | `2e856c8` | Approved |

---

## Typography Hierarchy Details
- **Headings:** Heading 1 (38px), Heading 2 (30px), Heading 3 (20px)
- **Body & Text Scales:** XL (24px), LG (16px), Base (14px), SM (12px), Description (9px)
- **Weights:** Normal, Strong, Bold, Heavy

---

## Handover & Maintenance Rules
1. **Source of Truth:** Font sizes, line heights, and weights defined here map directly to Tailwind typography and global CSS tokens in `apps/parent-web/app/globals.css`.
2. **Immutability:** Do not modify existing typography specs in-place. Publish `v2.0` files for future typography overhauls.
3. **Tracking:** Record any subsequent designers who add or alter type scales in this document.
