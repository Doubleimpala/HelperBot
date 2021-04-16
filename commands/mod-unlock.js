module.exports={
  name: 'unlock',
  description: 'Unlocks the channel you are in',
  async excecute(message, args){
    message.react('❌')
    message.channel.send('Command disabled until we add the lock command fully.')
  }
}