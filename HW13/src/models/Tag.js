import mongoose from "mongoose";
import Article from "./Article.js";
const tagSchema = new mongoose.Schema({
  name: String,
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
});
const Tag = mongoose.model("Tag", tagSchema);
export default Tag;
