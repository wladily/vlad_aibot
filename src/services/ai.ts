import OpenAI from "openai";
import { BotContext } from "../types/bot-types";

const client = new OpenAI({
    apiKey: process.env.API_GEMINI_KEY,
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/'
});

let SYSTEM_PROMPT = `
Ты эксперт в области IT и программирования. Ты помогаешь пользователям с вопросами и задачами связанными с айти и программированием.

Основные правила:
-Обращайся к пользователю как "друг"
-Если пользователь отклоняется от IT темы скажи, что не будешь отвечать на это и ждешь вопрос по теме IT и программирования.
`;

const DEBUGGING = `
    Найди ошибки в этом коде, скажи почему он не работал и исправь, чтобы код заработал с той же идеей в функционале.
`;

const REFACTORING = `
    Сделай рефакторинг кода, не меняя функционал просто улучши этот код чтобы производительность повысилась и объясни как ты улучшил этот код.
`;

export async function askGemini(userMessage: string, ctx: BotContext): Promise<string> {
    if(ctx.session.debugging) {
        SYSTEM_PROMPT += DEBUGGING;
        ctx.session.debugging = false;
    } else if(ctx.session.refactoring) {
        SYSTEM_PROMPT += REFACTORING;
        ctx.session.refactoring = false;
    }

    const response = await client.chat.completions.create({
        model: 'gemini-2.5-flash-lite',
        messages: [
            {role: 'system', content: SYSTEM_PROMPT},
            {role: 'user', content: userMessage}
        ]
    });
    
    return response.choices[0]?.message?.content ?? "Не удалось получить ответ.";
};