const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const auth = require("./routes/auth");

const corsOptions = {
  origin: "http://localhost:5000",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose
  .connect("mongodb://localhost/blogWebsite", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Router
app.use("/auth", auth);

app.listen(5000, console.log("Listen to PORT 5000"));
