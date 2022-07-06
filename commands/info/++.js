const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "++",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send("**الـتـحـويـل لــ <@916122720419348550>. فـقـط .**")
    },
};
