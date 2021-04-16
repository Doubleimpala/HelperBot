module.exports = {
  name: 'pog',
  description: 'Says pog to you!',
  async excecute(message, args) {
    message.react('✅');
    message.channel.send('Have a poggers day!')
  }
}