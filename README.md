# Maniarverse

A unified repository for all product components, organized by domain responsibility.

## Directory Structure

| Path | Responsibility |
|---|---|
| `services/api` | FastAPI backend service and database management |
| `apps/web` | Web application: public landing & parental portal (Next.js with Route Groups) |
| `apps/mobile/parent-mode` | Parent mobile application (React Native / Flutter dashboard) |
| `apps/mobile/child-mode` | Child interactive application (Unreal Engine core engine) |
| `design` | UI/UX design assets, design system, character assets, and branding |
| `docs/decisions` | Architectural Decision Records (Decision Log) |
| `docs/planning` | Project scope, pilot readiness, and acceptance criteria |
| `docs/architecture` | System architecture and data protection policies |
| `docs/governance` | Repository rules, principles, and governance standards |

Every directory contains a dedicated `OWNER.md` file specifying the designated owner, deliverables, rules, and current status.

## Repository Governance & Rules

- **Zero Clinical & Sensitive Data Policy:** No sensitive child data (PHI/PII), clinical interviews, voice recordings, questionnaires, legal contracts, or financial receipts are permitted in the Git repository.
- **Traceability:** Every formal delivery must be referenced with a verified Git commit hash in the respective directory's `OWNER.md`.
- **Architectural Traceability:** Any architectural change or stack modification must be documented in `docs/decisions/Decision_Log.md`.

## Getting Started

### API Backend (FastAPI)
```bash
cd services/api
pip install -r requirements.txt
alembic upgrade head
uvicorn app.main:app --reload
