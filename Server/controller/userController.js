const router = require("express").Router();
const userModel = require("../models/user");
const authMiddleware = require("../middlewares/authMiddleware");
router.get("/get-logged-user", authMiddleware, async function (req, res) {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    return res.status(201).json({
      message: "user fetched successfully",
      data: user,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
});
router.get("/get-all-users", authMiddleware, async function (req, res) {
  try {
    const users = await userModel.find({ _id: { $ne: req.body.userId } });
    return res.status(200).json({
      message: "users fetched successfully",
      data: users,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
});
module.exports = router;
