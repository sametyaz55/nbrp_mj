const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../../config.json")
const moment = require("moment");
moment.locale("tr");

module.exports = {
    name: "onay",
    aliases: ["onay", "onay", "onay"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        var member = message.mentions.users.first() || guild.members.cache.get(args[0]);
        
        if (!message.member.roles.cache.has(config.registration.staff) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!member) return message.reply({ embeds: [embed.setDescription("Geçerli bir kullanıcı belirtmelisin!")] });
        db.add(`erkek_${author.id}`, 1)
        db.add(`toplam_${author.id}`, 1)
        

        await guild.members.cache.get(member.id).roles.add(config.roles.karakteronayrol);
        await guild.members.cache.get(member.id).roles.remove("1045088003997048912")
         message.reply({ embeds: [embed.setDescription(`${member} Kullanıcısına Karakter Onay Rolü Verildi!`)] });
        

        client.channels.cache.get(config.logs.karakteronay).send({ embeds: [embed.setDescription(`**Karakter Onay Verildi !**\n**Onay Veren Yetkili:** ${message.author} (\`${message.author.id}\`)\n**Onay verilen:** ${member} (\`${member.id}\`)\ `)] });

       
    }
}



