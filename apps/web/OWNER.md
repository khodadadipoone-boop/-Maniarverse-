# Maniarverse Web Application Domain (`apps/web/`)

## 1. Ownership & Governance
- **Scope:** Root directory for the Next.js web application, containing public landing pages (`(landing)`), the parental portal (`(parental-portal)`), shared UI components, design systems, and configuration files.
- **Assigned Team:** Web Frontend Development Team (Mahsa & Ali Ensafi) under contract **Maniarverse_MVP_Contract_v3.10**.
- **UX/UI & Product Direction:** Hadis Alidokht (Product Designer).
- **Clinical & Psychological Advisory:** Dr. Akhgari (Psychological Consultant) — ensuring all web interfaces maintain strength-based, warm, and non-stigmatizing experiences for families (strictly avoiding negative labels, scores, or rankings for children).
- **Compliance & Security Principles:**
  - **Zero Clinical PHI/PII:** No sensitive medical or clinical data shall be stored, logged, or exposed in frontend code or client-side bundles.
  - **Secure Token Management:** Authentication tokens must be managed securely via dedicated utilities (`lib/tokenStorage.ts`) and communicate exclusively with backend FastAPI services (`services/api`).

## 2. Directory Structure & Architecture
- `apps/web/app/` — Next.js App Router root containing Route Groups:
  - `(landing)/` — Public introduction, product vision, and overview.
  - `(parental-portal)/` — Secure parent authentication, dashboard, growth summaries, and memory capsules.
- `apps/web/components/` — Shared modular UI components (landing elements, forms, avatars, dashboard widgets, and modals).
- `apps/web/lib/` — Core helper modules (`tokenStorage.ts`, `childrenApi.ts`, `appConfig.ts`).
- `apps/web/public/` — Static brand assets and images.

## 3. Deliverables & Delivery Tracking

| Deliverable | Purpose | Assignee | Commit Hash | Date | Status |
|---|---|---|---|---|---|
| Web Application Initialization (`apps/web/`) | Setup Next.js environment, dependencies, and configuration | Web Dev Team | - | 2026-10-22 | Completed |
| Next.js Route Groups Migration | Organize public landing vs. parental portal cleanly using `(landing)` and `(parental-portal)` | Web Dev Team | - | 2026-10-22 | Completed |
| Parental Portal Components & Views | Deliver login, registration, dashboard shell, and child management UI | Web Dev Team | - | - | In Progress |
| Backend Secure Handshake Integration | Connect Next.js frontend with FastAPI backend endpoints (`services/api`) | Web Dev Team | - | - | Planned |
