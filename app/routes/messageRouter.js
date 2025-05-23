const { Router } = require("express");
const {
  getMessageById,
  getAllMessages,
  newMessage,
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", getAllMessages);
messageRouter.get("/new", newMessage);
messageRouter.get("/:messageId", getMessageById);

module.exports = messageRouter;
