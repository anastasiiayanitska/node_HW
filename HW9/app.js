import express from "express";
import "dotenv/config";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;

app.use((req, res, next) => {
  const { email } = req.body;
  req.user = users.find((user) => user.email === email);
  next();
});

const users = [];

const checkPasswordChange = (req, res, next) => {
  if ((req.user && req.user, mustChangePassword)) {
    return res.status(403).json({ message: "Password change required." });
  }
  next();
};

const checkAdminRole = (req, res, next) => {
  const { role } = req.body;
  if (role !== "admin") {
    return res.status(403).json({ message: "Admins only" });
  }
  next();
};

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Homepage" });
});

app.post("/registration", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);
    if (!email || !password) {
      res.status(403).json({ message: "Write correct user data" });
    }
    if (user) {
      res.status(403).json({ message: "User with this email already exists" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    users.push({
      email,
      password: hashedPassword,
      mustChangePassword: false,
      role: "admin",
    });
    res.status(201).json({ message: "User was created" });
  } catch (error) {
    res.status(500).json({ message: "Error registration:" });
  }
});

app.post("/change-pass", checkPasswordChange, async (req, res) => {
  try {
    const { newPass } = req.body;
    const { user } = req;
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!newPass) {
      res.status(401).json({ message: "New password is not correct" });
    }
    const saltRounds = 10;
    user.password = await bcrypt.hash(newPass, saltRounds);
    user.mustChangePassword = false;
    res.status(200).json({ message: "Password was updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating password" });
  }
});

app.post("/delete-account", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user } = req;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized." });
    }
    if (!email || !password) {
      return res.status(400).json({
        message: "Email or password are required.",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({
        message: "Incorrect password.",
      });
    }
    const userIndex = users.findIndex((u) => u.email === email);
    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found." });
    }
    users.splice(userIndex, 1);
    res.status(200).json({
      message: "Account successfully deleted.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting account.",
    });
  }
});

app.get("/admin", checkAdminRole, (req, res) => {
  res.status(200).json({ message: "Welcome to the admin panel." });
});

app.post("/change-email", async (req, res) => {
  try {
    const { newEmail, password } = req.body;
    const { user } = req;
    if (!user) {
      return res.status(401).json({ message: "Unauthorized." });
    }

    if (!newEmail || !password) {
      return res
        .status(400)
        .json({ message: "New email and password are required." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ message: "Incorrect password." });
    }

    const emailExists = users.find((user) => user.email === newEmail);
    if (emailExists) {
      return res.status(403).json({ message: "Email is already in use." });
    }

    user.email = newEmail;
    res.status(200).json({ message: "Email updated successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error updating email" });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
});
