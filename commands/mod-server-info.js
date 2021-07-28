const Discord = require('discord.js');

module.exports={
  name: 'server-info',
  description: 'Shows server info.',
  async excecute(message, client, args){
    const { guild } = message
    const { name, region, memberCount, owner } = guild
    const icon = guild.iconURL()

    message.react('✅')

    const serverEmbed = new Discord.MessageEmbed()
     .setTitle(`Information of ${guild.name}`)
     .setThumbnail(icon)
     .addFields(
       {
       name:'Server Owner',
       value: owner.user.tag
     },
     {
       name:'Region',
       value: region
     },
     {
       name:'Member Count',
       value: memberCount
     }
     )
     
     message.channel.send(serverEmbed).catch(err => console.log(err));
  }
}