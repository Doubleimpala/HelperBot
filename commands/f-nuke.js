
module.exports = {
  name: 'nuke',
  description: 'Does something cool. It\'s classified but doesn\'t destroy the server!',
  async excecute(message, args) {
    const user = message.author.tag
    if (message.guild.id === '839529456741777418') {
      message.reply('This command has been disabled for this server. The HR requested this.')
    } else {
    message.react('✅');
    message.channel.send('Alright hold on. Calculating...')
    setTimeout(function(){ 
    message.channel.send('https://tenor.com/view/the-hacker-matrix-code-hacking-gif-16778252')
    }, 3000);

    setTimeout(function(){ 
    message.channel.send('Launching nuke now...')
    }, 5000);

    setTimeout(function(){ 
    message.channel.send('https://tenor.com/view/kong-kong-movie-bombs-away-bomb-bombs-gif-7905252')
    }, 6000);

    setTimeout(function(){ 
    message.channel.send('https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831')
    }, 10000);
    
    setTimeout(function(){ 
    message.channel.send(`The channel was nuked by ${user}. Sad how many people died, but it is what it is.`)
    }, 13000);
    }
    
    
  }
}