# Decision Log

---

## DL-001 — MVP Authentication Method

Decision:
Use Email + Password authentication with email verification for parent accounts.

Reason:
The approved MVP scope includes parent registration, email verification, and login as core features.

Impact:
Authentication module will support secure account creation before child access.

Status:
Approved

---

## DL-002 — Parent–Child Relationship

Decision:
Allow one Parent account to manage multiple Child profiles.

Reason:
The approved ER Diagram and MVP workflow define Parent as the owner of child profiles.

Impact:
The CHILD table references PARENT through parent_id.

Status:
Approved

---

## DL-003 — Memory Storage Strategy

Decision:
Store uploaded files in object storage and save only the file reference (URL/path) in the database.

Reason:
Keeps the database lightweight and aligns with the engineering principles for media handling.

Impact:
The MEMORY table stores file references instead of binary data.

Status:
Approved

---

## DL-004 — AI Module Scope

Decision:
Exclude AI features from the MVP and design the architecture to allow AI as a future independent module.

Reason:
The MVP Scope defines AI Behavior Analysis as a later phase while requiring future extensibility.

Impact:
No AI implementation in MVP. Architecture remains modular for future integration.

Status:
Approved

---

## DL-005 — First Meeting Completion State

Decision:
Add `first_meeting_completed_at` as a nullable datetime field to CHILD.

Reason:
The approved product documents define First Meeting as a one-time first-entry experience. The system needs a persistent way to determine whether each child has completed it.

Impact:
Minor database migration only. No change to the approved MVP scope.

Status:
Pending client approval