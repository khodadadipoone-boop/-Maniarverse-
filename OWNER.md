# Maniarverse — Master Repository Governance & Deliverables Registry

This document serves as the master registry for directory ownership, governance policies, and authoritative deliverable traceability across the Maniarverse repository.

---

## 1. Directory Governance & Functional Ownership

| Directory Path | Functional Role / Owner | Scope & Nature | Module Status | Commit Hash |
| :--- | :--- | :--- | :---: | :---: |
| `services/api` | Backend Engineering Team | FastAPI services core, JWT authentication, and PostgreSQL ORM models | **Active** | `149de60` |
| `apps/parent-web` | Frontend Engineering Team | Parent monitoring web dashboard & design system implementation (Next.js) | **Active** | `149de60` |
| `apps/child-app` | Child Experience & Interactive Team | Child sensory interactive application & Calm World client modules | **Active** | `149de60` |
| `design` | Product Design & UI/UX Team | Information architecture, design tokens, UI components, and user journeys | **Active** | `9db1fd3` |
| `research` | Clinical Research & Advisory Board | Benchmark studies, clinical methodology, and psychological world guidelines | **Active** | `cfc1f4f` |
| `docs` | Architecture & Product Management | System architecture, sequence diagrams, ERD, ADRs, and MVP scope roadmaps | **Active** | `43a8d3e` |

---

## 2. Product Design Deliverables

| Deliverable / Artifact Name | Repository Path | Version | Status | Original Contributor | Commit Hash |
| :--- | :--- | :---: | :---: | :---: | :---: |
| `UserFlow_v1.pdf` (`Section 1.pdf`) | `design/user-flow/` | v1.0 | **Deprecated** | Hadis Alidokht | `67fff48` |
| `UserFlow_v2.pdf` (`V2.pdf`) | `design/user-flow/` | v2.0 | **Active** | Hadis Alidokht | `67fff48` |
| `Sitemap_Maniarverse.pdf` (`png2pdf.pdf`) | `design/user-flow/` | v1.0 | **Active** | Hadis Alidokht | `67fff48` |
| `Wireframes_Parent_v1.0.pdf` (`Frame 49344.pdf`) | `design/wireframes/` | v1.0 | **Active** | Hadis Alidokht | `9db1fd3` |
| UI Component Specifications (9 PDFs) | `design/ui-kit/component/` | v1.0 | **Active** | Hadis Alidokht | `9db1fd3` |
| Color Palettes & Semantic Tokens (7 PDFs) | `design/ui-kit/color styles/` | v1.0 | **Active** | Hadis Alidokht | `9db1fd3` |
| Typography Scales & Hierarchy Guidelines | `design/ui-kit/Text styles/` | v1.0 | **Active** | Hadis Alidokht | `2e856c8` |

---

## 3. Clinical Research & Advisory Deliverables

> **Data Privacy Policy:** No Protected Health Information (PHI) or Personally Identifiable Information (PII) is stored in this repository. All clinical files contain purely foundational methodologies and sensory evaluations. Legal and financial records (contracts, appendices, receipts) are stored exclusively in secure off-git cloud storage.

| Deliverable / Artifact Name | Repository Path | Version | Status | Scientific Contributor | Commit Hash |
| :--- | :--- | :---: | :---: | :---: | :---: |
| `Maniarverse_Benchmark.xlsx - Benchmark.pdf` | `research/` | v1.0 | **Active** | Research Team | `9db1fd3` |
| `basic questions.docx` | `research/` | v1.0 | **Active** | Dr. Akhgari | `cfc1f4f` |
| Clinical Analysis & Methodology Docs (3 docx files) | `research/` | v1.0 | **Active** | Dr. Akhgari | `cfc1f4f` |
| Clinical Analysis Voice Recordings (16 ogg files) | `research/voice-notes/` | v1.0 | **Active** | Dr. Akhgari | `cfc1f4f` |
| `CalmWorld_Psychological_Evaluation_v1.docx` | `research/` | v1.0 | **Active** | Dr. Akhgari | `cfc1f4f` |
| `World_Design_Guidelines_DrAkhgari_v1.docx` | `research/` | v1.0 | **Active** | Dr. Akhgari | `2e856c8` |

---

## 4. Governance & Repository Audit Policy

1. **Role-Based Ownership:** Responsibilities are assigned to functional roles rather than single individuals. Personnel turnover does not alter module ownership; incoming contributors are appended to revision logs and git histories.
2. **Strict Non-Deletion Policy (Immutability):** Deliverables cannot be physically deleted from git history. Deprecated artifacts remain preserved and are explicitly marked as `Deprecated` in registry tables.
3. **No-Space Naming Convention:** New artifacts must adhere to space-less conventions (kebab-case or PascalCase) accompanied by semantic version suffixes (e.g., `_v2.0`). Existing historical files retain their original paths to preserve commit continuity.
4. **Commit Traceability:** Every milestone delivery and architectural update must be mapped to an exact Git commit hash in this registry to maintain an unambiguous audit trail.
5. **Separation of Legal & Financial Records:** Contracts, appendices, invoices, and banking/payment receipts are strictly excluded from the Git tree via `.gitignore` and archived in encrypted external cloud drives with formal ledger tracking.
