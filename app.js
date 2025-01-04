const express = require("express");
const app = express();

const path = require("node:path");

const messageRouter = require("./routes/messageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", messageRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});
