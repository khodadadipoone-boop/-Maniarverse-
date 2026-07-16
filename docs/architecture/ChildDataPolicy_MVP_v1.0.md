MANIARVERSE MVP
Child Data Access, Retention and Deletion Policy
Version: 1.0
Related Data Model: ERDiagram_MVP_v1.0
________________________________________
1. Purpose
This document defines how child-related data is accessed, stored, retained, and deleted in the Maniarverse MVP.
The logical structure of the data is defined in ERDiagram_MVP_v1.0. This document defines the operational policy governing child-related data throughout the system.
________________________________________
2. Core Principles
The child data policy follows these principles:
Collect only the minimum child information required to provide the approved MVP experience. 
Keep child data private by default. 
Give parents control over their own children's information. 
Use child data only for the intended product functionality. 
Child data will not be used for advertising or AI training in the MVP.
Any future AI functionality will require a separate design, privacy review, and explicit parent consent before using eligible data.
Protect child data through backend authorization. 
Retain data only as long as necessary. 
Delete child data through a secure and controlled process. 
________________________________________
3. Child Data Collected
The MVP stores only the data required to deliver the approved experience.
Child Profile
Child ID 
Parent ID 
Child name 
Birth date 
Avatar reference (optional) 
First Meeting completion timestamp 
Profile creation date 
World Experience
Selected world 
Session start time 
Session end time 
Session status 
Memory Capsule
Child ID 
File reference 
File type 
Optional note 
Creation timestamp 
Parent Summary
Summary date 
Covered period 
Usage duration 
Number of memories 
Summary text 
________________________________________
4. Data Not Collected
The MVP does not collect:
GPS location 
Contact list 
Advertising identifiers 
Facial recognition 
Biometric information 
Medical information 
Voice analysis 
Behavioral AI analysis 
Social-media data 
________________________________________
5. Access Policy
Parent Access
An authenticated parent can access only:
Their own account 
Their own child profiles 
Their children's memories 
Their children's summaries 
Their children's world sessions 
________________________________________
Child Access
The child can access only:
Child experience 
World selection 
World experience 
Memory creation 
The child cannot access:
Parent account 
Parent settings 
Other child profiles 
Reports 
Administrative features 
________________________________________
Backend Access
Every request involving child data must verify ownership.
Example rule:
requested_child.parent_id == authenticated_parent.id
A valid Child ID alone is not sufficient.
________________________________________
Administrative Access
Administrative access is restricted to authorized personnel for operational and support purposes only.
Administrative actions should be logged.
________________________________________
6. Storage Policy
Structured information is stored in PostgreSQL.
Media files are stored in Object Storage.
Examples:
Photos 
Videos 
Avatars 
The database stores only file references.
Media files remain private by default.
________________________________________
7. Retention Policy
Data Type	Retention
Child Profile	While active
World Sessions	While child profile exists
Memory Metadata	While memory exists
Photos & Videos	While memory exists
Parent Summary	While child profile exists
Email Verification Token	Until used or expired
Password Reset Token	Until used or expired
Temporary Upload Files	Automatically removed
Security Logs	Limited operational retention
Backups	According to backup policy
________________________________________
8. Parent Rights
Parents may:
View child profile 
Edit child profile 
View memories 
Delete individual memories 
Request child profile deletion 
Request deletion of all child-related data 
Delete their own account 
________________________________________
9. Child Profile Deletion
When a parent deletes a child profile:
Authenticate the parent. 
Verify ownership. 
Confirm deletion. 
Delete child profile. 
Delete all world sessions. 
Delete all memories. 
Delete all parent summaries. 
Delete related media files from Object Storage. 
Record completion of the deletion process. 
________________________________________
10. Memory Deletion
When a Memory Capsule is deleted:
Verify ownership. 
Delete the media file from Object Storage. 
Delete the related database record. 
Update summary information if required. 
________________________________________
11. Parent Account Deletion
Deleting a parent account also removes all linked child data.
The process includes:
Child profiles 
Memories 
World sessions 
Parent summaries 
Stored media 
Deletion requires explicit confirmation.
________________________________________
12. Backup Policy
Database backups are outside the scope of the current MVP implementation.

Backup and recovery policies will be defined before the production release based on the selected deployment environment.________________________________________
13. Security Controls
The MVP uses:
HTTPS 
Password hashing 
Backend authorization 
Private Object Storage 
Environment variables for secrets 
Database backups 
Audit logging 
File validation 
________________________________________
14. Related Documents
ERDiagram_MVP_v1.1 
DataModel_MVP_v1.0 
HighLevelArchitecture_MVP_v1.0 
UserFlow_Parent_MVP_v1.0 
UserFlow_Child_MVP_v1.0 
DecisionLog_v1.0 

