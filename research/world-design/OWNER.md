# Module Ownership: World Design Guidelines & Sensory Principles

## Module Metadata
- **Module Name:** World Design Guidelines & Sensory Framework
- **Path:** `research/world-guidelines/`
- **Primary Subject Matter Expert:** Dr. Akhgari (Psychology & Behavioral Science Consultant)
- **Reviewer / Technical Stakeholders:** UX/3D Design Team (Hadis Alidokht), Game Engine / Frontend Team
- **Contract Reference:** Phase 1 Deliverables (Common Principles of World Design)
- **Status:** Approved / Active Baseline (v1.0)
- **Last Updated:** 2026-10-14

---

## Directory Scope & Purpose
This directory establishes the definitive sensory, environmental, and behavioral rules for all virtual worlds within Maniarverse. It serves as the primary bridge between clinical sensory ergonomics and 3D environment/asset design in Unreal Engine / Blender.

---

## Deliverables Inventory

| Asset Name | Format | Author / Contributor | Status | Last Updated | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `World_Design_Guidelines_DrAkhgari_v1.0.docx` | DOCX | Dr. Akhgari | **Active (v1.0)** | 2026-10-14 | Comprehensive 8-page matrix detailing sensory constraints across Architecture, Nature, Lighting, Physics/Motion, Audio, and Weather. |

---

## Core Sensory & Ergonomic Directives (Design & Engineering Guardrails)
1. **Predictability & Cognitive Load:**
   - Environments must maintain a clear focal hierarchy (limited primary interactive objects per scene).
   - Eliminate decorative motion that lacks interaction purpose.
2. **Lighting & Photometric Safety:**
   - Zero sudden flashes, strobe effects, or rapid illumination shifts.
   - Transitions between day/night or weather states must follow gradual, monotonic interpolation.
3. **Motion Dynamics:**
   - Initial movements must be slow, patterned, and rhythmic. Avoid erratic or fast bouncing mechanics.
4. **Audio Architecture:**
   - Multi-layered audio spikes are strictly prohibited.
   - The app must provide direct parental and child controls for background audio attenuation and complete sound-off modes.
5. **Weather & Atmosphere:**
   - Violent environmental effects (thunderstorms, rapid darkness, severe wind) are prohibited in MVP base worlds.

---

## Governance & Archival Notice
- **Design Alignment:** Any 3D world creation (Calm World, etc.) conducted by the Design team must reference and conform to the principles listed in this directory.
- **Privacy Standard:** Contains technical and psychological guidelines only. Zero PHI/PII present.
