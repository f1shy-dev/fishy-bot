const fetch = require('node-fetch');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    fetch('https://waifu.pics/api/sfw/highfive')
        .then(res => res.json())
        .then(function (json) {
            var embed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setImage(json.url)
                .setAuthor("Random Highfive", "", "https://waifu.pics");
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
	name: "highfive",
	category: "Anime",
	description: "Need some of that highfive fun?",
	usage: "highfive"
  };
