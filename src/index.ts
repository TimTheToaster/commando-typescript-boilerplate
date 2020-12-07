import { CommandoClient } from 'discord.js-commando';
import path from 'path';

import credentials from '../credentials';

const client = new CommandoClient({
  commandPrefix: '.',
});

client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerGroups([
    ["casino", "Casino commands"],
  ])
  .registerCommandsIn({
    dirname: path.join(__dirname, "commands"),
    filter: /^([^\.].*)\.(ts|js(on))?$/
  });

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
  console.log(`Listening on ${client.guilds.cache.size} servers.`);
  const inviteUrl = `https://discordapp.com/oauth2/authorize?client_id=${
    client.user.id
    }&scope=bot`;
  console.log(`To add to a new server, visit ${inviteUrl}`);

});

client.on("error", console.error);

(async () => {
  await client.login(credentials.discordToken);
})()


