import { BotContext } from "../types/bot-types";
import { fixKeyboard } from "../keyboards/keyboards";

export async function fix(ctx: BotContext) {
    await ctx.reply(
        `
        Выберите действие для вашего кода:
        `,
        {reply_markup: fixKeyboard}
    );
}