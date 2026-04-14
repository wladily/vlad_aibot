import type { Context, SessionFlavor } from "grammy";

export interface SessionData {
  waitingForAI: boolean;
  debugging: boolean;
  refactoring: boolean;
}

export type BotContext = Context & SessionFlavor<SessionData>;
