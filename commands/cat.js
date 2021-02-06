const fetch = require('node-fetch');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
	if (args[0]) {
		fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + args[0])
			.then(res => res.json())
			.then(function (json) {
				if (json[0] && json[0].url) {
					var embed = new Discord.MessageEmbed()
						.setColor("#0099ff")
						.setImage(json[0].url);

					if (json[0].breeds[0]) {
						embed.setAuthor(json[0].breeds[0].name + " Cat")
					} else {
						embed.setAuthor("Cat (Unknown Breed)")
					}

					message.channel.send(embed);
				} else {
					fetch('https://api.thecatapi.com/v1/breeds')
						.then(res => res.json())
						.then(function (json) {
							var breedStr = "";
							json.forEach(element => {
								breedStr += `\`${element.id}\` `
							});
							const embed = new Discord.MessageEmbed()
								.setColor("#0099ff")
								.setDescription(
									"<:error:806285443062169620> Couldn't find that breed!"
								)
								.addField("All Breed IDs", breedStr);


							message.channel.send(emwbed);
						});

				}
			});
	} else {
		fetch('https://api.thecatapi.com/v1/images/search')
			.then(res => res.json())
			.then(function (json) {
				var embed = new Discord.MessageEmbed()
					.setColor("#0099ff")
					.setTitle("Random Breed Cat")
					.setImage(json[0].url);

				message.channel.send(embed);
			});
	};
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["catpic", "pussy"],
	permLevel: "User"
  };
  
  exports.help = {
	name: "cat",
	category: "Fun",
	description: "Looking for some fresh pussy? Look no further.",
	usage: "cat [breed]"
  };