import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
// config dotenv
dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(process.env.PORT, () => {
  console.log("Server running at http://localhost:5000");
});

// mongodb connection
mongoose
  .connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//   schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  // model
  const User = mongoose.model("User", userSchema);

  

