const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "please enter your first name"],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "please enter your last name"],
    },
    email: {
      type: String,
      required: [true, "please enter your mail id"],
      unique: true,
      validate: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please enter a valid mail id",
      ],
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
      min: 8,
      validate: [
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password should be combination of atlease one lower ,upper and speical character and length should be greater than 8",
      ],
    },
    photo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
