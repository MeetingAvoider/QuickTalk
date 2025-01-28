const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./controller/authContoller");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middlewares/authMiddleware");
const userRouter = require("./controller/userController");
const app = express();
//otherwise undefined
//connecting db with mongoose
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

module.exports = app;
