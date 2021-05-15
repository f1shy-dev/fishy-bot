const fetch = require('node-fetch');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    fetch('https://waifu.pics/api/sfw/waifu')
        .then(res => res.json())
        .then(function (json) {
            var embed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setImage(json.url)
                .setAuthor("Random Waifu", "", "https://waifu.pics");
                message.channel.send(embed);
        });
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: "User"
  };
  
  exports.help = {
	name: "waifu",
	category: "Anime",
	description: "Get your waifu here.",
	usage: "waifu"
  };