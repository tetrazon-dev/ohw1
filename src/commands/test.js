const Discord = require('discord.js');
const db = require('quick.db')
const database = ('../database.json')
const data = ('../database.js')
exports.run = async(client, message, args) => { 
/////////////////////////////// [start] 
  //
  let dev = await db.fetch(`test_${message.author.id}`)
  let key = await db.fetch(`key_${message.author.id}`)
if (key == null) return message.channel.send('[`!`] Bir anahtara ihtiyacın var.')
if(key == "allow") {
  if(dev == null) {
    db.add(`test_${message.author.id}`, 1)
    console.log(`${message.author.id} isimli kullanıcının test sayısı "0" olarak ayarlandı.`)
     message.channel.send("[`!`] Daha önce hiç test komutu kullanmamıştınız. Hane sayınızı ayarladık.")
      return message.channel.send("[`!`] Hane sayınızı ayarladığımız için komutu kullanmaya devam edebilmek için tekrar kullanmanız lazım.")
  }
  if (dev > 0) {
      db.add(`test_${message.author.id}`, 1)
       message.channel.send("[`!`] `" + message.author.tag + "`, test komutunu kullandığınız için teşekkürler. Toplam test adeti; **" + dev + "**.")
    let deneme = new Discord.MessageEmbed().setTitle("Hello World!")
        return message.channel.send(deneme)
      }
  if (dev == 0) {
   db.add(`test_${message.author.id}`, 1)
  let deneme = new Discord.MessageEmbed().setTitle("Hello World!")
    message.channel.send("[`!`] `" + message.author.tag + "`, test komutunu kullandığınız için teşekkürler. Toplam test adeti; **" + dev + "**.")
     return message.channel.send(deneme)
      return message.reply(data.veri.deneme)
    
  }
}
  //
/////////////////////////////// [end] 
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: '',
  permLevel: 0
};
exports.help = {
  name: 'tst',
  isim: 'Avatar',
  süre: 'Yok',
  description: 'Avatarınızı gösterir ve ya birini etiketlerseniz o kişinin avatarını gösterir.',
  usage: 'avatar <@kullanıcı>'
};