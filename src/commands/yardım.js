const Discord = require("discord.js");
const db = require("quick.db")
const database = ('../database.json')
const data = ('../database.js')
exports.run = async (client, message, args) => {

 const ayarlar = require("../ayarlar.json")
var prefix =ayarlar.prefix;
 let kategori = args[0]
 
 let dil =  db.fetch(`dil.${message.guild.id}`)

if(dil === "tr-TR") {
  const yardım = new Discord.MessageEmbed()
  .setColor('#473c8b')
  .setAuthor(`#EclipsaDevelop`,client.user.avatarURL())

.setDescription(`Selam Dostum?! **${message.guild.name}** adlı sunucunu korumak için elimden gelenin fazlasını yapacağım ;) \n
**<a:hype:736591570450513980> ${prefix}yardım kanal-koruma ➤** Kanal Koruma yardım menüsü.
**<a:nitro:736670765201621053> ${prefix}yardım rol-koruma ➤** Rol Koruma yardım menüsü.
**<a:elmas:722921348502126733> ${prefix}yardım spam-koruma ➤** Spam Koruma yardım menüsü.
**<a:papagan:722920881302536263> ${prefix}yardım token-koruma ➤** Token Koruma yardım menüsü.
**<a:ates:722920849409310811> ${prefix}yardım caps-koruma ➤ **Caps Koruma yardım menüsü.`)
  .setThumbnail(client.user.avatarURL())
 
 .setFooter(`${message.author.username} Tarafından istendi`,message.author.avatarURL())

if(!kategori) {
  message.channel.send(yardım)
 }

    //-----------------------------------Komut-Mute---------------------------------------
   const aa= new Discord.MessageEmbed()
    
    .setThumbnail(client.user.avatarURL())
     .addFields()
 if(kategori == 'aa') message.channel.send(aa)
}
  if(dil === "en-EN") {
  const yardım = new Discord.MessageEmbed()
  .setColor('#473c8b')
  .setAuthor(`#EclipsaDevelop`,client.user.avatarURL())

.setDescription(`Hi buddy ?! ** I will do my best to protect the **${message.guild.name}** server;) \n
**${prefix} help channel-protect ➤** Channel Guard help Menu.
**${prefix} help role-protect ➤** Role Protection help Menu.
**${prefix} help spam-protection ➤** Spam Protection help Menu.
**${prefix} help token-protect ➤** Token Protection help Menu.
**${prefix} help caps-protection ➤** Caps Protection help Menu.`)
  .setThumbnail(client.user.avatarURL())
 
 .setFooter(`Rewuested by ${message.author.username}`,message.author.avatarURL())

if(!kategori) {
  message.channel.send(yardım)
 }

    //-----------------------------------Komut-Mute---------------------------------------
   const aa= new Discord.MessageEmbed()
    
    .setThumbnail(client.user.avatarURL())
     .addFields()
 if(kategori == 'aa') message.channel.send(aa)
}


};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['help'],
    permLevel: 0
};  
  

exports.help = {
  name: "yardım",

}
