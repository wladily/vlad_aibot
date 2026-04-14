import { BotContext } from "../types/bot-types";

export function aiHandler(ctx: BotContext) {
    ctx.session.waitingForAI = true;
    ctx.reply('Задайте ваш вопрос:');
}