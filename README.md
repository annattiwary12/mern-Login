# MERN Login App (CRUD Operations)

This is a simple MERN stack application that demonstrates a basic **Login system** along with **CRUD operations**. It is designed as a beginner-friendly project and is perfect for learning how to integrate MongoDB, Express, React, and Node.js.

---

## 📁 Tech Stack
- **Frontend:** React.js (with Axios)
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (using Mongoose ODM)
- **Authentication:** Basic Login (can be extended with JWT or sessions)

---

## ✨ Features

- ✅ User Registration (Sign Up)
- ✅ User Login
- ✅ View All Users
- ✅ Edit User Info
- ✅ Delete User
- ✅ Simple UI using React

---

## 🧾 Installation & Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-login-crud.git
cd mern-login-crud
cd backend
npm install
# Create a `.env` file with:
# MONGO_URI=<your-mongodb-uri>
# PORT=5000
npm start
cd frontend
npm install
npm start
rontend will run on http://localhost:3000
Backend will run on http://localhost:5000
🌐 API Endpoints (Backend)
POST /api/register → Register user

POST /api/login → Login user

GET /api/users → Get all users

PUT /api/users/:id → Update user

DELETE /api/users/:id → Delete user

