import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3333;
const users = [];

function createUser(name, email) {
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  return newUser;
}

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const user = createUser(name, email);
  res.status(201).json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
