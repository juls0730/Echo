/*Starting arguments*/
const fs = require("fs");
const Discord = require("discord.js");
const bot = require("discord.js");
const { prefix, token, dbltoken } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const DBL = require("dblapi.js");
const dbl = new DBL(dbltoken);

dbl.on("posted", () => {
  console.log("Server count posted!");
});

dbl.on("error", e => {
  console.log(`Oops! ${e}`);
});

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`With Dolphins in ${client.guilds.cache.size} Servers | e!help`, {
    type: "PLAYING"
  });
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );

  /*If and Try arguments*/

  if (!command) return;

  if (command.guildOnly && message.channel.type === "dm") {
    return message.reply(
      "I can't execute that command inside DMs, Only in a Guild!"
    );
  }

  if (command.args && !args.length) {
    return message.channel.send(
      `You didn't provide any arguments, ${message.author}!`
    );
  }

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(1)} more second(s) before reusing \`e!${
          command.name
        }\` this is done to keep performance and latency low for all of us.`
      );
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});
/*client login*/
client.login(token);
/*end*/
