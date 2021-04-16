const prefix = require('../config').prefix

module.exports = {
  name: 'message',
  excecute (message, client) {
    if(!message.content.startsWith(prefix) || message.author.bot ||!message.guild) return;
    const args = message.content.slice(prefix.length).split(/ +/);const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd)
    if(command) command.excecute(message, args, client)
  }
}