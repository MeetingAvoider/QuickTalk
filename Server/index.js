const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" }); //otherwise undefined
//connecting db with mongoose
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
module.exports = app;
