# Backend Development Roadmap & Checklist: Phase 1 (MVP)
**Project Name:** Maniarverse  
**Module:** Backend API (`services/api/`)  
**Phase:** Phase 1 - Minimum Viable Product (MVP)  
**Status:** In Progress / Active  
**Last Updated:** 2026-10-24  

---

## 1. Tech Stack & Architecture Principles
- **Framework:** FastAPI (Python)
- **Database:** PostgreSQL with SQLAlchemy ORM
- **Migrations:** Alembic
- **Authentication:** JWT (JSON Web Tokens) with secure password hashing (`passlib`/`bcrypt`)
- **Core Principle:** **No Overengineering** — Keeping the architecture clean, lightweight, and avoiding unnecessary microservices, complex queuing systems, or heavy AI behavioral predictions in Phase 1.

---

## 2. Phase 1 Core Endpoints & Modules

### 2.1. Parent Authentication & Account (`/api/v1/auth`)
- [x] Parent registration model and schema (`app/models/parent.py`, `app/schemas/parent.py`)
- [ ] Sign up endpoint (`POST /api/v1/auth/register`)
- [ ] Login / Token generation endpoint (`POST /api/v1/auth/login`)
- [ ] Security dependencies & JWT token validation (`app/core/security.py`, `app/core/dependencies.py`)

### 2.2. Child Profile Management (`/api/v1/children`)
- [x] Child database model (`app/models/child.py`) and schema (`app/schemas/child.py`)
- [x] Alembic migration scripts for children and parents tables
- [ ] Create child profile endpoint (`POST /api/v1/children`) — linked to parent ID
- [ ] List child profiles endpoint (`GET /api/v1/children`)

### 2.3. Parent Dashboard & Notifications (`/api/v1/parent`)
- [ ] Basic session status and control endpoints
- [ ] Essential session/safety notification trigger mechanism (`FR-P04`) to parent phone/dashboard

---

## 3. Data Safety & Privacy Compliance
- **Minimal Storage:** Following the *Child Data Policy*, avoid storing unnecessary Personally Identifiable Information (PII) for children.
- **File URI Storage:** If voice notes, avatars, or media are uploaded, store only the file path/URI in the database, never raw binary blobs in database rows.
- **Secure Configuration:** Environment variables managed via Pydantic BaseSettings (`app/config.py`).
