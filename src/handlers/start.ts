import { BotContext } from "../types/bot-types";
import { Hears } from "../consts/hears";
import { baseKeyboard } from "../keyboards/keyboards";

export async function startHandler(ctx: BotContext) {
    const name = ctx.from?.first_name ?? "друг";
    await ctx.reply(
        `Привет, ${name}!
        
            Я твой личный консультант.

            /start - начать работу
            /ai - ${Hears.AI_HELPER}
            /fix - ${Hears.CORRECTION}
        `,
        {reply_markup: baseKeyboard}
    );
}