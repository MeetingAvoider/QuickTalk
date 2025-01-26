const express = require("express");
const mongoose = require("mongoose");
const app = express();
//otherwise undefined
//connecting db with mongoose

app.use("/", (req, res) => {
  res.send("h world");
});
module.exports = app;
