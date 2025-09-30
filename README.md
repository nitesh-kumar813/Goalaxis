<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Redux-black?style=for-the-badge&logo=redux&logoColor=764ABC" alt="redux" />
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=339933" alt="nodejs" />
    <img src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logo=express&logoColor=white" alt="express" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logo=mongodb&logoColor=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">⚡ GoalAxis - Job Portal Platform ⚡</h3>
  <p align="center">A modern MERN stack job portal platform that connects job seekers and recruiters.</p>

</div>

---

## 📋 <a name="table">Table of Contents</a>

1. 🤖 Introduction  
2. ⚙️ Tech Stack  
3. 🔋 Features 
4. 🤸 Quick Start
5. 🧑‍💻 Demo Login
6. 🕸️ Project Structure

   
---

## <a name="introduction">🤖 Introduction</a>

**GoalAxis** is a full-stack **Job Portal** built with React, Redux Toolkit, Node.js, Express, MongoDB, and TailwindCSS.  
It provides a seamless experience for job seekers to apply, save jobs, and track applications, while recruiters can post jobs and manage applicants.

---

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Frontend:** React, Redux Toolkit, TailwindCSS, Axios  
- **Backend:** Node.js, Express.js, JWT Authentication, bcrypt  
- **Database:** MongoDB with Mongoose  
- **Other Tools:** Cloudinary (file uploads), Vite, Nodemailer  

---

## <a name="features">🔋 Features</a>

👉 **Authentication & Authorization**: Secure login & signup with JWT.  

👉 **Company Management**: Recruiters can create and manage company profiles.  

👉 **Job Postings**: Post, edit, and delete job listings.  

👉 **Job Applications**: Users can apply for jobs and track their applications.  

👉 **Save/Unsave Jobs**: Similar to LinkedIn, users can save jobs for later. 

👉 **Advanced Search**: Filter jobs by role, location, salary, and company.  

👉 **Responsive UI**: Optimized for desktop and mobile.  

👉 **Real-time Updates**: Redux Toolkit for state management.  

---

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally:

### **Prerequisites**

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [MongoDB](https://www.mongodb.com/)  

**Cloning the Repository**

```bash
git clone https://github.com/nitesh-kumar813/goalaxis.git
cd goalaxis
```

**Installation**

Install the project dependencies using npm:

```bash
cd frontend
npm install

cd /backend
npm install

```
**Set Up Environment Variables**

Create a .env file in the backend root:

```bash
PORT=8000
MONGO_URI=your_mongodb_uri

# JWT
JWT_SECRET=your_jwt_secret

```
Create a .env file in the frontend root:

```bash
VITE_BASE_API_URL=http://localhost:8000/api/v1
```

**Running the Project**

Backend:

```bash
cd backend
npm run dev

```
frontend:

```bash
cd frontend
npm run dev

```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

---
## <a name="quick-start">🧑‍💻 Demo Login</a>

You can use the following demo credentials to explore the application:

**Recruiter Account**

```bash
Email: email@email.com

Password: nik12345

Role: Recruiter

```

---

## <a name="structure">🕸️ Project Structure</a>

```bash
GoalAxis/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── pages/
│   │   └── utils/
│   └── vite.config.js
│
└── README.md

```
