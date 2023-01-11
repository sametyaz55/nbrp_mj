



const Discord = require("discord.js");
const config = require("../../../config.json");

module.exports = {
    name: "rolal",
    aliases: ["rolal"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || config.bot.prefix
        if (!message.member.roles.cache.has(config.yetki.rolveral) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanabilmek için geçerli yetkin olmalı")] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 10000));
                              
        const rollog = message.guild.channels.cache.find(c => c.id === config.logs.rollog)//Ban log kanalı  
                            
                            
                            
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.id == args.slice(1).join(' '));
        if (!member) return message.reply({ embeds: [embed.setDescription("Lütfen bir kullanıcıyı etiketleyininiz.")] });
        if (!role) return message.reply({ embeds: [embed.setDescription("Geçerli bir rol belirtmelisin.")] });
          if (message.member.roles.highest.comparePositionTo(role) < 1) {
          return  message.reply({ embeds: [embed.setDescription("Alınacak rol sizin rolünüzün üstünde bu yüzden rolü **Alamıyorum!**")] });
          }
        
          try{
        await (member.roles.remove(role.id))

        let prometheus = new Discord.MessageEmbed()
        .setDescription(`${member} isimli üyeye ${role} isimli yetki başarıyla alındı!`)
        .setColor('#D2EE07')
        message.channel.send({ embeds: [prometheus] });
        
        let prometheuss = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setDescription(`**Rol Alındı !**\n**Alan Yetkili:** ${message.author} (\`${message.author.id}\`)\n**Alınan Üye:** ${member.user} (\`${member.user.id}\`)\n**Alınan Rol:** ${role}`);
        rollog.send({ embeds: [prometheuss] });        

          } catch (e) {
            console.log(e);
            message.channel.send('Hata oluştu!');
          }
        }}


