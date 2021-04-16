module.exports = {
  name: 'kick',
  description: 'Kicks the member you mention!',
  async excecute(message, args) {
    if (!message.member.hasPermission('KICK_MEMBERS', 'ADMINISTRATOR')) return message.channel.send('You cannot use this command.'), message.react('❌')

    if (!args[0]) return message.channel.send('You did not mention who to kick!'), message.react('❌')

    const userKick = message.mentions.users.first();
    var member = message.guild.member(userKick);

    if(member) {
      member.kick({
        reason: 'You broke the rules.'
      }).then(() =>{
        message.reply(`${userKick.tag} was kicked.`)
        message.react('✅')
      })
    } else {
      message.reply('That user is not in the server.');
      message.react('❌')
    }
  }
}