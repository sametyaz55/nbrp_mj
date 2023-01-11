const Discord = require('discord.js')
var steamidResolver = require("steamid-resolver");
const heaven = require('heaven.hex');


  module.exports = {
      name: "hex",
      aliases: ["hex"],
      execute: async (client, message, args, embed, author, channel, guild) => {
	const link = args[0];
	const steamids = link.split('/')[3];
	
	if (steamids == "profiles") {
		function responseFull(err, callback, funcname, type, testval1, testval2) {
			if (err) return console.log(`${funcname} error: ${err}`)
			
			if (type == "profile") {
				
				  hex = heaven.steamhexhesapla("https://steamcommunity.com/profiles/"+callback.steamID64[0],{steamprefix:false});
				  user = callback.steamID[0];
				  
				  const uembed = new Discord.MessageEmbed()
				  .setThumbnail(callback.avatarMedium[0])
				  .setTitle(`Steam Bilgileri`)
				  .addField(`Steam Link`, link, false)
				  .addField(`SteamID64`, callback.steamID64[0], false)
				  .addField(`Steam HEX ID`,'steam:' + hex, false)
				  .setColor('RANDOM')
				  channel.send({ embeds: [uembed] });
				  
			} else if (type == "group") {
				if (Object.keys(callback).length > 5 && callback.groupDetails[0].groupURL[0] == testval1 && callback.groupID64[0] == testval2) console.log(`${funcname} ok.`)
					else console.log("group")
			}
		}

		steamidResolver.steamID64ToFullInfo(link, (err, info) => responseFull(err, info, "steamID64ToFullInfo", "profile"))
	} else if (steamids == "id") {
		function responseFull(err, callback, funcname, type, testval1, testval2) {
			if (err) return console.log(`${funcname} error: ${err}`)
			
			if (type == "profile") {
				
				  hex = heaven.steamhexhesapla("https://steamcommunity.com/profiles/"+callback.steamID64[0],{steamprefix:false});
				  user = callback.steamID[0];
				  
				  const uembed = new Discord.MessageEmbed()
				  .setThumbnail(callback.avatarMedium[0])
				  .setTitle(`Steam Bilgileri`)
				  .addField(`Steam Link`, link, false)
				  .addField(`SteamID64`, callback.steamID64[0], false)
				  .addField(`Steam HEX ID`,'steam:' + hex, false)
				  .setColor('#RANDOM')
				  channel.send({ embeds: [uembed] });
			} else if (type == "group") {
				if (Object.keys(callback).length > 5 && callback.groupDetails[0].groupURL[0] == testval1 && callback.groupID64[0] == testval2) console.log(`${funcname} ok.`)
					else console.log("group")
			}
		}

		steamidResolver.customUrlToFullInfo(link, (err, info) => responseFull(err, info, "customUrlToFullInfo", "profile"))
	}
	
	
}}