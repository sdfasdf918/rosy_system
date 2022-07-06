const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "m",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let Yukimaru = "";
        Yukimaru = message;
        const user = Yukimaru.mentions.users.first()
        if(!user) return Yukimaru.channel.send("**منشن الشخص     :face_with_monocle:**")
        const argss = Yukimaru.content.split(" ").slice(2).join(" ");
        if(!argss) return Yukimaru.channel.send("**Provide me a الرسالة :face_with_monocle:**")
        user.send(argss)
        Yukimaru.channel.send(`**Done : ${user} :white_check_mark: \n\الرسالة: \`${argss}\`**`)
    },
};
