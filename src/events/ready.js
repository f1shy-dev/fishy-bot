module.exports = (client) => {
    client.user.setActivity(`${client.guilds.cache.size} guilds`, { type: "WATCHING" });
    console.log(`[!] Logged in as user: ${client.user.tag}\n[-] Bot is in ${client.guilds.cache.size} guilds.`);
};