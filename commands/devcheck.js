module.exports = {
  name: 'devcheck',
  description: 'Checks if message author is a dev, opens dev commands.',
  async excecute(message, args) {
     message.channel.send('Checking...')
     const developer = message.author.id === '725120678294061126';
     const developer1 = message.author.id === '319215322395574273'
     const developer2 = message.author.id === '752917995659198545';
      if(developer){
      message.channel.send('User is developer. Commands unlocked.')
      } else if(developer1){
        message.channel.send('User is developer. Commands unlocked.')
      } else if(developer2){
        message.channel.send('User is developer. Commands unlocked.')
      }
      else {
      message.channel.send('You are not a developer. If you want to be one, contact the owner in our support server.')
      message.react('😔');
      }
    
  }
}