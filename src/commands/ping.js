const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var str = `Latency: \`${
    Date.now() - message.createdTimestamp
  }ms\`\nAPI Latency: \`${Math.round(client.ws.ping)}ms\``;

  var embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("🏓 Ping!")
    .setDescription(str);

  message.channel.send(embed);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: "User"
  };
  
  exports.help = {
	name: "ping",
	category: "System/Utility",
	description: "Simple command to see the bot's latency.",
	usage: "ping"
  };