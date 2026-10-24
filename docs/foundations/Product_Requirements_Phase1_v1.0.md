# Product Requirements Document: Phase 1 (MVP)
**Project Name:** Maniarverse  
**Phase:** Phase 1 - Minimum Viable Product (MVP)  
**Status:** Proposed / Draft  
**Last Updated:** 2026-10-24  

---

## 1. Executive Summary & Guiding Principles

### 1.1 Core Mission
Deliver a safe, calm, non-verbal, and low-pressure digital companion experience for the child, paired with a transparent, session-focused parent dashboard.

### 1.2 Core Engineering Principle: No Overengineering
The development and technical architecture for Phase 1 (MVP) strictly avoid unnecessary complexity:
- **Lean Implementation:** Build the simplest, lightest, and most reliable solution. Avoid overly complex architectural patterns, distributed microservices, or multiple redundant databases.
- **Scope Discipline:** Strictly implement only what satisfies the core MVP requirements cleanly and robustly. Do not introduce speculative features, heavy behavioral-prediction AI, or over-engineered abstractions.
- **Primary Goals:**
  - Accelerate time-to-delivery for the MVP.
  - Minimize software defects, regression risks, and maintenance overhead.
  - Maintain absolute focus on delivering a safe, calm, and predictable experience for the child.

### 1.3 Zero Pressure Principle
- The child is never subjected to time pressure, negative scores, failure states ("Game Over"), or forced interactions.
- Interaction with the environment and with Maniar is entirely optional, calm, and driven at the child's own pace.

---

## 2. Scope & Boundaries (Phase 1)
### In-Scope:
1. **Child Mode (Calm World):**
   - Visually distinct, serene worlds.
   - Touch-only, non-verbal, intuitive interaction.
   - Non-intrusive companion ("Maniar") acting solely as a calm, patient presence.
2. **Parent Mode / Dashboard:**
   - Secure parent authentication (Login/Register via FastAPI backend).
   - Child profile management (creation/selection).
   - Strict session-focused controls (session duration, basic app settings).
3. **Backend & Architecture:**
   - Unified FastAPI backend (`services/api`).
   - PostgreSQL database with minimal structural storage (storing safe URIs/paths for media, zero PII/PHI).

### Out-of-Scope (Excluded from Phase 1):
- Biometric tracking or emotion recognition sensors.
- Clinical progress metrics, growth charts, or diagnostic reporting.
- Real-time chat or external social features.

---

## 3. Functional Requirements

### 3.1. Child Mode Requirements
- **FR-C01 (Calm Environment):** The UI must use low-contrast, calming color palettes (from design guidelines) to prevent sensory overload.
- **FR-C02 (Touch-Only Interaction):** All interactions within the child mode must respond strictly to basic touch/tap inputs without time limits, scores, or failing states.
- **FR-C03 (Companion Presence):** Maniar appears as a supportive, non-intrusive visual companion that does not demand verbal responses or actions.

### 3.2. Parent Mode Requirements
- **FR-P01 (Authentication):** Parents can securely register and log in using email/password tokens.
- **FR-P02 (Profile Management):** Parents can create and switch between child profiles.
- **FR-P03 (Session Controls):** Parents can configure basic session timers and environment preferences.
- **FR-P04 (Parent Notifications):** The system must send essential session updates, safety alerts, or reminder notifications to the parent's mobile device (or parent portal interface) without compromising user privacy or overloading the parent.

---

## 4. Non-Functional Requirements
- **NFR-01 (Data Safety & Privacy):** Zero storage of clinical diagnostics, PHI, or sensitive biometric logs in the database.
- **NFR-02 (Performance):** Smooth rendering across target mobile devices (Flutter-based parent mode / target child runtime) with minimal latency.
- **NFR-03 (Accessibility):** Simplified UI designed for calm, predictable navigation.

---

## 5. Acceptance Criteria
- [ ] Child mode runs completely offline-ready or securely streamed without inducing performance stutter.
- [ ] Parent dashboard successfully connects to FastAPI backend endpoints for profile and session management.
- [ ] No restricted clinical terms or biometric tracking references exist anywhere in the MVP code or documentation.
