# Task Management API

A simple REST API for managing tasks with user authentication.

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)

## Features
- User Authentication (Register, Login with JWT)
- Task CRUD (Create, Read, Update, Delete)
- Filtering (by status, priority) & Sorting (by dueDate, createdAt)
- Pagination
- Rate Limiting on Auth routes
- Protected Routes

## Setup

1. **Install Dependencies**
   ```bash
   cd Backend
   npm install
   ```


   ```

2. **Run the Server**
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### Auth
- `POST /api/auth/register` - Register a new user
  - Body: `{ name, email, password }`
- `POST /api/auth/login` - Login and receive a token
  - Body: `{ email, password }`

### Tasks (Protected - Header: `Authorization: Bearer <token>`)
- `GET /api/tasks` - Get all tasks
  - Query Params:
    - `status`: filter by status (pending, in-progress, done)
    - `priority`: filter by priority (low, medium, high)
    - `sort`: sort field (dueDate, createdAt)
    - `order`: sort order (asc, desc)
    - `page`: page number
    - `limit`: items per page
- `POST /api/tasks` - Create a new task
  - Body: `{ title, description, status, priority, dueDate }`
- `PUT /api/tasks/:id` - Update a task
- `PATCH /api/tasks/:id/status` - Update task status only
  - Body: `{ status }`
- `DELETE /api/tasks/:id` - Delete a task

## Bug Report
See `BUG.md` for details on a known issue in the authentication middleware.
