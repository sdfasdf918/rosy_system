const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "spin$$",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
            let msg = message
        var word = [

            "**You win 60k **",
            
            "**You win 60k **",
            
            "**You win 60k **",
            
            "**You win 60k **",
            
            "**You win 60k **",
            
            "**You win 60k **",
            
            "**You win 60k **",
            
            "**You win 75k **",
            
            "**You win 75k **",
            
            "**You win 75k **",
            
            "**You win 75k **",
            
            "**You win 75k **",
            
            "**You win 85k **",
            
            "**You win 85k **",
            
            "**You win 85k **",
            
            "**You win 95k **",
            
            "**You win 95k **",
            
            "**You win 100k **",
            "**You win 120k **",
            "**You win 130k **", 
            "**حظ اوفر 💔**",
            "**حظ اوفر 💔**",
            
            "**حظ اوفر 💔**",
            
            "**حظ اوفر 💔**",
            
            "**حظ اوفر 💔**",
            
            "**حظ اوفر 💔**",
                "**♻️ إعادة محاولة**",
                "**♻️ إعادة محاولة**",
                "**♻️ إعادة محاولة**",
                "**♻️ إعادة محاولة**",
                "**♻️ إعادة محاولة**"
            ]
            if (msg.author.bot) return
                let role = msg.member.roles.cache.some(role => role.name === "high staff")
                if (!role) {
                  msg.channel.send("❌ | **ما معاك رتبة `high staff`**")
                }
                else {
                  var result = word[Math.floor(Math.random() * word.length)];
            
                  msg.channel.send("🎲 | **جار تدوير عجلة الحظ...**").then(msg.channel.startTyping()).then(m => {
                    setTimeout(function() {
                    m.delete()
                    let embed = new MessageEmbed()
                        .setTitle("✯✯")
                        .setDescription(result)
                        .setThumbnail(msg.guild.iconURL({ dynamic: true }))
                        .setColor("#00E7FF")
                        .setFooter("𝑩𝑺 ❦︎")
                    msg.channel.send({ embeds: [ embed ]})
                    msg.channel.stopTyping()
                    }, 2300);
                });
                }
            
    },
};
