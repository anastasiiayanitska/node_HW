import { Category } from "../models/Category.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Can not get categories" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({ name });
    const savedCategory = await newCategory.save();
    res.status(201).json({ message: " Category was created", savedCategory });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
