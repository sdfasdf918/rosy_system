const { Message, Client, MessageEmbed } = require("discord.js");
const probot = require("probot-tax");
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
        let bilestoX = message;
        let argss = bilestoX.content.split(" ").slice(1).join(" ");
    if(!argss) return bilestoX.reply('حط المبلغ لاهبدك')  
    let embed = new MessageEmbed()
    .setColor('00D6FF')
    .addFields(
    {
    name:"`المبلغ المراد دفعه : `", value:`**${argss}**`
    },
    {
    name:"`المبلغ شامل الضريبة :  `", value:`**${probot.taxs(argss)}**`
    },
    )
    .setFooter(`طلب بواسطة : ${bilestoX.author.username}`, `${bilestoX.author.displayAvatarURL()}`)
    .setThumbnail(bilestoX.author.displayAvatarURL())
        bilestoX.channel.send({embeds: [ embed ]});
    },
};
