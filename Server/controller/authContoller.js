const router = require("express").Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/user");
const jsonwebtoken = require("jsonwebtoken");
router.post("/signup", async function (req, res) {
  try {
    //1: check if the user already exist or not
    const isExistingUser = await userModel.findOne({ email: req.body.email });
    if (isExistingUser) {
      return res.status(404).json({
        success: false,
        message: "User already exists.",
      });
    }
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPass;
    const newUser = await userModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "user created successfully",
    });

    //2: if user is new create a new user
    //3: user has provided password or not
    //4: hashed the password before saving to the database
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});
router.post("/login", async function (req, res) {
  try {
    //1) check user enters pass and mail or not
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        success: false,
        message: "enter to mail and password to login",
      });
    }

    //check does user exists
    const user = await userModel.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exists",
      });
    }

    const isPassCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPassCorrect) {
      return res.status(400).json({
        success: false,
        message: "Wrong Password",
      });
    }

    const token = jsonwebtoken.sign(
      { userID: user._id },
      process.env.SECERET_KEYS,
      {
        expiresIn: "15min",
      }
    );

    //set cookies
    res
      .cookie("token", token, { maxAge: 15 * 60 * 1000, httpOnly: true })
      .json({
        message: "logged in successfully",
        success: true,
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});
router.post("/logout", async function (req, res) {
  res.clearCookie("token");
  return res.status(200).json({
    message: "logged out successfully",
    success: true,
  });
});

module.exports = router;
