import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../Command";
import axios from "axios";
export const Meme: Command = {
  name: "meme",
  description: "Returns a random meme from reddit",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const res = await getMeme();
    if (res.nsfw) {
      const content = "it was inappropriate so restriction is needed";
      await interaction.followUp({
        ephemeral: true,
        content,
      });
    } else {
      const content = res.url;
      await interaction.followUp({
        ephemeral: true,
        content,
      });
    }
  },
};

const getMeme = async () => {
  const path = "https://meme-api.com/gimme";
  const res = axios.get(path).then((data) => data.data);

  return res;
};
