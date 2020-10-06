const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  
  
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    message.channel.send("```Ne yazık ki bu komutu kullanmaya yetkin yok.```");
    return;
  }


  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send("Lütfen atılacak kişiyi etiketleyiniz!");
  }
  let sebep = args.slice(1).join(' ');
  if(u.id === "738056790612246539") return message.channel.send(`[!] Kendimi kickleyemem`)
  if(u.id === message.guild.owner.id) return message.channel.send(`[!] Sunucu Sahibini kicklemek mi ? Aklından bile geçirmesen iyi olur.`)
  
  

        message.guild.member(u).kick();
   message.channel.send(`${u} Adlı kişi sunucudan atıldı?!`)
  
//const embed = new Discord.MessageEmbed().setColor('RANDOM').setTitle('Kick Log').setDescription(`Kicklenen : ${u} Kicklenme sebebi : ${sebep || `Sebep Belirtilmemiş`} Kickleyen yetkili : ${message.author.username}` ) 
//message.channel.send(embed)  

   }




module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};
