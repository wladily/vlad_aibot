import { BotContext } from "../types/bot-types";

export function debugging(ctx: BotContext) {
    ctx.session.waitingForAI = true;
    ctx.session.debugging = true;
    ctx.reply('Вставьте ваш код:');
}
