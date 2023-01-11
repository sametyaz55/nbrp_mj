const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
require('moment-duration-format');
const config = require("../../../config.json");
module.exports = {
    name: "dca",
    aliases: ["dca", "dca"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        let user = message.mentions.users.first() || guild.members.cache.get(args[0]);
        let yazi = args.slice(1).join(' ');
     if (!user) return message.reply({ embeds: [embed.setDescription('Öncelikle Mesaj Gönderilecek kullanıcıyı belirtmelisin.')] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
     var member = message.mentions.users.first() || guild.members.cache.get(args[0]);
        
     if (!message.member.roles.cache.has(config.registration.staff) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
     if (!member) return message.reply({ embeds: [embed.setDescription("Geçerli bir kullanıcı belirtmelisin!")] });
     db.add(`erkek_${author.id}`, 1)
     db.add(`toplam_${author.id}`, 1)
     

     await guild.members.cache.get(member.id).roles.add(config.roles.seslidestek);
     await guild.members.cache.get(member.id).roles.remove("1045088003997048912")
      message.reply({ embeds: [embed.setDescription(`${member} Kullanıcısına Destek Giriş Rolü Verildi!`)] });
      config.registration.man

     client.channels.cache.get(config.logs.seslidesteklog).send({ embeds: [embed.setDescription(`**Destek Giriş Verildi !**\n**Destek Girişi Veren Yetkili:** ${message.author} (\`${message.author.id}\`)\n**Destek Giriş verilen:** ${member} (\`${member.id}\`)\ `)] });


    
    user.send({ embeds: [embed.setDescription('**Lütfen Destek Beklemeye Geçiniz.** / ***[Night Blue Roleplay]***   `ArtemX Community`   **NB**   `1-Lütfen Desteklerde Küfür ve Argo Kelime Kullanmayınız. `')]}) 



    }
}