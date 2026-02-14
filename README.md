DIGITAL COMPLAINT BOX

Basic Details
   HackHive
   Member 1: Hanna - RIT Kottayam
   Member 2: ParvathyB J - RIT Kottayam
   Project link:
   Description: The Digital Complaint Box is a secure web application designed to let users voice concerns anonymously through a streamlined digital interface. It features a modern, responsive frontend for submitting and tracking complaints, paired with a Node.js/MongoDB backend that allows administrators to manage and resolve issues efficiently.
   Problem Statement:In traditional environments, reporting grievances often involves tedious paperwork, a lack of privacy, and zero transparency regarding the status of a complaint. The Digital Complaint Box addresses these challenges by replacing inefficient manual systems with a secure, automated platform that ensures user anonymity and provides real-time tracking for every concern raised.
   Solution: The Digital Complaint Box is an automated web platform that replaces manual paperwork with a secure, 3-tier digital architecture. It utilizes a Node.js backend and MongoDB database to ensure data integrity and real-time synchronization. Users can submit grievances anonymously and track them using unique generated IDs, while administrators manage the resolution lifecycle via a protected dashboard. This solution bridges the communication gap by providing a transparent, efficient, and private environment for institutional feedback.
   
Technical Details
    Technologies / components used
For Software:

Languages used: JavaScript (ES6+), HTML5, CSS3

Frameworks used: Node.js, Express.js

Libraries used: Mongoose (MongoDB ODM), CORS, Body-Parser

Tools used: VS Code, Git, MongoDB Atlas, Railway (Hosting)

Features
Anonymous Submission: No login required for users to report issues.

Unique ID Generation: Automatic creation of tracking IDs (e.g., CMP-1234X).

Real-time Tracking: Dynamic status updates visible to users immediately.

Admin Dashboard: Secure portal for staff to manage and resolve complaints.

   Implementation
Installation
Bash
npm install express mongoose cors body-parser
Run
Bash
# To run locally
node server.js
Project Documentation
Diagrams
System Architecture:

The system follows a Client-Server-Database model. The Frontend (HTML/CSS) communicates via REST APIs with the Backend (Node.js/Express). The Backend validates data and performs CRUD operations on MongoDB Atlas.

Application Workflow:

User submits form → 2. Backend generates ID & saves to MongoDB → 3. Admin reviews & updates status → 4. User queries ID to see status.

API Documentation
Base URL: https://your-railway-app-url.up.railway.app

Endpoints
POST /api/register

Description: Registers a new complaint and generates a unique ID.

Request Body:

JSON
{
  "category": "Infrastructure",
  "title": "Broken light",
  "description": "The hallway light is flickering."
}
GET /api/status/:id

Description: Retrieves the current status of a complaint using the Reference ID.

Response:

JSON
{
  "status": "In Progress",
  "title": "Broken light"
}
AI Tools Used
Tool Used: Gemini

Purpose: UI/UX design suggestions, CSS styling for "Glassmorphism" effect, and debugging async fetch functions.

Percentage of AI-generated code: 30%

Human Contributions: Backend logic design, MongoDB schema architecture, and integration testing.

Team Contributions
Member 1: Frontend development, CSS styling, and UI/UX design.

Member 2: Backend API development, MongoDB integration, and Deployment.
   
