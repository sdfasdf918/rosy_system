const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "spin$$$",
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
 
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 100k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 120k**",
    
    "**You win 140k**",
    
    "**You win 140k**",
    
    "**You win 140k**",
    
    "**You win 140k**",
    
    "**You win 140k**",
    
    "**You win 140k**",
    
    "**You win 140k**",
    
    "**You win 140k**",
    
    "**You win 140k**",
    
    "**You win 155k**",
    
    "**You win 155k**",
    
    "**You win 175k**",
    
    "**You win 195k**",
    
    "**You win 205k**",
    
    "**You win 215k**",
    
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
        
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
    
    "**???? ???????? ????**",
        
        "**?????? ?????????? ????????????**",
    
        "**?????? ?????????? ????????????**",
    
        "**?????? ?????????? ????????????**",
    
        "**?????? ?????????? ????????????**",
    
        "**?????? ?????????? ????????????**"
    
        
    ]
    if (msg.author.bot) return
        let role = msg.member.roles.cache.some(role => role.name === "high staff")
        if (!role) {
          msg.channel.send("??? | **???? ???????? ???????? `high staff`**")
        }
        else {
          var result = word[Math.floor(Math.random() * word.length)];
          msg.channel.send("???? | **?????? ?????????? ???????? ????????...**").then(msg.channel.startTyping()).then(m => {
            setTimeout(function() {
            m.delete()
            let embed = new MessageEmbed()
                .setTitle("?????????")
                .setDescription(result)
                .setThumbnail(msg.guild.iconURL({ dynamic: true }))
                .setColor("#00E7FF")
                .setFooter("???????? ??????")
            msg.channel.send({embeds: [ embed ]})
            msg.channel.stopTyping()
            }, 2300);
        });
        }
    
    },
};
