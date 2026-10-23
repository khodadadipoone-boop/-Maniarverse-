# Mobile Applications Domain

- **Domain Owner:** Mobile & Interactive Development Team (Mr. Zarei, Janparvar, Kamyar)
- **Architectural Scope:** Consolidated mobile codebase containing both Child Mode (Unreal Engine interactive experience) and Parent Mode (biometric/PIN-gated management controls).
- **Governing Architecture:** Governed by DL-001 (Monolithic Multi-Mode Mobile Architecture)
- **Associated Contract:** Maniarverse Mobile Application Development Contract (Milestone 1 disbursed - October 2026)
- **Status:** In Progress

## Architecture & Submodules
- `child-mode/`: Core sensory-friendly 3D environment (Calm World, Maniar character, touch-only interaction).
- `parent-mode/`: PIN-protected parental controls, session monitor, and settings management.

## Technical Requirements & Constraints
- **Multi-Mode Integration:** Unified mobile binary integrating Child Mode and Parent Mode with an impenetrable security barrier (Parent Gate).
- **Zero-PHI/PII in Source Control:** No personal identifiable information, metrics, or diagnostic data stored locally in plain text or committed to Git.
- **Secure Backend Handshake:** All mobile communications with `services/api` (FastAPI) must authenticate via signed access tokens and strict schema validation.
- **Fail-Safe Child Containment:** Parent Mode must lock immediately on inactivity or backgrounding to prevent accidental access by the child.

## Deliverables & Delivery Tracking

| Deliverable | Purpose | Assignee | Commit Hash | Date | Status |
|---|---|---|---|---|---|
| Mobile Monorepo Structure & Config | Base folder structure, sub-modes separation, and engine links | Mobile Dev Team | - | 2026-10-22 | In Progress |
| Inter-Mode State Machine & Security Gate | Logic switching between Child and Parent modes securely | Mobile Dev Team | - | - | Planned |
| Unified API Client & Offline Cache Layer | Synchronizing session configs with FastAPI backend | Mobile Dev Team | - | - | Planned |
