const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  
  
  
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    message.channel.send("```Ne yazık ki bu komutu kullanmaya yetkin yok.```");
    return;
  }
 let user =  message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!user) return message.channel.send(`Uyaracağım kişiyi etiketlemelisin`)
  let warn = args.slice(1).join(' ')
return message.channel.send(`${user} adlı kişi uyarıldı. Toplam Uyarı sayısı : Error!`)
  
  user.send(`${message.guild.name} adlı sunucuda uyarıldın.Sebep: ${warn}.`)
  

  
}
exports.help = {
  name:"uyar",
}