
const ApiError = require("../error/ApiError");
const TelegramApi = require('node-telegram-bot-api');

const token = '5914472675:AAFjo_s4Y2z3kqn3m92r-vOVNVVJZxx5deo';

const bot = new TelegramApi(token,   {polling: true})
const chatID =  -878497503;


class Mail {

    async postFormSelection (req, res, next) {
        try{
            const {page, phone, brand, model, generation, details, product} = req.body
            let letter = ``;


            if(page) letter= letter +  `<b>Страница:</b> ${page} \n\n`;
            if (phone) letter= letter +`<b>Телефон:</b> <i>${phone}</i> \n\n`;
            if (brand) letter=letter +`<b>Бренд:</b> <i>${brand}</i> \n\n`;
            if (model) letter=letter +`<b>Модель:</b> <i>${model}</i> \n\n`;
            if (generation) letter=letter +`<b>Поколение:</b> <i>${generation}</i> \n\n`;
            if (details) letter=letter +`<b>Детали:</b> \n${details} \n\n`;
            if (product) letter=letter +`<b>Товар:</b> \n ${product}`;




            await bot.sendMessage(chatID, letter, {
                disableWebPagePreview: false,
                disableNotification: false,
                parse_mode: "HTML"
            });
            return res.json('Заявка принята, в ближайшее время с Вами свяжутся.');

        }catch (e){
             next(ApiError.badRequest(e.message))
        }
    }

    async postFormCall (req, res, next) {
        try{
            const {page, phone} = req.body
            const str = `
            <b>Страница:</b> <i>${page}</i> \n<b>телефон:</b> <i>${phone}</i>
            `
            await bot.sendMessage(chatID, str, {
                disableWebPagePreview: false,
                disableNotification: false,
                parse_mode: "HTML"
            });
            return res.json('Заявка принята, в ближайшее время с Вами свяжутся.');

        }catch (e){
            return next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new Mail()

