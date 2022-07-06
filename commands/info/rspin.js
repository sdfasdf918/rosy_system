const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "rspin",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      let msg = message;
  var word = [

    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
        
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 5k**",
    
    "**You win 10k**",
    
    "**You win 15k**",
    
    
    "**♻️ إعادة محاولة"
    
    ]
    if (msg.author.bot) return
    
        let role = msg.member.roles.cache.some(role => role.name === "Staff")
        if (!role) {
          msg.channel.send("❌ | **ما معاك رتبة `staff`**")
        }
        else {
          var result = word[Math.floor(Math.random() * word.length)];
    
          msg.channel.send("🎲 | **جار تدوير عجلة الحظ...**").then(m => {
            setTimeout(function() {
            m.delete()
    
            let embed = new MessageEmbed()
                .setTitle("𝑹𝒆𝒘𝒂𝒓𝒅")
                .setDescription(result)
                .setThumbnail(msg.guild.iconURL({ dynamic: true }))
                .setColor("#00E7FF")
    
                .setFooter("𝑩𝑺 ❦︎")
    
    
    
            msg.channel.send({embeds: [ embed ]})
            }, 2300);
          });
        }
    
    },
};
