const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serveri", "si", "sinfo"],
  description: "The Server Info Page!",
  cooldown: "5",
  guildOnly: true,
  execute(message, args, client) {
    let color = "16fbff";
    let server = message.guild.name;
    let servericon = message.guild.iconURL();
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`${server}'s Server Info!`)
      .setThumbnail(servericon)
      .setDescription("Gives you info about the server")
      .addField(
        `Total Member Count`,
        `:green_circle: ${message.member.guild.memberCount}`
      )
      .addField(
        `Verification Level`,
        `${message.member.guild.verificationLevel}`
      );
    message.channel.send(embed);
  }
};
