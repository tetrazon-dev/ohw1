
const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
const ayarlar = ('./ayarlar.json')
require("moment-duration-format");

exports.run = async (client, message, args) => {
 let sahip = ['421951796316209155']
 if(sahip)return message.channel.send(uyarı)
    const uyarı = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`Uyarı!!`)
    .setDescription(`<a:uyar:722920838696927272> | Bu komut **sahiplerime** özeldir`)
    message.channel.send(uyarı)
  
    if(!sahip) return  message.channel.send(uyarı)
   const reb = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Reboot`)
    .setDescription(`<a:yukleniyor1:722920982914007172> **|** Reboot işlemi gerçekleştiriliyor...`)
    message.channel.send(reb)
     .then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
    })
     
    
  
}
exports.help = {
  name: "reboot",
  guildOnly: true,
  perms: ['MANAGE_MESSAGE'],
  enabled: true,
  aliases: ['r']
};
  
