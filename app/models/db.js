const messages = [
  {
    text: "Just joined the chat!",
    user: "Fiona",
    added: new Date(2024, 1, 21, 19, 5),
  },
  {
    text: "Good morning, everyone!",
    user: "Dana",
    added: new Date(2023, 4, 12, 8, 15),
  },
  {
    text: "How's it going?",
    user: "Eli",
    added: new Date(2022, 10, 3, 14, 45),
  },
  {
    text: "Excited to be here.",
    user: "George",
    added: new Date(2021, 6, 9, 10, 30),
  },
  {
    text: "What's the topic today?",
    user: "Harper",
    added: new Date(2020, 0, 27, 16, 0),
  },
];

async function getMessageById(messageId) {
  return messages[messageId];
}

async function getAllMessages() {
  return messages;
}

async function pushMessage(message) {
  messages.push(message);
}

module.exports = { getMessageById, getAllMessages, pushMessage };
