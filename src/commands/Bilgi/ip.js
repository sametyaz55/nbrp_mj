//IPSS
//Burada Sadece 17. Satıra Renk Ekleyin Başka Birşey Yapmayın !!!
const Discord = require('discord.js');
const moment = require('moment');
const config = require("../../../config.json");
require('moment-duration-format');

  module.exports = {
      name: "ip",
      aliases: ["ts"],
      execute: async (client, message, args, embed, author, channel, guild) => {
        let prometheus = new Discord.MessageEmbed()
      .addField("__**Giriş**__", `**F8 e connect ${config.serverbilgileri.ip} yazarak giriş sağlayabilirsiniz**`)
      .addField("__**Teamsepak3**__", `**Ts3'ü açıp " ${config.serverbilgileri.ts}" yazarak ts3'e giriş yapabilirsiniz.**`)
      .addField("__**SaltyChat Sürümü**__", `**<#${config.serverbilgileri.tskanal}> Kanalından Sürümü Güncelleyebilirsiniz veya kurulum yapabilirsiniz.**`)
      .setImage(`${config.serverbilgileri.ippng}`)
      .setColor("#1e81b0")
      message.channel.send({ embeds: [prometheus] });

      
}}