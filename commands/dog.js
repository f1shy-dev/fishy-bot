const fetch = require('node-fetch');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
	if (args[0]) {
		fetch('https://api.thedogapi.com/v1/images/search?breed_ids=' + args[0])
			.then(res => res.json())
			.then(function (json) {
				if (json[0] && json[0].url) {
					var embed = new Discord.MessageEmbed()
						.setColor("#0099ff")
						.setImage(json[0].url);

					if (json[0].breeds[0]) {
						embed.setAuthor(json[0].breeds[0].name + (json[0].breeds[0].name.includes('Dog') ? "" : " Dog"))
					} else {
						embed.setAuthor("Dog (Unknown Breed)")
					}

					message.channel.send(embed);
				} else {
					fetch('https://api.thedogapi.com/v1/breeds')
						.then(res => res.json())
						.then(function (json) {

							const embed = new Discord.MessageEmbed()
								.setColor("#0099ff")
								.setDescription(
									"<:error:806285443062169620> Couldn't find that breed!"
								)
								.addField("All Breed IDs", `There are ${json.length} different breeds. To get a different breed, run \`!dog [Breed Number (from 1-${json.length})]\``);


							message.channel.send(embed);
						});

				}
			});
	} else {
		fetch('https://api.thedogapi.com/v1/images/search')
			.then(res => res.json())
			.then(function (json) {
				var embed = new Discord.MessageEmbed()
					.setColor("#0099ff")
					.setTitle("Random Breed Dog")
					.setImage(json[0].url);

				message.channel.send(embed);
			});
	};
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["dogpic"],
	permLevel: "User"
  };
  
  exports.help = {
	name: "dog",
	category: "Fun",
	description: "Looking for some man's best friend? Look no further.",
	usage: "dog [breed]"
  };