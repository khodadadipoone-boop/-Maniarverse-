# Maniarverse — Master Repository Governance & Deliverables Registry

This document serves as the master registry for directory ownership, governance policies, and authoritative deliverable traceability across the Maniarverse repository.

---

## 1. Directory Governance & Functional Ownership

| Directory Path | Functional Role / Owner | Scope & Nature | Module Status | Commit Hash |
| :--- | :--- | :--- | :---: | :---: |
| `services/api` | Backend Engineering Team | FastAPI services core, JWT authentication, and PostgreSQL ORM models | **Active** | `149de60` |
| `apps/web` | Frontend Engineering Team | Public landing & parental portal web dashboard (Next.js) | **Active** | `149de60` |
| `apps/mobile` (`child-mode`, `parent-mode`) | Child Experience & Mobile Teams | Child interactive experience (Unreal Engine) & parent mobile app (Flutter) | **Active** | `149de60` |
| `design` | Product Design & UI/UX Team | Information architecture, design tokens, UI components, and user journeys | **Active** | `9db1fd3` |
| `docs` | Architecture & Product Management | System architecture, sequence diagrams, ERD, ADRs, and MVP scope roadmaps | **Active** | `43a8d3e` |

---

## 2. Product Design Deliverables

| Deliverable / Artifact Name | Repository Path | Version | Status | Original Contributor | Commit Hash |
| :--- | :--- | :---: | :---: | :---: | :---: |
| `UserFlow_v1.pdf` (`Section 1.pdf`) | `design/user-flow/` | v1.0 | **Deprecated** | Hadis Alidokht | `67fff48` |
| `UserFlow_v2.pdf` (`V2.pdf`) | `design/user-flow/` | v2.0 | **Active** | Hadis Alidokht | `67fff48` |
| `Sitemap_Maniarverse_v1.0.pdf` (`png2pdf.pdf`) | `design/user-flow/` | v1.0 | **Deprecated** | Hadis Alidokht | `67fff48` |
| `Sitemap_Maniarverse_v2.0.pdf` | `design/user-flow/` | v2.0 | **Active** | Hadis Alidokht | `67fff48` |
| `Wireframes_Parent_v1.0.pdf` (`Frame 49344.pdf`) | `design/wireframes/` | v1.0 | **Active** | Hadis Alidokht | `9db1fd3` |
| UI Component Specifications (9 PDFs) | `design/ui-kit/component/` | v1.0 | **Active** | Hadis Alidokht | `9db1fd3` |
| Color Palettes & Semantic Tokens (7 PDFs) | `design/ui-kit/color styles/` | v1.0 | **Active** | Hadis Alidokht | `9db1fd3` |
| Typography Scales & Hierarchy Guidelines | `design/ui-kit/Text styles/` | v1.0 | **Active** | Hadis Alidokht | `2e856c8` |

---

## 3.Research & Advisory Deliverables

> **Data Privacy Policy:** No Protected Health Information (PHI) or Personally Identifiable Information (PII) is stored in this repository. All files contain purely foundational methodologies and sensory evaluations. Legal and financial records (contracts, appendices, receipts) are stored exclusively in secure off-git cloud storage.

| Deliverable / Artifact Name | Repository Path | Version | Status | Scientific Contributor | Commit Hash |
| :--- | :--- | :---: | :---: | :---: | :---: |
---

## 4. Governance & Repository Audit Policy

1. **Role-Based Ownership:** Responsibilities are assigned to functional roles rather than single individuals. Personnel turnover does not alter module ownership; incoming contributors are appended to revision logs and git histories.
2. **Strict Non-Deletion Policy (Immutability):** Deliverables cannot be physically deleted from git history. Deprecated artifacts remain preserved and are explicitly marked as `Deprecated` in registry tables.
3. **No-Space Naming Convention:** New artifacts must adhere to space-less conventions (kebab-case or PascalCase) accompanied by semantic version suffixes (e.g., `_v2.0`). Existing historical files retain their original paths to preserve commit continuity.
4. **Commit Traceability:** Every milestone delivery and architectural update must be mapped to an exact Git commit hash in this registry to maintain an unambiguous audit trail.
5. **Separation of Legal & Financial Records:** Contracts, appendices, invoices, and banking/payment receipts are strictly excluded from the Git tree via `.gitignore` and archived in encrypted external cloud drives with formal ledger tracking.
