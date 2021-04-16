module.exports = {
  name: 'invite',
  description: 'Lets you invite the bot to your own server!',
  async excecute(message, args) {
    message.react('✅');
    message.channel.send('Here\'s the invite: http://invitehelperbot.ml/');
  }
}