const Discord = require("discord.js");
const CommandHelp = require("../modules/commandHelp.js");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const errorEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setDescription(
        ":sunglasses: You can't do that! (*Needs `ADMINISTRATOR` Perm*)"
      );
    message.channel.send(errorEmbed);
    return;
  }

  var qArgs = message.quoteArgs;
  if (!qArgs[2] || (!qArgs[1] || !message.mentions.channels.first())) {
    CommandHelp.showCommDetails(client,  message,  args, "embed");
  } else {
    const updateEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setDescription(qArgs[2]);

    if (qArgs[3]) {
      updateEmbed.setTitle(qArgs[3]);
    }
    if (qArgs[1]) {
      channel = client.channels.cache.get(message.mentions.channels.first().id);
    }
    channel.send(updateEmbed);
    if (qArgs[4]) {
      channel.send(qArgs[4]);
    }
  }
};



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['richembed', 'fancyembed', 'messageembed', 'makeembed'],
  permLevel: "Administrator"
};

exports.help = {
  name: "embed",
  category: "System/Utility",
  description: "Send a custom embed, without the hassle.",
  usage: `embed <"Message Content"> [--title "Title"] [--color #000000] [--ping @role] [--channel #channel]`
};