import express from "express";
import mongoose from "mongoose";
import { connectToDatabase } from "./config/db.js";
import publisherRoutes from "./routes/publisherRoutes.js";
import magazineRoutes from "./routes/magazineRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";

const app = express();
app.use(express.json());

connectToDatabase();
app.use("/publishers", publisherRoutes);
app.use("/magazines", magazineRoutes);
app.use("/tags", tagRoutes);
app.use("/articles", articleRoutes);

export default app;
