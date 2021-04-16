const Discord = require('discord.js');

module.exports={
  name: 'user-info',
  description: 'Shows user info.',
  async excecute(message, args){
    let mentionedMember = message.mentions.members.first();
    let mentionedUser = message.mentions.users.first();
    if (!args[0]) return message.channel.send('You did not mention the member to show info about.'), message.react('❌')

    message.react('✅')

    const userEmbed = new Discord.MessageEmbed()
     .setTitle(`User Information of ${mentionedUser.username}`)
     .addField('Username:', `${mentionedUser.username}`)
     .addField('User ID:', `${mentionedUser.id}`)
     .addField('Account Created:', `${mentionedUser.createdAt}`)
     .addField('Joined the server at:', `${mentionedMember.joinedAt}`)
     .addField('User Status:', `${mentionedUser.presence.status}`)

     message.channel.send(userEmbed).catch(err => console.log(err));

  }
}