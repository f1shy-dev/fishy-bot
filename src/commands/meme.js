const fetch = require('node-fetch');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.json())
        .then(function (json) {
            var embed = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setImage(json.url)
                .setAuthor("u/" + json.author, "https://www.vectorico.com/download/social_media/Reddit-Icon.png", json.postLink);
            message.channel.send(embed);
        });
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['dankmeme'],
	permLevel: "User"
  };
  
  exports.help = {
	name: "meme",
	category: "Fun",
	description: "Want some dank memes? Here you are.",
	usage: "meme"
  };