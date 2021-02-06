const fetch = require('node-fetch');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    fetch('https://waifu.pics/api/sfw/shinobu')
        .then(res => res.json())
        .then(function (json) {
            var embed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setImage(json.url)
                .setAuthor("Random Shinobu", "", "https://waifu.pics");
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
	name: "shinobu",
	category: "Anime",
	description: "Just Shinobu.",
	usage: "shinobu"
  };