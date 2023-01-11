const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../../config.json")
module.exports = {
    name: "unregistered",
    aliases: ["unreg", "wlal", "kayıtsız"],
    execute: async (client, message, args, embed, author, channel, guild) => {


        let member = message.mentions.members.first() || guild.members.cache.get(args[0]);
        if (!message.member.roles.cache.has(config.registration.staff) && !message.member.roles.cache.has(config.registration.staff) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanmak için geçerli yetkin olmalı!")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if(!member) { message.reply({ embeds: [embed.setDescription("Öncelikle geçerli bir üye belirtmelisin.")] });
        return }
        if (!message.member.permissions.has(8) && member && member.roles.highest.position >= message.member.roles.highest.position) return message.reply({ embeds: [embed.setDescription("Kendinle aynı yetkide ya da daha yetkili!")] })
        if(message.author.id === member.id){ message.reply({ embeds: [embed.setDescription("Kendinizi kayıtsıza atamazsınız.")] });
        return}

        await member.roles.cache.has(config.roles.booster) ? member.roles.set([config.roles.booster, config.registration.unregistered]) : member.roles.set([config.registration.unregistered]).catch()
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısı başarıyla kayıtsıza <@&${config.registration.unregistered}> atıldı.`)] });
        client.channels.cache.get(config.logs.whitelistlog).send({ embeds: [embed.setDescription(`**Whitelist Alındı !**\n**Whitelist Alan Yetkili:** ${message.author} (\`${message.author.id}\`)\n**whitelist Alınan:** ${member} (\`${member.id}\`)\ `)] });


    }
}