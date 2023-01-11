const Discord = require("discord.js")
const embed = new Discord.MessageEmbed()
const config = require("../../config.json");
module.exports = async (oldState, newState) => {
    const log = client.channels.cache.get(config.logs.seslog);
    if (!log) return;
    if (!oldState.channel && newState.channel) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${newState.channel} adlı sesli kanala girdi!`)]});
    if (oldState.channel && !newState.channel) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${oldState.channel} adlı sesli kanaldan ayrıldı!`)] });
    if (oldState.channel.id && newState.channel.id && oldState.channel.id != newState.channel.id) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ses kanalını değiştirdi! (${oldState.channel} => ${newState.channel})`)] });
    if (oldState.channel.id && oldState.selfMute && !newState.selfMute) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${newState.channel} adlı sesli kanalda kendi susturmasını kaldırdı!`)] });
    if (oldState.channel.id && !oldState.selfMute && newState.selfMute) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${newState.channel} adlı sesli kanalda kendini susturdu!`)] });
    if (oldState.channel.id && oldState.selfDeaf && !newState.selfDeaf) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${newState.channel} adlı sesli kanalda kendi sağırlaştırmasını kaldırdı!`)] });
    if (oldState.channel.id && !oldState.selfDeaf && newState.selfDeaf) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${newState.channel} adlı sesli kanalda kendini sağırlaştırdı!`)] });
    if (oldState.channel.id && !oldState.streaming && newState.channel.id && newState.streaming) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${newState.channel} adlı sesli kanalda yayın açtı!`)] });
    if (oldState.channel.id && oldState.streaming && newState.channel.id && !newState.streaming) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${newState.channel} adlı sesli kanalda yayını kapattı!`)] });
    if (oldState.channel.id && !oldState.selfVideo && newState.channel.id && newState.selfVideo) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${newState.channel} adlı sesli kanalda kamerasını açtı!`)] });
    if (oldState.channel.id && oldState.selfVideo && newState.channel.id && !newState.selfVideo) return log.send({ embeds: [embed.setDescription(`${newState.member} kullanıcısı ${newState.channel} adlı sesli kanalda kamerasını kapattı!`)] });

}






module.exports.conf = {
    name: "voiceStateUpdate"
}