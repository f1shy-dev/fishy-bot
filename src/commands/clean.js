const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    var cleaned = 0;

    var messages = await message.channel.messages.fetch();
    messages.array().forEach(function(m) {
        if(m.author == client.user || m.content.startsWith(message.settings['prefix'])) {
            cleaned++;
            m.delete();
        }
    })
    message.channel.send(client.SuccessEmbed(`Removed ${cleaned} commands/responses from <#${message.channel.id}>`)).then(message => setTimeout(function(){message.delete()}, 10000));
};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['removebotmsgs'],
    permLevel: "Administrator"
};

exports.help = {
    name: "clean",
    category: "Moderation",
    description: "Delete all commands and replies from the bot in a channel.",
    usage: "clean"
};