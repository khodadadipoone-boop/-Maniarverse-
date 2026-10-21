# Maniarverse Decision Log

## DL-001: Core Technology Stack

- **Status:** Accepted
- **Date:** 2026-9-10

### Context
Maniarverse needs a child-facing interactive experience, a parent-facing application, and backend services to support their communication and data needs.

### Decision
- **Child mode (`apps/child-mode`):** Use **Unreal Engine** to create the interactive worlds and the character **Maniyar**.
- **Backend (`services/api`):** Use **FastAPI (Python)** to provide the application’s API and backend services.
- **Parent mode (`apps/parent-mode`):** Use **Next.js** for the parent-facing web application.

### Consequences
This separates the interactive child experience, parent-facing web application, and backend services into distinct parts of the project. It also establishes the technologies planned for each part.
