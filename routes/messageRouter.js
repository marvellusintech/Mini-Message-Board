const { Router } = require("express");

const {
  createMessage,
  getMessages, getMessageDetails
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", getMessages);

messageRouter.get("/message/:id", getMessageDetails)

messageRouter.get("/new", (req, res) => {
  res.render("new");
});


messageRouter.post("/new", createMessage);

module.exports = messageRouter;
