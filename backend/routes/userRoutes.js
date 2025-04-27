import express from "express";
import { registerUser, loginUser, getCurrentUser } from "../controllers/userController.js"
import protect from "../middlewares/protect.js"

const router = express.Router();


router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/currentUser").get(protect, getCurrentUser);


export default router
