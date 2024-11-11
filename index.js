const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 5500;

const { TGsendMessage } = require("./TelegramBotConrol/botConrol");

const chatId = "-1001905292559";
const token = "6377889590:AAEPyjV8bl0d-micYIc4xPfQjFKBgM9tsYg";

app.use(express.static(`${__dirname}/../nvk-wbpg`));
app.use(express.json());

app.post("/api/callback", (req, res) => {
  const newMessage = TGsendMessage(
    req.body.parent_name,
    req.body.parent_number,
    req.body.student_name,
    req.body.student_number,
    req.body.student_comment,
    req.body.student_class
  );
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../nvk-wbpg/index.html"));
});

(async () => {
  //await initDb();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
})();
