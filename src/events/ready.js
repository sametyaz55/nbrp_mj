const config = require("../../config.json");
const { joinVoiceChannel } = require("@discordjs/voice");
const db = require("quick.db");
const fivereborn = require('fivereborn-query'); 

const client = global.client;

module.exports = () => {
 
	 function activity(){
        setTimeout(() => {
            fivereborn.query(config.server.SERVER_IP,config.server.SERVER_PORT, (err, data) => {
                if (err) {
                    return console.log(err);
                } else {
                    client.user.setActivity(`NBRolePlay`, { type: "PLAYING" });
                }
            });
            activity();
        }, 1000);
    }
    activity()

    const VoiceChannel = client.channels.cache.get(config.channels.voicechannel);
	joinVoiceChannel({
		channelId: VoiceChannel.id,
		guildId: VoiceChannel.guild.id,
		adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
		selfDeaf: true
	});

    
}

module.exports.conf = {
    name: "ready"
}
