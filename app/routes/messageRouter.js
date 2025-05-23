const { Router } = require("express");
const {
  getMessageById,
  getAllMessages,
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", getAllMessages);
messageRouter.get("/:messageId", getMessageById);

module.exports = messageRouter;
