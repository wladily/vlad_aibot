import { BotContext } from "../types/bot-types";
import { fixKeyboard } from "../keyboard/baseKeyboard";

export async function fix(ctx: BotContext) {
    await ctx.reply(
        `
        Выберите действие для вашего кода:
        `,
        {reply_markup: fixKeyboard}
    );
}