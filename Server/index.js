const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./controller/authContoller");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middlewares/authMiddleware");
const app = express();
const cors = require("cors");
//otherwise undefined
//connecting db with mongoose
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PUT",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/home", authMiddleware);
app.use("/api/auth", authRouter);

module.exports = app;
