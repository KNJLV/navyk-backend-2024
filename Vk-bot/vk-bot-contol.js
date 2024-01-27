const { Keyboard, VK, getRandomId, API } = require('vk-io');
const { HearManager } = require('@vk-io/hear');
const { VKTGsendMessage } = require("../TelegramBotConrol/botConrol");

const vk = new VK({
	//здесь нужно вставить свой токен
    token: 'vk1.a.2mymxxDgT5MXAN6Iz2qUKGkKKYHUw1HDNtJ7N3MgNggHuI2wgxyX2RxsntGi5VsO3RHMWLNFleTJc4EWLqi_8VR8RiwovFxnGp2uWK8OqQ5wFgUXDGhfcthFk4XN87nnmwnmedF10TzgarCxmoKBJCg-Bdm_XKr2Cg90KCWtLHM81-agy6cSVOhzBxZRCUqpZN1BobidCeV-Js5hAgO2hA'
})

async function userName(userId) {
  const user = await vk.api.users.get({
    user_ids: userId
})
return user;
};

let userId = 0;
let userData =0;


const bot = new HearManager()
class VKdolbit{constructor(){
vk.updates.on('message_new', bot.middleware)
let studentClass = 0;

let msgArrYes =["Да","Конечно"];
let msgArrSmile =['🍌','🔥','❤'];
let freeConsultArr =['Другое','Не знаю','Пойду в колледж','Пойду в 10-ый класс','Пойду в вуз'];
let wayArr =['Хочу всё и сразу','Персональная профориентация','Персональная диагностика'];

let secondMessagekeyboard = Keyboard
    .keyboard([[
	 Keyboard.textButton({
            label: 'Да',
            color: 'positive'
        }),
	Keyboard.textButton({
            label: 'Конечно',
            color: 'negative'
        })
	]]).oneTime();

bot.hear(/начать/i, async msg => {
	let keyboard = Keyboard
    .keyboard([[
        Keyboard.textButton({
            label: 'В 11-ом',
            color: 'positive'
        }),
        Keyboard.textButton({
            label: 'В 10-ом',
            color: 'primary'
        })
    ], [
        Keyboard.textButton({
            label: 'В 9-ом',
            color: 'primary'
        }),
        Keyboard.textButton({
            label: 'В 8-ом',
            color: 'primary'
        })
    ], [
	 Keyboard.textButton({
            label: 'В 7-ом или ниже',
            color: 'negative'
        })
	], [
	 Keyboard.textButton({
            label: 'Другое...',
            color: 'primary'
        })
	]
	])
    .oneTime();
	
    msg.send({ message: 'Выбери в каком классе ты учишься!', keyboard: keyboard, random_id: getRandomId() }, userId=msg.senderId)
	userData = await userName(userId);
})

bot.hear(/В 11-ом/i, msg => {
	studentClass=11;
	 msg.send(`Тебе в этом году сдавать ЕГЭ`);
	 msg.send({ message: 'Хочешь посмотреть короткий видеоролик с разоблачением ЕГЭ?', keyboard: secondMessagekeyboard, random_id: getRandomId() })
})
bot.hear(/В 10-ом/i, msg => {
	studentClass=10;
	 msg.send(`Тебе скоро сдавать ЕГЭ`);
	 msg.send({ message: 'Хочешь посмотреть короткий видеоролик с разоблачением ЕГЭ?', keyboard: secondMessagekeyboard, random_id: getRandomId() })
})
bot.hear(/В 9-ом/i, msg => {
	studentClass=9;
	 msg.send(`Тебе в этом году сдавать ОГЭ`);
	 msg.send({ message: 'Хочешь посмотреть короткий видеоролик с разоблачением ОГЭ?', keyboard: secondMessagekeyboard, random_id: getRandomId() })
})
bot.hear(/В 8-ом/i, msg => {
	studentClass=8;
	 msg.send(`Тебе скоро сдавать ОГЭ`);
	 msg.send({ message: 'Хочешь посмотреть короткий видеоролик с разоблачением ОГЭ?', keyboard: secondMessagekeyboard, random_id: getRandomId() })
})
bot.hear(/В 7-ом/i, msg => {
	studentClass=7;
	msg.send({ message: 'Хочешь посмотреть короткий видеоролик с разоблачением ОГЭ?', keyboard: secondMessagekeyboard, random_id: getRandomId() })
})
bot.hear(/Другое.../i, msg => {
	studentClass=12;
	msg.send({ message: 'Хочешь посмотреть короткий видеоролик с разоблачением экзаменов?', keyboard: secondMessagekeyboard, random_id: getRandomId() })
})

bot.hear(msgArrYes, msg => {
	msg.send(`А вот и то самое видео:`);
	/////////////////////////////////////////////////////////////////////////////////здесь нужно вставить свое видео
	msg.send(`https://www.youtube.com/watch?v=BL8ZKeGCaIg`);
	let thirdMessagekeyboard = Keyboard
    .keyboard([[
	 Keyboard.textButton({
            label: '❤',
            color: 'primary'
        }),
	Keyboard.textButton({
            label: '🍌',
            color: 'negative'
        }),
	Keyboard.textButton({
            label: '🔥',
            color: 'positive'
        })
	]]).oneTime();
	msg.send({ message: 'Как тебе?', keyboard: thirdMessagekeyboard, random_id: getRandomId() })
})

bot.hear(msgArrSmile, msg => {
	if(studentClass==10||studentClass==11)
	{
		let fourthMessagekeyboard = Keyboard
	.keyboard([[
	 Keyboard.textButton({
            label: 'Пойду в вуз',
            color: 'positive'
        }),
	Keyboard.textButton({
            label: 'Пойду в колледж',
            color: 'primary'
	})],[
	Keyboard.textButton({
            label: 'Не знаю',
            color: 'primary'
        }),
	Keyboard.textButton({
            label: 'Другое',
            color: 'secondary'
        })
	]]).oneTime();
	msg.send({ message: 'Мы в тебе не сомневаемся, экзамены ты точно сдашь. А что потом?', keyboard: fourthMessagekeyboard, random_id: getRandomId() })
	}else if(studentClass!=0){
		let secondFourthMessagekeyboard = Keyboard
    .keyboard([[
	 Keyboard.textButton({
            label: 'Пойду в 10-ый класс',
            color: 'positive'
        }),
	Keyboard.textButton({
            label: 'Пойду в колледж',
            color: 'primary'
	})],[
	Keyboard.textButton({
            label: 'Не знаю',
            color: 'primary'
        }),
	Keyboard.textButton({
            label: 'Другое',
            color: 'secondary'
        })
	]]).oneTime();
	msg.send({ message: 'Мы в тебе не сомневаемся, экзамены ты точно сдашь. А что потом?', keyboard: secondFourthMessagekeyboard, random_id: getRandomId() })
	}
})

bot.hear(freeConsultArr, msg => {
	let fifthMessagekeyboard = Keyboard
    .keyboard([[
	 Keyboard.textButton({
            label: 'Персональная диагностика',
            color: 'positive'
        }),
	Keyboard.textButton({
            label: 'Персональная профориентация',
            color: 'primary'
	})],[
	Keyboard.textButton({
            label: 'Хочу всё и сразу',
            color: 'primary'
        })
	]]).oneTime();
	msg.send({ message: 'Мы в тебе не сомневаемся, экзамены ты точно сдашь. А что потом?', keyboard: fifthMessagekeyboard, random_id: getRandomId() })
})

bot.hear(wayArr, msg => {
	msg.send(`Заполни форму, чтобы с тобой связался наш эксперт. Он подробнее расскажет о консультации и подберёт удобное для тебя время`)
	msg.send(`https://navyk.school/#form`)
	let lastMessagekeyboard = Keyboard
    .keyboard([[
	 Keyboard.textButton({
            label: 'Отправил',
            color: 'positive'
        }),
	Keyboard.textButton({
            label: 'Нет',
            color: 'primary'
	}),
	Keyboard.textButton({
            label: 'Пока не готов',
            color: 'primary'
        })
	]]).oneTime();
	msg.send({ message: 'Получилось?', keyboard: lastMessagekeyboard, random_id: getRandomId() })

})

bot.hear(/Отправил/i, msg => {
	msg.send(`Отлично! Эксперт позвонит тебе в ближайшее время.` )
})

bot.hear(/Нет/i, msg => {
	VKTGsendMessage(userData[0].first_name,userData[0].last_name);
})

bot.hear(/Пока не готов/i, msg => {
	VKTGsendMessage(userData[0].first_name,userData[0].last_name);
})
vk.updates.start();
}}
module.exports = new VKdolbit();
