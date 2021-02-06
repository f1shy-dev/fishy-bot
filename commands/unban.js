const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if (!args[0]) {
        message.channel.send(client.ErrorEmbed("You need to provide a valid member ID to unban!").addField("Usage", `\`${client.commands.get("unban").help.usage}\``))
    } else {
        message.guild.members.unban(args[0])
        .then(userobj => message.channel.send(client.SuccessEmbed(`${userobj.tag} was unbanned.`)))
        .catch(client.ErrorEmbed("There was an error unbanning that user. Is their ID correct?"));
        
    }
};


exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: "Administrator"
  };
  
  exports.help = {
	name: "unban",
	category: "Moderation",
	description: "Unban a guild member.",
	usage: "unban <member id>"
  };