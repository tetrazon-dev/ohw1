const Discord = require("discord.js");

const client = new Discord.Client();

const bot = new Discord.Client();

const { RichEmbed } = require("discord.js");

const { promisify } = require("util");

const readdir = promisify(require("fs").readdir);

const chalk = require("chalk");

const fs = require("fs");

const { stripIndents } = require("common-tags");

const moment = require("moment");

const { Client, Util } = require("discord.js");

const db = require("quick.db");

const Jimp = require("jimp");

const ayarlar = require("../ayarlar.json");

const prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  let sahip = ayarlar.sahip; //bak işte

  //busatırrdokdui (message.author.id !== '534046531280699395' || '519183075058515969' || '421951796316209155') return  message.channel.send('Bu Komutu Kullanmak İçin **`Sahibim`** Olman Lazım!')

  if (message.author.id !== "534046531280699395") return;
 

  //  if(message.author.id !== '534046531280699395') return;//doldurur musun üstü

  try {
    var code = args.join(" ");

    var evaled = eval(code);

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    let Embed = new Discord.MessageEmbed()

      .addField("Giriş", "```js\n" + code + "```")

      .setDescription("```js\n" + clean(evaled) + "```");

    if (Embed.description.length >= 2048)
      Embed.description = Embed.description.substr(0, 2042) + "```...";

    return message.channel.send(Embed);
  } catch (err) {
    message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }

  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0
};

exports.help = {
  name: "eval",

  description: "Kod denemek için kullanılır.",

  usage: "eval [kod]"
};
