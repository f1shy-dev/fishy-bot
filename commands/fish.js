const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setImage("https://upload.fishy.ml/fish.jpg")
        .setAuthor("@F1shNotFound#0001 Exposed (Found here at 12:00)");
    message.channel.send(embed);
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["f1sh", "exposefish", "f1shnotfound", "fishnotfound"],
	permLevel: "User"
  };
  
  exports.help = {
	name: "fish",
	category: "Fun",
	description: "It's real. He was exposed.",
	usage: "fish"
  };