const { Client, Collection, Intents } = require("discord.js");
const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
const db = require("quick.db")
const Gamedig = require('gamedig');
const { channel } = require("diagnostics_channel");
const fs = require('fs')
const client = global.client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
  ]
});
const config = require("./config.json");
const { readdir } = require("fs");
require("moment-duration-format");
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
client.cooldown = new Map();
client.commandblocked = [];

require("./src/helpers/function")(client);

readdir("./src/commands/", (err, files) => {
  if (err) console.error(err)
  files.forEach(f => {
    readdir("./src/commands/" + f, (err2, files2) => {
      if (err2) console.log(err2)
      files2.forEach(file => {
        let prop = require(`./src/commands/${f}/` + file);
        console.log(`[COMMAND] ${prop.name} yüklendi!`);
        commands.set(prop.name, prop);
        prop.aliases.forEach(alias => {
          aliases.set(alias, prop.name);
        });
      });
    });
  });
});




readdir("./src/events", (err, files) => {
  if (err) return console.error(err);
  files.filter((file) => file.endsWith(".js")).forEach((file) => {
    let prop = require(`./src/events/${file}`);
    if (!prop.conf) return;
    client.on(prop.conf.name, prop);
    console.log(`[EVENT] ${prop.conf.name} yüklendi!`);
  });
});

client.login(config.bot.token)
  .then(() => console.log(`Bot ${client.user.username} olarak giriş yaptı!`))
  .catch((err) => console.log(`Bot Giriş yapamadı sebep: ${err}`));


  client.on('message', (message) => {

    if (message.author.bot) return;
    if (message.content.indexOf(config.bot.prefix) !== 0) return;
    const args = message.content.slice(config.bot.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if (command === "oyuncular") {
      message.delete();
      Gamedig.query({
        type: 'fivem',
        host: config.server.SERVER_IP, 
        port: config.server.SERVER_PORT 
      }).then((state) => {
        let liste = '';
        let i = 0;
        while (i < state.raw.clients) {
          liste = `${liste}` + `${state.players[i].name} ` + `\n`
          i++;
        }
        message.channel.send({ embeds: [embed.setDescription(liste, {split: true})] })
      })
    }
  })




 //   client.on("message", message => {
//     if(message.content.toLowerCase() == ".ip") 
//     return message.channel.send({ embeds: [embed.setDescription(`F8 e connect **"${config.serverbilgileri.ip}"** yazarak giriş sağlayabilirsiniz`)]}) 
//   });
// client.on("message", message => {
//     if(message.content.toLowerCase() == ".ts") 
//     return message.channel.send(`**Teamspeak'i açıp "${config.serverbilgileri.ts}" yazarak ts3'e giriş yapabilirsiniz.**`)
// });
// client.on("message", message => {
//     if(message.content.toLowerCase() == ".dc") 
//     return message.channel.send(`** https://discord.gg/nbrp **  ***[${message.member.displayName}]*** " **Buradan İnsanlar İle Paylaşabilirsin**`)
// });
// client.on("message", message => {
//     if(message.content.toLowerCase() == ".vrf") 
//     return message.channel.send(`:white_check_mark: **Doğrulandı Test Edildi** :white_check_mark: `)
// });
 client.on("message", message => {
     if(message.content.toLowerCase() == ".fix")
     return message.channel.send(` https://share.creavite.co/iNHZyNQQmxWvZgge.gif `).delete
 });
// client.on("message", message => {
//     if(message.content.toLowerCase() == ".bug") 
//     return message.channel.send(`:x: Bug Detected :x:`)
// });

 

