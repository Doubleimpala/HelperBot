module.exports = {
  name: 'ban',
  description: 'Bans the member you mention!',
  async excecute(message, args) {
    if (!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR')) return message.channel.send('You cannot use this command.'), message.react('❌')

    if (!args[0]) return message.channel.send('You did not mention who to ban!'), message.react('❌')

    const userBan = message.mentions.users.first();
    var member = message.guild.member(userBan);

    if(member) {
      member.ban({
        reason: 'You broke the rules.'
      }).then(() =>{
        message.reply(`${userBan.tag} was banned.`)
        message.react('✅')
      })
    } else {
      message.reply('That user is not in the server.');
      message.react('❌')
    }
  }
}