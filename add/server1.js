const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/welcome", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.get("/api/users", (req, res) => {
  res.json({ users: ["Alice", "Bob", "Charlie"] });
});

app.get("/api/sum", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (!a || !b) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({ a, b, sum: a + b });
});

app.post("/api/message", (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  res.json({ received: true, message });
});

app.post("/api/age", (req, res) => {
  const { age } = req.body;

  if (!age) {
    return res.status(400).json({ message: "Age must be a number" });
  }

  if (age < 18) {
    res.json({ allowed: false, message: "You are too young!" });
  } else {
    res.json({ allowed: true, message: "Welcome!" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
