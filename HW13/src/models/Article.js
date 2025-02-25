import mongoose from "mongoose";
import Tag from "./Tag.js";

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
});
const Article = mongoose.model("Article", articleSchema);
export default Article;
