module.exports = {
  name: 'invite',
  description: 'Lets you invite the bot to your own server!',
  async excecute(message, args) {
    message.react('<:HelperBotLogo:832635616377962496>');

    message.author.send('Here\'s the invite: http://invitehelperbot.ml/');

    if(message.author.id === '725120678294061126'){
      message.channel.send('Wassup developer!')
    } else {
      message.channel.send('DMed you!')
    }
  }
}