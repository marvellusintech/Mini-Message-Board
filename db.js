const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getMessages = () => {
  return messages;
};
async function getMessageById(messageId) {
  return messages[messageId] || null;
}

function createMessage(text, user) {
  if (!text || !user) {
    throw new Error("Both text and user are required to create a message.");
  }

  const newMessage = {
    text,
    user,
    added: new Date(),
  };

  messages.push(newMessage);
  return newMessage;
}
module.exports = { getMessages, getMessageById, createMessage };
