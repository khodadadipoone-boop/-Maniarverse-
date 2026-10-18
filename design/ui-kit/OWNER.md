# UI Kit Ownership & Design System Overview

## Scope & Purpose
This directory serves as the root for the Maniarverse UI Kit and Design System, containing foundational design tokens (colors, typography) and reusable UI component specs.

---

## Directory Structure & Sub-module Ownership

| Sub-directory | Scope & Content | Sub-module OWNER | Primary Deliverables | Commit Hash | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `color styles/` | Color Palettes (Primary, Secondary, Semantic Tokens) | [color styles/OWNER.md](./color%20styles/OWNER.md) | 7 Color Palette Specs (v1.0) | `9db1fd3` | Approved |
| `component/` | UI Components (Buttons, Inputs, Modals, Badges, etc.) | [component/OWNER.md](./component/OWNER.md) | 9 UI Component Specs (v1.0) | `9db1fd3` | Approved |
| `Text styles/` | Typography Scale (Headings, Body, Sizes & Weights) | [Text%20styles/OWNER.md](./Text%20styles/OWNER.md) | Typography Scale Spec (v1.0) | `2e856c8` | Approved |

---

## Master Deliverables & Version Log

| ID | Module | Deliverable Description | Version | Designed / Created By | Role | Delivery Date | Commit Hash | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | UI Kit (v1.0 Complete) | Full MVP Design System (Colors, Typography, UI Components) | v1.0 | Hadis Alidokht | Product Designer | 2026-10-05 | `2e856c8` | Approved |

---

## Handover & Maintenance Rules
1. **Single Source of Truth:** All UI styling in web/mobile applications (`apps/parent-web`, `apps/child-app`) must directly reference the tokens defined in this UI Kit.
2. **Sub-folder Delegation:** Detailed versioning and file listings are maintained within the `OWNER.md` of each respective subfolder.
3. **Immutability & Deprecation:** Prior versions (v1.0) must never be deleted. Any design system updates should be added as new version files and logged across these files.
