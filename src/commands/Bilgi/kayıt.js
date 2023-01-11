const Discord = require('discord.js');
const ms = require('ms')
const config = require("../../../config.json")



module.exports = {
    name: "kayıt",
    aliases: ["kayıt mesajı atar"],
    execute: async (client, message, args) => {
      if (!message.member.roles.cache.has(config.registration.unregistered) && !message.member.permissions.has(8)) return
      
      message.channel.send(`**Kayıt Bekleme Odasına Geçerek Bekleyebilirsiniz , Müsait Olan Bir Yetkilimiz Sizinle İlgilenecektir.||<@&${config.registration.staff}>||**`)
      }
      
    }
