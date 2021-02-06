const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if (!args[0]) {
    var embed = new client.ImageEmbed(message.author.avatarURL({ format: 'png', dynamic: true, size: 4096 })).setAuthor(`@${message.author.tag}'s avatar.`);
    message.channel.send(embed);
    } else {
        var user = client.getUserFromMention(args[0]);
        if (user) {
            var embed = new client.ImageEmbed(user.avatarURL({ format: 'png', dynamic: true, size: 4096 })).setAuthor(`@${user.tag}'s avatar.`);
            message.channel.send(embed);
        } else {
            var embed = new client.ErrorEmbed("I couldn't find that user! Please include a valid mention.");
            message.channel.send(embed);
        }
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["av", "getavatar", "getav"],
    permLevel: "User"
};

exports.help = {
    name: "avatar",
    category: "System/Utility",
    description: "See the avatar of any user.",
    usage: "avatar [user]"
};