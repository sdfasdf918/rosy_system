const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "",
    aliases: [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(message.author.bot) return;
        let chID = "965758265134841886"
        let channel = client.channels.cache.get(chID)
        
    if(!channel) return;
    if(!chID.includes(message.channel.id)) return;
        
        else {
        let he = new MessageEmbed()
        .setTitle("اقتراح جديد!")
        .setColor("#00e6ff")
        .setThumbnail(message.guild.iconURL({dynamic:true}))
        .setFooter(`تمت كتابة الاقتراح من قبل: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(message.content)
        message.delete()
        channel.send(he).then(m => {
        m.react("✅")
        m.react("❌")
        });
    }
    },
};
