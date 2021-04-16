const  Discord = require('discord.js');

module.exports={
  name: 'lock',
  description: 'Locks the channel(s) you mention. Note that it only locks it for @everyone.',
  async excecute(message, args){
    message.react('❌')
    message.channel.send('Command disabled until we add the setup command to tell us what role to lock the channel to.')
  }
}