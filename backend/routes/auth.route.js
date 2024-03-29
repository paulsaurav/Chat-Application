import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

// Create an Express router
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Routes for authentication
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

// Export the router
export default router;
