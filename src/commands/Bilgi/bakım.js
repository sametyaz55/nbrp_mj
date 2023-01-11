const Discord = require('discord.js');
const moment = require('moment');
const config = require("../../../config.json");
require('moment-duration-format');

    module.exports = {
        name: "bakım",
        aliases: ["bakım"],
        execute: async (client, message, args, embed, author, channel, guild) => {
            if (!message.member.roles.cache.has(config.registration.staff) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        let prometheus = new Discord.MessageEmbed()
      .addField("__**Sunucu Durumu**__", `**Bakımda**`)
      .addField("__**Bakım Sebebi**__", ` **Sunucu Developerlerinin sunucu içerisinde eksik veya hatalı bir script tespit etmesi sonucu sunucu kısa süreliğine bakıma alınmıştır.**`)
      .addField("__**Bakım Süresi**__", ` **Bakımını bitiş tarihi belli değildir.**`)
      .setImage(`${config.serverbilgileri.bakım}`)
      .setColor("RANDOM")
      message.channel.send({ embeds: [prometheus] });
      message.channel.send("@everyone")
}}