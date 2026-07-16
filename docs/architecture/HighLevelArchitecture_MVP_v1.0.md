MANIARVERSE MVP
High-Level System Architecture
Version: 1.0
________________________________________
1. Purpose
This document describes the high-level architecture of the Maniarverse MVP. It defines the major software components and their responsibilities without describing implementation details.
The architecture is designed to be:
Secure 
Modular 
Maintainable 
Scalable 
Suitable for future expansion 
________________________________________
2. Frontend
Technology:
Next.js 
TypeScript 
Responsibilities:
Parent registration 
Parent authentication 
Child profile management 
First Meeting experience 
World selection 
World experience 
Memory creation 
Parent dashboard 
Parent summary 
The frontend communicates with the backend through REST APIs only.
It has no direct access to the database or storage.
________________________________________
3. Backend
Technology:
FastAPI 
Python 
Responsibilities:
Authentication 
Parent management 
Child profile management 
World experience management 
Memory management 
Parent summary generation 
Business logic 
Authorization 
Validation 
The backend is the only layer allowed to access the database and storage.
________________________________________
4. Database
Technology:
PostgreSQL 
Stores:
Parent accounts 
Child profiles 
World information 
World sessions 
Memory metadata 
Parent summaries 
Media files are not stored inside the database.
Only metadata and file references are stored.
________________________________________
5. Storage
Technology:
Object Storage
Stores:
Photos 
Videos 
Avatars 
Memory files 
Storage is private.
Files are accessed only through backend authorization.
________________________________________
6. Communication Flow
The system follows this flow:
Parent or Child interacts with the Next.js frontend. 
Frontend sends REST API requests to FastAPI. 
Backend validates authentication and permissions. 
Backend reads or writes data in PostgreSQL. 
Media files are stored or retrieved from Object Storage. 
Backend returns the response to the frontend. 
________________________________________
7. Security
The architecture follows these security principles:
Parent authentication is required. 
Parents can only access their own children. 
Child media remains private. 
Passwords are securely hashed. 
Authorization is enforced in the backend. 
________________________________________
8. MVP Scope
Included:
Parent management 
Child profiles 
First Meeting 
World experience 
Memory capsules 
Parent summaries 

Not Included:
AI 
Recommendations 
Notifications 
Payments 
Multiplayer 
________________________________________
9. Conclusion
This architecture provides a modular and secure foundation for the Maniarverse MVP while remaining simple enough for rapid development and future extension.

