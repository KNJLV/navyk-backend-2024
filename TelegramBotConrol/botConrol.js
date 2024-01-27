const TelegramApi = require('node-telegram-bot-api');
const token = '6377889590:AAEPyjV8bl0d-micYIc4xPfQjFKBgM9tsYg';
const bot = new TelegramApi(token, {polling: true});
const chatId = '-1001905292559';


module.exports ={
	VKTGsendMessage: async (firstName, secondName) => {
	await bot.sendMessage(chatId, `В ВК требуется вмешательство оператора клиенту - ${firstName} ${secondName}`, { parse_mode: 'Markdown' });
},
TGsendMessage: async (parent_name, parent_number, student_name, student_number, student_comment, student_class) => {
	await bot.sendMessage(chatId, `
ИМЯ РОДИТЕЛЯ:  \`${parent_name}\`
НОМЕР РОДИТЕЛЯ: \`${parent_number}\`
ИМЯ УЧЕНИКА: \`${student_name}\`
НОМЕР УЧЕНИКА: \`${student_number}\`
КЛАСС УЧЕНИКА: ${student_class}
КОММЕНТАРИЙ: ${student_comment}
	`, { parse_mode: 'Markdown' });
}
}

