const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "vitals",
  description: "The Vitals Page!",
  execute(message, args, client) {
    let totalSeconds = client.uptime / 1000;
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    let memusage = `${process.memoryUsage().heapUsed / 1024 / 1024}`;
    let color = "16fbff";
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("Vitals")
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
        }
      );
    message.channel.send(embed);
  }
};
