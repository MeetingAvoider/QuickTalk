const router = require("express").Router();
const messageModel = require("../models/message");
const authMidlleware = require("../middlewares/authMiddleware");
const chatModel = require("../models/chat");
router.post("/new-message", authMidlleware, async function (req, res) {
  try {
    //create and store the new message to db
    const newMessage = await messageModel.create(req.body);
    //update the last message in chat collection
    const lastMsg = await chatModel.findOne(req.body.chatId);
    lastMsg.lastMessage = lastMsg._id;
    await chatModel.save();

    res.status(201).json({
      //201  a new resource created
      success: false,
      message: error.message,
      data: newMessage,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});
router.get("/get-all-message", authMidlleware, async function (req, res) {
  try {
    const allMessages = await messageModel
      .find({ chatId: req.params })
      .sort({ createdAt: 1 });
    res.status(200).json({
      message: "message fetched successfully",
      success: true,
      data: allMessages,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: TokenExpiredError.message,
    });
  }
});
