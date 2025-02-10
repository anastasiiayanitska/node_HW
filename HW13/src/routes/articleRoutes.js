import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const articles = await Article.find().populate("tags");
  res.status(200).json(articles);
});

export default router;
