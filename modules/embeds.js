const Discord = require("discord.js");

module.exports = (client) => {

  client.ErrorEmbed = function(msg) {
    const embed = new Discord.MessageEmbed()
    .setColor("#E53935")
    .setDescription(
      "<:cross:806285443062169620> " + msg
    );
    return embed;
}

client.SuccessEmbed = function(msg) {
    const embed = new Discord.MessageEmbed()
    .setColor("#7CB342")
    .setDescription(
      "<:success:806285442839609365>  " + msg
    );
    return embed;
}

client.ImageEmbed = function(url) {
    const embed = new Discord.MessageEmbed().setColor("#42A5F5").setImage(url);
    return embed;
}

client.BasicEmbed = function(title = "") {
    const embed = new Discord.MessageEmbed().setColor("#42A5F5");
    title != "" ? embed.setTitle(title) : null;
    return embed;
}

};