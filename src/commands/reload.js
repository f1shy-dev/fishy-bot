exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    if (!args || args.length < 1) return message.reply(client.ErrorEmbed("You must provide a command to reload.").addField("Usage", `\`${client.commands.get("reload").help.usage}\``));
    const command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));
    let response = await client.unloadCommand(args[0]);
    if (response) return message.reply(client.ErrorEmbed(`There was an error reloading the command \`${args[0]}\``).addField("Stack Trace", `\`${response}\``));
  
    response = client.loadCommand(command.help.name);
    if (response) return message.reply(client.ErrorEmbed(`There was an error reloading the command \`${args[0]}\``).addField("Stack Trace", `\`${response}\``));
  
    message.reply(client.SuccessEmbed(`The command \`${args[0]}\` was reloaded!`));
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Admin"
  };
  
  exports.help = {
    name: "reload",
    category: "System/Utility",
    description: "Reloads a command that's been modified.",
    usage: "reload [command]"
  };