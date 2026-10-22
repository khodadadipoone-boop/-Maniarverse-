# Parent Mode Mobile Application Module

- **Module Owner:** Mobile & Interactive Development Team (Mr. Zarei, Janparvar, Kamyar)
- **Role:** Implementation of in-app parent controls, parental PIN/biometric gate, session management, real-time activity oversight, and secure authenticated API communication for parent services on mobile devices.
- **Associated Contract:** Maniarverse Mobile Application Development Contract (Milestone 1 disbursed - October 2026)
- **Status:** In Progress

## Technical Requirements & Constraints
- **Parental Gate & Security:** Strict PIN/biometric verification to prevent unauthorized child access or accidental mode exits.
- **Session Control & Screen Limits:** Real-time session monitoring, pause/resume mechanisms, and sensory break triggers.
- **Zero-PHI/PII Compliance:** No identifiable clinical notes, parent contact details, or diagnostic assessments cached in plain text locally or committed to Git.
- **API Integration:** Secure REST/Token authentication with `services/api` endpoints for child profile selection, settings sync, and session logs.

## Deliverables & Delivery Tracking

| Deliverable | Purpose | Assignee | Commit Hash | Date | Status |
|---|---|---|---|---|---|
| Parent Gate & PIN Auth Screen | Secure barrier between Child and Parent modes | Mobile Dev Team | - | - | Planned |
| Child Profile & Session Switcher | Management of active child profile and session caps | Mobile Dev Team | - | - | Planned |
| Parent Dashboard & Settings Client | In-app parent interface connected to FastAPI backend | Mobile Dev Team | - | - | Planned |
