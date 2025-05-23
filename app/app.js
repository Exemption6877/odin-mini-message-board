const express = require("express");
const app = express();

const messageRouter = require("./routes/messageRouter");

const PORT = 3000;

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
