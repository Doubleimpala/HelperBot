const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'membercount',
  description: 'Counts the amount of members in the server!',
  async excecute(message, args, client){
    message.react('✅');
    const { guild } = message
    const memberCount = guild.memberCount
    
    const memberCountEmbed = new MessageEmbed()
     .setTitle('Member Count')
     .setDescription(memberCount)
     .setColor('RANDOM');

     message.channel.send(memberCountEmbed)
  }
}