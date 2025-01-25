const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;

//connecting db with mongoose
dotenv.config();
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/", (req, res) => {
  res.send("h world");
});
app.listen(port, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});
//middlewares
