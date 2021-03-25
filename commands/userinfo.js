const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "userinfo",
  aliases: ["useri", "ui", "uinfo"],
  description: "The Users Info Page!",
  cooldown: "5",
  execute(message, args, client) {
    let color = "16fbff";
    let usericon = message.author.avatarURL();
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("User Info!")
      .setThumbnail(usericon)
      .setDescription("Gives you info about Your User")
      .addField(`Your username: `, `${message.author.username}`)
      .addField(`Your ID: `, `${message.author.id}`);
    message.channel.send(embed);
  }
};
