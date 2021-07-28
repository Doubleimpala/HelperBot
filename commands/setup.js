module.exports = {
  name: 'setup',
  description: 'Sets up the bot for your server.',
  async excecute(message, args) {
    message.react('✅');
    message.channel.send('Have a poggers day!')
  }
}