const Discord = require('discord.js')

module.exports = {
  name: 'afk',
  description: 'Sets your afk, in case somebody pings you.',
  async excecute(message, args) {
    if(!args[0]){
      message.channel.send('You didn\'t say what to set your afk to!')
    } else {
      var afk = args.join(' ');
      if(message.content = `<@author>`){
        message.channel.send(`A user is afk. They said: ${afk}`)
        return;
      }
      message.react('✅');
      message.channel.send(`Set your afk to ${afk}`);
    }
  }
}