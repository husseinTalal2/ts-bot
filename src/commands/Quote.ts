import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../Command";
import axios from "axios";
export const Quote: Command = {
  name: "quote",
  description: "Returns a random quote",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = await getQuote();

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

const getQuote = async () => {
  const path = "https://api.quotable.io/random";
  const res = axios.get(path).then((data) => data.data.content);

  return res;
};
