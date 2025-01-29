import express from "express";
import { connectToDatabase, getDb } from "./db/index.js";
import { ObjectId } from "mongodb";
import "dotenv/config";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.error(
      "Failed to start the server due to MongoDB connection issue",
      error
    );
  });

app.post("/products", async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const db = getDb();

    if (!name || !price || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await db
      .collection("products")
      .insertOne({ name, price, description });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error created products", error });
  }
});

app.get("/products", async (req, res) => {
  try {
    const db = getDb();
    const products = await db.collection("products").find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const db = getDb();

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(req.params.id) });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const db = getDb();

    const { name, price, description } = req.body;
    const result = await db
      .collection("products")
      .updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { name, price, description } }
      );
    if (!result.matchedCount)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product was updated" });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const db = getDb();

    const result = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    if (!result.deletedCount)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product was deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});
