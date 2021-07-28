const Discord = require('discord.js');

module.exports = {
  name: 'kick',
  description: 'Kicks the member you mention!',
  async excecute(message, args) {
    const { guild } = message
    if (!message.member.hasPermission('KICK_MEMBERS', 'ADMINISTRATOR')) return message.channel.send('You cannot use this command.'), message.react('❌')

    if (!args[0]) return message.channel.send('You did not mention who to kick!'), message.react('❌')

    const userKick = message.mentions.users.first();
    args.shift();
    const reason = args.join(" ");
    var member = message.guild.member(userKick);
    const { name } = guild

    if(member) {
      member.kick({
        reason: `${reason}`}).then(() =>{
        message.reply(`${userKick.tag} was kicked.`)
        message.react('✅')
        member.send(`You were kicked from ${guild.name} for ${reason}`)
      })
    } else {
      message.reply('That user is not in the server.');
      message.react('❌')
    }
  }
}