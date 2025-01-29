const router = require("express").Router();
const chatModel = require("../models/chat");
const authMiddleware = require("../middlewares/authMiddleware");
router.post("/create-new-chat", async function (req, res) {
  try {
    const newConn = await chatModel.create(req.body);
    res.status(400).json({
      message: "Connection stablished successfully",
      success: false,
      data: newConn,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
});
router.get("/get-all-chats", async function (req, res) {
  try {
    const allChats = await chatModel.find({
      members: { $in: req.body.userId },
    });
    res.status(400).json({
      message: "Connection stablished successfully",
      success: false,
      data: allChats,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
});
