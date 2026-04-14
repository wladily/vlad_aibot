import { BotContext } from "../types/bot-types";
import { Hears } from "../consts/hears";
import { baseKeyboard } from "../keyboard/baseKeyboard";

export const helpHandler = async (ctx: BotContext) => {
    await ctx.reply(
`
/start - начать работу
/ai - ${Hears.AI_HELPER}
/fix - ${Hears.CORRECTION}
`, {reply_markup: baseKeyboard}
);
};