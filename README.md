# Task Manager API

A simple Task Management REST API where users can register, login, and manage personal tasks. Built using Node.js, Express, MongoDB, and JWT authentication.

---

## 🚀 Features

- User Registration & Login
- JWT Authentication
- Password Hashing using bcrypt
- Create, Read, Update, Delete Tasks Protected Routes
- Task Filtering & Sorting
- MongoDB Database with Mongoose
- Intentional Bug Documentation (BUG.md)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv

---

## 📦 Installation

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd grapheting
```

### 2. Navigate to the Backend directory

```bash
cd Backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up Environment Variables

Create a `.env` file in the `Backend` directory and populate it with the following values:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 5. Run the Server

```bash
npm start
```

The server should now be running on `http://localhost:5000`.

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint             | Description            |
| :----- | :------------------- | :--------------------- |
| POST   | `/api/auth/register` | Register a new user    |
| POST   | `/api/auth/login`    | Login user & get token |

### Tasks

| Method | Endpoint          | Description                 |
| :----- | :---------------- | :-------------------------- |
| GET    | `/api/tasks`      | Get all tasks for user      |
| POST   | `/api/tasks`      | Create a new task           |
| PUT    | `/api/tasks/:id`  | Update a task by ID         |
| DELETE | `/api/tasks/:id`  | Delete a task by ID         |

---

## 🐞 Known Issues

Please refer to `BUG.md` for a list of known issues and intentional bugs documented in this project.
