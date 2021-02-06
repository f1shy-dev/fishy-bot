// Node Version Check
if (Number(process.version.slice(1).split(".")[0]) < 12) throw new Error("Node 12.0.0 or higher is required. Update Node on your system.");

// Require Modules
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
var config = require("./config.js");
client.config = config;
require("./modules/functions.js")(client);
require("./modules/embeds.js")(client);

client.commands = new Enmap();
client.aliases = new Enmap();
client.settings = new Enmap({
    name: "settings"
});

console.clear();
console.log("[!] FishyBot [Prod]");
const init = async() => {
  const cmdFiles = fs.readdirSync("./commands/", function(){});
  client.fancyLog(`Loading ${cmdFiles.length} commands.`, "neutral");
  cmdFiles.forEach(f => {
      if (!f.endsWith(".js")) return;
      client.fancyLog(client.loadCommand(f), "error");
  });

  const evtFiles = fs.readdirSync("./events/");
  client.fancyLog(`Loading ${evtFiles.length} events.`, "neutral");
  evtFiles.forEach(file => {
      const eventName = file.split(".")[0];
      const event = require(`./events/${file}`);
      client.on(eventName, event.bind(null, client));
  });

  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
      const thisLevel = client.config.permLevels[i];
      client.levelCache[thisLevel.name] = thisLevel.level;
  }
  client.login(client.config.token);
};

init();