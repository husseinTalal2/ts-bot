import { Client } from "discord.js";
import interactionCreate from "./listeneres/interactionCreate";
import ready from "./listeneres/ready";
import dotenv from "dotenv";
dotenv.config();

console.log("Bot is starting...");
const token = process.env.TOKEN;
const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);
client.login(token);
