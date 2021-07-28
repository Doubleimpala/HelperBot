const Database = require("@replit/database")
const db = 

module.exports = {
  name: 'dbkeys',
  description: 'Limited to Developers.',
  async excecute(message, args) {
     message.channel.send('Checking for developers...')
     const developer = message.author.id === '725120678294061126';
     const developer1 = message.author.id === '319215322395574273'
     const developer2 = message.author.id === '752917995659198545';
      if(developer){
      message.channel.send('Check DMs.')
      message.author.send('Repl Database was removed. Ask head developer for further instructions.')
      } else if(developer1){
      message.channel.send('Check DMs.')
      message.author.send('Repl Database was removed. Ask head developer for further instructions.')
      } else if(developer2){
      message.channel.send('Check DMs.')
      message.author.send('Repl Database was removed. Ask head developer for further instructions.')
      }
      else {
      message.channel.send('You are not a developer. If you want to be one, contact the owner in our support server.')
      message.react('😔');
      }
    
  }
}