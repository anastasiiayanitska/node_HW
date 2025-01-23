import { useState } from "react";
import { createUser } from "../api";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useUserLogic = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (!name.trim()) {
      setError("Name cannot be empty");
      return false;
    }
    if (!email.trim()) {
      setError("Email cannot be empty");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  const handleAddUser = async () => {
    if (!validateInputs()) return;

    try {
      const newUser = await createUser(name, email);
      setUsers([...users, newUser]);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Failed to create user. Please try again.");
    }
  };

  return {
    users,
    name,
    email,
    error,
    setName,
    setEmail,
    handleAddUser,
  };
};
