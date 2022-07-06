const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "عجله",
    aliases: ['دايره'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setTitle(`Title`)//بداية راسلة
          .setDescription(` **SPIN $ = 40k
        SPIN $$ = 95k 
        SPIN $$$ = 150k ** `)//وصف رسالة
        .setFooter(`**BLACK SHOP**`)//نهاية رسالة
        .setColor("#00e6ff")//لون رسالة 
        
        message.channel.send({embeds: [embed]})
    },
};
