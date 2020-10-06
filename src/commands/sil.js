const Discord = require('discord.js');
const db = require('quick.db')
exports.run = function(client, message, args) {
  
  
  


  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setDescription(`Bu Komutu Kullanmak İçin İzniniz Yok! <a:elmas:711253709707018310>`)
  .setFooter(`Ceo`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('[`!`] Bu komut MESAJLARI YÖNET yetkisi için kullanılabilir kılınmıştır.')
  if(message.member.hasPermission("MANAGE_MESSAGES")) {
if(!args[0]) return message.channel.send("**Uzaya fırlatabileceğim mesaj miktarını yazar mısın ? **<a:download:711253676370427974> ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajı Sildim.`).then(m => { setTimeout(function(){  m.delete( ) }, 5000) });
})
};
  




}
 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['delete'],
  permLevel: 0
};

  exports.help = {
  name: "sil",
  aliases: ['s'],
}