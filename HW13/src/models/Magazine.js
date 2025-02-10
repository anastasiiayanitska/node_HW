import mongoose from "mongoose";
import Publisher from "./Publisher.js";
const magazineSchema = new mongoose.Schema({
  title: String,
  issueNumber: Number,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher",
  },
});
const Magazine = mongoose.model("Magazine", magazineSchema);
export default Magazine;
