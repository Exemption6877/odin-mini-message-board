const db = require("../models/db");

async function getMessageById(req, res) {
  const { messageId } = req.params;
  try {
    const message = await db.getMessageById(messageId);

    res.render("message", { message: message });
    if (!message) {
      res.status(404).send("Message not found");
    }
  } catch (err) {
    console.error("Error retrieving message:", err);
    res.status(500).send("Internal Server Error");
  }
}

async function getAllMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { messages: messages });
  } catch (err) {
    console.error("Error retrieving messages:", err);
    res.status(500).send("Internal Server Error");
  }
}

async function newMessage(req, res) {
  res.render("form");
}

async function postMessage(req, res) {
  db.pushMessage({
    text: req.body.text,
    user: req.body.author,
    added: new Date(),
  });

  res.redirect("/");
}

module.exports = { getMessageById, getAllMessages, newMessage, postMessage };
