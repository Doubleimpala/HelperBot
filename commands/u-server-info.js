const Discord = require('discord.js');

module.exports={
  name: 'server-info',
  description: 'Shows server info.',
  async excecute(message, args){
    const { guild } = message
    const { name, region, memberCount, owner, channels, voiceChannels, premiumTier, roles, rulesChannel, description } = guild
    const icon = guild.iconURL()

    message.react('✅')

    const serverEmbed = new Discord.MessageEmbed()
     .setTitle(`Information of ${guild.name}`)
     .setThumbnail(icon)
     .addField('>>>>Information<<<<', 'Stuff below')
     .addFields(
       {
       name:'ID',
       value: message.guild.id
     },
       {
       name:'Server Owner',
       value: owner.user.tag
     },
     {
       name:'Server Description',
       value: description
     },
     {
       name:'Region',
       value: region
     },
     {
       name:'Member Count',
       value: memberCount
     },
     {
       name:'Rules Channel',
       value: rulesChannel
     },
     {
       name:'Boost Tier',
       value: premiumTier
     })
     .addField('>>>>Stats<<<<', 'Stuff below')
     .addFields(
     {
       name:'Member Count',
       value: memberCount
     },
     {
       name:'Text Channel Count',
       value: channels
      },
     {
       name:'Voice Channel Count',
       value: 'Error'
     },
     {
       name:'Role count',
       value: roles
     })
     
     message.channel.send(serverEmbed).catch(err => console.log(err));
  }
}