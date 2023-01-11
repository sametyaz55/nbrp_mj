const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
require('moment-duration-format');
const config = require("../../../config.json");
module.exports = {
    name: "dm",
    aliases: ["dm", "dm"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        let user = message.mentions.users.first() || guild.members.cache.get(args[0]);
        let yazi = args.slice(1).join(' ');
     if (!user) return message.reply({ embeds: [embed.setDescription('Öncelikle Mesaj Gönderilecek kullanıcıyı belirtmelisin.')] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (yazi.length < 1) return message.reply({ embeds: [embed.setDescription('Öncelikle geçerli bir sebep belirtmelisin.')] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    
    user.send(yazi)


    }
}