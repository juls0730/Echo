const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "info",
  description: "The Info Page!",
  execute(message, args, client) {
    let totalSeconds = client.uptime / 1000;
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    let echoicon = client.user.avatarURL();
    let memusage = `${process.memoryUsage().heapUsed / 1024 / 1024}`;
    let owner = "juls07#9812";
    let color = "16fbff";
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("Info")
      .setThumbnail(echoicon)
      .setDescription("Echo#1423")
      .addFields(
        {
          name: "Uptime",
          value: `${uptime}`,
          inline: false
        },
        {
          name: "Ram Usage",
          value: `${Math.round(memusage)}MB`,
          inline: true
        },
        {
          name: "Latency",
          value: `${Math.round(client.ws.ping)}ms`,
          inline: true
        },
        {
          name: "Created By",
          value: `${owner}`,
          inline: true
        },
        {
          name: `Library`,
          value: `Discord.js`,
          inline: true
        },
        {
          name: "User ID",
          value: `735777888971915314`,
          inline: true
        }
      )
      .setFooter(" A bot made with love <3");
    message.channel.send(embed);
  }
};
