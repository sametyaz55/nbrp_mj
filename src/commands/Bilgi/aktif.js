const Discord = require('discord.js');
const moment = require('moment');
const config = require("../../../config.json");
require('moment-duration-format');

  module.exports = {
      name: "aktif",
      aliases: ["aktif"],
      execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.roles.cache.has(config.registration.staff) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        let prometheus = new Discord.MessageEmbed()
      .addField("__**Sunucu Durumu**__", `**Aktif**`)
      .addField("__**Giriş**__", `**F8 e connect ${config.serverbilgileri.ip} yazarak giriş sağlayabilirsiniz**`)
      .addField("__**SaltyChat Sürümü**__", `**<#${config.serverbilgileri.tskanal}> Kanalından Sürümü Güncelleyebilirsiniz veya kurulum yapabilirsiniz.**`)
      .addField("__**Teamsepak3**__", `**Ts3'ü açıp " ${config.serverbilgileri.ts}" yazarak ts3'e giriş yapabilirsiniz.**`)
          .setImage(`${config.serverbilgileri.aktif}`)
      .setColor("RANDOM")
      message.channel.send({ embeds: [prometheus] });
      message.channel.send("@everyone")
      
}}