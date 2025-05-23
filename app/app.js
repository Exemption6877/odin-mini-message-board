const express = require("express");
const app = express();

const messageRouter = require("./routes/messageRouter");
const PORT = 3000;

app.set("view engine", "ejs");

app.use("/", messageRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
