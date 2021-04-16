module.exports={
  name: 'say',
  description: 'repeats what you say!',
  async excecute(message, args, client){
    const content = args.join(" ")
    if(!content) return message.reply('Please say something for me to repeat!'), message.react('❌')

    message.channel.send('**' + message.author.username +' says: **' + content)
    message.react('✅');
  }
}