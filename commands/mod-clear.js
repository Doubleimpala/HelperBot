module.exports = {
  name: 'clear',
  description: 'Bulk-Deletes Messages. Limit: Cannot bulk delete messages older than 2 weeks or more than 100 at a time.',
  async excecute(message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES', 'ADMINISTRATOR')) {
      message.channel.send('You don\'t have the Manage Messages or Administrator permission!');
    } else {
      if(!args[0]) return message.reply('Specify the amount of messages you want to clear.'), message.react('❌')
    if(isNaN(args[0])) return message.reply('Please enter an integer.'),  message.react('❌')
    
    if(args[0] > 100) return message.reply('You cannot delete more than 100 messages per use of command.'),  message.react('❌')
    if(args[0] < 1) return message.reply('You can\'t delete less than 1 message.'),  message.react('❌')

    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
      message.channel.bulkDelete(messages);
     message.react('✅')
    });
    }
    
  }
}