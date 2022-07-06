const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "خط",
    aliases: ["line"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.delete()
        let line = new MessageEmbed()
        .setColor("#05feec")
        .setImage("https://media.discordapp.net/attachments/965937176779046912/972326292462665848/New_Project_214_B3E72CD.gif")
        message.channel.send({ embeds: [line] })
    },
};
