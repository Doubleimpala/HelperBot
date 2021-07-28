const Discord = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Bans the member you mention!',
  async excecute(message, args) {
    const { guild } = message
    if (!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR')) return message.channel.send('You cannot use this command.'), message.react('❌')

    if (!args[0]) return message.channel.send('You did not mention who to ban!'), message.react('❌')

    const userBan = message.mentions.users.first();
    args.shift();
    const reason = args.join(" ");
    var member = message.guild.member(userBan);
    const { name } = guild
    

    if(member) {
      member.ban({
        reason: `${reason}`}).then(() =>{
        message.reply(`${userBan.tag} was banned.`)
        message.react('✅')
        member.send(`You were banned from ${guild.name} for ${reason}`)
      })
    } else {
      message.reply('That user is not in the server.');
      message.react('❌')
    }
  }
}