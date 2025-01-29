import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3333;
const JWT_SECRET = process.env.JWT_SECRET || "secr_key";

let users = [
  {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    password: "pass",
    role: "admin",
  },
  {
    id: 2,
    username: "user",
    email: "user@example.com",
    password: "pass_user",
    role: "user",
  },
];

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const user = jwt.verify(authHeader, JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ error: "Invalid or expired token" });
  }
};

const authorizeAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
};

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    "1h"
  );

  res.json({ token });
});

app.put("/update-email", authenticateJWT, (req, res) => {
  const { email } = req.body;
  const { userId } = req.user;

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[userIndex].email = email;
  res.json({ message: "Email updated successfully", user: users[userIndex] });
});

app.delete("/delete-account", authenticateJWT, (req, res) => {
  const { userId } = req.user;

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ message: "Account deleted successfully" });
});

app.put("/update-role", authenticateJWT, authorizeAdmin, (req, res) => {
  const { userId, role } = req.body;

  if (role !== "user" && role !== "admin") {
    return res.status(400).json({ error: "Invalid role" });
  }

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[userIndex].role = role;
  res.json({ message: "Role updated successfully", user: users[userIndex] });
});

app.post("/refresh-token", authenticateJWT, (req, res) => {
  const user = users.find((u) => u.id === req.user?.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const newToken = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    "1h"
  );

  res.json({ token: newToken });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
