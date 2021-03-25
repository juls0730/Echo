const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "dm-help",
  description: "The Help Page Via a dm!",
  execute(message, args, client) {
    let color = "16fbff";
    const embed = new MessageEmbed()
      .setTitle("Help!")
      .setDescription(
        `Gives you every command in echo do e!help for a normal help page`
      )
      .setColor(color)
      .addFields(
        { name: "e!ping", value: `Gives you the ping of the bot` },
        { name: "e!serverinfo", value: `Gives you the Servers Info` },
        { name: "e!userinfo", value: `Gives you your user info` },
        { name: "e!help", value: `Sends you a channel message with this page` },
        { name: "e!vitals", value: `Gives you the vitals of the machine` },
        { name: "e!info", value: `Gives you the info  of  Echo` }
      );
    message.author.send(embed);
  }
};
