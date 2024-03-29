exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    await message.reply(client.SuccessEmbed("The bot is shutting down."));
    await Promise.all(client.commands.map(cmd =>
      client.unloadCommand(cmd)
    ));
    process.exit(0);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Admin"
  };
  
  exports.help = {
    name: "shutdown",
    category: "System/Utility",
    description: "Shuts down the bot. Warning: bot will NOT restart automatically.",
    usage: "shutdown"
  };