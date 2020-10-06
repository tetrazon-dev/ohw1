const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
//const Discord = require("discord.js");
var MessageData = [];
module.exports = (client, msg) => {
  if (msg.channel.name === undefined){
  }else{
  if (MessageData[msg.author.id] === undefined) {
    MessageData[msg.author.id] = { MesssageNumber: 0, LastMessage: [] };
    setTimeout(() => {
      delete MessageData[msg.author.id];
    }, 4000);
  }
  MessageData[msg.author.id].MesssageNumber += 1;

  MessageData[msg.author.id].LastMessage.push(msg);


  if (MessageData[msg.author.id].MesssageNumber >= 5) {
    if (msg.deletable) msg.delete();
      const sendeddd = new Discord.MessageEmbed()
    .setColor('ff0000')
    .setTitle('Anti Spam [BETA]')
    .addField('💈 **İnfo**', `\`\`\`${msg.author.tag} (${msg.author.id})\`\`\` \n\n> Stop spamming. You'll be silenced, silencing is permanent. I'M NOT KIDDING!    [**!**]`)
    .setThumbnail(msg.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setFooter(`${msg.author.username} `, msg.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTimestamp();
      msg.channel.send(sendeddd).then(stopspam => {
        setTimeout(() => {
          stopspam.delete();
        }, 3000);
      });
    var isFine = false;
    MessageData[msg.author.id].LastMessage.forEach(msgg => {
      if (msg.channel.id == msgg.channel.id) {
        if (msg.content == msgg.content) {
          isFine = true;
        } else {
          isFine = false;
        }
      }
    });
    if (isFine) {

        const spambed = new Discord.MessageEmbed()
    .setColor('ff0000')
    .setTitle('Anti Spam [BETA]')
    .addField('💈 **İnfo**', `\`\`\`${msg.author.tag} (${msg.author.id})\`\`\` \n\n> Shut the fuck up! You've been silenced, silencing is permanent.    [**!!** & **$**]`)
    .setThumbnail(msg.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setFooter(`${msg.author.username} `, msg.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTimestamp()
        msg.channel.send(spambed);
        msg.channel.bulkDelete("5");
        msg.channel.createOverwrite(msg.author.id, {
                SEND_MESSAGES: false
});
      }
    }
  if (MessageData[msg.author.id] >= 7) {
    if (msg.deletable) msg.delete();
     msg.channel.bulkDelete("6");
      const spambed = new Discord.MessageEmbed()
    .setColor('ff0000')
    .setTitle('Anti Spam [BETA]')
    .addField('💈 **İnfo**', `\`\`\`${msg.author.tag} (${msg.author.id})\`\`\` \n\n> Shut the fuck up! You've been silenced, silencing is permanent.    [**!!** & **$**]`)
    .setThumbnail(msg.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setFooter(`${msg.author.username} `, msg.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTimestamp();
      msg.channel.send(spambed);
      msg.channel.createOverwrite(msg.author.id, {
                SEND_MESSAGES: false
});
    }
  }
};