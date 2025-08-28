import express from "express";
import { login, logout, signup } from "../controllers/admin.controller.js";

const router = express.Router();
// This file sets up the routes for admin signup, login, and logout and connects them to the functions that handle those actions.
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

export default router;