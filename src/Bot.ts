import { Client } from "discord.js";
import interactionCreate from "./listeneres/interactionCreate";
import ready from "./listeneres/ready";

console.log("Bot is starting...");
const token =
  "MTA4ODIwNjc0NTgzMjI3MTkxNA.GwAR6D.s2d2VggUeLYK2sUM4MmcPuK6XqwYB-IUBwHMGc";
const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);
client.login(token);
