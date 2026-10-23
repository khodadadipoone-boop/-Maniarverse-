# Maniarverse Decision Log

## Index of Decisions

| ID | Title | Status | Date |
|---|---|---|---|
| **DL-001** | Core Technology Stack (Unreal Engine, FastAPI, Flutter) | Proposed | 2026-10-21 |
| **DL-002** | Requirement for Dynamic Child Personalization | Proposed | 2026-10-21 |
| **DL-003** | Zero PHI/PII in Source Control & Storage Boundary | Accepted | 2026-10-21 |
| **DL-004** | MVP Phase 1 Scope Limitation (Starter World, Memory Capsule & Parent Mode) | Proposed | 2026-10-21 |

---

## DL-001: Core Technology Stack

- **Status:** Proposed
- **Date:** 2026-10-21

### Context
Maniarverse requires a dedicated interactive experience for children, an accessible cross-platform mobile/desktop application for parents, and robust backend services to handle logic and data synchronization.

### Decision
- **Child mode (`apps/mobile/child-mode`):** Use **Unreal Engine** to build interactive 3D worlds and host the 3D character **Maniar**.
- **Backend (`services/api`):** Use **FastAPI (Python)** with PostgreSQL to provide core application logic, APIs, and data storage.
- **Parent mode (`apps/mobile/parent-mode`):** Use **Flutter** to build the cross-platform application for parents (profile management, session information, and basic settings).

### Consequences
- Clarifies distinct client runtimes: Unreal Engine for high-fidelity 3D child interaction, and Flutter for responsive, cross-platform parental management.
- Backend APIs in FastAPI will serve both Unreal Engine and Flutter clients.

---

## DL-002: Requirement for Dynamic Child Personalization

- **Status:** Proposed
- **Date:** 2026-10-21

### Context
Psychology advisory mandates that children exhibit distinct sensory sensitivities, cognitive paces, and trigger thresholds. A generic, static experience can induce sensory overload or disengagement.

### Decision
- **Sensory Profiling in Schema:** The backend (`services/api`) data model must support configurable sensory baselines per child (e.g., sound volume limits, color palette temperature, pacing, visual complexity).
- **Dynamic Client Configuration:** The Unreal Engine client (`apps/child-mode`) must fetch and consume these parameters dynamically to configure worlds and character behaviors for the active child session.
- **Parental Controls:** The Flutter application (`apps/parent-mode`) will expose customization controls informed by assessments and recommendations.

### Consequences
- Decouples 3D asset parameters from fixed hardcoded values in Unreal Engine to allow runtime data-driven configuration.
- Adds dedicated fields/tables in PostgreSQL to store individual sensory and behavioral constraints safely per child profile.

---

## DL-003: Zero PHI/PII in Source Control & Storage Boundary

- **Status:** Accepted
- **Date:** 2026-10-21

### Context
Maniarverse handles sensitive psychological evaluations, parent voice notes, child interaction metrics, and personal media. Committing Protected Health Information (PHI) or Personally Identifiable Information (PII) to source control violates healthcare compliance and child safety policies.

### Decision
- **Git Exclusion:** Enforce strict `.gitignore` rules across all directories containing research voice notes, responses, child media, and raw consultation files.
- **Storage Isolation:** User-generated media and session telemetry will be stored in isolated object storage (S3/MinIO compatible) with signed short-lived URLs, never inside the repository.
- **Anonymization in Backend Logs:** Backend logs (`services/api`) must mask all identifying child/parent metadata.

### Consequences
- Mock datasets and synthetic fixtures must be used for local development and unit tests.
- Team members must strictly avoid committing client-provided research recordings or intake sheets.

---

## DL-004: MVP Phase 1 Scope Limitation — Starter World, Memory Capsule & Parent Mode

- **Status:** Proposed
- **Date:** 2026-10-21

### Context
To ensure rapid delivery, high stability, and focused evaluation during the initial release (MVP Phase 1), the product scope must be strictly bounded to foundational features rather than a multi-world sprawling architecture.

### Decision
- **Phase 1 Child Mode (`apps/child-mode`):** Development in Unreal Engine is strictly limited to a single starter/simple world environment, the first meeting/introduction with the character **Maniar**, and the **Memory Capsule (کپسول مموری)** feature for displaying family memories.
- **Phase 1 Parent Mode (`apps/parent-mode`):** The Flutter application will focus on core parental onboarding, child profile creation, questionnaires, sensory profile baseline settings, and managing memory uploads for the child.
- **Deferral:** Advanced multi-world exploration, and complex branching narratives are deferred to post-MVP phases.

### Consequences
- Concentrates Unreal Engine efforts on perfecting tactile interaction in the simple world and core character animations of Maniar.
- Keeps backend (`services/api`) models lean, focusing strictly on Authentication, Child Profiles, Sensory Settings, and Memory Gallery storage.
