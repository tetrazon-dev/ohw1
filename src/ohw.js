const Discord = require('discord.js')
const client = new Discord.Client();
const express = require("express");
const db = require("quick.db");
const Dashboard = require('/app/dashboard/dashboard.js')
const ayarlar = require("/app/src/ayarlar.json")
const config = require("/app/src/config");
const Constants = require("/app/src/Constants");
const database = ("../database.json")
const data = ("../database.js")
const app = express();

const fs = require("fs");
var prefix = ayarlar.prefix;
client.config = config;
Constants.sa = Constants;
//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("/app/src/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`/app/src/commands/${file}`);
    let cmdFileName = file.split(".")[0];
    client.commands.set(cmd.help.name, cmd);
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    if (!cmd.help.aliases) {
    } else {
      cmd.help.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
    }
    ;
  });
});

const kaynak = {
  hata: ['%3v%ip%{locale_ip}.list', ' %8hs%dos%{os-central}.list', 'lim_{n\to\infty} d^n/dt^n e^t', 'Bu 4', 'Bu 5', 'Bu 6', 'Bu 7', 'Bu 8', 'Bu 9', 'Bu 10', 'Sayıları 0 dan 10 a kadar öğrendin mi?','Bu <@534046531280699395>'],
  ilaç: [
  "0x9021092",
  "0x9173919",
  "0x0381921",
  "0x0900821",
  "0x6727709",
  "0x9098124",
  "0x0977762",
  "0x4215829",
  "0x0428428",
  "0x9032900",
  "0x0949030",
  "0x8732783"],
  deneme: "deneme"
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("/app/src/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`/app/src/events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on('message', async msg => {
  let ilac = kaynak.ilaç[Math.floor(Math.random() * kaynak.ilaç.length)];
if (msg.content === '?' + 'vt'){
 msg.reply(`Sayı: ` + kaynak.hata[Math.floor(Math.random() * kaynak.hata.length)])
// msg.reply(data.veri.deneme)
 msg.reply(data.permHata.perm1)
 msg.reply(data.imleç.onayİmleç)
}
});
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;
	const { d: data } = event;
	const anto = client.users.get(data.user_id);
	const channel = client.channels.get(data.channel_id) || await anto.createDM();
	if (channel.messages.has(data.message_id)) return;
	const message = await channel.fetchMessage(data.message_id);
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	const reaction = message.reactions.get(emojiKey);
	client.emit(events[event.t], reaction, anto);
});

client.on('messageReactionAdd', (reaction, user) => {
  if (reaction.message.id == "MesajID") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.
    if (reaction.emoji.name == "Emoji") {//Dilediğini emojiyi koyabilirsiniz.
      reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.find('name', 'Rol'))//Dilediğiniz rolün adını yazabilirsiniz.
	}
	if (reaction.emoji.name == "Emoji") {//Dilediğiniz emojiyi koyabilirsiniz.
	  reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.find('name', 'Rol'))//Dilediğiniz rolün adını yazabilirsiniz.
	}
	if (reaction.emoji.name == "Emoji") {//Dilediğiniz emojiyi koyabilirsiniz.
		reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.find('name', 'Rol'))//Dilediğiniz rolün adını yazabilirsiniz.
	  }
    	if (reaction.emoji.name == "Emoji") {//Dilediğiniz emojiyi koyabilirsiniz.
		reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.find('name', 'Rol'))//Dilediğiniz rolün adını yazabilirsiniz.
	  }
  }
});


client.on('messageReactionRemove', (reaction, user) => {
	if (reaction.message.id == "MesajID") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.
	  if (reaction.emoji.name == "Emoji") {//Dilediğiniz emojiyi koyabilirsiniz.
		reaction.message.guild.members.get(user.id).removeRole(reaction.message.guild.roles.find('name', 'Rol'))//Dilediğiniz rolün adını yazabilirsiniz.
	  }
	  if (reaction.emoji.name == "Emoji") {//Dilediğiniz emojiyi koyabilirsiniz.
		reaction.message.guild.members.get(user.id).removeRole(reaction.message.guild.roles.find('name', 'Rol'))//Dilediğiniz rolün adını yazabilirsiniz.
	  }
	  if (reaction.emoji.name == "Emoji") {//Dilediğiniz emojiyi koyabilirsiniz.
		  reaction.message.guild.members.get(user.id).removeRole(reaction.message.guild.roles.find('name', 'Rol'))//Dilediğiniz rolün adını yazabilirsiniz.
		}
     if (reaction.emoji.name == "Emoji") {//Dilediğiniz emojiyi koyabilirsiniz.
		  reaction.message.guild.members.get(user.id).removeRole(reaction.message.guild.roles.find('name', 'Rol'))//Dilediğiniz rolün adını yazabilirsiniz.
		}
	}
  });
client.login(process.env.TOKEN); 


