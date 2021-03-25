const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Ping!",
  execute(message, args, client) {
    let color = "16fbff";
    const embed = new MessageEmbed()
      .setTitle("Ping!")
      .setDescription(`:clock11: My Latency is ${Math.round(client.ws.ping)}ms`)
      .setColor(color);
    message.channel.send(embed);
  }
};
