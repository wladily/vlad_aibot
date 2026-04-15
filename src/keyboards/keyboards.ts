import { Keyboard } from "grammy";
import { Hears, FixHears } from "../consts/hears";

export const baseKeyboard = new Keyboard()
    .text(Hears.AI_HELPER)
    .text(Hears.CORRECTION)
    .text(Hears.HELP)
    .resized()
    .persistent();


export const fixKeyboard = new Keyboard()
    .text(FixHears.DEBUGGING)
    .text(FixHears.REFACTORING)
    .text(Hears.HELP)
    .resized()
    .persistent();
