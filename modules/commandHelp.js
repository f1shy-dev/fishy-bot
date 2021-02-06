const Discord = require("discord.js");

exports.showCommDetails = function commHelp(
  client,
  message,
  args,
  commandName
) {
  var filter = client.commandObj.filter((obj) => obj.name === commandName);

  if (filter[0]) {
    var commobj = filter[0];
    var aliases = "";
    var reqPerms = "";
    if (commobj.aliases) {
      commobj.aliases.forEach(function (a) {
        aliases += `\`${client.config.prefix + a}\` `;
      });
    }

    if (commobj.reqperms) {
      commobj.reqperms.forEach(function (a) {
        if (a == "PARENTADMIN") {
          reqPerms += `\`${client.config.gName} Server Admin\` `;
        } else if (a == "CFSERVER") {
          reqPerms += `\`${client.config.gName} Server Only\` `;
        } else {
          reqPerms += `\`${a}\` `;
        }
      });
    }
    const embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Command: " + commobj.name)
      .setDescription(
        `${commobj.aliases ? `**Aliases: **${aliases}` : ""
        }\n**Description: **\`${commobj.desc}\`${commobj.usage
          ? `\n**Usage: **\`${client.config.prefix}${commobj.usage}\``
          : ""
        }\n${commobj.reqperms ? `**Required Permissions: **${reqPerms}` : ""}`
      )
      .setFooter(
        "<> fields are required. [] fields are optional.");
    message.channel.send(embed);
  } else {
    const embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setDescription(
        "<:cross:806285443062169620> Couldn't find that command!"
      );
    message.channel.send(embed);
  }
};
