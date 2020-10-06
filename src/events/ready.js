const Discord = require('discord.js');
module.exports = (client,message,args) => {
 var oyun = 
    [
     `🛡️ OhW?! Bu Sunucuyu Koruyor!`, //bu neden olmuyor ya :D
     `🛡️ Tam ${client.guilds.cache.size} sunucuyu koruyor!`, //olum niye olsun paradoxa girer
     `🛡️ Tam ${client.users.cache.size} kullanıcıyı koruyor!`,
     `🐦 #EclipsaDevelop`,
   ]
 //olm komut deniyorum
 //olm bi dur dakmjkdaskjlasd / :D
  var item = oyun[Math.floor(Math.random() * oyun.length)];
 setInterval(function() {
     client.user.setPresence({activity: {name: item, type: 'PLAYING'}, status: 'ONLINE'})
  
 },2 * 6000)


//bekle az kendine gelsin :d
//juni uyuyor hüğğüüü

}