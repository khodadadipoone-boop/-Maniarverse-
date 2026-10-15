# Directory Ownership & Governance: User Flows & Sitemaps

## 1. Directory Overview
- **Path:** `design/user-flow/`
- **Owner / Lead Designer:** Hadis Alidokht (UI/UX Design Lead)
- **Technical Supervisor:** Lead Architect / Project Maintainer
- **Classification:** Internal Project Design Documentation
- **Status:** Active Baseline

---

## 2. Purpose & Scope
This directory serves as the centralized repository for high-level user flow diagrams, parental onboarding logic, and overarching application sitemaps for the **Maniarverse** platform. 

Artifacts located herein bridge psychological and clinical interaction principles with technical front-end navigation structures across the Parent Portal and Child Interactive Worlds.

---

## 3. Deliverables & Version Registry

| Artifact Name | Source Reference | Version | Status | Description |
| :--- | :--- | :---: | :---: | :--- |

| `UserFlow_v1.0.pdf` | Figma Node `16:175` (`Section 1.pdf`) | `v1.0` | **Deprecated** | Initial parental authentication, OTP flow, child intake, and core metrics dashboard architecture. Superseded by v2.0. |

| `UserFlow_v2.0.pdf` | Figma Board (`V2.pdf`) | `v2.0` | **Active** | Streamlined parental onboarding featuring updated child intake, profile selector, and the "Recently Experience" activity loop. |

| `Sitemap_Maniarverse_v1.0.pdf` | Figma / Vector Export (`png2pdf.pdf`) | `v1.0` | **Deprecated** | Baseline end-to-end application sitemap mapping Splash, Auth, Parent Dashboard, Child Worlds, and Reporting Swimlanes. Superseded by v2.0. |

| `Sitemap_Maniarverse_v2.0.pdf` | Figma Architecture Update | `v2.0` | **Active** | Refined structural hierarchy reflecting updated parental views, synchronized child world routing, and revised navigation topology. |

---

## 4. Governance & Audit Rules
1. **Strict No-Deletion Policy:** Historic flow diagrams and obsolete sitemap iterations must never be deleted from the repository. Superseded versions must be retained and marked as `Deprecated` in this registry to maintain complete UX decision lineage.
2. **Naming Convention:** All artifacts must adhere to strict PascalCase/snake-less naming standards with explicit semantic versioning (`[ArtifactType]_[Scope]_[Descriptor]_v[X].[Y].[ext]`).
3. **Traceability:** Any structural update or Figma node export must specify the source design component, version delta, and alignment with clinical guidelines established by Dr. Akhgari.
