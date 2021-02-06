const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var tempuser = client.getUserFromMention(args.shift());
    var user = message.guild.members.cache.get(tempuser.id);
    if (!user) {
        message.channel.send(client.ErrorEmbed("You need to provide a valid member to ban!").addField("Usage", `\`${client.commands.get("ban").help.usage}\``))
    } else {
        var rs = args.join(' ');
        rs != "" ? user.ban({reason: rs}) : user.ban();
        message.channel.send(client.SuccessEmbed(`${tempuser.tag} was banned${rs != "" ? ` for: \`${rs}\`.` : "."}`))
    }
};


exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: "Administrator"
  };
  
  exports.help = {
	name: "ban",
	category: "Moderation",
	description: "Ban a guild member.",
	usage: "ban <guild member> [reason]"
  };