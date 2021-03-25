const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "help",
  description: "The Help Page!",
    guildOnly: true,
  execute(message, args, client) {
    let color = "16fbff";
    const embed = new MessageEmbed()
      .setTitle("Help!")
      .setDescription(
        `Gives you every command in echo do e!dm-help for a dm with this page`
      )
      .setColor(color)
      .addFields(
        { name: "e!ping", value: `Gives you the ping of the bot` },
        { name: "e!serverinfo", value: `Gives you the Servers Info` },
        { name: "e!userinfo", value: `Gives you your user info` },
        { name: "e!dm-help", value: `Sends you a dm with this page` },
        { name: "e!vitals", value: `Gives you the vitals of the machine` },
        { name: "e!info", value: `Gives you the info  of  Echo` }
      )
      .setFooter("Bot made by juls07#9812");
    message.channel.send(embed);
  }
};
