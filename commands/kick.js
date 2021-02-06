const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var tempuser = client.getUserFromMention(args.shift());
    var user = message.guild.members.cache.get(tempuser.id);
    if (!user) {
        message.channel.send(client.ErrorEmbed("You need to provide a valid member to kick!").addField("Usage", `\`${client.commands.get("kick").help.usage}\``))
    } else {
        var rs = args.join(' ');
        rs != "" ? user.kick({reason: rs}) : user.kick();
        message.channel.send(client.SuccessEmbed(`${tempuser.tag} was kicked${rs != "" ? ` for: \`${rs}\`.` : "."}`))
    }
};


exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: "Administrator"
  };
  
  exports.help = {
	name: "kick",
	category: "Moderation",
	description: "Kick a guild member.",
	usage: "kick <guild member> [reason]"
  };