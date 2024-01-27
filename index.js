const express = require("express");
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
//const {initDb} = require("./DataBase/dao");
//const {addClient} = require("./DataBase/add_client");
const {TGsendMessage} = require("./TelegramBotConrol/botConrol");
const {VKdolbit} = require("./Vk-bot/vk-bot-contol");
const chatId = '-1001905292559';
const token = '6377889590:AAEPyjV8bl0d-micYIc4xPfQjFKBgM9tsYg';

let vkBot = VKdolbit;
app.use(express.static(`${__dirname}/../navyk-frontend-2024`));
app.use(express.json());


app.post('/api/callback', (req, res) => {
/*const newClient = addClient(
 req.body.parent_name,
 req.body.parent_number,
 req.body.parent_mail,
 req.body.student_name,
 req.body.student_number,
 req.body.student_comment,
 req.body.student_class
);*/
const newMessage = TGsendMessage(
req.body.parent_name,
 req.body.parent_number,
 req.body.student_name,
 req.body.student_number,
 req.body.student_comment,
 req.body.student_class
 );
})
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'navyk_webpage/index.html'));
});

(async () => {
    //await initDb();
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    });
})();

