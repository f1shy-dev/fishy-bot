const config = {
  // Bot Owner, level 10 by default. A User ID. Should never be anything else than the bot owner's ID.
  ownerID: process.env.OWNER_ID,

  token: process.env.TOKEN,

  // PERMISSION LEVEL DEFINITIONS.
  permLevels: [
    {
      level: 0,
      name: "User",
      check: () => true,
    },
    {
      level: 2,
      name: "Moderator",
      check: (message) => {
        try {
          const modRole = message.guild.roles.cache.find(
            (r) =>
              r.name.toLowerCase() === message.settings.modRole.toLowerCase()
          );
          if (modRole && message.member.roles.cache.has(modRole.id))
            return true;
        } catch (e) {
          return false;
        }
      },
    },
    {
      level: 3,
      name: "Administrator",
      check: (message) => {
        try {
          const adminRole = message.guild.roles.cache.find(
            (r) =>
              r.name.toLowerCase() === message.settings.adminRole.toLowerCase()
          );
          return adminRole && message.member.roles.cache.has(adminRole.id);
        } catch (e) {
          return false;
        }
      },
    },
    {
      level: 4,
      name: "Server Owner",
      check: (message) =>
        message.channel.type === "text"
          ? message.guild.ownerID === message.author.id
          : false,
    },
    {
      level: 10,
      name: "Bot Owner",
      check: (message) => message.client.config.ownerID === message.author.id,
    },
  ],
};

module.exports = config;
