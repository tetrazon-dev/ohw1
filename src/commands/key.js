const Discord = require('discord.js');
const database = ("../database.js")
const db = require('quick.db')

   exports.run = async(message, args, bot) => {
if (!message.member.hasPermission('MANAGE_MESSAGES', { checkAdmin: false, checkOwner: false })) return message.channel.send()

    }

exports.help = {
  name: "kick",
  guildOnly: true,
  enabled: true,
  aliases: ['k']
};
  
