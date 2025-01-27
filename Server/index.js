const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./controller/authContoller");
const cookieParser = require("cookie-parser");
const app = express();
//otherwise undefined
//connecting db with mongoose
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);

module.exports = app;
