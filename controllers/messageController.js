const asyncHandler = require("express-async-handler");

const db = require("../db");

const getMessages = asyncHandler(async (req, res) => {
  const messages = db.getMessages();
  res.render("index", { messages, title: "Mini Message Board" });
});

const getMessageDetails = asyncHandler(async (req, res) => {
  const messageId = req.params.id; //the index
  const message = await db.getMessageById(messageId);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("messageDetails", { message, title: "Message Details" });
});

const createMessage = asyncHandler(async (req, res) => {
  const { message, user } = req.body;
  if (message && user) {
    db.createMessage(message, user);
  }
  res.redirect("/");
});

module.exports = { getMessages, createMessage, getMessageDetails };
