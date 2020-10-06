const Discord = require('discord.js');
const mongoose = require('mongoose');
const Sa = require('/app/database.js')
mongoose.connect('ohw.fsmq5.gcp.mongodb.net:27017/naber.as')
   exports.run = async(message, args, bot) => {



  
   
   const sa = new Sa({
     sa: 'naber'
   });
sa.save()
     .then(rresult => console.log(rresult))

   };
    

exports.help = {
  name: "ads",
  guildOnly: true,
  perms: ['MANAGE_MESSAGE'],
  enabled: true,
  aliases: ['ş']
};
  
