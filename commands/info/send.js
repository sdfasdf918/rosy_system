const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "send",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let channel = client.channels.cache.get(args[0])
        if(!channel){
          return message.channel.send("❌ | **Invalid Channel ID Was Given.**")
        }
    let content = args.slice(1).join(" ")
        if(!content){
        return message.channel.send("❌ | please include something!**")
        }
        let e = new MessageEmbed()
        .setThumbnail(message.guild.iconURL({ dynamic: true}))
        .setColor("00D6FF")
        .setDescription(content)
    channel.send({ embeds: [e] })
    },
};
