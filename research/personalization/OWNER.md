# Module Ownership: Personalization Intake & Preference Assessment

## Module Metadata
- **Module Name:** Personalization Intake & Child Preference Assessment Framework
- **Path:** `research/personalization/`
- **Primary Subject Matter Expert:** Dr. Akhgari (Psychology & Behavioral Science Consultant)
- **Reviewer / Product Owner:** Product Management & Research Team
- **Contract Reference:** Phase 1 Deliverables (Personalization Architecture & Assessment Design)
- **Status:** Under Review / Active Draft (v1.0)
- **Last Updated:** 2026-8-31

---

## Directory Scope & Purpose
This directory defines the intake mechanisms, parent-reported behavioral contextual questionnaires, and child preference test structures used to adapt sensory load (visual complexity, motion dynamics, audio layering) for Maniarverse.

---

## Deliverables Inventory

| Asset Name | Format | Author / Contributor | Status | Last Updated | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Personalization_Intake_Assessment_Draft_v1.0.docx` | DOCX | Dr. Akhgari | **Active Draft (v1.0)** | 2026-10-14 | 14-page structured framework containing Parent-Reported Context items and Child In-App Preference A/B test specifications. |

---

## Key Clinical Principles & Implementation Directives
1. **Bifurcated Data Flow:**
   - **Parent-Reported Context:** Captures age (years/months), environmental triggers, and caregiver observations (treated as baseline context, not diagnostic profiles).
   - **Child Observed Preference:** Direct in-app interaction tests evaluating visual density, motion speed, and audio complexity.
2. **Single-Variable Variation Rule:**
   - When presenting comparison scenes to the child, alter only **one parameter at a time** (e.g., detail level or speed or audio) to reliably isolate preferences.
3. **Non-Diagnostic Constraint:**
   - Responses must not generate a static clinical "Sensory Profile" or medical labels. They only serve as dynamic configuration seeds for the digital experience.
4. **Adaptive Baseline:**
   - Stated preferences are preliminary and must be continuously calibrated against real-time child engagement and interaction metrics.

---

## Governance & Archival Notice
- **Audit Lineage:** Preserves the clinical formulation of personalization heuristics prior to engineering implementation in the backend rule engine.
- **Privacy Standard:** Framework definition only. No Protected Health Information (PHI) or Personally Identifiable Information (PII) is stored here.
