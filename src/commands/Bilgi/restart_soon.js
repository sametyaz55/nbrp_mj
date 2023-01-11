//Hiçbirşey İle Oynama Sadece 19. Satırda Renk İle Oyna
//Dev By. Mollner

const Discord = require('discord.js');
const moment = require('moment');
const config = require("../../../config.json");
require('moment-duration-format');

    module.exports = {
        name: "res",
        aliases: ["res,r"],
        execute: async (client, message, args, embed, author, channel, guild) => {
            if (!message.member.roles.cache.has(config.registration.staff) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        let prometheus = new Discord.MessageEmbed()
      .addField("__**Sunucu Durumu**__", `**RESTART**`)
      .addField("__**Restart Sebebi**__", ` **Sunucuda Değiştirilen Scriptin Aktifliği Yada Rutin Bir Restart**`)
      .addField("__**Restart Süresi**__", ` **1-5 Dakika'dır**`)
	  .addField("__**Restart Saatleri**__", ` **RES SAATLERİ 18:00 | 23:00 | 03:00 / İSTİSNALAR OLABİLİR** `)
      .addField("__**BİLGİLENDİRME**__", ` **Sunucudan Çıkış Sağlamadığınız Takdirde DATA'nızdan Silinme Olabilir.(Biz Sorumlu Değiliz)**`)
      .setImage(`${config.serverbilgileri.res}`)
      .setColor("RANDOM")
      message.channel.send({ embeds: [prometheus] });
      message.channel.send("@everyone")
}}
