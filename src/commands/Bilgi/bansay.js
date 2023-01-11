

  const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../../config.json")
const limit = new Map();
const moment = require("moment");
moment.locale("tr");

module.exports = {
  name: "bansay",
  aliases: ["bansay", "bansay"],
  execute: async (client, message, args, embed, author, channel, guild) => {
    if (!message.member.roles.cache.has(config.registration.staff) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    {
        let guild = message.guild;
    
        guild.bans.fetch()
            .then(bans => message.reply({ embeds: [embed.setDescription(` > 🔐 Sunucunuzda **${bans.size}** banlanmış üye bulunmaktadır!`)] }))

            .catch(console.error);          
      }
    }
};

