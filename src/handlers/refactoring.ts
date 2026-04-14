import { BotContext } from "../types/bot-types";

export function refactoring(ctx: BotContext) {
    ctx.session.waitingForAI = true;
    ctx.session.refactoring = true;
    ctx.reply('Вставьте ваш код:');
}
