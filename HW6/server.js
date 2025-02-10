import express from "express";
import pool from "./db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send("Hello, World!");
  } catch (err) {
    res.status(500).send("Error");
  }
});

app.post("/", (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      res.status(400).send("Error");
    } else {
      res.status(200).send(`Current data: ${data}`);
    }
  } catch (err) {
    res.status(500).send("Error post");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening: ${PORT}`);
});

app.get("/products", async (req, res) => {
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/products", async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).send("The name and price fields are required.");
  }

  try {
    res.status(201).send("Product added");
  } catch (err) {
    res.status(500).send(err);
  }
});
