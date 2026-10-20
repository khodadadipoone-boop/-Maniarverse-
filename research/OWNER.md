# Module Ownership: Research

## Module Metadata
- **Module Name:** Research & Clinical Foundations
- **Path:** `research/`
- **Primary Owner:** Clinical Research & Advisory Board
- **Clinical Consultant:** Dr. Mohammadreza Akhgari
- **Research & Documentation Contributor:** Hadis Alidokht
- **Status:** Active / Iterative
- **Last Updated:** 2026-10-20

---

## Purpose
This directory contains the research, clinical foundations, screening materials, world-design guidance, and quality-assurance documentation that inform the design and development of Maniarverse.

Research materials are intended to support product, experience, and implementation decisions. They do not replace professional clinical assessment or advice.

---

## Directory Structure

| Path | Purpose |
|---|---|
| `clinical_foundations/` | Clinical foundations and supporting research materials. |
| `screening/` | Screening and developmental assessment materials, including supporting rationale. |
| `world-design/` | Sensory and psychological guidance for the design of Maniarverse worlds. |
| `game-content-qa/` | Quality-assurance materials for game content. |

---

## Deliverables Inventory

| Asset Name / Subfolder | Format | Author / Owner | Status | Verified Commit Hash | Description |
|---|---|---|---|---|---|
| `Competitor_Benchmark_Autism_Apps_v1.0.pdf` | PDF | Hadis Alidokht | Active (v1.0) | `9db1fd3` | Competitive analysis and benchmark report of autism-focused applications. |
| `Screening_Questionnaire_Initial_15Q_v1.0.docx` | DOCX | Clinical Research & Advisory Board | Active (v1.0) | `9db1fd3` | Initial 15-question screening questionnaire. |
| `screening/voice-notes/Questions_To_DrAkhgari_v1.0.docx` | DOCX | Clinical Research Team | Active (v1.0) | `fd494b0` | Questions prepared for consultation with Dr. Akhgari. |
| `clinical_foundations/voice-notes/` | Directory | Clinical Research Team | Active | `51b88b9` | Voice-note materials for clinical foundations. |
| `screening/voice-notes/` | Directory | Clinical Research Team | Active | `d9b0aa7` | Voice-note materials for screening research. |
| `world-design/` | Directory | Clinical Research & UX/3D Design Teams | Active (v1.0) | `2e856c8` | World-design guidelines and psychological evaluation materials. |
| `game-content-qa/` | Directory | Child Experience & Interactive Team | Active / Iterative | `abf5601`, `9db1fd3`, `205dd61`, `aef5507` | Game-content QA materials and related updates. |

---

## Ownership & Responsibilities

- **Clinical Research & Advisory Board**
  - Maintains clinical research materials and screening rationale.
  - Reviews clinical claims and sensitive content for accuracy and appropriate scope.
- **Dr. Mohammadreza Akhgari**
  - Provides clinical and psychological consultation within the agreed project scope.
- **Hadis Alidokht**
  - Contributes product-design and research documentation, including the competitor benchmark report.
- **Child Experience & Interactive Team**
  - Maintains game-content QA materials in coordination with relevant design and engineering owners.
- **Technical & Documentation Lead**
  - Maintains this `OWNER.md`, directory governance, and traceability records.

---

## Governance & Data Safety

- Every directory must contain its own `OWNER.md` describing its scope, ownership, and relevant deliverables.
- Use professional, versioned, space-free filenames. Version deliverables using semantic versioning (for example, `v1.0`, `v2.0`).
- Record a verified Git commit hash for each tracked deliverable. A hash listed here identifies the commit that last changed that deliverable; it does not necessarily identify the commit that last changed this `OWNER.md`.
- Do not delete project deliverables from the repository history. If an item is rejected or deprecated, retain it and clearly mark its status.
- Do not commit PHI, PII, or confidential clinical information. Store sensitive materials only in approved secure locations outside Git.
- Keep financial and legal records on secure external storage and exclude them from Git using `.gitignore`.
- Make changes in small, reviewable commits. Update this file and the relevant child-directory `OWNER.md` files when ownership or deliverables change.

---

## Change Log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-10-20 | Consolidated research directory ownership, inventory, governance, and verified commit references. |
