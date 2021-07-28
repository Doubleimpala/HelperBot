module.exports = {
  name: 'warn',
  description: 'Warns a member.',
  async excecute(message, args) {

    const server = message.guild

    const target = message.mentions.users.first()
    if(!target) {
      message.reply('Please specify someone to warn.')
      return
    } else {
    args.shift()
    const guildId = message.guild.id
    const userId = message.member.guild.id
    const reason = args.join(' ')
    if(!reason){
      message.reply('You need to mention a reason for the warning.')
    } else{
      message.channel.send(`Warned ${target} for ${reason}. Remember that this command is in beta and doesn't save the warnings.`)
      target.send(`You were warned in ${server} for ${reason}`)
      console.log(guildId, userId, reason)
    }
    }
  }
}