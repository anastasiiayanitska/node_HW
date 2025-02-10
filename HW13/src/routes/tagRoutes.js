import express from "express";
import Tag from "../models/Tag.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tags = await Tag.find().populate("articles");
  res.status(200).json(tags);
});
export default router;
