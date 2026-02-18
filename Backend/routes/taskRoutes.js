import express from "express";

import authMiddleware from "../middleware/authMiddlewares.js";

import {
  createTask,
  getTasks,
  updateTask,
  updateTaskStatus,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", authMiddleware, getTasks);
router.post("/", authMiddleware, createTask);
router.put("/:id", authMiddleware, updateTask);
router.patch("/:id/status", authMiddleware, updateTaskStatus);
router.delete("/:id", authMiddleware, deleteTask);

export default router;
