MANIARVERSE MVP
Data Model
Version: 1.0
________________________________________
1. Purpose
This document describes the logical data model used in the Maniarverse MVP.
The complete entity relationships are defined in ERDiagram_MVP_v1.0.
This document explains the purpose and responsibility of each entity.
________________________________________
2. Data Model Overview
The Maniarverse MVP data model consists of six core entities:
Parent 
Child 
World 
World Session 
Memory 
Parent Summary 
Each entity has a specific responsibility within the system.
________________________________________
3. Parent
The Parent entity stores account information for authenticated parents.
Main responsibilities:
Authentication 
Account management 
Ownership of child profiles 
One parent can own multiple child profiles.
________________________________________
4. Child
The Child entity represents an individual child profile.
Stored information includes:
Name 
Birth date 
Avatar reference 
First Meeting completion timestamp 
Creation date 
Each child belongs to exactly one parent.
________________________________________
5. World
The World entity represents an available experience within the application.
Each world contains:
Name 
Type 
Description 
Status 
A world can be experienced by many children through World Sessions.
________________________________________
6. World Session
The World Session entity records a child's interaction with a selected world.
Stored information includes:
Child 
World 
Start time 
End time 
Session status 
Each session belongs to one child and one world.
________________________________________
7. Memory
The Memory entity stores metadata for Memory Capsules created after an experience.
Stored information includes:
Child reference 
File reference 
File type 
Optional note 
Creation timestamp 
Media files are stored in Object Storage.
Only the file reference is stored in the database.
________________________________________
8. Parent Summary
The Parent Summary entity stores summarized information for parents.
Typical information includes:
Summary period 
Usage duration 
Number of memories 
Summary text 
Each summary belongs to one child.
________________________________________
9. Entity Relationships
The relationships between entities are defined in ERDiagram_MVP_v1.0.
Main relationships include:
One Parent → Many Children 
One Child → Many World Sessions 
One Child → Many Memories 
One Child → Many Parent Summaries 
One World → Many World Sessions 
________________________________________
10. Design Principles
The data model follows these principles:
Clear ownership of child data 
Normalized relationships 
Separation of structured data and media files 
Support for future scalability 
Minimal data duplication 
________________________________________
11. Related Documents
ERDiagram_MVP_v1.1 
UserFlow_Parent_MVP_v1.0 
UserFlow_Child_MVP_v1.0 
HighLevelArchitecture_MVP_v1.0


