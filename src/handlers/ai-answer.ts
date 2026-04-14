import { BotContext } from "../types/bot-types";
import { askGemini } from "../services/ai";
import { markdownToHtml } from "../lib/formatMarkdown";

export const aiAnswerHandler = async (ctx: BotContext, next: () => Promise<void>) => {
    if(!ctx.session.waitingForAI) {
        return next();
    }
    
    const message = ctx.message?.text;

    if(!message) {
        return next();
    }

    ctx.session.waitingForAI = false;

    const thinkingMessage = await ctx.reply('Думаю...');

    const safeDelete = () => {
        ctx.api.deleteMessage(ctx.chat!.id, thinkingMessage.message_id);
    };

     try{
        const response = await askGemini(message, ctx);
        await ctx.reply(markdownToHtml(response), {parse_mode: 'HTML'});
     }catch(error){
        console.log(error);
        ctx.reply("Извините, произошла ошибка. Попробуйте позже.");
     }finally{
        safeDelete();
     }
}