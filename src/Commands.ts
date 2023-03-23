import { Command } from "./Command";
import { Hello } from "./commands/Hello";
import { Meme } from "./commands/Meme";
import { Quote } from "./commands/Quote";

export const Commands: Command[] = [Hello, Quote, Meme];
