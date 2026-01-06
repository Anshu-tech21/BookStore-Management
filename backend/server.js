const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/books", require("./routes/bookRoutes"));

app.get("/", (req, res) => {
  res.send("Bookstore API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
