/*
The HELP command is used to display every command's name and description
to the user, so that he may see what commands are available. The help
command is also filtered by level, so if a user does not have access to
a command, it is not shown to them. If a command name is given with the
help command, its extended help is shown.
*/

exports.run = (client, message, args, level) => {
  // If no specific command is called, show all filtered commands.
  if (!args[0]) {
    // Filter all commands by which are available for the user's level, using the <Collection>.filter() method.
    const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);

    // Here we have to get the command names only, and we use that array to get the longest name.
    // This make the help commands "aligned" in the output.
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let embed = client.BasicEmbed()
    .setAuthor("All FishyBot Commands", "https://cdn.discordapp.com/avatars/806977578912841799/fde244561d312535cbeebbcf15af882e.png")
    .setDescription(`Want detailed info on a individual command? \`Run ${client.getSettings(message.guild).prefix}help [command name]\` to get info on that command.`)
    .setFooter(`This only shows commands available to your permssion level.`);
    const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    var categoriesData = {};

    sorted.forEach( c => {
      const cat = c.help.category;
      if (currentCategory !== cat) {
        categoriesData[cat] = "";
        currentCategory = cat;
      }
      categoriesData[cat] += `\`${c.help.name}\` `;
    });

    Object.keys(categoriesData).forEach(function(key) {
      embed.addField(key, categoriesData[key]);
    });
    message.channel.send(embed);
  } else {
    // Show individual command's help.
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      let embed = client.BasicEmbed("Command: " + command.help.name.toProperCase());
      var aliases = "";

      if (command.conf.aliases[0]) {
        var aliasStr = "";
        command.conf.aliases.forEach((a) => aliasStr += `\`${client.getSettings(message.guild).prefix}${a}\` `);
        aliases += `**Aliases:** ${aliasStr}\n`
      }
      embed.setDescription(`${aliases}**Description:** \`${command.help.description}\`\n**Category:** \`${command.help.category}\`\n**Usage:** \`${client.getSettings(message.guild).prefix}${command.help.usage}\``)
      message.channel.send(embed);
    } else {
      message.channel.send(client.ErrorEmbed(`I couldn't find the command \`${command}\``));
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp", "commands", "cmds"],
  permLevel: "User"
};

exports.help = {
  name: "help",
  category: "System/Utility",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};
