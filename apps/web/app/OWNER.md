# Maniarverse Web App Routing Root (`apps/web/app/`)

## 1. Ownership & Architecture Governance
- **Scope:** Root application folder for Next.js routing, managing top-level layouts, global CSS styling (`globals.css`), and Route Group isolation.
- **Assigned Team:** Web Frontend Development Team (Mahsa & Ali Ensafi) under contract **Maniarverse_MVP_Contract_v3.10**.
- **Product & UX/UI Oversight:** Hadis Alidokht (Product Designer).
- **Psychological Oversight:** Dr. Akhgari (Psychological Consultant) — ensuring all shared layouts and global UI elements respect strength-based, non-stigmatizing principles.
- **Architecture Principle:** Strict separation of concerns via Next.js Route Groups:
  - `(landing)/` — Public introduction and overview.
  - `(parental-portal)/` — Secure authentication, dashboards, and parent services.

## 2. Core Root Files
- `apps/web/app/layout.tsx` — Root layout wrapper (fonts, global providers).
- `apps/web/app/globals.css` — Global design system styles and Tailwind directives.

## 3. Deliverables & Delivery Tracking

| Deliverable | Purpose | Assignee | Commit Hash | Date | Status |
|---|---|---|---|---|---|
| Root Routing Architecture (`apps/web/app/`) | Establish Next.js App Router base structure and global layouts | Web Dev Team | - | 2026-10-22 | Completed |
| Route Group Segregation | Organize public landing vs. parental portal via `(landing)` and `(parental-portal)` | Web Dev Team | - | 2026-10-22 | Completed |
| Global Styles & Configuration | Initialize Tailwind setup and base global CSS rules | Web Dev Team | - | 2026-10-22 | Completed |
