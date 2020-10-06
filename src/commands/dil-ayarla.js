const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")

exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Bu komutu kullanmak için **Yönetici** yetkisine sahip olmalısın.")

let dil = args[0]
let diller = ["tr-TR","en-EN"]

if(!dil) return message.channel.send(":x: Bir dil belirtmelisin.Diller `tr-TR , en-EN`")
if(!diller.includes(dil)) return message.channel.send(":x: Doğru bir dil belirtmelisin.Diller `tr-TR , en-EN`")

let msg;
if(dil === "tr-TR") msg = ":flag_tr: Bot dili **tr-TR** olarak ayarlandı!"
else msg = ":united_nations: Bot language is set to **en-EN**"

message.channel.send(msg)
db.set(`dil.${message.guild.id}`, dil)


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["language"],
  permLevel: 0
};

exports.help = {
  name: 'dil',
  description: 'Kod denemek için kullanılır.',
  usage: 'dil'
};