const messages = [
  {
    text: "Good morning, everyone!",
    user: "Dana",
    added: new Date(),
  },
  {
    text: "How's it going?",
    user: "Eli",
    added: new Date(),
  },
  {
    text: "Just joined the chat!",
    user: "Fiona",
    added: new Date(),
  },
  {
    text: "Excited to be here.",
    user: "George",
    added: new Date(),
  },
  {
    text: "What's the topic today?",
    user: "Harper",
    added: new Date(),
  },
];

async function getMessageById(messageId) {
  return messages[messageId];
}

async function getAllMessages() {
  return messages;
}

module.exports = { getMessageById, getAllMessages };
