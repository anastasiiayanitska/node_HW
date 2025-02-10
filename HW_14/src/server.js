import app from "./app.js";
import "dotenv/config.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3333;

connectDB();
app.listen(PORT, () => {
  console.log("Server is listening on port : ", PORT);
});
