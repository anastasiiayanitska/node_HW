import express from "express";
import Magazine from "../models/Magazine.js";

const router = express.Router();
router.get("/", async (req, res) => {
  const magazines = await Magazine.find().populate("publisher");
});
export default router;
