# Maniarverse Parental Portal Domain (`apps/web/app/(parental-portal)/`)

## 1. Ownership & Governance
- **Scope:** Parental web portal including authentication (login, registration, password recovery), child profile management, family settings, growth insights, and memory capsule viewing.
- **Assigned Team:** Web Frontend Development Team (Mahsa & Ali Ensafi) under contract **Maniarverse_MVP_Contract_v3.10**.
- **Psychological Advisory:** Dr. Akhgari (Psychological Consultant) — enforcing strength-based, non-stigmatizing language (strictly zero scores, rankings, or negative labels for children).
- **Product & UX/UI Oversight:** Hadis Alidokht (Product Designer).
- **Compliance & Security:**
  - **Zero PHI/PII:** Sensitive health and diagnostic data must never be exposed or logged in frontend code.
  - **Token & Session Security:** Secure token storage via `lib/tokenStorage.ts` with authenticated handshakes to `services/api`.

## 2. Directory Structure & Key Routes
- `(parental-portal)/login/` — Secure parent login.
- `(parental-portal)/register/` — New parent registration & onboarding flow.
- `(parental-portal)/dashboard/` — Main parental dashboard (growth overview, memory capsule, reports, and events).
- `(parental-portal)/forgot-password/` & `reset-password/` — Account recovery flows.

## 3. Deliverables & Delivery Tracking

| Deliverable | Purpose | Assignee | Commit Hash | Date | Status |
|---|---|---|---|---|---|
| Route Group Isolation (`(parental-portal)`) | Segregate parental flows cleanly via Next.js Route Groups | Web Dev Team | - | 2026-10-22 | In Progress |
| Authentication & Onboarding UI | Implement login, registration, email verification, and recovery | Web Dev Team | - | 2026-10-22 | In Progress |
| Dashboard & Child Profile Views | Deliver dashboard shell, child switcher, and growth overview | Web Dev Team | - | - | Planned |
| Backend Integration & Secure Handshake | Connect portal views with FastAPI endpoints (`services/api`) | Web Dev Team | - | - | Planned |
