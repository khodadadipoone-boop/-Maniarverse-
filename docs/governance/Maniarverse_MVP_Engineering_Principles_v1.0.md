Maniarverse is not just a children’s app; its goal is to build a safe, calm, and non-verbal experience where the child does not feel pressured, judged, rushed, or controlled.

The core principle of the project is:

We do not design for attention capture; we design to create a sense of safety, trust, and presence.

In the MVP, Maniar must not judge, evaluate, give intrusive guidance, take the place of the parent, or force interaction upon the child. Maniar is solely a companion: calm, patient, kind, and non-intrusive.

For technical development, we have several important red lines:

MVP First

Anything that is not essential for the MVP is excluded for now.

Child First

Every decision must benefit the child’s experience, rather than merely serving technical convenience or visual aesthetics.

Parent Trust

Parents must feel a sense of security, transparency, and control from the very beginning.

No Overengineering

Future features such as Social Login, advanced AI, behavioral analysis, gamification, and extra utilities are out of scope for now.

Data Safety

Child data must be managed with minimalism, transparency, and security. Files are stored in Storage, and the database only stores the file path or URI.

No Lock-in

Code, database, documentation, migrations, repository, and services must be structured so that the project can easily be continued by another developer later.

Documentation

APIs, database setup and execution, environment variables (.env), and project structure must be thoroughly documented.

In backend and frontend design, please always check this question:

Does this decision make the child’s experience calmer, safer, more reliable, and simpler?

If the answer is no, it is likely unnecessary for the MVP.

To begin development, our executive references are:

MVP Scope and Acceptance Criteria
Character Bible
Calm World Bible
Coding Standards
Infrastructure Estimate
Contract
If you have doubts in any section, please ask before implementation so the decision can be recorded in the Decision Log.

