import express from "express";
import Publisher from "../models/Publisher.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const publisher = await Publisher.find();
  res.status(200).json(publisher);
});
export default router;
