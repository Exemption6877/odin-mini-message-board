const { Router } = require("express");
const {
  getMessageById,
  getAllMessages,
  newMessage,
  postMessage,
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", getAllMessages);

messageRouter.get("/new", newMessage);
messageRouter.post("/new", postMessage);

messageRouter.get("/:messageId", getMessageById);

module.exports = messageRouter;
