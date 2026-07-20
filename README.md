# 🚀 Todo List REST API (SQLite)

A RESTful Todo List API built with **Node.js**, **Express.js**, **SQLite**, and **Repository Pattern**.

This project demonstrates CRUD operations using SQLite as the persistent database while keeping the API structure unchanged through the Repository Pattern.

---

# 📌 Features

- RESTful API
- Express.js
- SQLite Database
- MVC Architecture
- Repository Pattern
- CRUD Operations
- Swagger API Documentation
- Error Handling
- Validation
- Persistent Storage
- Environment Variables

---

# 📂 Project Structure

```
Todo-list/
│
├── controllers/
│   └── taskController.js
│
├── repositories/
│   ├── memoryRepository.js
│   └── sqliteRepository.js
│
├── routes/
│   └── taskRoutes.js
│
├── db/
│   ├── database.js
│   ├── init.sql
│   └── tasks.db
│
├── swagger/
│   └── swagger.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

# ⚙️ Tech Stack

- Node.js
- Express.js
- SQLite
- Swagger UI
- JavaScript (ES Modules)

---

# 📦 Installation

Clone Repository

```bash
git clone <repository-url>
```

Go to Project

```bash
cd Todo-list
```

Install Dependencies

```bash
npm install
```

---

# ▶️ Run Project

```bash
npm run dev
```

or

```bash
node server.js
```

---

# 🌍 Base URL

```
http://localhost:3000
```

---

# 📚 API Endpoints

## Root

```
GET /
```

Returns API information.

---

## Health Check

```
GET /health
```

Response

```json
{
  "status": "ok"
}
```

---

## Get All Tasks

```
GET /tasks
```

---

## Get Single Task

```
GET /tasks/:id
```

---

## Create Task

```
POST /tasks
```

Body

```json
{
  "title": "Buy milk"
}
```

---

## Update Task

```
PUT /tasks/:id
```

Body

```json
{
  "title": "Buy groceries",
  "done": true
}
```

---

## Delete Task

```
DELETE /tasks/:id
```

---

# 🗄 SQLite Database

Database File

```
db/tasks.db
```

Table

```sql
tasks
--------
id
title
done
```

---

# 🏗 Repository Pattern

The project uses the Repository Pattern.

Controllers never communicate directly with SQLite.

Flow:

```
Client
   │
Routes
   │
Controllers
   │
SQLite Repository
   │
SQLite Database
```

This architecture allows changing the database implementation without modifying controllers or routes.

---

# 📖 Swagger Documentation

Run project

```
npm run dev
```

Open

```
http://localhost:3000/api-docs
```

Swagger provides interactive API documentation.

---

# 🧪 Testing

Test using

- Postman
- Thunder Client
- Swagger UI

---

# 💾 Persistence

SQLite stores data inside

```
db/tasks.db
```

Data remains available after restarting the server.

---

# 🚀 Assignment Goals Completed

- Express API
- SQLite Integration
- Repository Pattern
- CRUD Operations
- MVC Architecture
- Swagger Documentation
- Persistent Storage
- Error Handling
- Validation

---

# 👨‍💻 Author

**Rahul Tiwari**

Backend AI Engineering Intern

GitHub:
https://github.com/shivam1234tiwari

LinkedIn:
https://www.linkedin.com/in/rahul-tiwari-421254255

---
