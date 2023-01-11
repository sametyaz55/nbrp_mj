const config = require("../../../config.json")
const db = require("quick.db");

module.exports = {
    name: "isim",
    aliases: ["i", "nickname"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        var member = message.mentions.users.first() || guild.members.cache.get(args[0]);
        var name =  args.slice(1).join(' ');
        if (!message.member.roles.cache.has(config.registration.staff) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!member) return message.reply({ embeds: [embed.setDescription("Öncelikle geçerli bir kullanıcı belirtmelisin!")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!name) return message.reply({ embeds: [embed.setDescription("Öncelikle geçerli bir isim belirtmelisin!")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        await guild.members.cache.get(member.id).setNickname(`${name}`);
        message.reply({ embeds: [embed.setDescription(`Kullanıcısının ismi \`${name}\` olarak değiştirildi!`)] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    }
}
