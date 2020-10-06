const Discord = require('discord.js');
const db = require('quick.db')

   exports.run = async(message, args, bot) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("[`!`] Yetkin yok ama be :/ Admin olsan keşke.")
 if (message.member.hasPermission("MANAGE_MESSAGES")) {
   const guild = new Discord.MessageEmbed()
   .setColor('1FAB89')
   .setTitle(`Sunucu: ${message.guild.name} [${message.guild.memberCount}]`)
   .setDescription('[İletişim](https://discord.gg/ekqtHkb)')
   message.channel.send(guild)
 }

    }

exports.help = {
  name: "guild",
  guildOnly: true,
  enabled: true,
  aliases: ['k']
};
  
