const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.channel.clone().then(channel => {
        channel.setPosition(message.channel.position)
        const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setAuthor("This channel was nuked.", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuclear_symbol.svg/1200px-Nuclear_symbol.svg.png")
        .setFooter("Note: Nuking a channel changes it's ID and revokes webhooks.");
        channel.send(embed).then(message => setTimeout(function(){message.delete()}, 10000));
    })
    message.channel.delete();
};


exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: "Administrator"
  };
  
  exports.help = {
	name: "nuke",
	category: "Moderation",
	description: "Delete all messages from the channel it is executed in (revokes ID and webhooks too).",
	usage: "nuke"
  };