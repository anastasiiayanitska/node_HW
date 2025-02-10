import express from "express";
import { getAllProducts } from "../controlles/productController.js";

const router = express.Router();
router.get("/", getAllProducts);
export default router;
