import 'dotenv/config';
import { Bot, session } from 'grammy';
import { BotContext, SessionData } from './types/bot-types';
import { startHandler } from './handlers/start';
import { aiAnswerHandler } from './handlers/ai-answer';
import { Hears } from './consts/hears';
import { helpHandler } from './handlers/help';
import { aiHandler } from './handlers/ai';
import { fix } from './handlers/fix';
import { FixHears } from './consts/hears';
import { debugging } from './handlers/debugging';
import { refactoring } from './handlers/refactoring';

const BOT_TOKEN = process.env.BOT_TOKEN;

if(!BOT_TOKEN) {
    throw new Error('BOT_TOKEN is not set in .env file');
}

export const bot = new Bot<BotContext>(BOT_TOKEN);

bot.use(session<SessionData, BotContext>(
    {
        initial: () => ({
            waitingForAI: false, 
            debugging: false,
            refactoring: false
        })
    }
));

bot.command('start', startHandler);
bot.command('ai', aiHandler);
bot.command('fix', fix);

bot.hears(Hears.AI_HELPER, aiHandler);
bot.hears(Hears.CORRECTION, fix);
bot.hears(Hears.HELP, helpHandler);

bot.hears(FixHears.DEBUGGING, debugging);
bot.hears(FixHears.REFACTORING, refactoring);

bot.on('message:text', aiAnswerHandler);