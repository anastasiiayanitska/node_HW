import express from "express";
import { getAllCategories } from "../controlles/CategoryController.js";
const router = express.Router();
router.get("/", getAllCategories);
export default router;
