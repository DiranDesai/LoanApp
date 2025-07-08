import express from "express";
import { applyLoan } from "../controllers/loanController.js"
import protect from "../middlewares/protect.js"

const router = express.Router();


router.route("/apply-loan").post(protect, applyLoan);


export default router