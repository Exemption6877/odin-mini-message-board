const db = require("../models/db");

async function getMessageById(req, res) {
  const { messageId } = req.params;
  try {
    const message = await db.getMessageById(messageId);

    if (!message) {
      res.status(404).send("Message not found");
    }
  } catch (err) {
    console.error("Error retrieving message:", err);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { getMessageById };
