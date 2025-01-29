const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema(
  {
    members: [
      {
        types: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
    unReadMessage: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
const chatModel = mongoose.model("chat", chatSchema);
module.exports = chatModel;
