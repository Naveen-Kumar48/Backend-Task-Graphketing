import express from "express";

import {
  register,
  login
} from "../controllers/authController.js";

import limiter from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/register", limiter, register);
router.post("/login", limiter, login);

export default router;
