const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../../config.json")
module.exports = {
    name: "blacklist",
    aliases: ["bl", "black", "forcejail"],
    execute: async (client, message, args, embed, author, channel, guild) => {


        let member = message.mentions.members.first() || guild.members.cache.get(args[0]);
        if (!message.member.roles.cache.has(config.registration.staff) && !message.member.roles.cache.has(config.registration.staff) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanmak için geçerli yetkin olmalı!")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if(!member) { message.reply({ embeds: [embed.setDescription("Öncelikle geçerli bir üye belirtmelisin.")] });
        return }
        if (!message.member.permissions.has(8) && member && member.roles.highest.position >= message.member.roles.highest.position) return message.reply({ embeds: [embed.setDescription("Kendinle aynı yetkide ya da daha yetkili!")] })
        if(message.author.id === member.id){ message.reply({ embeds: [embed.setDescription("Kendinizi Blacklist atamazsınız.")] });
        return}

        await member.roles.cache.has(config.roles.booster) ? member.roles.set(["924294243286151190"]) : member.roles.set(["924294243286151190"]).catch()
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısı başarıyla kayıtsıza <@&${"924294243286151190"}> atıldı.`)] });
        client.channels.cache.get(config.logs.blacklist).send({ embeds: [embed.setDescription(`**Blackliste Alındı !**\n**BLACKLİST Atan Yetkili:** ${message.author} (\`${message.author.id}\`)\n**BLACKLİST'E Alınan:** ${member} (\`${member.id}\`)\ `)] });


    }
}